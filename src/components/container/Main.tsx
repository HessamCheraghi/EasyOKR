import { useSelectedGoal } from "@/context/goalStore";
import { NoGoalsSelectedMessage } from "./NoGoalsSelectedMessage";
import { ObjectiveList } from "./ObjectiveList";

export function Main() {
  const currentGoal = useSelectedGoal();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Goal Overview</h1>
      </div>
      {currentGoal ? (
        <ObjectiveList key={currentGoal.id} goalId={currentGoal.id} />
      ) : (
        <NoGoalsSelectedMessage />
      )}
    </main>
  );
}
