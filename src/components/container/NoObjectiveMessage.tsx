import { Button } from "@/components/ui/button";

interface NoObjectiveMessageProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NoObjectiveMessage({ setOpen }: NoObjectiveMessageProps) {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no objectives!
        </h3>
        <p className="text-sm text-muted-foreground">
          You can add up to 10 objectives to each goal!
        </p>
        <Button className="mt-4" onClick={() => setOpen(true)}>
          Add an Objective
        </Button>
      </div>
    </div>
  );
}
