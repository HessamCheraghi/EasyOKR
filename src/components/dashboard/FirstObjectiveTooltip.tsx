import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useObjectives } from "@/context/objectiveStore";

export default function FirstObjectiveTooltip() {
  const objectives = useObjectives();
  if (objectives.length) return null;
  return (
    <div className="mt-auto md:p-4">
      <Card>
        <CardHeader className="md:p-4">
          <CardTitle>You have no objectives!</CardTitle>
          <CardDescription>
            To start, click on{" "}
            <span className="font-bold">Add New Objective</span> to add your
            first objective.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
