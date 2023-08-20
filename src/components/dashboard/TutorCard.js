"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

// type Props = {};

const TutorCard = (props) => {
  const router = useRouter();
  return (
    <Card
      className="flex flex-col justify-between hover:cursor-pointer hover:opacity-75 md:w-[522px] md:h-[591px] md:p-10 drop-shadow-xl"
      onClick={() => {
        router.push("/tutor");
      }}
    >    
      <CardContent className="pb-0">
        <div className="flex justify-center">
        <Image src="/notes.png" width={250} height={250} alt={'mock-test'} />
        </div>        
        {/* <MockTestDialogue /> */}
      </CardContent>
      <CardHeader className="pt-0">
          <div className="flex justify-center">
          <CardTitle className="text-4xl font-bold">Tutor Mode</CardTitle>
          </div>
          <CardDescription className="text-lg text-muted-foreground text-center mt-4">
          {/* <p className="text-lg text-muted-foreground text-center mt-4"> */}
          Tutor mode gives you control over what kinds <br/> of questions and how many questions, as well <br/> as detailed explanations after each question.
        {/* </p> */}
        </CardDescription> 
        </CardHeader>       
      <CardFooter className="md:pb-0">
      <Button className="w-full rounded-sm mt-8 md:h-[60px] md:text-xl">Start Tutor Mode</Button>
      </CardFooter>
    </Card>
  );
};

export default TutorCard;

