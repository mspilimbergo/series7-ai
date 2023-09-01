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
import Link from "next/link"
import { useState } from "react"

export default function PasswordReset() {
    const supabase = createClientComponentClient()    
    const [error, setError] = useState()
    const [emailSent, setEmailSent] = useState(false)
    const [formData, setFormData] = useState({
        "email": '',
    })

    const changeHandler = (e) => {
        if (error) setError(null)
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}))
    }    

    async function handlePasswordReset(event) {
        // console.log("IN handle sign in")
        event.preventDefault()
        const {data, error: resetError} = await supabase.auth.resetPasswordForEmail(
            formData.email,
            {
                redirectTo: `${window.location.origin}/api/auth/password-callback`
            }
            )        
        if (resetError) {
          setError(resetError?.message)          
          console.log("Error resetting password", resetError)
            return;
        }
        if (data) {
            console.log(data)
            setEmailSent(true)
        }
    }

        return (
            <div>
              {/* <SignInNavbar /> */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
               {/* <div className={cn("grid gap-6", className)} {...props}> */}
               {error && (
                  <div className="flex justify-center md:w-[400px]">
                      <Alert variant="destructive" className="mb-4">
                          <AlertTitle>Password reset error</AlertTitle>
                          <AlertDescription>
                          {error}
                          </AlertDescription>
                      </Alert>                
                  </div>
                
               )}
               <Card className="md:w-[400px]">
                  {emailSent ? (
                      <>
                          <CardHeader>
                              <h1 className="text-2xl font-semibold tracking-tight">Password Reset Sent!</h1>
                              <CardDescription>Check your <b>{formData.email}</b> for a password reset link.</CardDescription>
                          </CardHeader>
                      </>
                  ): (
                      <>
                          <CardHeader>
                          <h1 className="text-2xl font-semibold tracking-tight">Reset Your Password</h1>
                          <CardDescription>Enter your email below to send a reset link to your email.</CardDescription>
                          </CardHeader>
                          <form onSubmit={handlePasswordReset}>
                          <CardContent>
                          <div className="grid w-full items-center gap-4">
                              <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Your email</Label>
                              <Input name="email" id="email" placeholder="welcom@email.com" onChange={changeHandler} />
                              </div>                        
                          </div>        
                          </CardContent>
                          <CardFooter className="flex flex-col gap-4">
                          <Button type="submit" className="w-full" >Send Password Reset</Button>
                          <p className="px-8 text-center text-sm text-muted-foreground">
                              Want to sign in?{" "}
                              <Link
                              href="/login"
                              className="underline underline-offset-4 hover:text-primary"
                              >
                              Back to Login Page
                              </Link>{" "}              
                          </p> 
                          </CardFooter>
                          </form>
                    </>
                  )}      
           </Card>   
           </div>
           </div>
         )

}
