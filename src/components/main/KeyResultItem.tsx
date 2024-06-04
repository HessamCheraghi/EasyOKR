import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { KeyResult } from "@/context/keyResultStore";
import { calculatePercentage } from "@/lib/calculatePercentage";
import EditKeyResultDialog from "./EditKeyResultDialog";
import PunchInKeyResultDialog from "./PunchInKeyResultDialog";

interface KeyResultProps {
  keyResult: KeyResult;
}

export function KeyResultItem({ keyResult }: KeyResultProps) {
  return (
    <div className="flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]">
      <Card className="flex h-full flex-col rounded">
        <CardHeader>
          <CardTitle className="">{keyResult.label}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-col gap-2">
            {keyResult.type === "metric" && (
              <>
                <div className="flex gap-2">
                  <p className="font-medium">Base Value:</p>
                  <p className="">{keyResult.base.toFixed(0)}</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-medium">Target Value:</p>
                  <p className="">{keyResult.target.toFixed(0)}</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-medium">Current Value:</p>
                  <p className="">
                    {calculatePercentage(
                      keyResult.base,
                      keyResult.target,
                      keyResult.currentValue,
                    ).toFixed(0)}
                    % completed
                  </p>
                </div>
              </>
            )}
            {keyResult.type === "todo" && (
              <>
                <div className="flex gap-2">
                  <p className="font-medium">Current Value:</p>
                  <p className="">
                    {keyResult.currentValue.toFixed(0)}% completed
                  </p>
                </div>
              </>
            )}
            <div className="flex gap-2">
              <p className="font-medium">Owner:</p>
              <p className="">{keyResult.owner}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-start gap-4">
          <PunchInKeyResultDialog
            keyResult={keyResult}
            key={keyResult.id + "punch-in"}
          />
          <EditKeyResultDialog
            keyResult={keyResult}
            key={keyResult.id + "edit"}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
