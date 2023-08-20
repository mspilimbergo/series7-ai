
import TutorMode from "@/components/forms/TutorMode";

export const metadata = {
  title: "Tutor Mode | Series 7 AI",
  description: "Practice your series 7 questions with our tutor mode.",
};

// interface Props {
//   searchParams: {
//     topic?: string;
//   };
// }

const TutorQuiz = async () => {
//   const session = await getAuthSession();
  // if (!session?.user) {
  //   redirect("/");
  // }
//   return <QuizCreation topic={searchParams.topic ?? ""} />;
    return <TutorMode />;
};

export default TutorQuiz;
