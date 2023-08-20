"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {text: string}

const ProfileButton = ({ text }: Props) => {    
    const router = useRouter();

  return (
    <Button
      className="md:text-base text-xs"
      variant={'secondary'}
      onClick={() => router.push("/profile")}
    >
      {text}
    </Button>
  );
};

export default ProfileButton;
