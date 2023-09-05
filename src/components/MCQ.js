"use client";
import AccuracyCard from "@/components/statistics/AccuracyCard";
import ResultsList from "@/components/statistics/ResultsList";
import TimeTakenCard from "@/components/statistics/TimeTakenCard";
import {
  Card,
  CardDescription,
  CardHeader
} from "@/components/ui/card";
import { cn, formatTimeDelta } from "@/lib/utils";
import { differenceInSeconds } from "date-fns";
import { BarChart, Loader2, LucideLayoutDashboard } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaCheck, FaEye, FaRegClock, FaStepForward } from 'react-icons/fa';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import ReactPaginate from 'react-paginate';
import { Button, buttonVariants } from "./ui/button";
import { useToast } from "./ui/use-toast";

import "./paginate.css";

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

  // console.log("GAME", game)
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
  const [selectedChoice, setSelectedChoice] = React.useState(-1);
  const [now, setNow] = React.useState(new Date());
  // const tempOptions = JSON.parse(game[questionIndex].options);
  // console.log("tempOptions", tempOptions)
  const [answeredQuestions, setAnsweredQuestions] = React.useState([]);
  const [accuracy, setAccuracy] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  let finishTime = new Date();
  finishTime.setMinutes(finishTime.getMinutes() + 225)
  const [mockFinishTime, setMockFinishTime] = React.useState(new Date(finishTime));
  // let accuracy = 0;

  useEffect(() => {

  }, [isShowingStats])

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
    return currentQuestion.options;
  }, [currentQuestion]);

  const { toast } = useToast();
  // Check if the answer the user selectedd matches the current question's answer
  // Then return a boolean value
  const checkAnswer = () => {

    setIsChecking(true);
    // const isCorrect = currentQuestion.answer.toLowerCase().trim() === selectedChoice.toLowerCase().trim();
    let formattedChoiceString = options[selectedChoice].toString()
    let selectedChoiceString = formattedChoiceString.toLowerCase().trim();
    // selectedChoiceString = selectedChoiceString.toLoswerCase().trim();
    // console.log(selectedChoiceString)
    const isCorrect = game[questionIndex].answer.toLowerCase().trim() === selectedChoiceString;
    // console.log("isCorrect", isCorrect)
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

  const handlePageClick = (event) => {

    if (selectedChoice === -1)  {
      if (questionIndex === game.length - 1) {
        endGame();
        setIsShowingStats(true)
        // setHasEnded(true);
        // console.log("answeredQuestions", answeredQuestions)
        return;
      }
      setQuestionIndex(event.selected)
      if (showAnswer) {
        setShowAnswer(false);
      }
    }
    else {
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
        id: game[questionIndex].id,
        upvotes: game[questionIndex].upvotes,
        downvotes: game[questionIndex].downvotes,
        feedback: game[questionIndex].feedback
      }
      setAnsweredQuestions((answeredQuestions) => [...answeredQuestions, answeredQuestion]);
      if (questionIndex === game.length - 1) {
        endGame();
        setIsShowingStats(true)
        // setHasEnded(true);
        // console.log("answeredQuestions", answeredQuestions)
        return;
      }
      setQuestionIndex(event.selected)

      if (showAnswer) {
        setShowAnswer(false);
      }
      setSelectedChoice(-1);
    }
  };

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
    if (selectedChoice === -1)  {
      if (questionIndex === game.length - 1) {
        endGame();
        setIsShowingStats(true)
        // setHasEnded(true);
        // console.log("answeredQuestions", answeredQuestions)
        return;
      }
      setQuestionIndex((questionIndex) => questionIndex + 1);
      if (showAnswer) {
        setShowAnswer(false);
      }
    }
    else {
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
        id: game[questionIndex].id,
        upvotes: game[questionIndex].upvotes,
        downvotes: game[questionIndex].downvotes,
        feedback: game[questionIndex].feedback
      }
      setAnsweredQuestions((answeredQuestions) => [...answeredQuestions, answeredQuestion]);
      if (questionIndex === game.length - 1) {
        endGame();
        setIsShowingStats(true)
        // setHasEnded(true);
        // console.log("answeredQuestions", answeredQuestions)
        return;
      }
      setQuestionIndex((questionIndex) => questionIndex + 1);
      if (showAnswer) {
        setShowAnswer(false);
      }
      setSelectedChoice(-1);
    }
  
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
      </div>
    );
  }

  /* 
  // PAGE 4 IN THE FIGMA
  // THIS IS STATS SECTION
*/

  else if (isShowingStats) {
    let totalCorrect = answeredQuestions.reduce((acc, question) => {
      if (question.isCorrect) {
        return acc + 1;
      }
      return acc;
    }, 0);
    // console.log("totalCorrect", totalCorrect)
    let tempAccuracy = (totalCorrect / answeredQuestions.length) * 100;
    // console.log("accuracy1", tempAccuracy)
    tempAccuracy = Math.round(tempAccuracy * 100) / 100;
    // console.log("accuracy2", tempAccuracy)
    return (
      <>
        <div className="p-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-center space-y-2 pb-8">
            <span className="font-bold text-xl text-green-600 p-4">
              <span className="ml-4"style={{color: "#4CA054"}}>Series 7 AI</span>
              <div class="flex-grow h-2" style={{ borderBottom: "2px solid #4CA054", width: "120%" }}></div>
              <div class="flex-grow h-1" style={{ borderBottom: "2px solid #4CA054", width: "70%" }}></div>
            </span>
          </div>
          <div className="flex items-center justify-between space-y-2 mb-4 mt-8">
            <span className="font-bold text-xl text-green-600"style={{color: "#4CA054"}}>
              Your Results
              <div className="flex-grow h-4" style={{ borderBottom: "3px solid #4CA054", width: "50%" }}></div>
            </span>
            {/* <h2 className="text-3xl font-bold tracking-tight">Summary</h2> */}
            <div className="flex items-center space-x-2"style={{color: "#4CA054"}}>
              <Link href="/dashboard" className={`rounded-sm flex bg-green-500 text-white py-4 px-4`} style={{backgroundColor: "#4CA054"}}>
                <LucideLayoutDashboard className="mr-2" size={16}/>
                <span className="text-xs">Back to Dashboard</span>
              </Link>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <AccuracyCard accuracy={tempAccuracy} />
          </div>
          <div class="w-full md:w-1/2 p-4">
            <TimeTakenCard
              timeEnded={new Date(timeEnded ?? 0)}
              timeStarted={new Date(timeStarted ?? 0)}
            />
          </div>
        </div>

          <ResultsList questions={answeredQuestions} />
        </div>
      </>
    )
  }

  /* 
    // PAGE 3 IN THE FIGMA
    // THIS IS THE QUESTIONS SECTION (BELOW)
  */

    

  else {
    return (
      <div className="absolute -translate-x-1/2 -translate-y-1/2 md:w-[80vw] max-w-4xl w-[90vw] top-1/2 left-1/2" >
        <div className="flex flex-row justify-between mb-8">
          <span className="text-slate-400 cursor-pointer">
            <IoChevronBackCircleOutline onClick={() => {
              if (isMockTest) {
                router.push('/quiz')
              } else {
                router.push('/tutor')
              }
              }} size={27} />
          </span>
          <span>
            {!isMockTest ? (
              <div className="flex self-start  text-slate-400">
                <FaRegClock className="mr-2" size={22} />
                {formatTimeDelta(differenceInSeconds(now, timeStarted))}
              </div>
            ) :
              <div className="flex self-start  text-slate-400">
                <FaRegClock className="mr-2" size={22} />
                {formatTimeDelta(differenceInSeconds(mockFinishTime, now))}
              </div>
            }
          </span>
          <span></span>
        </div>
        <div className="flex flex-row justify-between mt-8">
          <div className="flex flex-col">
            {/* topic */}
            <p>
              <span className="text-slate-400">Topic</span> &nbsp;
              {/* <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
                {game[questionIndex].topic}
              </span> */}
            </p>

          </div>
          {/* {!isMockTest && (
            <MCQCounter
            correct_answers={stats.correct_answers}
            wrong_answers={stats.wrong_answers}
            />
          )} */}

        </div>
        <div className="flex flex-row justify-between mt-3 mb-1">
          <span className="font-bold text-xl " style={{ color: "#4CA054" }}>
            {game[questionIndex].topic}
            <div class="flex-grow h-4" style={{ borderBottom: "3px solid #4CA054", width: "50%" }}></div>
          </span>
          {/* <div class="border-b border-green-600 py-2">
            <span className="text-green-600 font-bold text-xl">
              {game[questionIndex].topic}
            </span>
          </div> */}
        </div>
        <div className="w-full  mt-8 border px-2 py-4 rounded-sm mb-8">
          <div className="flex  flex-row items-center">

            <div className="mr-5  text-center divide-y divide-zinc-600/50">

              <div className="p-6 px-4 mr-2 border  bg-gray-500 md:text-xl text-md text-white" style={{ backgroundColor: "#373737",borderRadius: "5px" }}>0{questionIndex + 1}</div>
              {/* <div className="text-base text-slate-400">
                {game.length}
              </div> */}
            </div>
            <CardDescription className="flex-grow md:text-xl text-md">
              {game[questionIndex]?.question}
            </CardDescription>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

          {options.map((option, index) => {
            return (
              // <Button
              //   key={option}
              //   variant={selectedChoice === index ? "default" : "outline"}
              //   className={`justify-start w-full py-8 mb-2 rounded-sm ${selectedChoice === index ? 'border-green-200' : 'border-gray-200'}`}
              //   onClick={() => { setSelectedChoice(index) }}
              // >
              //   <div className="flex items-center justify-start">
              //     <div className="p-4 px-6 mr-5 border rounded-none ">
              //       {index + 1}
              //     </div>
              //     <div className="text-start">{option}</div>
              //   </div>
              // </Button>
              <>
                {
                  selectedChoice === index ?
                    <div onClick={() => { setSelectedChoice(index) }} className="flex border border-green-500 rounded-sm py-4 px-2  cursor-pointer" key={option} style={{ borderColor: "#4CA054" }}>
                      <div className={`w-12 h-12 border  p-4  text-white flex items-center justify-center rounded-full bg-green-500`} style={{ backgroundColor: "#4CA054",borderRadius: "5px" }}>
                        {index + 1 == 1 ? "A" : index + 1 == 2 ? "B" : index + 1 == 3 ? "C" : "D"}
                      </div>
                      <div className="flex-grow flex items-center justify-left px-4">
                        {option}
                      </div>
                      <div className="flex justify-center items-center w-16">
                        <div className="h-8 w-8 bg-green-500 rounded-full flex justify-center items-center" style={{ height: "28px", width: "28px", backgroundColor: "#4CA054" }}>
                          <span className="text-white  font-bold"><FaCheck className="text-sm" /></span>
                        </div>
                      </div>
                    </div>
                    :
                    <div onClick={() => { setSelectedChoice(index) }} className="flex border border-green-500 rounded-sm py-4 px-2 cursor-pointer" key={option}>
                      <div className={`w-12 h-12 border  p-4  text-white flex items-center justify-center rounded-full bg-gray-500`} style={{ backgroundColor: "#d3d3d3",borderRadius: "5px" }}>
                        {index + 1 == 1 ? "A" : index + 1 == 2 ? "B" : index + 1 == 3 ? "C" : "D"}
                      </div>
                      <div className="flex-grow flex items-center justify-left px-4">
                        {option}
                      </div>
                      <div class="flex justify-center items-center w-16">
                        <div class="w-4 h-4 border border-green-500 rounded-full flex justify-center items-center" style={{ height: "28px", width: "28px" }}>
                          <span class="text-white  font-bold"><FaCheck className="text-sm" /></span>
                        </div>
                      </div>
                    </div>
                }
              </>


            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-8">

          <div className="flex flex-row mt-2 gap-2" >
            {!isMockTest && (
              <Button
                variant="secondary"
                onClick={() => setShowAnswer(!showAnswer)}
                style={{ backgroundColor: "#373737", borderRadius: "8px" }}
                className="text-white rounded-sm"
              >
                <FaEye size={17} />
                <span className="ml-2">Show answer</span>
              </Button>
            )}
            <Button
              // variant="default"
              // className="mt-2"
              style={{ backgroundColor: "#4CA054", width: "140px", borderRadius: "8px" }}
              className="rounded-[8px] w-32"
              // size="lg"
              disabled={isChecking || hasEnded}
              onClick={() => {
                handleNext();
              }}
            >
              {isChecking && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              <FaStepForward size={15} />
              <span className="ml-2">Next</span>
              {/* <ChevronRight className="w-4 h-4 ml-2" /> */}
            </Button>
          </div>
   
   <div className="w-full mt-4">
   <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={game.length}
            previousLabel="<"
            renderOnZeroPageCount={null}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'active'}
            forcePage={questionIndex}
          />
   </div>
    
          {showAnswer && (
            <div>
              <Card className="w-full mt-4 rounded-sm">
                <CardHeader className="flex flex-row items-center">
                  <CardDescription className="flex-grow text-lg">
                    Correct Answer is <span className="text-green-600">{game[questionIndex].answer}</span>
                    <br />
                    <br />
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