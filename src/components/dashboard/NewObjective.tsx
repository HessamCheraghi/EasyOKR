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
import { addObjective } from "@/context/objectiveStore";
import { v4 as uuid } from "uuid";

export default function NewObjective() {
  const uniqueId = React.useId();
  const [open, setOpen] = React.useState(false);
  const [objective, setObjective] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addObjective({
      id: uuid(),
      label: objective,
    });
    setObjective("");
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="mb-2">
          Add new Objective
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a new Objective</DialogTitle>
            <DialogDescription>
              You can add your objectives here. choose a name for what you want
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
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
