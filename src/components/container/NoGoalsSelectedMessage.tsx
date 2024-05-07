export function NoGoalsSelectedMessage() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no goals selected!
        </h3>
        <p className="text-sm text-muted-foreground">
          select a goal or create one to start your journey!
        </p>
      </div>
    </div>
  );
}
