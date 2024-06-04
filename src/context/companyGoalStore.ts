import { create } from "zustand";
import { persist } from "zustand/middleware";
import { produce } from "immer";
import { v4 as uuid } from "uuid";

type CompanyGoal = {
  id: string;
  label: string;
};

type CompanyGoalStore = {
  allCompanyGoals: CompanyGoal[];
};

const initialCompanyGoalStore = (): CompanyGoalStore => ({
  allCompanyGoals: [
    {
      id: uuid(),
      label: "Overall Company Goal",
    },
  ],
});

const useCompanyGoalStore = create(
  persist<CompanyGoalStore>(initialCompanyGoalStore, {
    name: "company-goal-store",
  }),
);

export const useCompanyGoals = () =>
  useCompanyGoalStore((state) => state.allCompanyGoals);

export const addCompanyGoals = (newCompanyGoal: CompanyGoal) => {
  useCompanyGoalStore.setState(
    produce<CompanyGoalStore>((state) => {
      state.allCompanyGoals.push(newCompanyGoal);
    }),
  );
};

// export const updateCompanyGoals = (newCompanyGoal: CompanyGoal) => {
//   useCompanyGoalStore.setState(
//     produce<CompanyGoalStore>((state) => {
//       const companyGoalIndex = state.allCompanyGoals.findIndex(
//         (companyGoal) => companyGoal.id === newCompanyGoal.id,
//       );

//       if (companyGoalIndex > -1) {
//         state.allCompanyGoals[companyGoalIndex] = newCompanyGoal;
//       }
//     }),
//   );
// };
