'use client'
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

export default function SignUpSuccess() {
    const router = useRouter();
    const supabase = createClientComponentClient() 

    const [formData, setFormData] = useState({
        "email": '',
        "password": '',
    })    

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}))
    }

    async function handleSignUp(event) {    
        event.preventDefault()

        const res = await axios.post('/api/confirm-signup', {email: formData.email,password: formData.password});
        // console.log(res.status === 200)
        console.log("RESULT FROM /api/confirm-signup", res.data.data)
        if (res.data.data === "success") {
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
         {/* <div className={cn("grid gap-6", className)} {...props}> */}
         <Card className="w-[400px]">
       <CardHeader>
         {/* <CardTitle> <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1></CardTitle> */}
         <h1 className="text-2xl font-semibold tracking-tight">Create your account</h1>
         <CardDescription>Enter your email below to sign in.</CardDescription>
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
       <CardFooter className="flex">
         {/* <Button variant="outline">Cancel</Button> */}
         <Button type="submit" className="w-full" >Sign In</Button>
       </CardFooter>
       </form>
     </Card>   
     </div>
   )
}