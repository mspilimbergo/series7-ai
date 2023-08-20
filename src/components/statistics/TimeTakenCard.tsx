import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatTimeDelta } from "@/lib/utils";
import { differenceInSeconds } from "date-fns";
import { FaRegClock } from 'react-icons/fa';

type Props = {
  timeEnded: Date;
  timeStarted: Date;
};

const TimeTakenCard = ({ timeEnded, timeStarted }: Props) => {
  return (
    <Card className="md:col-span-4" style={{color: "#4CA054"}}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold text-green-600">
          <span>Time Taken</span>
          <div className="text-base font-medium text-gray-600 mt-4">
            {formatTimeDelta(differenceInSeconds(timeEnded, timeStarted))}
          </div>
        </CardTitle>
        <div className="flex justify-center items-center ">
          <div className="h-48 w-48 bg-green-100 rounded-full flex justify-center items-center" style={{ height: "70px", width: "70px" }}>
            <FaRegClock size={40} style={{color: "#4CA054"}}/>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* <div className="text-sm font-medium">
          {formatTimeDelta(differenceInSeconds(timeEnded, timeStarted))}
        </div> */}
      </CardContent>
    </Card>
  );
};

export default TimeTakenCard;
