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
// import { Question } from "@prisma/client";
// type Props = {
//   questions: Question[];
// };

const ResultsList = ({ questions }) => {
  return (
    <Table className="mt-4">
      <TableCaption>End of list.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">No.</TableHead>
          <TableHead>Question & Correct Answer</TableHead>
          <TableHead>Your Answer</TableHead>
          <TableHead>Explanation</TableHead>

          {/* {questions[0].questionType === "open_ended" && (
            <TableHead className="w-[10px] text-right">Accuracy</TableHead>
          )} */}
        </TableRow>
      </TableHeader>
      <TableBody>
        <>
          {questions.map(
            (
              { answer, question, userAnswer, isCorrect, explanation },
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
                    </TableCell>                                    
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
