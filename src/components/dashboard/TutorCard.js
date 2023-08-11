"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PencilRulerIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const TutorCard = () => {
  const router = useRouter();
  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      onClick={() => {
        router.push("/tutor");
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Tutor Mode</CardTitle>
        <PencilRulerIcon size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
        Tutor mode gives you control over what kinds of questions and how many questions, as well as detailed explanations after each question.
        </p>
      </CardContent>
    </Card>
  );
};

export default TutorCard;
