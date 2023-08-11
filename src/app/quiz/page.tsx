
import MockTest from "@/components/forms/MockTest";

export const metadata = {
  title: "Quiz | Quizmify",
  description: "Quiz yourself on anything!",
};

interface Props {
  searchParams: {
    topic?: string;
  };
}

const Quiz = async ({ searchParams }: Props) => {
  // const session = await getAuthSession();
  // if (!session?.user) {
  //   redirect("/");
  // }
  return <MockTest />;
  // return <MockTestConfirm topic={searchParams.topic ?? ""} />;
};

export default Quiz;
