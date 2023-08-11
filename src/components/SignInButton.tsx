"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
// Update props below to include any additional props you want
// type Props = { text: string };
type Props = { text: string};


const SignInButton = ({ text }: Props) => {
  const router = useRouter();
  const handleSignIn = () => {
    router.push("/login");
  }
  return (
    <Button
      variant={'outline'}
      // className={cta}
      onClick={handleSignIn}
      // onClick={() => {
      //   signIn("google").catch(console.error);
      // }}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
