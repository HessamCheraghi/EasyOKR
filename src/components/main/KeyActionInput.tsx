import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface KeyActionInputProps {
  keyAction: string[];
  setKeyAction: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function KeyActionInput({
  keyAction,
  setKeyAction,
}: KeyActionInputProps) {
  const uniqueId = React.useId();
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <Label htmlFor={"keyAction" + uniqueId} className="text-left">
        Key Action
      </Label>
      <div className="col-span-3 flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          <Input
            id={"keyAction" + uniqueId}
            className="col-span-2"
            ref={inputRef}
            disabled={keyAction.length > 4}
          />
          <Button
            type="button"
            onClick={() => {
              if (!inputRef.current) return;
              setKeyAction((pre) => [...pre, inputRef.current?.value || ""]);
              inputRef.current.value = "";
            }}
            disabled={keyAction.length > 4}
          >
            Add
          </Button>
        </div>
        <p className="text-sm font-medium">{keyAction.join(", ")}</p>
      </div>
    </>
  );
}
