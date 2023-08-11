"use client"

import * as React from "react"


// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props} ) {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit() {
    // event.preventDefault()
    // setIsLoading(true)

    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 3000)
  }

  return (
    <Card className="w-[300px]">
    <CardHeader>
      <CardTitle>Welcome to Quizmify 🔥!</CardTitle>
      <CardDescription>
        Quizmify is a platform for creating quizzes using AI!. Get started
        by loggin in below!
      </CardDescription>
    </CardHeader>
    <CardContent>
      <SignInButton text="Sign In with Google" />
    </CardContent>
    </Card>
  )
}