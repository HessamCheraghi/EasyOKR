import { create } from "zustand";
import { persist } from "zustand/middleware";

type Objective = {
  id: string;
  label: string;
  percentage: number;
};

type Goal = {
  id: string;
  label: string;
  objectives: Objective[];
};

type GoalState = {
  goals: Goal[];
  selectedGoalId: string;
};

const initialGoalStore = () => ({
  goals: [],
  selectedGoalId: "",
});

export const useGoalStore = create(
  persist<GoalState>(initialGoalStore, { name: "app-goals" })
);

export const addGoal = (newGoal: Goal) =>
  useGoalStore.setState((state) => ({ goals: [...state.goals, newGoal] }));

export const addObjective = (goalId: string, newObjective: Objective) =>
  useGoalStore.setState((state) => {
    const goal = state.goals.find((g) => g.id === goalId);
    if (!goal) return state;
    const newObjectives = [...goal.objectives, newObjective];
    goal.objectives = newObjectives;
    return {
      goals: [...state.goals, goal],
    };
  });

export const setSelectedGoal = (goalId: string) =>
  useGoalStore.setState(() => ({ selectedGoalId: goalId }));

export const useCurrentGoal = () => {
  const id = useGoalStore((state) => state.selectedGoalId);
  const goals = useGoalStore((state) => state.goals);

  return goals.find((g) => g.id === id);
};
