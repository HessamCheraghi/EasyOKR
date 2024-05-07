import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  useSelectedGoal,
  updateObjective,
  Objective,
} from "@/context/goalStore";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface ObjectiveProps {
  objective: Objective;
}

export function ObjectiveItem({ objective }: ObjectiveProps) {
  return (
    <div className="flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]">
      <Card className="rounded">
        <CardHeader>
          <CardTitle>{objective.label}</CardTitle>
          <CardDescription>
            {objective.percentage.toFixed(0)}% completed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditObjectiveDialog
            objective={objective}
            key={objective.label + objective.percentage}
          />
        </CardContent>
      </Card>
    </div>
  );
}

interface EditObjectiveDialogProps {
  objective: Objective;
}

export function EditObjectiveDialog({ objective }: EditObjectiveDialogProps) {
  const currentGoal = useSelectedGoal();
  const uniqueId = React.useId();
  const [open, setOpen] = React.useState(false);
  const [label, setLabel] = React.useState(objective.label);
  const [percentage, setPercentage] = React.useState(objective.percentage);
  const handleSubmit = React.useCallback(
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      updateObjective(currentGoal?.id, {
        id: objective.id,
        label,
        percentage,
      });

      setLabel("");
      setOpen(false);
    },
    [currentGoal?.id, label, objective.id, percentage],
  );

  if (!currentGoal) return null;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="mb-2">
          Edit Objective
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Objective</DialogTitle>
            <DialogDescription>
              You can modify your objectives here. change the name or the
              percentage of the current objective.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={"objective" + uniqueId} className="text-left">
                Objective
              </Label>
              <Input
                id={"objective" + uniqueId}
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={"percentage" + uniqueId} className="text-left">
                Percentage
              </Label>
              <Input
                id={"percentage" + uniqueId}
                value={percentage}
                onChange={(e) => setPercentage(Number.parseInt(e.target.value))}
                className="col-span-3"
                type="number"
                min={0}
                max={100}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
