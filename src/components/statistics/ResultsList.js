"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FeedbackButtons from "./FeedbackButtons";

const ResultsList = ({ questions }) => {
  // const supabase = createClientComponentClient();
  // const [feedback, setFeedback] = useState("");
  // const [feedbackType, setFeedbackType] = useState("");

  // function handleFeedback (e) {
  //   setFeedback(e.target.value);
  // }

  // async function submitPositiveFeedback (id) {
  //   setFeedbackType("positive")
  //   const feedbackObj = {
  //     type: "positive",
  //   }
  //   const { data, error } = await supabase
  //   .from('questions')
  //   .update({ 
  //     feedback: feedbackObj,      
  //    })    
  //   .eq('id', id )
  //   .select() 

  //   if(error) {
  //     console.log("Error uploading feedback", error)
  //   }
  //   // console.log("data", data)

  // }

  // async function submitNegativeFeedback (id) {
  //   const feedbackObj = {
  //     type: "negative",
  //     feedback: feedback
  //   }
  //   const feedbackString = JSON.stringify(feedbackObj)
  //   // console.log("id", id)
  //   const { data, error } = await supabase
  //   .from('questions')
  //   .update({ 
  //     feedback: feedbackObj,
  //     feedback_string: feedbackString 
  //    })    
  //   .eq('id', id )
  //   .select() 

  //   if(error) {
  //     console.log("Error uploading feedback", error)
  //   }
  //   setFeedbackType("negative")
  //   setFeedback("")
  // }

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
                <TableRow key={index}>
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
                      <FeedbackButtons id={id} />
                      {/* <div className="flex flex-row gap-2 mt-2">
                        <FeedbackPopover feedbackFunction={handleFeedback} submitHandler={submitNegativeFeedback} id={id} feedbackType={feedbackType} />                      
                        
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
                        </Button>
                      </div>                   */}
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

// export function FeedbackButtons() {
//   return (
//     <div className="flex flex-row gap-2 mt-2">
//       <FeedbackPopover feedbackFunction={handleFeedback} submitHandler={submitNegativeFeedback} id={id} feedbackType={feedbackType} />      
//       <Button type="button" onClick={() => submitPositiveFeedback(id)} variant={'shadow'} size={'icon'}>
//         {feedbackType === "positive" ?
//           (<>
//           <BsHandThumbsUpFill color={'green'} />
//           </>
//           ): 
//           (
//             <>
//             <BsHandThumbsUp />  
//             </>
//           )}
//         </Button>
//     </div>   
//   )
// }


// export function FeedbackPopover({feedbackFunction, submitHandler, id, feedbackType}) {
//   const [open, setOpen] = useState(false)

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//       <Button  aria-expanded={open} variant={'shadow'} size={'icon'}>
//         {feedbackType === "negative" ? 
//         (
//           <>
//             <BsHandThumbsDownFill color={'red'} />
//           </>
//         ): 
//         (
//           <BsHandThumbsDown />
//         )
//         }
//       </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-80">
//         <div className="grid gap-4">         
//               <Label htmlFor="width">Feedback</Label>
//               <Input
//                 id="feedback"
//                 placeholder="Enter feedback here"
//                 className="col-span-2 h-8"
//                 onChange={(e) => feedbackFunction(e)}
//               />
//               {/* <Popover.Close> */}
//                 <Button onClick={
//                   () => {
//                     submitHandler(id)
//                     setOpen(false)
//                   }
//                 }>Submit</Button>
//               {/* </Popover.Close> */}
//         </div>
//       </PopoverContent>
//     </Popover>
//   )
// }


