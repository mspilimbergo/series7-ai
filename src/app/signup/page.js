import AuthForm from '@/components/home/auth-form'

export default function SignUp() {
  return (
    <main className="p-8 mx-auto max-w-7xl">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <AuthForm />
        {/* <div className="flex items-center">
            <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
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
        </Card> */}
    </div>
    </main>     
  )
}


