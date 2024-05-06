import {
  useGoalStore,
  setSelectedGoal,
  useCurrentGoal,
} from "@/context/goalStore";
import { Button } from "../ui/button";
import { NewGoal } from "./NewGoal";

export function GoalList() {
  const goals = useGoalStore((state) => state.goals);
  const currentGoals = useCurrentGoal();

  return (
    <div className="flex-1">
      <nav className="grid items-start p-2 text-sm font-medium lg:px-4 gap-2">
        <NewGoal />
        {goals.map((goal) => (
          <Button
            key={goal.id}
            variant={goal.id === currentGoals?.id ? "secondary" : "ghost"}
            className="justify-start"
            onClick={() => setSelectedGoal(goal.id)}
          >
            {goal.label}
          </Button>
        ))}
      </nav>
    </div>
  );
}
