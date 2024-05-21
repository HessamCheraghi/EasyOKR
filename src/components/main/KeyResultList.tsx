import React from "react";
import NoKeyResultMessage from "./NoKeyResultMessage";
import NewKeyResult from "./NewKeyResult";
import { useKeyResults } from "@/context/keyResultStore";
import { KeyResultItem } from "./KeyResultItem";
import NewKeyResultCard from "./NewKeyResultCard";

export default function KeyResultList() {
  const keyResults = useKeyResults();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {!keyResults.length ? (
        <NoKeyResultMessage setOpen={setOpen} />
      ) : (
        <div className="flex-1 items-stretch justify-start gap-4 rounded-lg border border-dashed p-2 shadow-sm">
          <div className="flex w-full flex-wrap items-stretch justify-start">
            {keyResults.map((k) => (
              <KeyResultItem key={k.id} keyResult={k} />
            ))}
            <NewKeyResultCard setOpen={setOpen} />
          </div>
        </div>
      )}
      <NewKeyResult open={open} setOpen={setOpen} />
    </>
  );
}
