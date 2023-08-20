"use client";
import { useRouter } from "next/navigation";
// import { Button } from "./ui/button";
import { Button } from "@/components/ui/button";
// Update props below to include any additional props you want
// type Props = { text: string };
// type Props = { text: string};
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const SignOutButton = ({ text }) => {
    const supabase = createClientComponentClient();
    const router = useRouter();
    const handleSignOut = async () => {
        await supabase.auth.signOut()
        return router.push("/");
    }

  return (
    <Button
      className="md:text-base text-xs"
      variant={'default'}
      onClick={handleSignOut}
    >
      {text}
    </Button>
  );
};

export default SignOutButton;
