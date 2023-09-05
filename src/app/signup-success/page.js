'use client'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import axios from "axios"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { FaSpinner } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

export default function SignUpSuccess() {
    const router = useRouter();
    const supabase = createClientComponentClient() 

    const [formData, setFormData] = useState({
        "email": '',
        "password": '',
    })    
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}))
    }

    async function handleGoogleLogin() {
      // Login user with Google through supabase
      setIsLoading(true)
      const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        },
        redirectTo: `${process.env.CLIENT_URL}/api/auth/callback`,
      })
      if (error) {
        console.log("Error signing in user with Google", error.message)
        return;
      } 
      if (data) {
        console.log("Data from Google", data)
      }
      setIsLoading(false)
    }

    async function handleSignUp(event) {    
        event.preventDefault()
        const res = await axios.post('/api/confirm-signup', {email: formData.email,password: formData.password});
        const signUpStatus = res.data.data
        // console.log(res.status === 200)
        // console.log("RESULT FROM /api/confirm-signup", res.data.data)
        // return;
        if (signUpStatus === "User not found") {
          setError("No user found with that email address. Please use the same email you used when making a payment.")
          return;
        }        
        if (signUpStatus === "success") {
          console.log("SUCCESS")
          const {data, error} = await supabase.auth.signInWithPassword(
            {
              email: formData.email, 
              password: formData.password,
              options: {
                redirectTo: `${process.env.CLIENT_URL}/api/auth/callback`
              }
            }
              );
          if (error) {
            console.log(error)
            return;
          }
          router.push('/dashboard')
        }                
    }

    return (
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
         {error && (
          <Alert variant="destructive" className="mb-4 w-[400px]">
            <AlertTitle>Sign In Error</AlertTitle>
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>
         )}
         {/* <div className={cn("grid gap-6", className)} {...props}> */}
         <Card className="w-[400px]">
       <CardHeader>
         {/* <CardTitle> <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1></CardTitle> */}
         <h1 className="text-2xl font-semibold tracking-tight">Create your account</h1>
         <CardDescription>Enter your email below to create an account.</CardDescription>
       </CardHeader>
       <form onSubmit={handleSignUp}>
       <CardContent>
         
           <div className="grid w-full items-center gap-4">
             <div className="flex flex-col space-y-1.5">
               <Label htmlFor="name">Email</Label>
               <Input name="email" id="email" placeholder="welcom@email.com" onChange={changeHandler} />
             </div>           
             <div className="flex flex-col space-y-1.5">
               <Label htmlFor="password">Password</Label>
               <Input name="password" type="password" id="password" onChange={changeHandler} />
             </div>                       
           </div>           
       </CardContent>
       <CardFooter className="flex flex-col gap-2">
         {/* <Button variant="outline">Cancel</Button> */}
         <Button type="submit" className="w-full" >Create New Account</Button>
         <Button variant="outline" type="button" disabled={isLoading} className="w-full" onClick={handleGoogleLogin}>
              {isLoading ? (
                <FaSpinner className="h-4 w-4 animate-spin" />
              ) : (
                <FcGoogle className="mr-2 h-4 w-4" />
              )}{" "}
              Signup With Google
          </Button>        
       </CardFooter>
       </form>
     </Card>   
     </div>
   )
}