"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

// type Props = {
//   topic: string;
// };

// type Input = z.infer<typeof quizCreationSchema>;

const MockTest = () => {
  const router = useRouter();
  const [showLoader, setShowLoader] = React.useState(false);
  const [finishedLoading, setFinishedLoading] = React.useState(false);
  const { toast } = useToast();
  const [topicsSelected, setTopicsSelected] = React.useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = React.useState(0);
  const supabase = createClientComponentClient()
  // const { isLoading, isError, data: getQuestions, error } = useQuery({
  //   queryFn: async (numberOfQuestions, topicsSelected) => {
  //     const response = await axios.post("/api/questions", { numberOfQuestions, topicsSelected, type });
  //     return response.data;
  //   },
  // });
  // const { mutate: getQuestions, isLoading } = useMutation({
    // mutationFn: async ({ amount, topic, type }: Input) => {
    //   const response = await axios.post("/api/game", { amount, topic, type });
    //   return response.data;
    // },
  // });

  

  // const form = useForm<Input>({
  //   resolver: zodResolver(quizCreationSchema),
  //   defaultValues: {
  //     topic: topicParam,
  //     type: "mcq",
  //     amount: 3,
  //   },
  // });

  useEffect(() => {
    console.log(topicsSelected);
    console.log(numberOfQuestions);
  }, [topicsSelected, numberOfQuestions]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { data } = await supabase.from('todos').select()
    // const { data: questions, error } = await supabase
    //     .from("questions")
    //     .select("*")
    // if (error) {
    //   console.log(error.message)
    // }
    // const questionsParam = questions[0].id
    // console.log(test)
    const examType = "mock-test"
    router.push(`/play/mcq/${examType}`);
    // const res = await a//xios.post("/api/questions", { numberOfQuestions, topicsSelected });
    // console.log(res.data);s
    // const data = { 
    //   numberOfQuestions: numberOfQuestions,
    //   topicsSelected: topicsSelected,
    // }
    // // setShowLoader(true);
    // getQuestions(data, {
    //   onError: (error) => {
    //     setShowLoader(false);
    //   },
    //   onSuccess: ({response}) => {
    //     console.log(response);
    //     setFinishedLoading(true);
    //     setTimeout(() => {
    //       if (form.getValues("type") === "mcq") {
    //         router.push(`/play/mcq/${gameId}`);
    //       } else if (form.getValues("type") === "open_ended") {
    //         router.push(`/play/open-ended/${gameId}`);
    //       }
    //     }, 2000);
    //   },
    // });
  };
  // form.watch();
// 
//   const handleChange = () => {
//     setTopicsSelected(event.target.value);
//   }
  
  // This function should fetch questions from the database with the topic selected 
//   const fetchQuestions = async() => {

//   }

  // if (showLoader) {
  //   return <LoadingQuestions finished={finishedLoading} />;
  // }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Mock Test creation</CardTitle>
          {/* <CardDescription>Choose a topic</CardDescription> */}
          <form onSubmit={handleSubmit}> 
          <div className="flex flex-col space-y-1.5 mt-4">
                <label>What to expect?</label>
                {/* <MultiSelect
                  options={topics}
                  value={topicsSelected}
                  onChange={(selectedOptions) => setTopicsSelected(selectedOptions)}
                  labelledBy="Select"
                  isCreatable={true}
                /> */}
                <CardDescription>Each candidate’s exam consists of a total of 135 items (125 scored and 10 unscored). <br/>There is no penalty for guessing. Therefore, candidates should attempt to answer all items. <br/> Candidates will be allowed 3 hours and 45 minutes to complete the Series 7 exam.</CardDescription>
                <CardDescription>You will be timed and scored at the end. </CardDescription>
                
                {/* "The exam is administered via computer. A tutorial on how to take the exam is provided prior to taking the exam. Each
candidate’s exam includes 10 additional, unidentified pretest items that do not contribute toward the candidate's
score. The pretest items are randomly distributed throughout the exam. Therefore, ach candidate’s exam consists of
a total of 135 items (125 scored and 10 unscored). There is no penalty for guessing. Therefore, candidates should
attempt to answer all items. Candidates will be allowed 3 hours and 45 minutes to complete the Series 7 exam." */}
              
                {/* <p className="text-sm text-slate-400">The mock test will provide you with a set of questions, just like the real exam.</p>
                <p className="text-sm text-slate-400">You will be timed and scored at the end. </p> */}
            </div>

              <div className="flex flex-col space-y-1.5 mt-4">
                <label>Ready to begin?</label>
                {/* <Input
                  type="number"
                  placeholder="How many questions?"
                  value={numberOfQuestions}
                  onChange={(e) => setNumberOfQuestions(e.target.value)}
                  min={1}
                  max={30}
                /> */}
                {/* <p>You can choose how many questions you would like to be quizzed on here.</p> */}
                {/* <p className="text-sm text-slate-400">Click "begin" below to start the mock test.</p> */}
                <CardDescription>Click "begin" below to start the mock test. </CardDescription>
              </div>
              <Button className={'w-full mt-4'} type="submit">
                 Begin
                </Button>
          </form>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
    </div>
  );
};

export default  MockTest;


          // <Form>
          //   <form onSubmit={handleSubmit} className="space-y-8">
          //     <FormField
          //       // control={form.control}
          //       // name="topic"
          //       render={({ field }) => (
          //         <FormItem>
          //           <FormLabel>Topic</FormLabel>
          //           <FormControl>
          //             {/* <Input placeholder="Enter a topic" {...field} /> */}
          //             <MultiSelect
          //               options={topics}
          //               value={topicsSelected}
          //               // onChange={setTopicsSelected}
          //               onChange={() => {
          //                   setTopicsSelected(topicsSelected);
          //                   // form.setValue("topics", topicsSelected);
          //                     // setNumberOfQuestions(parseInt(e.target.value));
          //                 }}
          //               labelledBy={"Select"}
          //               isCreatable={true}
          //           />

          //           </FormControl>
          //           <FormDescription>
          //             Please provide any topic you would like to be quizzed on
          //             here.
          //           </FormDescription>
          //           <FormMessage />
          //         </FormItem>
          //       )}
          //     />
          //     <FormField
          //       // control={form.control}
          //       // name="amount"
          //       render={({ field }) => (
          //         <FormItem>
          //           <FormLabel>Number of Questions</FormLabel>
          //           <FormControl>
          //             <Input
          //               placeholder="How many questions?"
          //               type="number"
          //               onChange={(e) => setNumberOfQuestions(e.target.value)}
          //               // value={numberOfQuestions}
          //               // {...field}
          //               // onChange={(e) => {
          //               //   form.setValue("amount", parseInt(e.target.value));
          //               //     // setNumberOfQuestions(parseInt(e.target.value));
          //               // }}
          //               min={1}
          //               max={30}
          //             />
          //           </FormControl>
          //           <FormDescription>
          //             You can choose how many questions you would like to be
          //             quizzed on here.
          //           </FormDescription>
          //           <FormMessage />
          //         </FormItem>
          //       )}
          //     />
            
          //     <div>
          //       {/* <Button className={'w-full'} disabled={isLoading} type="submit"> */}
          //       <Button className={'w-full'} type="submit">
          //         Begin
          //       </Button>
          //     </div>              
          //   </form>
          // </Form>