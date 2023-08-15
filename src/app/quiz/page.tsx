
import MockTest from "@/components/forms/MockTest";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata = {
  title: "Mock Test | Series 7 AI",
  description: "Take a series 7 mock test to test your knowledge of the series 7 exam.",
};

interface Props {
  searchParams: {
    topic?: string;
  };
}

const Quiz = async ({ searchParams }: Props) => {
  const supabase = createServerComponentClient({cookies});
  const {data: {session}} = await supabase.auth.getSession();
  if (!session) {
    redirect("/");
  }
  return <MockTest />;
  // return <MockTestConfirm topic={searchParams.topic ?? ""} />;
};

export default Quiz;
