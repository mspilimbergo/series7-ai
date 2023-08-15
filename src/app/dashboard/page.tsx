import DetailsDialog from "@/components/DetailsDialog";
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
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Series 7 Tools</h2>
        <DetailsDialog />
      </div>
      <div className="flex-column">
        <h3 className="mr-2 mt-4 text-2xl tracking-tight">Use our friendly AI problem set generator to practice, using timed or tutor mode. </h3>
        {/* <h6 className="mr-2 mt-4 text-xl tracking-tight"> Tutor mode gives you control over what kinds of questions and how many questions, as well as detailed explanations after each question.</h6> */}
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
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
