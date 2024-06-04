import { create } from "zustand";
import { persist } from "zustand/middleware";
import { produce } from "immer";

export type KeyAction = {
  id: string;
  label: string;
  parentKeyResultId: string;
};

type KeyActionStore = { allKeyActions: KeyAction[] };

const initialKeyActionStore = () => ({
  allKeyActions: [],
});

const useKeyActionStore = create(
  persist<KeyActionStore>(initialKeyActionStore, { name: "key-action-store" }),
);

export const useKeyActions = (parentKeyResultId: string) => {
  return useKeyActionStore((keyActionList) =>
    keyActionList.allKeyActions.filter(
      (keyAction) => keyAction.parentKeyResultId === parentKeyResultId,
    ),
  );
};

export const addKeyAction = (newKeyAction: KeyAction) => {
  useKeyActionStore.setState(
    produce<KeyActionStore>((state) => {
      state.allKeyActions.push(newKeyAction);
    }),
  );
};

export const removeKeyAction = (toDeleteKeyAction: KeyAction) => {
  useKeyActionStore.setState(
    produce<KeyActionStore>((state) => {
      const toDeleteIndex = state.allKeyActions.findIndex(
        (keyAction) => keyAction.id === toDeleteKeyAction.id,
      );
      if (toDeleteIndex > -1) {
        state.allKeyActions.splice(toDeleteIndex, 1);
      }
    }),
  );
};

// export const updateKeyAction = (newKeyAction: KeyAction) => {
//   useKeyActionStore.setState(
//     produce<KeyActionStore>((state) => {
//       const keyActionIndex = state.allKeyActions.findIndex(
//         (keyAction) => keyAction.id === newKeyAction.id,
//       );

//       if (keyActionIndex > -1) {
//         state.allKeyActions[keyActionIndex] = newKeyAction;
//       }
//     }),
//   );
// };
