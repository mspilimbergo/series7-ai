"use client";
import AccuracyCard from "@/components/statistics/AccuracyCard";
import ResultsCard from "@/components/statistics/ResultsCard";
import ResultsList from "@/components/statistics/ResultsList";
import TimeTakenCard from "@/components/statistics/TimeTakenCard";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, formatTimeDelta } from "@/lib/utils";
import { differenceInSeconds } from "date-fns";
import { BarChart, ChevronRight, Loader2, LucideLayoutDashboard, Timer } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import MCQCounter from "./MCQCounter";
import { Button, buttonVariants } from "./ui/button";
import { useToast } from "./ui/use-toast";

// The game prop will be a list of questions
// Here is an example
/*
  [
  {
    id: 1,
    inserted_at: '2023-08-09T06:01:57.913383+00:00',
    updated_at: '2023-08-09T06:01:57.913383+00:00',
    options: `'{"option1":"This is it","option2":"B ) + Credit + Short Market Value = Equity","option3":"C ) - Credit + Short Market Value = Equity","option4":"D ) - Credit - Short Market Value = Equity"}'`,
    topic: 'sustainability',
    answer: 'This is it',
    question: 'What is the first question?'
  },
  {
    id: 2,
    inserted_at: '2023-08-09T06:01:57.913383+00:00',
    updated_at: '2023-08-09T06:01:57.913383+00:00',
    options: `'["answer A","Answer B","Answer C","Answer D"]`,
    topic: 'sustainability',
    answer: 'question2 answer',
    question: 'What is the first question?'
  }
]
*/
// Use that as context for the rest of the code

const MCQ = ({ game, isMockTest }) => {
  console.log("GAME", game)
  const router = useRouter();
  const [isShowingStats, setIsShowingStats] = React.useState(false);
  const [isChecking, setIsChecking] = React.useState(false);
  const [timeEnded, setTimeEnded] = React.useState();
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [hasEnded, setHasEnded] = React.useState(false);
  const [timeStarted, setTimeStarted] = React.useState(new Date());
  const [stats, setStats] = React.useState({
    correct_answers: 0,
    wrong_answers: 0,
  });
  const [selectedChoice, setSelectedChoice] = React.useState(0);
  const [now, setNow] = React.useState(new Date());
  const tempOptions = JSON.parse(game[questionIndex].options);
  console.log("tempOptions", tempOptions)
  const [answeredQuestions, setAnsweredQuestions] = React.useState([]);
  const [accuracy, setAccuracy] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  let finishTime = new Date();
  finishTime.setMinutes(finishTime.getMinutes() + 225)
  const [mockFinishTime, setMockFinishTime] = React.useState(new Date(finishTime));
  // let accuracy = 0;

  useEffect(() => {

  },[isShowingStats])

  const currentQuestion = React.useMemo(() => {
    // return game.questions[questionIndex];
    return game[questionIndex];
  }, [questionIndex, game.id]);

  // const accuracy = React.useMemo(() => {

  // },[]

  const options = React.useMemo(() => {
    if (!currentQuestion) return [];
    if (!currentQuestion.options) return [];
    // return JSON.parse(currentQuestion.options as string) as string[];
    return JSON.parse(currentQuestion.options);
  }, [currentQuestion]);

  const { toast } = useToast();
  // Check if the answer the user selectedd matches the current question's answer
  // Then return a boolean value
  const checkAnswer = () => {
    setIsChecking(true);
    // const isCorrect = currentQuestion.answer.toLowerCase().trim() === selectedChoice.toLowerCase().trim();
    let selectedChoiceString = options[selectedChoice].toLowerCase().trim();
    // selectedChoiceString = selectedChoiceString.toLoswerCase().trim();
    // console.log(selectedChoiceString)
    const isCorrect = game[questionIndex].answer.toLowerCase().trim() === selectedChoiceString;
    console.log("isCorrect", isCorrect)
    if (isCorrect) {
      return true;
    } else {
      return false;
    }    
  }
//   const { mutate: checkAnswer, isLoading: isChecking } = useMutation({
//     mutationFn: async () => {
//       const payload: z.infer<typeof checkAnswerSchema> = {
//         questionId: currentQuestion.id,
//         userInput: options[selectedChoice],
//       };
//       const response = await axios.post(`/api/checkAnswer`, payload);
//       return response.data;
//     },
//   });

//   const { mutate: endGame } = useMutation({
//     mutationFn: async () => {
//       const payload: z.infer<typeof endGameSchema> = {
//         gameId: game.id,
//       };
//       const response = await axios.post(`/api/endGame`, payload);
//       return response.data;
//     },
//   });

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (isShowingStats) return;
      if (!hasEnded) {
        setNow(new Date());
        // setMockEndTime(new Date())
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [hasEnded]);

  const setMockEndTime = async () => {
    
  }

  const endGame = async () => {
    setTimeEnded(new Date());
  }

  const handleShowStats = () => {
    let totalCorrect = answeredQuestions.reduce((acc, question) => {
      if (question.isCorrect) {
        return acc + 1;
      }
      return acc;
    }, 0);
    let tempAccuracy = (totalCorrect / answeredQuestions.length) * 100;
    tempAccuracy = Math.round(accuracy * 100) / 100;
  }

  const handleNext = React.useCallback(() => {
    if (hasEnded) {
      console.log("CLICKED BUTTON")
      setHasEnded(false);
      setIsShowingStats(true);
      return;
    }
    const isCorrect = checkAnswer();
    setIsChecking(false);
    if (isCorrect) {
      setStats((stats) => ({
        ...stats,
        correct_answers: stats.correct_answers + 1,
      })); 
    } else {
        setStats((stats) => ({
          ...stats,
          wrong_answers: stats.wrong_answers + 1,
        }));
    }
    const answeredQuestion = {
      question: game[questionIndex].question,
      answer: game[questionIndex].answer,
      userAnswer: options[selectedChoice].toLowerCase().trim(),
      isCorrect: isCorrect,
      options: options,
      explanation: game[questionIndex].explanation,      
    }
    setAnsweredQuestions((answeredQuestions) => [...answeredQuestions, answeredQuestion]);
    if (questionIndex === game.length - 1) {
      endGame();
      setHasEnded(true);
      // console.log("answeredQuestions", answeredQuestions)
      return;
    }
    setQuestionIndex((questionIndex) => questionIndex + 1);
    if (showAnswer) {
      setShowAnswer(false);
    }
    setSelectedChoice(0);
    // checkAnswer(undefined, {
    //   onSuccess: ({ isCorrect }) => {
        // if (isCorrect) {
        //   setStats((stats) => ({
        //     ...stats,
        //     correct_answers: stats.correct_answers + 1,
        //   }));
        //   toast({
        //     title: "Correct",
        //     description: "You got it right!",
        //     variant: "success",
        //   });
        // } else {
        //   setStats((stats) => ({
        //     ...stats,
        //     wrong_answers: stats.wrong_answers + 1,
        //   }));
        //   toast({
        //     title: "Incorrect",
        //     description: "You got it wrong!",
        //     variant: "destructive",
        //   });
        // }
    //     if (questionIndex === game.questions.length - 1) {
    //       endGame();
    //       setHasEnded(true);
    //       return;
    //     }
    //     setQuestionIndex((questionIndex) => questionIndex + 1);
    //   },
    // });
  }, [answeredQuestions, checkAnswer, questionIndex, game.length, toast, endGame]);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (key === "1") {
        setSelectedChoice(0);
      } else if (key === "2") {
        setSelectedChoice(1);
      } else if (key === "3") {
        setSelectedChoice(2);
      } else if (key === "4") {
        setSelectedChoice(3);
      } else if (key === "Enter") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNext]);

  if (hasEnded) {
    return (
      <div className="absolute flex flex-col justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="px-4 py-2 mt-2 font-semibold text-white bg-green-500 rounded-md whitespace-nowrap">
          You Completed in{" "}
          {formatTimeDelta(differenceInSeconds(now, timeStarted))}
        </div>
        <Button
        className={cn(buttonVariants({ size: "lg" }), "mt-2")}
        onClick={() => handleNext()}
        >
          View Statistics
          <BarChart className="w-4 h-4 ml-2" />
        </Button>
        {/* <Link
          // href={`/review/${game.id}`}
          href={{pathname: '/review', query: {answeredQuestions: JSON.stringify(answeredQuestions)}}}
          // href={`/statistics/${game.id}`}
          className={cn(buttonVariants({ size: "lg" }), "mt-2")}          
        >
          View Statistics
          <BarChart className="w-4 h-4 ml-2" />
        </Link> */}
      </div>
    );
  }

  else if (isShowingStats) {
    let totalCorrect = answeredQuestions.reduce((acc, question) => {
      if (question.isCorrect) {
        return acc + 1;
      }
      return acc;
    }, 0);
    console.log("totalCorrect", totalCorrect)
    let tempAccuracy = (totalCorrect / answeredQuestions.length) * 100;
    console.log("accuracy1", tempAccuracy)
    tempAccuracy = Math.round(tempAccuracy * 100) / 100;
    console.log("accuracy2", tempAccuracy)
    return (
      <>
      <div className="p-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Summary</h2>
          <div className="flex items-center space-x-2">
            <Link href="/dashboard" className={buttonVariants()}>
              <LucideLayoutDashboard className="mr-2" />
              Back to Dashboard
            </Link>
          </div>
        </div>

        <div className="grid gap-4 mt-4 md:grid-cols-7">
          <ResultsCard accuracy={tempAccuracy} />
          <AccuracyCard accuracy={tempAccuracy} />
          <TimeTakenCard
            timeEnded={new Date(timeEnded ?? 0)}
            timeStarted={new Date(timeStarted ?? 0)}
          />
        </div>
        <ResultsList questions={answeredQuestions} />
      </div>
    </>
    )    
  }

  else {
    return (
      <div className="absolute -translate-x-1/2 -translate-y-1/2 md:w-[80vw] max-w-4xl w-[90vw] top-1/2 left-1/2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            {/* topic */}
            <p>
              <span className="text-slate-400">Topic</span> &nbsp;
              <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
                {game[questionIndex].topic}
              </span>
            </p>
            {!isMockTest ? (
              <div className="flex self-start mt-3 text-slate-400">
              <Timer className="mr-2" />
                {formatTimeDelta(differenceInSeconds(now, timeStarted))}
              </div>  
            ): 
              <div className="flex self-start mt-3 text-slate-400">
                <Timer className="mr-2" />
                  {formatTimeDelta(differenceInSeconds(mockFinishTime, now))}
              </div>
            }
          </div>
          {!isMockTest && (
            <MCQCounter
            correct_answers={stats.correct_answers}
            wrong_answers={stats.wrong_answers}
            />
          )}
          
        </div>
        <Card className="w-full mt-4">
          <CardHeader className="flex flex-row items-center">
            <CardTitle className="mr-5 text-center divide-y divide-zinc-600/50">
              <div>{questionIndex + 1}</div>
              <div className="text-base text-slate-400">
                {game.length}
              </div>
            </CardTitle>
            <CardDescription className="flex-grow text-lg">
              {game[questionIndex]?.question}
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          {options.map((option, index) => {
            return (
              <Button
                key={option}
                variant={selectedChoice === index ? "default" : "outline"}
                className="justify-start w-full py-8 mb-4"
                onClick={() => {setSelectedChoice(index)}}
              >
                <div className="flex items-center justify-start">
                  <div className="p-2 px-3 mr-5 border rounded-md">
                    {index + 1}
                  </div>
                  <div className="text-start">{option}</div>
                </div>
              </Button>
            );
          })}
          <div className="flex flex-row mt-2 gap-2">
          {!isMockTest && (
            <Button
            variant="secondary"
            onClick={() => setShowAnswer(!showAnswer)}
            >
            Show answer
            </Button>
          )}          
          <Button
            variant="default"
            // className="mt-2"
            size="lg"
            disabled={isChecking || hasEnded}
            onClick={() => {
              handleNext();
            }}
          >
            {isChecking && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Next <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
          </div>
          {showAnswer && (
            <div>
              <Card className="w-full mt-4">
                <CardHeader className="flex flex-row items-center">            
                  <CardDescription className="flex-grow text-lg">
                    Correct Answer is <span className="text-green-600">{game[questionIndex].answer}</span>
                    <br/>
                    <br/>
                    {game[questionIndex]?.explanation}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          )}
          <div>          
          </div>
        </div>
      </div>
    );

  }

 
};

export default MCQ;

/* 
From MockTestConfirm
Pass questionsList as props to MCQ
*/