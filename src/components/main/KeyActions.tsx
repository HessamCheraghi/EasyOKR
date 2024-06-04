import React from "react";
import { v4 as uuid } from "uuid";
import { Trash2 } from "lucide-react";
import {
  addKeyAction,
  removeKeyAction,
  useKeyActions,
} from "@/context/keyActionStore";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface KeyActionProps {
  parentKeyResultId: string;
}

export default function KeyActions({ parentKeyResultId }: KeyActionProps) {
  const uniqueId = React.useId();
  const [newKeyAction, setNewKeyAction] = React.useState("");

  const keyActions = useKeyActions(parentKeyResultId);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addKeyAction({
      id: uuid(),
      label: newKeyAction,
      parentKeyResultId,
    });

    setNewKeyAction("");
  };

  return (
    <div className="">
      <p className="text-sm text-muted-foreground">List of Key Actions:</p>
      <ul className="pb-4">
        {keyActions.map((ka) => (
          <li key={ka.id} className="border-b text-sm font-bold">
            <div className="flex items-center justify-between gap-2 pl-2">
              {ka.label}
              <Button
                onClick={() => removeKeyAction(ka)}
                size="icon"
                variant="ghost"
              >
                <Trash2 className="size-5" />
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-8 items-center gap-2">
        <Label
          htmlFor={"key-action" + uniqueId}
          className="col-span-2 text-left"
        >
          New Key Action
        </Label>
        <Input
          id={"key-action" + uniqueId}
          className="col-span-5"
          value={newKeyAction}
          onChange={(e) => setNewKeyAction(e.target.value)}
        />
        <Button type="button" onClick={handleAdd} className="px-1">
          Add
        </Button>
      </div>
    </div>
  );
}
