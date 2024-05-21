import { create } from "zustand";
import { produce } from "immer";

type Objective = {
  id: string;
  label: string;
};

type ObjectiveStore = { allObjectives: Objective[]; selected: string };

const initialObjectiveStore = () => ({ allObjectives: [], selected: "" });

const useObjectiveStore = create<ObjectiveStore>(initialObjectiveStore);

export const useObjectives = () =>
  useObjectiveStore((state) => state.allObjectives);

export const getObjectives = () => useObjectiveStore.getState().allObjectives;

export const addObjective = (newObjective: Objective) =>
  useObjectiveStore.setState(
    produce<ObjectiveStore>((state) => {
      state.allObjectives.push(newObjective);
    }),
  );

export const useSelectedObjective = () =>
  useObjectiveStore((state) => state.selected);

export const getSelectedObjective = () => useObjectiveStore.getState().selected;

export const setSelectedObjective = (newSelected: string) => {
  useObjectiveStore.setState(
    produce<ObjectiveStore>((state) => {
      state.selected = newSelected;
    }),
  );
};
