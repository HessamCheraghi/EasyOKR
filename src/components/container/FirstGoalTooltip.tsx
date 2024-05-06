import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGoalStore } from "@/context/goalStore";

export function FirstGoalTooltip() {
  const hasGoals = useGoalStore((state) => !!state.goals.length);
  if (hasGoals) return null;
  return (
    <div className="mt-auto md:p-4">
      <Card>
        <CardHeader className="md:pt-0 md:p-4">
          <CardTitle>You have no goals!</CardTitle>
          <CardDescription>
            To start, click on <span className="font-bold">Add New Goal</span>{" "}
            to add your first goal.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
