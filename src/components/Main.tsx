import { useSelectedObjective } from "@/context/objectiveStore";
import NoObjectivesSelectedMessage from "./main/NoObjectivesSelectedMessage";
import KeyResultList from "./main/KeyResultList";

export default function Main() {
  const selectedObjective = useSelectedObjective();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Goal Overview</h1>
      </div>
      {selectedObjective ? (
        <KeyResultList key={selectedObjective} />
      ) : (
        <NoObjectivesSelectedMessage />
      )}
    </main>
  );
}
