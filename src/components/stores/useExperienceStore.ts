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
}

const useExperienceStore = create<ExperienceState>((set) => {
  return {
    selected: null,
    select: (project: SelectedProjectsType) =>
      set((state) => ({ selected: project })),
  };
});

export default useExperienceStore;
