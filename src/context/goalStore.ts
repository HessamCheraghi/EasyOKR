import { produce } from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Objective = {
  id: string;
  label: string;
  percentage: number;
};

export type Goal = {
  id: string;
  label: string;
  objectives: Objective[];
};

export type GoalState = {
  goals: Goal[];
  selectedGoalId: string;
};

const initialGoalStore = () => ({
  goals: [],
  selectedGoalId: "",
});

export const useGoalStore = create(
  persist<GoalState>(initialGoalStore, { name: "app-goals" }),
);

export const useGoals = () => {
  return useGoalStore((state) => state.goals);
};

export const addGoal = (newGoal: Goal) =>
  useGoalStore.setState((state) => ({ goals: [...state.goals, newGoal] }));

export const useObjectives = (goalId: string) => {
  const goals = useGoals();
  const selectedGoal = goals.find((g) => g.id === goalId);
  if (!selectedGoal) return [];
  return selectedGoal.objectives;
};

export const addObjective = (goalId: string, newObjective: Objective) =>
  useGoalStore.setState((state) =>
    produce(state, (draftState) => {
      const goal = draftState.goals.find((g) => g.id === goalId);
      if (goal) goal.objectives.push(newObjective);
    }),
  );

export const updateObjective = (
  goalId: string | void,
  newObjective: Objective,
) =>
  useGoalStore.setState((state) =>
    produce(state, (draftState) => {
      const goal = draftState.goals.find((g) => g.id === goalId);
      if (!goal) return;
      const objectiveIndex = goal.objectives.findIndex(
        (o) => o.id === newObjective.id,
      );
      goal.objectives[objectiveIndex] = newObjective;
    }),
  );

export const setSelectedGoal = (goalId: string) =>
  useGoalStore.setState(() => ({ selectedGoalId: goalId }));

export const useSelectedGoal = () => {
  const [selectedId, goals] = useGoalStore((state) => [
    state.selectedGoalId,
    state.goals,
  ]);

  const selectedGoal = goals.find((g) => g.id === selectedId);

  return selectedGoal;
};
