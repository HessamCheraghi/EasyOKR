import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addGoal } from "@/context/goalStore";
import { v4 as uuidv4 } from "uuid";

export function NewGoal() {
  const [open, setOpen] = React.useState(false);
  const [goal, setGoal] = React.useState("");
  const handleSubmit = React.useCallback(
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      addGoal({
        id: uuidv4(),
        label: goal,
        objectives: [],
      });

      setGoal("");
      setOpen(false);
    },
    [goal]
  );
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="mb-2">
          Add new Goal
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a new Goal</DialogTitle>
            <DialogDescription>
              You can add your goals here. choose a name for what you want to
              accomplish.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="goal" className="text-left">
                Goal
              </Label>
              <Input
                id="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="col-span-3"
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
