'use client'

import Link from "next/link";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
// import SignInButton from "./SignInButton";
import ProfileButton from "@/components/ProfileButton";
import SignOutButton from "@/components/SignOutButton";
import Image from "next/image";

const DashboardNavBar = () => {
  // const session = await getAuthSession();
  // const supabase = createServerComponentClient({cookies});
  const supabase = createClientComponentClient();
  const [session, setSession] = useState<any>(null);

  const authChangeEventHandler = useCallback(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session);
      console.log(event, session)
      sessionStorage.setItem('session', JSON.stringify(session));
      setSession(session);
    })
  }, [])

  async function getAuthSession() {
      const {data: {session}} = await supabase.auth.getSession();
      sessionStorage.setItem('session', JSON.stringify(session));
      setSession(session);
  }

  useEffect(() => {
    getAuthSession();  
  },[session])
  
  useEffect(() => {
    authChangeEventHandler();
  }, [])

  // const handleSignIn = () => {}

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    return redirect("/");
  }

  const image = ""


  return (
    <header>
    <nav className="inset-x-0 -top:4 md:top-0 bg-white dark:bg-gray-950 z-[50] h-fit border-b border-zinc-300 p-1 md:px-20 ">
      <div className={"flex items-center justify-between h-full gap-2 md:px-0 mx-auto md:max-w-[1480px]"}> 
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/Logo.svg"} width={140} height={140} alt="loading" />
            {/* <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            Series 7 Practice
          </p>           */}
          
        </Link>
        <div className="flex items-center">          
            <div className="flex flex-row gap-4">
              <ProfileButton text={"Edit Profile"} />
              <SignOutButton text={"Sign Out"} />
            </div>        
        </div>
      </div>
    </nav>
    </header>
  );
};

export default DashboardNavBar;
