import Achievement from "@/components/ui/achievement";
import Categories from "@/components/ui/categories";
import CTA from "@/components/ui/cta";
import Feedback from "@/components/ui/feedback";
import Hero from "@/components/ui/hero";
import ProductOfferrings from "@/components/ui/product-offerings";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({cookies});
  const { data: {session}} = await supabase.auth.getSession();
  console.log("in session");
  console.log(session);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
    {/* // <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"> */}
        
      <Hero />
      {/* <TrustBadge /> */}
      <ProductOfferrings />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />

{/*       
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
  );
}
