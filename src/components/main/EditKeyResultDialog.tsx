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

interface EditKeyResultDialogProps {
  keyResult: KeyResult;
}

export default function EditKeyResultDialog({
  keyResult,
}: EditKeyResultDialogProps) {
  const uniqueId = React.useId();
  const [open, setOpen] = React.useState(false);

  // Todo: fix this mess ...
  const [label, setLabel] = React.useState(keyResult.label);
  const [base, setBase] = React.useState(keyResult.base);
  const [target, setTarget] = React.useState(keyResult.target);
  const [currentValue, setCurrentValue] = React.useState(
    keyResult.currentValue,
  );
  const [owner, setOwner] = React.useState(keyResult.owner);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateKeyResult({
      ...keyResult,
      label,
      base,
      target,
      currentValue,
      owner,
    });

    setOpen(false);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      updateKeyResult({
        ...keyResult,
        label,
        base,
        target,
        currentValue,
        owner,
      });
    }
    setOpen(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="default" className="mb-2">
          Update Key Result
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Objective</DialogTitle>
            <DialogDescription>
              You can modify your key results here. change the name or the
              percentage of the current key result.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={"edit-label" + uniqueId} className="text-left">
                Key Result
              </Label>
              <Input
                id={"edit-label" + uniqueId}
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="col-span-3"
                required
              />
            </div>

            {keyResult.type === "metric" && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={"edit-base" + uniqueId} className="text-left">
                    Base
                  </Label>
                  <Input
                    id={"edit-base" + uniqueId}
                    value={base}
                    onChange={(e) =>
                      setBase(Number.parseInt(e.target.value || "0"))
                    }
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor={"edit-target" + uniqueId}
                    className="text-left"
                  >
                    Target
                  </Label>
                  <Input
                    id={"edit-target" + uniqueId}
                    value={target}
                    onChange={(e) =>
                      setTarget(Number.parseInt(e.target.value || "0"))
                    }
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor={"edit-current-value" + uniqueId}
                    className="text-left"
                  >
                    CurrentValue
                  </Label>
                  <Input
                    id={"edit-base" + uniqueId}
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

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={"edit-owner" + uniqueId} className="text-left">
                Owner
              </Label>
              <Input
                id={"edit-owner" + uniqueId}
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                className="col-span-3"
                required
              />
            </div>

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
