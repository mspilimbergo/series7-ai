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
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"

export default function PasswordReset() {
    const router = useRouter();
    const supabase = createClientComponentClient()    
    const [error, setError] = useState()
    const [emailSent, setEmailSent] = useState(false)
    const [formData, setFormData] = useState({
        "email": '',
    })
    const [comingFromEmail,  setComingFromEmail] = useState(false)
    const [passwordUpdated, setPasswordUpdated] = useState(false)

    const checkLogin = async () => {
      const { data: {session}} = await supabase.auth.getSession();
      if (session) {
        console.log(session)
        // setComingFromEmail(true)
      }
    }

    const changeHandler = (e) => {
        if (error) setError(null)
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}))
    }

    async function handlePasswordUpdate(event) {
        event.preventDefault()
        const {data, error: passwordUpdateError} = await supabase.auth.updateUser({
            password: formData.password,
        })

        if (passwordUpdateError) {
            setError(passwordUpdateError?.message)
            return;
        }
        if (data) {
            console.log(data)
            setPasswordUpdated(true)
            // router.push('/login')
        }
    }


    useEffect(() => {
        checkLogin()
    },[])

    // useEffect(() => {
    //     supabase.auth.onAuthStateChange(async (event, session) => {
    //       if (event == "PASSWORD_RECOVERY") {
    //         alert("Password recovered") 
    //         // setComingFromEmail(true)
    //       }
    //     })
    //   }, [])

    if (comingFromEmail) {
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
                  {passwordUpdated ? (
                      <>
                      <CardHeader>
                          <h1 className="text-2xl font-semibold tracking-tight">Password Successfully Reset!</h1>
                          <CardDescription>You can now continue to the Series 7 AI Dashboard!</CardDescription>
                          <Button className="w-full" onClick={() => router.push('/dashboard')}>Login</Button>
                      </CardHeader>
                  </>
                  ): (
                    <>
                        <CardHeader>
                        <h1 className="text-2xl font-semibold tracking-tight">Reset Your Password</h1>
                        <CardDescription>Enter a new password  for your account.</CardDescription>
                        </CardHeader>
                        <form onSubmit={handlePasswordUpdate}>
                            <CardContent>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">New Password</Label>
                                    <Input name="password" type="password" id="password" onChange={changeHandler} />
                                    </div>                           
                                </div>        
                            </CardContent>
                            <CardFooter className="flex flex-col gap-4">
                                <Button type="submit" className="w-full"> Update Password </Button>                    
                            </CardFooter>
                        </form>
                    </>
                  )}      
           </Card>   
           </div>
           </div>
         )
    }
    
 
}
