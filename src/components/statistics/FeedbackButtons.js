'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { BsHandThumbsDown, BsHandThumbsDownFill, BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";

function FeedbackButtons({id}) {
    // console.log("ID PARAM", id)
    const [feedback, setFeedback] = useState();
    const [feedbackType, setFeedbackType] = useState("")
    const supabase = createClientComponentClient();

    function handleFeedback (e) {
        setFeedback(e.target.value);
    }
    
    async function submitPositiveFeedback (id) {
        setFeedbackType("positive")
        const feedbackObj = {
            type: "positive",
        }
        const { data, error } = await supabase
        .from('questions')
        .update({ 
            feedback: feedbackObj,      
            })    
        .eq('id', id )
        .select() 

        if(error) {
            console.log("Error uploading feedback", error)
        }
        // console.log("data", data)

    }

    async function submitNegativeFeedback (id) {
        const feedbackObj = {
            type: "negative",
            feedback: feedback
        }
        // const feedbackString = JSON.stringify(feedbackObj)
        // console.log("id", id)
        const { data, error } = await supabase
        .from('questions')
        .update({ 
            feedback: feedbackObj,
            // feedback_string: feedbackString 
            })    
        .eq('id', id )
        .select() 

        if(error) {
            console.log("Error uploading feedback", error)
        }
        setFeedbackType("negative")
        setFeedback("")
    }

    useEffect(() => {
        console.log("feedback", feedback)
    },[feedback])

  return (
        <div className="flex flex-row gap-2 mt-2">
            <FeedbackPopover feedbackFunction={handleFeedback} submitHandler={submitNegativeFeedback} id={id} feedbackType={feedbackType} />      
            <Button type="button" onClick={() => submitPositiveFeedback(id)} variant={'shadow'} size={'icon'}>
                {feedbackType === "positive" ?
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

export default FeedbackButtons

export function FeedbackPopover({feedbackFunction, submitHandler, id, feedbackType}) {
    const [open, setOpen] = useState(false)
  
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
        <Button  aria-expanded={open} variant={'shadow'} size={'icon'}>
          {feedbackType === "negative" ? 
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
                      submitHandler(id)
                      setOpen(false)
                    }
                  }>Submit</Button>
                {/* </Popover.Close> */}
          </div>
        </PopoverContent>
      </Popover>
    )
  }
  