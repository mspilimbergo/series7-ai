
// type Props = {
//   params: {
//     gameId: list<;
//   };
// };
import MCQ from "@/components/MCQ";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

const MCQPage = async ({ params: { questions } }) => {
  const supabase = createServerComponentClient({cookies});
  const {data: {session}} = await supabase.auth.getSession();
  let isMockTest = false;
  if (questions === "mock-test")  {
    isMockTest = true;
  }
  const { data: questionsData, error } = await supabase
    .from("questions")
    .select("*")
  if (error) {
  console.log(error.message)
  }
  // console.log(questionsData);

  // const options = questionsData[0].options;
  // const formattedOptions = JSON.parse(options);
  // questionsData[0].options = formattedOptions;


  // const session = await getAuthSession();
  if (!session) {
    return redirect("/");
  }
  // const o = {"option1":"This is it", "option2": "B ) + Credit + Short Market Value = Equity", "option3": "C ) - Credit + Short Market Value = Equity","option4":"D ) - Credit - Short Market Value = Equity"}
  // const os = JSON.stringify(o)
  // console.log(os);
  // const qs = questionsData[0].options
  
  // console.log(JSON.parse(qs));
  // const game = await prisma.game.findUnique({
  //   where: {
  //     id: gameId,
  //   },
  //   include: {
  //     questions: {
  //       select: {
  //         id: true,
  //         question: true,
  //         options: true,
  //       },
  //     },
  //   },
  // });
  // if (!game || game.gameType === "open_ended") {
  //   return redirect("/quiz");
  // }
  
  if (isMockTest) {
    return <MCQ game={questionsData} isMockTest={isMockTest}/>;
  }
  // const game = questions
  else {
    return <MCQ game={questionsData} isMockTest={isMockTest}/>;
  }
  // return <TutorMode game={questions} />;
  // return <div>{questions}</div>
};

export default MCQPage;
