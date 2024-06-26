import { create } from "zustand";
import { persist } from "zustand/middleware";
import { produce } from "immer";
import { getSelectedObjective } from "./objectiveStore";

export type KeyResult = {
  id: string;
  label: string;
  type: "todo" | "metric";
  base: number;
  target: number;
  currentValue: number;
  owner: string;
  parentObjectiveId: string;
};

type KeyResultStore = { allKeyResults: KeyResult[] };
const initialKeyResultStore = () => ({
  allKeyResults: [],
});

const useKeyResultStore = create(
  persist<KeyResultStore>(initialKeyResultStore, { name: "key-result-store" }),
);

export const useKeyResults = () => {
  const parentObjectiveId = getSelectedObjective();

  return useKeyResultStore((keyResultList) =>
    keyResultList.allKeyResults.filter(
      (keyResult) => keyResult.parentObjectiveId === parentObjectiveId,
    ),
  );
};

export const addKeyResult = (
  newKeyResult: Omit<KeyResult, "parentObjectiveId">,
) => {
  const parentObjectiveId = getSelectedObjective();
  useKeyResultStore.setState(
    produce<KeyResultStore>((state) => {
      state.allKeyResults.push({ ...newKeyResult, parentObjectiveId });
    }),
  );
};

export const updateKeyResult = (newKeyResult: KeyResult) => {
  useKeyResultStore.setState(
    produce<KeyResultStore>((state) => {
      const keyResultIndex = state.allKeyResults.findIndex(
        (keyResult) => keyResult.id === newKeyResult.id,
      );
      if (keyResultIndex > -1) {
        state.allKeyResults[keyResultIndex] = newKeyResult;
      }
    }),
  );
};
