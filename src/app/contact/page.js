"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"


export default function Contact () {

    const [formData, setFormData] = useState({})

    function handleContact() {

    }

    const changeHandler = (e) => {
        if (error) setError(null)
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}))
    }
  
    
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
    {/* <div className={cn("grid gap-6", className)} {...props}> */}
    {/* {error && (
     <Alert variant="destructive" className="mb-4 w-[400px]">
       <AlertTitle>Sign In Error</AlertTitle>
       <AlertDescription>
         {error}
       </AlertDescription>
     </Alert>
    )} */}
   <Card className="w-[600px]">
      <CardHeader>  
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          What area are you wanting to contact us about?
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="">
          <div className="">
            <Label htmlFor="area">Area</Label>
            <Select defaultValue="billing">
              <SelectTrigger id="area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="account">Account</SelectItem>
                <SelectItem value="deployments">Deployments</SelectItem>
                <SelectItem value="support">Support</SelectItem>
              </SelectContent>
            </Select>
          </div>          
        </div>
        <div className="grid gap-4 mt-4">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="I need help with..." />
        </div>
        <div className="grid gap-4 mt-4">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Please include all information relevant to your issue."
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
</div>
    
    // <div className="flex items-center justify-center [&>div]:w-full">
    // <Card>
    //   <CardHeader>  
    //     <CardTitle>Report an issue</CardTitle>
    //     <CardDescription>
    //       What area are you having problems with?
    //     </CardDescription>
    //   </CardHeader>
    //   <CardContent className="grid gap-6">
    //     <div className="grid grid-cols-2 gap-4">
    //       <div className="grid gap-2">
    //         <Label htmlFor="area">Area</Label>
    //         <Select defaultValue="billing">
    //           <SelectTrigger id="area">
    //             <SelectValue placeholder="Select" />
    //           </SelectTrigger>
    //           <SelectContent>
    //             <SelectItem value="team">Team</SelectItem>
    //             <SelectItem value="billing">Billing</SelectItem>
    //             <SelectItem value="account">Account</SelectItem>
    //             <SelectItem value="deployments">Deployments</SelectItem>
    //             <SelectItem value="support">Support</SelectItem>
    //           </SelectContent>
    //         </Select>
    //       </div>
    //       <div className="grid gap-2">
    //         <Label htmlFor="security-level">Security Level</Label>
    //         <Select defaultValue="2">
    //           <SelectTrigger
    //             id="security-level"
    //             className="line-clamp-1 w-[160px] truncate"
    //           >
    //             <SelectValue placeholder="Select level" />
    //           </SelectTrigger>
    //           <SelectContent>
    //             <SelectItem value="1">Severity 1 (Highest)</SelectItem>
    //             <SelectItem value="2">Severity 2</SelectItem>
    //             <SelectItem value="3">Severity 3</SelectItem>
    //             <SelectItem value="4">Severity 4 (Lowest)</SelectItem>
    //           </SelectContent>
    //         </Select>
    //       </div>
    //     </div>
    //     <div className="grid gap-2">
    //       <Label htmlFor="subject">Subject</Label>
    //       <Input id="subject" placeholder="I need help with..." />
    //     </div>
    //     <div className="grid gap-2">
    //       <Label htmlFor="description">Description</Label>
    //       <Textarea
    //         id="description"
    //         placeholder="Please include all information relevant to your issue."
    //       />
    //     </div>
    //   </CardContent>
    //   <CardFooter className="justify-between space-x-2">
    //     <Button variant="ghost">Cancel</Button>
    //     <Button>Submit</Button>
    //   </CardFooter>
    // </Card>
    // </div> 
  )
}