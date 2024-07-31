import { create } from 'zustand';

interface StoreState {
  userID: number;
  userName: string;
  editUserName: (newName: string) => void;
}

const useUserStore = create<StoreState>(set => ({
  userID: Date.now(),
  userName: '이종현',
  editUserName: (newName: string) =>
    set(state => ({
      ...state,
      userName: newName
    }))
}));

export default useUserStore;
