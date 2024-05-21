import { KeyResult } from "@/context/keyResultStore";
import { calculatePercentage } from "@/lib/calculatePercentage";

export function calculateTotalValue(keyResults: KeyResult[]) {
  const totalCompletedKeyResults = keyResults
    .map((k) => calculatePercentage(k.base, k.target, k.currentValue) >= 100)
    .reduce((pre, curr) => {
      if (curr) pre++;
      return pre;
    }, 0);

  const totalPercentage = (totalCompletedKeyResults / keyResults.length) * 100;

  if (isNaN(totalPercentage)) return "";

  return `(${totalPercentage}%)`;
}
