import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

interface KeyResultProps {
  keyResult: KeyResult;
}

export function KeyResultItem({ keyResult }: KeyResultProps) {
  return (
    <div className="flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]">
      <Card className="rounded">
        <CardHeader>
          <CardTitle>{keyResult.label}</CardTitle>
          <CardDescription>
            {keyResult.percentage.toFixed(0)}% completed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditKeyResultDialog
            keyResult={keyResult}
            key={keyResult.label + keyResult.percentage}
          />
        </CardContent>
      </Card>
    </div>
  );
}

interface EditKeyResultDialogProps {
  keyResult: KeyResult;
}

function EditKeyResultDialog({ keyResult }: EditKeyResultDialogProps) {
  const uniqueId = React.useId();
  const [open, setOpen] = React.useState(false);
  const [label, setLabel] = React.useState(keyResult.label);
  const [percentage, setPercentage] = React.useState(keyResult.percentage);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateKeyResult({
      ...keyResult,
      label,
      percentage,
    });

    setLabel("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="mb-2">
          Edit Key Result
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
              <Label htmlFor={"key result" + uniqueId} className="text-left">
                Key Result
              </Label>
              <Input
                id={"key result" + uniqueId}
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
