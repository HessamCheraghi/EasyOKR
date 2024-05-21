import { Button } from "@/components/ui/button";

interface NoKeyResultMessageProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NoKeyResultMessage({
  setOpen,
}: NoKeyResultMessageProps) {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no key results!
        </h3>
        <p className="text-sm text-muted-foreground">
          You can add up to 10 key results to each objective!
        </p>
        <Button className="mt-4" onClick={() => setOpen(true)}>
          Add a Key Result
        </Button>
      </div>
    </div>
  );
}
