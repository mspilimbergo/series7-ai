"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

// type Props = {};

const MockTestDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Begin Mock Test</Button>
        {/* <span className="flex items-center px-2 py-1 text-white rounded-md bg-slate-800">
          Begin Mock Test
          <HelpCircle className="w-5 h-5 ml-1" />
        </span> */}
      </DialogTrigger>
      <DialogContent className="w-[70vw] max-w-[100vw] md:w-[50vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get ready to start your mock test!</DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-3 my-2">              
            </div>
            <p className="my-2 mt-4 ">
              Are you tired of mundane and repetitive quizzes? Say goodbye to
              the ordinary and embrace the extraordinary with Quizmefy! Our
              platform is revolutionizing the quiz and trivia experience by
              harnessing the immense potential of artificial intelligence.
            </p>
            <hr />
            <p className="my-2 font-semibold">
              <h4 className="text-base font-semibold">Built with</h4>
              <div className="flex justify-center">
               <Button>Begin Test</Button>
              </div>
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MockTestDialog;
