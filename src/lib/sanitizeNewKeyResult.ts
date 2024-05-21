import { KeyResult } from "@/context/keyResultStore";

type NewKeyResult = Omit<KeyResult, "parentObjectiveId">;

export function sanitizeNewKeyResult(keyResult: NewKeyResult) {
  if (keyResult.type === "todo") {
    const sanitized: NewKeyResult = {
      ...keyResult,
      base: 0,
      currentValue: 0,
      target: 100,
    };
    return sanitized;
  }

  return keyResult;
}
