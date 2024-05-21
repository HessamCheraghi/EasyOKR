import React from "react";
import { v4 as uuid } from "uuid";
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
import { addKeyResult } from "@/context/keyResultStore";

interface NewKeyResultProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewKeyResult({ open, setOpen }: NewKeyResultProps) {
  const uniqueId = React.useId();
  const [keyResult, setKeyResult] = React.useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addKeyResult({
      id: uuid(),
      label: keyResult,
      percentage: 0,
    });

    setKeyResult("");
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a new Key Result</DialogTitle>
            <DialogDescription>
              You can add your keyResult here. choose a name for what you want
              to accomplish.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={"keyResult" + uniqueId} className="text-left">
                Objective
              </Label>
              <Input
                id={"keyResult" + uniqueId}
                value={keyResult}
                onChange={(e) => setKeyResult(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Key Result</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
