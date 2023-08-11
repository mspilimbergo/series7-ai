'use client'
import LoadingQuestions from "@/components/LoadingQuestions";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from 'react';

 function LandingQuestions() {
    const supabase = createClientComponentClient();
    const [finishedLoading, setFinishedLoading] = useState(false)
    const [showLoader, setShowLoader] = useState(true)
    const [questions, setQuestions] = useState(null)

    // let { data, error, status } = await supabase
    //         .from('questions')
    //         .select('*')
    //         .limit(2)
    const selectedChoice = 1;

    const getLandingQuestions = async () => {        
        // console.log('IN GET LANDING')
        setShowLoader(true)
        try {      
          let { data, error, status } = await supabase
            .from('questions')
            .select('*')
            .limit(2)
    
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
        //   setShowLoader(false)
        // setFinishedLoading(true)
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
    // console.log("QUESTIONS IN LANDING", questions)
    
    //   const selectedChoice = 1;
    //   const setSelectedChoice = (index) => {

    if (showLoader)  {
        return (
            <LoadingQuestions finished={finishedLoading} />
        )
    }
    //   return (
    //     <div>
    //         {questions[0].topic}
    //     </div>
    //   )

  return (
    <div>
        {/* <div className="relative md:w-[80vw] max-w-4xl w-[90vw]"> */}
        <div className="className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'">        
        <h1 className='py-3 text-3xl font-bold'>Your <span className='text-[#20B486]'>Series 7</span> Questions Generated</h1>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
          <p className='text-[#536E96] text-2xl mb-4 font-bold'>Question 1</p>
            {/* topic */}
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
        </Card>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          {JSON.parse(questions[0].options).map((option, index) => {
            return (
              <Button
                key={option}
                variant={selectedChoice === index ? "default" : "outline"}
                className="justify-start w-full py-8 mb-4"
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
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
          <p className='text-[#536E96] text-2xl mb-4 font-bold'>Question 2</p>
            {/* topic */}
            <p>
              <span className="text-slate-400">Topic</span> &nbsp;
              <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
                {questions[1].topic}
              </span>
            </p>
          </div>                    
        </div>
        <Card className="w-full mt-4">
          <CardHeader className="flex flex-row items-center">            
            <CardDescription className="flex-grow text-lg">
              {questions[1]?.question}
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          {JSON.parse(questions[1].options).map((option, index) => {
            return (
              <Button
                key={option}
                variant={selectedChoice === index ? "default" : "outline"}
                className="justify-start w-full py-8 mb-4"
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
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            {/* topic */}
            <p className='text-[#536E96] text-2xl mb-4 font-bold'>Question 3</p>
            <p>
              <span className="text-slate-400">Topic</span> &nbsp;
              <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
                {questions[1].topic}
              </span>
            </p>
          </div>                    
        </div>
        <Card className="w-full mt-4">
          <CardHeader className="flex flex-row items-center">            
            <CardDescription className="flex-grow text-lg">
              {questions[1]?.question}
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          {JSON.parse(questions[1].options).map((option, index) => {
            return (
              <Button
                key={option}
                variant={selectedChoice === index ? "default" : "outline"}
                className="justify-start w-full py-8 mb-4"
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
            <Button className="w-[100%] mb-4">Start Practicing Now!</Button>
          </div>
        </div>
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
  
  
  
  
  
  