import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addObjective } from "@/context/goalStore";
import { v4 as uuidv4 } from "uuid";

interface NewObjectiveProps {
  goalId: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NewObjective({ goalId, open, setOpen }: NewObjectiveProps) {
  const uniqueId = React.useId();
  const [objective, setObjective] = React.useState("");
  const handleSubmit = React.useCallback(
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      addObjective(goalId, {
        id: uuidv4(),
        label: objective,
        percentage: 0,
      });

      setObjective("");
      setOpen(false);
    },
    [goalId, objective, setOpen],
  );
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a new Objective</DialogTitle>
            <DialogDescription>
              You can add your objective here. choose a name for what you want
              to accomplish.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={"objective" + uniqueId} className="text-left">
                Objective
              </Label>
              <Input
                id={"objective" + uniqueId}
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Objective</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
