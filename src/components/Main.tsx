import { useSelectedObjective } from "@/context/objectiveStore";
import NoObjectivesSelectedMessage from "./main/NoObjectivesSelectedMessage";
import KeyResultList from "./main/KeyResultList";
import Overview from "./main/Overview";

export default function Main() {
  const selectedObjective = useSelectedObjective();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Overview />
      {selectedObjective ? (
        <KeyResultList key={selectedObjective} />
      ) : (
        <NoObjectivesSelectedMessage />
      )}
    </main>
  );
}
