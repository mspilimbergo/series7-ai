import DashboardNavBar from "@/components/dashboard/DashboardNavBar";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import TutorCard from "@/components/dashboard/TutorCard";
import { loadStripe } from '@stripe/stripe-js';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

type Props = {};

export const metadata = {
  title: "Dashboard | Series 7 AI",
  description: "Put your Series 7 skills to the test with our AI-powered practice problems.",
};

const Dasboard = async (props: Props) => {
  const supabase = createServerComponentClient({cookies});
  const { data: {session}} = await supabase.auth.getSession();
  console.log("in session");
  console.log(session);
  // const session = await getAuthSession();
  if (!session) {
    redirect("/");
  }

  return (
    // <main className="absolute -translate-x-1/2 -translate-y-1/2 md:w-[80vw] max-w-4xl w-[90vw] top-1/2 left-1/2">
      <main className="p-8 mx-auto max-w-7xl">
        <DashboardNavBar />
            <div className="flex justify-center flex-col">
            <h2 className="text-green-600		 mr-2 text-3xl font-bold tracking-tight text-center ">Series 7 AI Tools</h2>      
            <div className="mt-2 border-green-600 rounded border-t border-4 border-gray-400 w-[180px] mx-auto"></div>
            <h3 className="text-gray-500 mt-10 text-xl text-center">Use our friendly AI problem set generator to practice, using timed or tutor mode. </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-20 justify-center mt-10">
            <QuizMeCard />
            {/* <QuizMeCard /> */}
            <TutorCard />
            {/* <HistoryCard /> */}
        </div>
      
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        {/* <HotTopicsCard />
        <RecentActivityCard /> */}
      </div>
    </main>
  );
};

export default Dasboard;
