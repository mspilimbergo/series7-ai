"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { BsHandThumbsDown, BsHandThumbsDownFill, BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";

const FeedbackButtons = ({handleFeedback, submitPositiveFeedback, submitNegativeFeedback, id}) => {
  const [positiveFeedback, setPositiveFeedback] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const handlePositiveFeedback = () => {
    if (isClicked) {
      setIsClicked(false)
      setPositiveFeedback(false)
      submitPositiveFeedback(id, "decrement")
    } else {
      setIsClicked(true)
      setPositiveFeedback(true)
      submitPositiveFeedback(id, "increment")
    }
    
  }
  
  return (
    <div className="flex flex-row gap-2 mt-2">
      <FeedbackPopover feedbackFunction={handleFeedback} submitHandler={submitNegativeFeedback} id={id} />      
      <Button type="button" onClick={() => handlePositiveFeedback(id)} variant={'shadow'} size={'icon'}>
        {positiveFeedback  ?
          (<>
          <BsHandThumbsUpFill color={'green'} />
          </>
          ): 
          (
            <>
            <BsHandThumbsUp />  
            </>
          )}
        </Button>
    </div>   
  )
}

const ResultsList = ({ questions }) => {
  const supabase = createClientComponentClient();
  // console.log("data", data)
  // console.log("session", session)
  // const {user} = supabase.auth.getUser();
  // console.log("user", user)
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [user, setUser] = useState(null);
  // console.log("user", user)

  function handleFeedback (e) {
    setFeedback(e.target.value);
  }

  async function getUser() {
    const {data, error} = await supabase.auth.getSession();
    if (data) {
      setUser(data.session?.user)      
    }
  }

  useEffect(() => {
    getUser()
  },[])

  async function submitPositiveFeedback (id, changeType) {
    console.log(changeType)
    // return;
    console.log(id)
    setFeedbackType("positive")
    console.log("In submit positive feedback")
    const {data: currentData, error: currentDataError} = await supabase    
      .from('questions_versioned')
      .select('*')
      .eq('id', id)
      .single()
      // console.log("data", data)
      // return;
      const currentUpvotes = currentData.upvotes;
      // console.log(currentUpvotes)
    if (changeType === "increment") {
      console.log("in increment")
      // Increment upvotes
      const newUpvotes = currentUpvotes + 1;

      const { data: updatedData, error: updatedError } = await supabase
      .from('questions_versioned')
      .update({
        upvotes: newUpvotes
      })
      .eq('id', id)
      .select()

      if (updatedError) {
        console.log("Error updating upvotes", updatedError)
      } else {
        console.log("updated data", updatedData)
      }

    } else {
      // Decrement upvotes 
      let newUpvotes;
      if (currentUpvotes - 1 <= 0) {
        newUpvotes = 0;
      }
      else {
        newUpvotes = currentUpvotes - 1;
      }
      const { data: updatedData, error: updatedError } = await supabase
      .from('questions_versioned')
      .update({
        upvotes: newUpvotes
      })
      .eq('id', id)
      .select()

      if (updatedData) {
        console.log("updated data", updatedData)
      }
    }    
  }

  async function submitNegativeFeedback (id) {
    // const feedbackObj = {
    //   type: "negative",
    //   feedback: feedback
    // }
    // const feedbackString = JSON.stringify(feedbackObj)
    const {data: currentData, error: currentDataError} = await supabase    
      .from('questions_versioned')
      .select('*')
      .eq('id', id)
      .single()
    const currentDownvotes = currentData.downvotes;
    let newDownvotes = currentDownvotes + 1;
    // if (currentDownvotes - 1 <= 0) {
    //   newDownvotes = 0;
    // } else {
    //   newDownvotes = currentDownvotes - 1;
    // }

    // Update downvotes count in questions_versioned table
    const { data: updatedData, error: updatedError } = await supabase
    .from('questions_versioned')
    .update({
      downvotes: newDownvotes
    })
    .eq('id', id)
    .select()
    
    // Create feedback in feedback table
    const { data, error } = await supabase
    .from('feedback')
    .insert([
      {
        question_id: id,
        feedback_message: feedback, 
        user_id: user.id
      }
    ])
    .select() 

    if(error) {
      console.log("Error uploading feedback", error)
    }
    setFeedbackType("negative")
    setFeedback("")
  }

  // useEffect(() => {
  //   console.log("feedback", feedback)
  // },[feedback])

  return (
    <Table className="mt-4">
      <TableCaption>End of list.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">No.</TableHead>
          <TableHead>Question & Correct Answer</TableHead>
          <TableHead>Your Answer</TableHead>
          <TableHead>Explanation</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <>
          {questions.map(
            (
              { answer, question, userAnswer, isCorrect, explanation, id },
              index
            ) => {
              return (
                <TableRow key={id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    {question}                     
                    <br />
                    <br />
                    <span className="font-semibold">{answer}</span>
                  </TableCell>                  
                    <TableCell
                      className={`${
                        isCorrect ? "text-green-600" : "text-red-600"
                      } font-semibold`}
                    >
                      {userAnswer}
                    </TableCell>
                    <TableCell>
                      {explanation}
                      <div className="flex flex-row gap-2 mt-2">
                        <FeedbackButtons handleFeedback={handleFeedback} submitPositiveFeedback={submitPositiveFeedback} submitNegativeFeedback={submitNegativeFeedback} id={id} />
                        {/* <FeedbackPopover feedbackFunction={handleFeedback} submitHandler={submitNegativeFeedback} id={id} feedbackType={feedbackType} />                
                      <Button type="button" onClick={() => submitPositiveFeedback(id)} variant={'shadow'} size={'icon'}>
                        {feedbackType === "positive" ?
                        (<>
                        <BsHandThumbsUpFill color={'green'} />
                        </>) : 
                        (
                          <>
                          <BsHandThumbsUp />  
                          </>
                        )}
                        </Button> */}
                      </div>                  
                    </TableCell>                                    
                    {/* <TableCell>
                      <div className="flex flex-row gap-2">
                      <Button variant={'outline'}>
                        <BsHandThumbsDown />
                        </Button>
                      <Button variant={'outline'}>
                        <BsHandThumbsUp />
                        </Button>
                      </div>                      
                      </TableCell> */}
                </TableRow>
              );
            }
          )}
        </>
      </TableBody>
    </Table>
  );
};

export default ResultsList;



export function FeedbackPopover({feedbackFunction, submitHandler, id}) {
  const [open, setOpen] = useState(false)
  const [negativeFeedback, setNegativeFeedback] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const handleNegativeFeedback = () => {
    if (isClicked) {
      setIsClicked(false)
      setNegativeFeedback(false)
      submitHandler(id, "decrement")
      setOpen(false)
    } else {
      setIsClicked(true)
      setNegativeFeedback(true)
      submitHandler(id, "increment")
      setOpen(true)
    }
    
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
      <Button  aria-expanded={open} variant={'shadow'} size={'icon'}>
        {negativeFeedback ? 
        (
          <>
            <BsHandThumbsDownFill color={'red'} />
          </>
        ): 
        (
          <BsHandThumbsDown />
        )
        }
      </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">         
              <Label htmlFor="width">Feedback</Label>
              <Input
                id="feedback"
                placeholder="Enter feedback here"
                className="col-span-2 h-8"
                onChange={(e) => feedbackFunction(e)}
              />
              {/* <Popover.Close> */}
                <Button onClick={
                  () => {
                    // handleNegativeFeedback()
                    setNegativeFeedback(true)
                    submitHandler(id, "decrement")
                    setOpen(false)
                  }
                }>Submit</Button>
              {/* </Popover.Close> */}
        </div>
      </PopoverContent>
    </Popover>
  )
}


