import SignInButton from "@/components/SignInButton";
import CTAButton from "@/components/ui/CTAButton";
import Categories from "@/components/ui/categories";
import CTA from "@/components/ui/cta";
import Hero from "@/components/ui/hero";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

function HomeNavBar() {
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className={"flex items-center justify-between h-full gap-2 md:px-0 mx-auto md:max-w-[1480px]"}> 
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/Logo.svg"} width={160} height={160} alt="loading" />
            {/* <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            Series 7 Practice
          </p>           */}
          
        </Link>
        <div className="flex items-center">          
            <div className="flex flex-row gap-4">
              <SignInButton text={"Sign In"} />
              <CTAButton text={"Start Practicing"} />
            </div>        
        </div>
      </div>
    </div>
  );
}
 
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
      <HomeNavBar />
    {/* // <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"> */}
        
      <Hero />
      {/* <TrustBadge /> */}
      {/* <ProductOfferrings /> */}
      {/* <Achievement /> */}
      <Categories />
      {/* <Feedback /> */}
      <CTA />
    </div>
  );
}
