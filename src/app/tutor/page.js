
import TutorMode from "@/components/forms/TutorMode";

// export const metadata = {
//   title: "Quiz | Quizmify",
//   description: "Quiz yourself on anything!",
// };

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
