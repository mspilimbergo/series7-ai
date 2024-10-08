"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/registry/new-york/ui/select"
// import { Textarea } from "@/registry/new-york/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { toast } from "@/components/ui/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import React from "react"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
  subscription: z.string().min(2).max(30),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  bio: "I own a computer.",
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" },
  ],
}

export function ProfileForm({user}: any) {
  const supabase = createClientComponentClient()
  const [sentEmail, setEmailSent] = React.useState(false)
  const [contactMessage, setContactMessage] = React.useState()
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  console.log(user)
  // console.log(session)
  // const supabase = createClientComponentClient({cookies})
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  })

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  function handleContact(e: any) {
    setContactMessage(e.target.value)
  }

  async function handleSubmitContact() {    
    const {data, error} = await supabase
    .from('contact')
    .insert({
      message: contactMessage, 
      user: user.id,
    })
    .select()

    if (error)  {
      console.log(error.message)
    }

    setOpen(false)
  }

  async function handlePasswordReset() {
    // console.log("IN handle sign in")
    // event.preventDefault()
    const {data, error: resetError} = await supabase.auth.resetPasswordForEmail(
        user.email,
        {
          redirectTo: `${window.location.origin}/api/auth/password-callback`
        })           
    if (resetError) {
      // setError(resetError?.message)          
      console.log(resetError)
        return;
    }
    if (data) {
        // console.log(data)
        toast({
          variant: "success",
          title: "Password Reset Sent!",
          description: "Check your email to update your password!",
        })
        setEmailSent(true)
    }
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handlePasswordReset)} className="space-y-8">        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Current Email</FormLabel>
              <FormDescription>
                {user.email}
                {/* <Link href="/examples/forms">email settings</Link>. */}
              </FormDescription>
              {/* <FormDescription>
                You can manage verified email addresses in your{" "}
              </FormDescription> */}
              <FormMessage />
              <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={handlePasswordReset}
          >
            Send password reset email
          </Button>
            </FormItem>
          )}
        />
             
        <div> 
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Subscription
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Cancel or change your subscription with the link below.
                  </FormDescription>
                  {/* <FormControl>
                    <Input {...field} />
                  </FormControl> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2 mb-8"
            onClick={() => router.push('https://billing.stripe.com/p/login/test_bIY9BQ0zO3L67YY9AA')}
          >
            Modify Subscription
          </Button> 
           {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Get in Touch
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Have any questions or concerns? Reach us here.      
                  </FormDescription>
                  {/* <FormControl>
                    <Input {...field} />
                  </FormControl> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
           <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-2" size={"sm"} variant="outline">Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Write us with any questions or concerns.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              // defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div> */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Messsage
            </Label>
            <Input
              onChange={(e) => handleContact(e)}
              id="message"
              // defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button  onClick={handleSubmitContact} type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

          {/* <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => router.push('https://billing.stripe.com/p/login/test_bIY9BQ0zO3L67YY9AA')}
          >
            Contact Us
          </Button> */}
        </div>
        <Button type="button" onClick={() => router.push('/dashboard')} >Return to Dashboard</Button>
      </form>
    </Form>
  )
}
