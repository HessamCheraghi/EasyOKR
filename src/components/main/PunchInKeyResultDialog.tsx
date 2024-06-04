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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { KeyResult, updateKeyResult } from "@/context/keyResultStore";
import { Checkbox } from "@/components/ui/checkbox";

interface PunchInKeyResultDialogProps {
  keyResult: KeyResult;
}

export default function PunchInKeyResultDialog({
  keyResult,
}: PunchInKeyResultDialogProps) {
  const uniqueId = React.useId();
  const [open, setOpen] = React.useState(false);

  const [currentValue, setCurrentValue] = React.useState(
    keyResult.currentValue,
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateKeyResult({
      ...keyResult,
      currentValue,
    });

    setOpen(false);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      updateKeyResult({
        ...keyResult,
        currentValue,
      });
    }
    setOpen(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="default" className="mb-2">
          Punch In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Punch In Objective</DialogTitle>
            <DialogDescription>
              You can punch in your key results here.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {keyResult.type === "metric" && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor={"edit-current-value" + uniqueId}
                    className="text-left"
                  >
                    CurrentValue
                  </Label>
                  <Input
                    id={"edit-current-value" + uniqueId}
                    value={currentValue}
                    onChange={(e) =>
                      setCurrentValue(Number.parseInt(e.target.value || "0"))
                    }
                    className="col-span-3"
                    required
                  />
                </div>
              </>
            )}

            {keyResult.type === "todo" && (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={"edit-check" + uniqueId}
                  onCheckedChange={(checked) => {
                    setCurrentValue(checked ? 100 : 0);
                  }}
                  checked={currentValue >= 100}
                />
                <label
                  htmlFor={"edit-check" + uniqueId}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mark this key result as done!
                </label>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
