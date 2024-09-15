import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

type SelectedProjectsType =
  | 'island'
  | 'trophy'
  | 'terrain'
  | 'boat'
  | 'marble'
  | 'string'
  | null;

interface ExperienceState {
  selected: SelectedProjectsType;
  select: (arg: SelectedProjectsType) => void;
  stage: number;
  incStage: () => void;
  decStage: () => void;
}
const useExperienceStore = create<ExperienceState>((set) => {
  return {
    selected: null,
    select: (project: SelectedProjectsType) => {
      return set((state) => ({ selected: project }));
    },
    stage: 0,
    incStage: () => {
      return set((state) => ({ stage: state.stage + 1 }));
    },
    decStage: () => {
      return set((state) => ({ stage: state.stage - 1 }));
    },
  };
});

export default useExperienceStore;
