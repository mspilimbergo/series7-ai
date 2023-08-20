
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";
type Props = { accuracy: number };

const AccuracyCard = ({ accuracy }: Props) => {
  accuracy = Math.round(accuracy * 100) / 100;
  return (
    <Card className="md:col-span-4" style={{color: "#4CA054"}}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold text-green-600">
          <span>Average Accuracy</span>
          <div className="text-base font-medium text-gray-600 mt-4">{accuracy.toString() + "%"}</div>
          </CardTitle>

        <div className="flex justify-center items-center ">
          <div className="h-48 w-48 bg-green-100 rounded-full flex justify-center items-center" style={{ height: "70px", width: "70px" }}>
            <Target size={50} style={{color: "#4CA054"}}/>
          </div>
        </div>
      </CardHeader>
      <CardContent>
      {/* <div className="text-sm font-medium text-green-600">{accuracy.toString() + "%"}</div> */}
      </CardContent>
    </Card>
  );
};

export default AccuracyCard;
