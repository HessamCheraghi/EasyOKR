import { Button } from "@/components/ui/button";
import NewObjective from "./NewObjective";
import {
  useObjectives,
  setSelectedObjective,
  useSelectedObjective,
} from "@/context/objectiveStore";

export default function ObjectiveList() {
  const objectives = useObjectives();
  const selectedId = useSelectedObjective();

  return (
    <div className="flex-1">
      <nav className="grid items-start gap-2 p-2 text-sm font-medium lg:px-4">
        <NewObjective />
        {objectives.map((objective) => (
          <Button
            key={objective.id}
            variant={objective.id === selectedId ? "secondary" : "ghost"}
            className="justify-start"
            onClick={() => setSelectedObjective(objective.id)}
          >
            {objective.label}
          </Button>
        ))}
      </nav>
    </div>
  );
}
