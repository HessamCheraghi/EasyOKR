import { Button } from "@/components/ui/button";
import { useCurrentGoal } from "@/context/goalStore";

export function Main() {
  const currentGoals = useCurrentGoal();

  console.log(currentGoals?.id);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Goal Overview</h1>
      </div>
      {currentGoals ? <NoObjectiveMessage /> : <NoGoalsSelectedMessage />}
    </main>
  );
}

function NoObjectiveMessage() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no objectives!
        </h3>
        <p className="text-sm text-muted-foreground">
          You can add up to 10 objectives to each goal!
        </p>
        <Button className="mt-4">Add an Objective</Button>
      </div>
    </div>
  );
}
function NoGoalsSelectedMessage() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no goals selected!
        </h3>
        <p className="text-sm text-muted-foreground">
          select a goal to start your journey!
        </p>
      </div>
    </div>
  );
}
