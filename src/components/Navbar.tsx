'use client'

import Link from "next/link";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import CTAButton from "./ui/CTAButton";

const Navbar = () => {
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
      console.log(session);
      console.log("session changed")
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
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className={session ? "flex items-center justify-between h-full gap-2 px-4 mx-auto " : "flex items-center justify-between h-full gap-2 md:px-0 mx-auto md:max-w-[1480px]"}> 
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          {session ? (
            <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            Series 7 Practice
          </p>
          ): (
            <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
              Series 7 Practice
            </p>
          )}
          
        </Link>
        <div className="flex items-center">
          {/* <ThemeToggle className="mr-4" /> */}
          {/* {session && (
            <Button
            // onClick={handleSignOut}
            >
              Sign Out
              </Button>
          )} */}
          {/* {session ? (
            <div>
              <Button>
                Sign out
              </Button>
            <div/>            
          )} */}
          {session ? (
            <SignOutButton text={"Sign Out"} />
            // <Button
            // // onClick={handleSignOut}
            // >
            //   Sign Out
            //   </Button>
          //    <DropdownMenu>
          //    <DropdownMenuTrigger>
          //      <UserAvatar
          //        className="w-10 h-10"
          //        user={{
          //          name: "null",
          //          image: image || null,
          //        }}
          //      />
          //    </DropdownMenuTrigger>
          //    <DropdownMenuContent className="bg-white" align="end">
          //      <div className="flex items-center justify-start gap-2 p-2">
          //        <div className="flex flex-col space-y-1 leading-none">
          //          {/* {user.name && <p className="font-medium">{user.name}</p>} */}
          //          {session?.user.email && (
          //            <p className="w-[200px] truncate text-sm text-zinc-700">
          //              {session?.user.email}
          //            </p>
          //          )}
          //        </div>
          //      </div>
          //      <DropdownMenuSeparator />
          //      <DropdownMenuItem asChild>
          //        <Link href="/">Meow</Link>
          //      </DropdownMenuItem>
       
          //      <DropdownMenuSeparator />
       
          //      <DropdownMenuItem
          //        onSelect={(event) => {
          //          event.preventDefault();
          //          handleSignOut()
          //         //  signOut().catch(console.error);
          //        }}
          //        className="text-red-600 cursor-pointer"
          //      >
          //        Sign out
          //        <LogOut className="w-4 h-4 ml-2 " />
          //      </DropdownMenuItem>
          //    </DropdownMenuContent>
          //  </DropdownMenu>
            // <UserAccountNav user={session.user} />
          ) : (
            <div className="flex flex-row gap-4">
              <SignInButton text={"Sign In"} />
              <CTAButton text={"Start Practicing"} />
              {/* <Button variant={'default'}>Start Practicing</Button> */}
              {/* <SignInButton cta={false} text={"Start Practicing"} /> */}
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
