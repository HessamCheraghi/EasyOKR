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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sanitizeNewKeyResult } from "@/lib/sanitizeNewKeyResult";

interface NewKeyResultProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewKeyResult({ open, setOpen }: NewKeyResultProps) {
  const uniqueId = React.useId();

  // Todo: fix this mess ...
  const [label, setLabel] = React.useState("");
  const [type, setType] = React.useState<"todo" | "metric">("todo");
  const [base, setBase] = React.useState(0);
  const [target, setTarget] = React.useState(100);
  const [owner, setOwner] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addKeyResult(
      sanitizeNewKeyResult({
        id: uuid(),
        label,
        type,
        base,
        target,
        currentValue: base,
        owner,
      }),
    );

    setLabel("");
    setType("todo");
    setBase(0);
    setTarget(100);
    setOwner("");
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
              <Label htmlFor={"label" + uniqueId} className="text-left">
                Key Result
              </Label>
              <Input
                id={"label" + uniqueId}
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={"keyResult" + uniqueId} className="text-left">
                Type
              </Label>
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-1">
                  <RadioGroupItem
                    value="todo"
                    id={"todo" + uniqueId}
                    onClick={() => setType("todo")}
                    checked={type === "todo"}
                    required
                  />
                  <Label htmlFor={"todo" + uniqueId}>Todo</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem
                    value="metric"
                    id={"metric" + uniqueId}
                    onClick={() => setType("metric")}
                    checked={type === "metric"}
                    required
                  />
                  <Label htmlFor={"metric" + uniqueId}>Metric</Label>
                </div>
              </RadioGroup>
            </div>
            {type === "metric" && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={"base" + uniqueId} className="text-left">
                    Base
                  </Label>
                  <Input
                    id={"base" + uniqueId}
                    value={base}
                    onChange={(e) =>
                      setBase(Number.parseInt(e.target.value || "0"))
                    }
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={"target" + uniqueId} className="text-left">
                    Target
                  </Label>
                  <Input
                    id={"target" + uniqueId}
                    value={target}
                    onChange={(e) =>
                      setTarget(Number.parseInt(e.target.value || "0"))
                    }
                    className="col-span-3"
                    required
                  />
                </div>
              </>
            )}

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={"owner" + uniqueId} className="text-left">
                Owner
              </Label>
              <Input
                id={"owner" + uniqueId}
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                className="col-span-3"
                required
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
