import { create } from 'zustand';
import { UserInformations, UserNavigation, UserState } from '../@types';

const useUser = create<UserState>()((set) => ({
  isConnected: false,
  UpdateIsConnected: (value) => set(() => ({ isConnected: value })),
}));

const useUserNavigation = create<UserNavigation>()((set) => ({
  folderEmplacement: '',
  UpdateFolderEmplacement: (value) => set(() => ({ folderEmplacement: value })),
}));

const useUserInformations = create<UserInformations>()((set) => ({
  userInfos: { id: null, firstname: '', lastname: '', email: '' },
  UpdateUserInfos: () => set(() => ({ userInfos })),
}));
export { useUser, useUserNavigation, useUserInformations };
