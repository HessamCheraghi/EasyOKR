import React from "react";
import { useObjectives } from "@/context/goalStore";
import { NoObjectiveMessage } from "./NoObjectiveMessage";
import { NewObjective } from "./NewObjective";
import { NewObjectiveCard } from "./NewObjectiveCard";
import { ObjectiveItem } from "./ObjectiveItem";

interface ObjectiveListProps {
  goalId: string;
}

export function ObjectiveList({ goalId }: ObjectiveListProps) {
  const objectives = useObjectives(goalId);
  const [open, setOpen] = React.useState(false);

  console.log(objectives);

  if (objectives.length < 1)
    return (
      <>
        <NoObjectiveMessage setOpen={setOpen} />
        <NewObjective goalId={goalId} open={open} setOpen={setOpen} />
      </>
    );

  return (
    <>
      <div className="flex-1 items-start justify-start gap-4 rounded-lg border border-dashed p-2 shadow-sm">
        <div className="flex w-full flex-wrap items-stretch justify-start">
          {objectives.map((o) => (
            <ObjectiveItem key={o.id} objective={o} />
          ))}
          <NewObjectiveCard setOpen={setOpen} />
        </div>
      </div>
      <NewObjective goalId={goalId} open={open} setOpen={setOpen} />
    </>
  );
}
