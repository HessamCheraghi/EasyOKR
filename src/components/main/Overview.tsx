import { useKeyResults } from "@/context/keyResultStore";
import { calculateTotalValue } from "@/lib/calculateTotalValue";

export default function Overview() {
  const keyResults = useKeyResults();
  calculateTotalValue(keyResults);

  return (
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">
        Objective Overview {calculateTotalValue(keyResults)}
      </h1>
    </div>
  );
}
