'use client'
import LoadingQuestions from "@/components/LoadingQuestions";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from 'react';
import CTAButton from "./CTAButton";

  
 function LandingQuestions() {
    const supabase = createClientComponentClient();
    const [finishedLoading, setFinishedLoading] = useState(false)
    const [showLoader, setShowLoader] = useState(true)
    const [questions, setQuestions] = useState(null)    
    // const selectedChoice = 1;
    const [selectedChoices, setSelectedChoices] = useState([])
    const [finishedQuiz, setFinishedQuiz] = useState(false)
    console.log(selectedChoices)

    const checkAnswer = (questionIndex, selectedOption) => {
      let selectedChoiceString = selectedOption.toLowerCase().trim();
      const isCorrect = questions[questionIndex].answer.toLowerCase().trim() === selectedChoiceString;
      if (isCorrect) {
        return true;
      } else {
        return false;
      }
    }

    const handleQuestionAnswer = (questionIndex, selectedOption, answerIndex ) => {
      // Check if the answer is correct and include it in the answer object
      const isCorrect = checkAnswer(questionIndex, selectedOption);
      // const selectedChoice = {
      //   questionIndex: questionIndex, 
      //   isCorrect: isCorrect
      // }
      // update selectedOptions array to include the value selected 
      setSelectedChoices((prev) => ({
        ...prev,
        [questionIndex]: {
          // selectedChoice: selectedChoice,
          isCorrect: isCorrect,
          answerIndex: answerIndex
        }
      }))
    }
    
    // const handleFinishQuiz = () => {
    //   setFinishedQuiz(finishedQuiz)
    // }

    const getLandingQuestions = async () => {        
        // console.log('IN GET LANDING')
        setShowLoader(true)
        try {      
          let { data, error, status } = await supabase
            .from('questions_versioned')
            .select('*')            
            .eq('topic', 'Equity Securities')
            .limit(3)
    
          if (error && status !== 406) {
            console.log("IS ERROR")
            // throw error
            console.log(error.message)
          }
    
          if (data) {
            console.log("HAS DATA")
            console.log(questions)
            // questions = data
            setQuestions(data)

        }
        } catch (error) {
          alert('Error loading user data!')
        } finally {          
        }
      }
    
      useEffect(() => {
        getLandingQuestions()
        const delay = 3000;

        const timer = setTimeout(() => {
            setFinishedLoading(true)
            setShowLoader(false)
        }, delay);

        return () => clearTimeout(timer);
      }, [])

    if (showLoader)  {
        return (
            <LoadingQuestions finished={finishedLoading} />
        )
    }
    const QuestionComponent = ({question,  handleQuestionAnswer, questionIndex}) => {
      // const [answerIndex, setAnswerIndex] = useState()

      function chooseVariant(index) {
        if (selectedChoices[questionIndex]?.isCorrect === false) {
          if (index === selectedChoices[questionIndex]?.answerIndex) {
            return "destructive"
          } else {
            return "outline"
          }
         } else {
          if (index === selectedChoices[questionIndex]?.answerIndex) {
            return "default"
          } else {
            return "outline"
          }
         }
      }

      if (finishedQuiz) {
        return (
          <>      
          <div className="flex flex-row justify-between">
              <div className="flex flex-col">
              <p className='text-[#536E96] text-2xl mb-4 font-bold'>  Question {questionIndex + 1}</p>
                {/* topic */}
                <p>
                  <span className="text-slate-400">Topic</span> &nbsp;
                  <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
                    {question.topic}
                  </span>
                </p>
              </div>                    
            </div>
            <Card className="w-full mt-4">
              <CardHeader className="flex flex-row items-center">            
                <CardDescription className="flex-grow text-lg">
                  {question.question}
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="flex flex-col items-center justify-center w-full mt-4">          
              {question.options.map((option, index) => {
                return (
                  <Button
                    key={index}
                    variant={chooseVariant(index)}
                    // variant={selectedChoices[questionIndex]?.isCorrect === false ? "destructive" : "outline"}
                    // variant={"default"}
                    className="justify-start w-full py-8 mb-4 p-8"
                    // onClick={() => {
                    //   setAnswerSelected(index)
                    //   handleQuestionAnswer(questionIndex, option, index)
                    
                    // }}
                    // disabled="true"
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
              {!selectedChoices[questionIndex]?.isCorrect && (
                  <div>
                  <Card className="w-full mt-4 mb-4 rounded-sm">
                    <CardHeader className="flex flex-row items-center">
                      <CardDescription className="flex-grow text-lg">
                        Correct Answer is <span className="text-green-600">{question.answer}</span>
                        <br />
                        <br />
                        {question.explanation}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              )}          
              <div>                      
              </div>
            </div>
            </>
        )
      }

      return (
        <>      
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
            <p className='text-[#536E96] text-2xl mb-4 font-bold'>  Question {questionIndex + 1}</p>
              {/* topic */}
              <p>
                <span className="text-slate-400">Topic</span> &nbsp;
                <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
                  {question.topic}
                </span>
              </p>
            </div>                    
          </div>
          <Card className="w-full mt-4">
            <CardHeader className="flex flex-row items-center">            
              <CardDescription className="flex-grow text-lg">
                {question.question}
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="flex flex-col items-center justify-center w-full mt-4">          
            {question.options.map((option, index) => {
              return (
                <Button
                  key={index}
                  variant={selectedChoices[questionIndex]?.answerIndex === index ? "default" : "outline"}
                  // variant={"default"}
                  className="justify-start w-full py-8 mb-4 p-8"
                  onClick={() => {
                    // setAnswerSelected(index)
                    handleQuestionAnswer(questionIndex, option, index)
                  
                  }}
                  // disabled="true"
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
            <div>          
            </div>            
          </div>
          {/* <div>          
                <Button text={"Check answers"} onClick={setFinishedQuiz(true)} >Check Answerrs</Button>
              </div>   */}
          </>
      )
    }

  return (
    <div> 
        {/* <div className="relative md:w-[80vw] max-w-4xl w-[90vw]"> */}
        <div className="className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'">        
        <h1 className='py-3 text-3xl font-bold'>Your <span className='text-[#20B486]'>Series 7</span> Questions Generated</h1>
          {/* <div>          
            <Button text={"Check answers"} onClick={setFinishedQuiz(!finishedQuiz)} >Check Answers</Button>
          </div> */}
        {questions.map((question, index) => {
          // console.log(index)
          return (
            <QuestionComponent question={question} handleQuestionAnswer={handleQuestionAnswer} key={index} questionIndex={index} />
          )
        })}
        {finishedQuiz && (
          <div className="flex self-center">          
            <CTAButton text={"Continue Practicing"}/>
          </div>
        )}        
         <div>          
            <Button text={"Check answers"} onClick={() => setFinishedQuiz(!finishedQuiz)} >Check Answers</Button>
          </div>
        {/* <div className="flex flex-row justify-between">
          <div className="flex flex-col">
          <p className='text-[#536E96] text-2xl mb-4 font-bold'>Question 1</p>
            <p>
              <span className="text-slate-400">Topic</span> &nbsp;
              <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
                {questions[0].topic}
              </span>
            </p>
          </div>                    
        </div>
        <Card className="w-full mt-4">
          <CardHeader className="flex flex-row items-center">            
            <CardDescription className="flex-grow text-lg">
              {questions[0]?.question}
            </CardDescription>
          </CardHeader>
        </Card>         */}
        {/* <div className="flex flex-col items-center justify-center w-full mt-4">          
          {questions[0].options.map((option, index) => {
            return (
              <Button
                key={index}
                // variant={option === questions[0].answer ? "default" : "outline"}
                variant={"default"}
                className="justify-start w-full py-8 mb-4 p-8"
                onClick={() => {handleQuestionAnswer(0, option, index)}}
                // disabled="true"
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
          <div>          
          </div>
        </div> */}
        {/* <div className="flex flex-row justify-between">
          <div className="flex flex-col">
          <p className='text-[#536E96] text-2xl mb-4 font-bold'>Question 2</p>
            <p>
              <span className="text-slate-400">Topic</span> &nbsp;
              <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
                {questions[1].topic}
              </span>
            </p>
          </div>                    
        </div> */}
        {/* <Card className="w-full mt-4">
          <CardHeader className="flex flex-row items-center">            
            <CardDescription className="flex-grow text-lg">
              {questions[1]?.question}
            </CardDescription>
          </CardHeader>
        </Card> */}
        {/* <div className="flex flex-col items-center justify-center w-full mt-4">
          {questions[1].options.map((option, index) => {
            return (
              <Button
                key={index}
                variant={option === questions[1].answer ? "default" : "outline"}
                className="justify-start w-full py-8 mb-4 p-8"
                // onClick={() => {setSelectedChoice(index)}}
                disabled="true"
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
          <div>          
          </div>
        </div> */}
        {/* <div className="flex flex-row justify-between"> */}
          {/* <div className="flex flex-col">
            <p className='text-[#536E96] text-2xl mb-4 font-bold'>Question 3</p>
            <p>
              <span className="text-slate-400">Topic</span> &nbsp;
              <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
                {questions[2].topic}
              </span>
            </p>
          </div>                     */}
        {/* </div> */}
        {/* <Card className="w-full mt-4">
          <CardHeader className="flex flex-row items-center">            
            <CardDescription className="flex-grow text-lg">
              {questions[2]?.question}
            </CardDescription>
          </CardHeader>
        </Card> */}
        {/* <div className="flex flex-col items-center justify-center w-full mt-4">
          {questions[2].options.map((option, index) => {
            return (
              <Button
                key={option}
                variant={option === questions[2].answer ? "default" : "outline"}
                className="justify-start w-full py-8 mb-4 p-8"
                // onClick={() => {setSelectedChoice(index)}}
                disabled="true"
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
          <div>          
            <Button text={"Check answers"}></Button>
          </div>
        </div> */}
      </div>      
    </div>
  )
}

export default LandingQuestions

// export async function getStaticProps() {
//     const supabase = createServerComponentClient();
  
//     try {
//       const { data, error, status } = await supabase
//         .from('questions')
//         .select('*')
//         .limit(2);
  
//       if (error && status !== 406) {
//         console.error(error.message);
//         return {
//           props: {
//             questions: [],
//           },
//         };
//       }
  
//       if (data) {
//         console.log("DATA", data)
//         return {
//           props: {
//             questions: data,
//           },
//         };
//       }
//     } catch (error) {
//       console.error('Error loading questions:', error);
//       return {
//         props: {
//           questions: [],
//         },
//       };
//     }
//   }
  
  
  
  
  
  