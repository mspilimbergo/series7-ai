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
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

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
  const router = useRouter();
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">        
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
            onClick={() => append({ value: "" })}
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
            className="mt-2"
            onClick={() => router.push('https://billing.stripe.com/p/login/test_bIY9BQ0zO3L67YY9AA')}
          >
            Modify Subscription
          </Button>
        </div>
        <Button type="button" onClick={() => router.back()} >Return to Dashboard</Button>
      </form>
    </Form>
  )
}