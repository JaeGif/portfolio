import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

type SelectedProjectsType =
  | 'island'
  | 'trophy'
  | 'terrain'
  | 'boat'
  | 'marble'
  | null;

interface ExperienceState {
  selected: SelectedProjectsType;
}

const useExperienceStore = create<ExperienceState>(() => {
  return {
    selected: null,
  };
});

export default useExperienceStore;
