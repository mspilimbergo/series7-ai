'use client'
import SignInNavbar from "@/components/SignInNavbar"
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
import { useToast } from "@/components/ui/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"


export default function SignIn() {
    const {toast} = useToast()
    const router = useRouter();
    const supabase = createClientComponentClient()    
    const [error, setError] = useState()
    const [formData, setFormData] = useState({
        "email": '',
        "password": '',
    })

    const checkLogin = async () => {
      const { data: {session}} = await supabase.auth.getSession();
      if (session) {
        console.log(session)
        router.push('/dashboard')
      }
    }

    useEffect(() => {
        checkLogin()
        // console.log(formData) 
    }, [formData])
    // const router = useRouter();

    const changeHandler = (e) => {
        if (error) setError(null)
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}))
    }

    async function handleSignIn(event) {
        console.log("IN handle sign in")
        event.preventDefault()
        const {data: userData, error: userDataError} = await supabase
        .from('users')
        .select('*')
        .eq('email', formData.email)
        .single()

        console.log(userData)

        if (userData?.is_active === false || userData?.status !== "active") {
          setError("Your account is currently inactive. To reactive your account, click Create New Account above.")
          return;
        }

        if (userDataError) {
          setError(userDataError?.message)
          return;
        }

        const {data, error: signInError} = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
            options: {
                // emailRedirectTo: `http:localhost:3000/api/auth/callback`
                emailRedirectTo: `${process.env.CLIENT_URL}/api/auth/callback`
            }
        })   
        if (signInError) {
          setError(signInError?.message)          
          console.log(signInError)
            return;
        }
        if (data) {
            console.log(data)
            toast({
              variant: "success",
              title: "Welcome Back!",
              description: "You will now be redirected to your dashboard!",
            })
            router.push('/dashboard');
        }
        
    }

    async function handleSignUp(event) {
        event.preventDefault()
        const {data, error} = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
            options: {
                emailRedirectTo: `http:localhost:3000/api/auth/callback`
            }
        })   
        if (error) {
            // console.log(error)
        }
    }
    return (
      <div>
        <SignInNavbar />
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
         {/* <div className={cn("grid gap-6", className)} {...props}> */}
         {error && (
          <Alert variant="destructive" className="mb-4 w-[400px]">
            <AlertTitle>Sign In Error</AlertTitle>
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>
         )}
         <Card className="w-[400px]">
       <CardHeader>
         {/* <CardTitle> <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1></CardTitle> */}
         <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
         <CardDescription>Enter your email below to sign in.</CardDescription>
       </CardHeader>
       <form onSubmit={handleSignIn}>
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
       <CardFooter className="flex flex-col gap-4">
         {/* <Button variant="outline">Cancel</Button> */}
         <Button type="submit" className="w-full" >Sign In</Button>
         <p className="px-8 text-center text-sm text-muted-foreground">
              Forgot your password?{" "}
              <Link
                href="/password-reset"
                className="underline underline-offset-4 hover:text-primary"
              >
                Reset it here
              </Link>{" "}              
            </p>
       </CardFooter>
       </form>
     </Card>   
     </div>
     </div>
   )
 
}



 // return (
  //    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
  //       {/* <div className={cn("grid gap-6", className)} {...props}> */}
  //       <Card className="w-[400px]">
  //     <CardHeader>
  //       <CardTitle> <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1></CardTitle>
  //       <CardDescription>Enter your email below to sign in.</CardDescription>
  //     </CardHeader>
  //     <form onSubmit={handleSignUp}>
  //     <CardContent>
        
  //         <div className="grid w-full items-center gap-4">
  //           <div className="flex flex-col space-y-1.5">
  //             <Label htmlFor="name">Email</Label>
  //             <Input name="email" id="email" placeholder="welcom@email.com" onChange={changeHandler} />
  //           </div>           
  //           <div className="flex flex-col space-y-1.5">
  //             <Label htmlFor="password">Password</Label>
  //             <Input name="password" type="password" id="password" onChange={changeHandler} />
  //           </div>           
  //         </div>        
  //     </CardContent>
  //     <CardFooter className="flex">
  //       {/* <Button variant="outline">Cancel</Button> */}
  //       <Button type="submit" className="w-full" >Sign In</Button>
  //     </CardFooter>
  //     </form>
  //   </Card>   
  //   </div>
  // )
// import * as React from "react"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// export function CardWithForm() {
//   return (
//     <Card className="w-[350px]">
//       <CardHeader>
//         <CardTitle>Create project</CardTitle>
//         <CardDescription>Deploy your new project in one-click.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" placeholder="Name of your project" />
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="framework">Framework</Label>
//               <Select>
//                 <SelectTrigger id="framework">
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent position="popper">
//                   <SelectItem value="next">Next.js</SelectItem>
//                   <SelectItem value="sveltekit">SvelteKit</SelectItem>
//                   <SelectItem value="astro">Astro</SelectItem>
//                   <SelectItem value="nuxt">Nuxt.js</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button variant="outline">Cancel</Button>
//         <Button>Deploy</Button>
//       </CardFooter>
//     </Card>
//   )
// }

// Use serverSideProps to get the session and pass it to the component
// s