import { create } from 'zustand';
import { UserState } from '../@types';

const useUser = create<UserState>()((set) => ({
  isConnected: false,
  UpdateIsConnected: (value) => set(() => ({ isConnected: value })),
}));

export default useUser;
