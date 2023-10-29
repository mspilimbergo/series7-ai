"use client";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
// import MdOutlineCancel from 'react-icons/fa';
import { MultiSelect } from 'react-multi-select-component';
import { topics } from "../../data/topics";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

// type Props = {
//   topic: string;
// };

// type Input = z.infer<typeof quizCreationSchema>;

const TutorMode = () => {
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
    const paramData = {
      numberOfQuestions: numberOfQuestions,
      topicsSelected: topicsSelected,
      examType: "mcq",
    }
    const examType = "mcq"
    const topicsString = topicsSelected.map((topic) => topic.value).join(",");
    console.log(topicsString)
    // console.log(test)
    router.push(`/play/mcq/${numberOfQuestions}?topics=${topicsString}&type=${examType}`);
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
    // <main>
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  md:w-995">
      <h2 className="text-green-600		 mr-2 text-3xl font-bold tracking-tight text-center ">Tutor Mode</h2>      
      <div className="mt-2 border-green-600 rounded border-t border-4 w-[180px] mx-auto"></div>
      <h3 className="text-gray-500 mt-4 text-xl text-center">Choose a topic </h3>
      <Card className="mt-10">
        <CardHeader>
          {/* <CardTitle className="text-2xl font-bold">Tutor Mode Creation</CardTitle>
          <CardDescription>Choose a topic</CardDescription> */}
          <form onSubmit={handleSubmit}> 
          {/* <div className="flex flew-row gap-4 bg-slate-600 w-[800px]"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="">
        <label>Topic</label>
        <MultiSelect
            options={topics}
            value={topicsSelected}
            onChange={(selectedOptions) => setTopicsSelected(selectedOptions)}
            labelledBy="Select"
            isCreatable={false}
            className="mt-4"
        />
        <p className="text-sm text-slate-400 md:mt-4">Please provide any topic you would like to be quizzed on here.</p>
    </div>
    <div className="">
        <label>Number of Questions</label>
        <Input
            type="number"
            placeholder="How many questions?"
            value={numberOfQuestions}
            onChange={(e) => setNumberOfQuestions(e.target.value)}
            min={1}
            max={30}
            className="mt-4"
        />
        <p className="text-sm text-slate-400 mb-4 md:mt-4">You can choose how many questions you would like to be quizzed on here.</p>
    </div>
</div>

          <div className="flex justify-center mt-8">
           <div className="flex flex-row gap-4">
           <Button
                variant="secondary"
                // onClick={() => setShowAnswer(!showAnswer)}
                style={{ backgroundColor: "#373737", width: "140px", borderRadius: "8px" }}
                className="text-white rounded-sm"
                onClick={() => router.push('/dashboard')}
              >
                {/* <FaEye size={17} /> */}
                <span className="ml-2">Cancel</span>
              </Button>          
            <Button
              style={{ backgroundColor: "#4CA054", width: "140px", borderRadius: "8px" }}
              className="rounded-[8px] w-32"
              type="submit"
              // size="lg"              
            >
              {/* <FaStepForward size={15} /> */}
              <span className="ml-2">Next</span>
              {/* <ChevronRight className="w-4 h-4 ml-2" /> */}
            </Button>            
              </div>
          </div>                            
          </form>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
    </div>
    // </main>
  );
};

export default TutorMode;


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