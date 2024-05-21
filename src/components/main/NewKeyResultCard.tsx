import React from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";
import { useKeyResults } from "@/context/keyResultStore";

interface NewObjectiveCardProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function NewKeyResultCard({ setOpen }: NewObjectiveCardProps) {
  const keyResults = useKeyResults();

  if (keyResults.length > 9) return null;
  return (
    <div className="flex flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]">
      <Card className="flex flex-1 items-center justify-center rounded border-2 border-dashed p-2">
        <CardHeader>
          <CardDescription>
            <Button onClick={() => setOpen(true)}>Add more Key Results</Button>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
