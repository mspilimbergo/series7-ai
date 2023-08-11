"use client";
import { useRouter } from "next/navigation";
// import { Button } from "./ui/button";
import { Button } from "@/components/ui/button";
import axios from 'axios';
// Update props below to include any additional props you want
// type Props = { text: string };
// type Props = { text: string};


const CTAButton = ({ text }) => {
  const router = useRouter();
  const handleSignUp = async () => {
    const res = await axios.post('/api/checkout')
    const url = res.data['url'];
    router.push(url);
  }
  return (
    <Button
      variant={'default'}
      onClick={handleSignUp}
    >
      {text}
    </Button>
  );
};

export default CTAButton;
