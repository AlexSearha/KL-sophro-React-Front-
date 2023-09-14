import { create } from 'zustand';
import { UserInformations, UserNavigation, UserState } from '../@types';

const useUser = create<UserState>()((set) => ({
  isConnected: false,
  appointments: [],
  selectionDate: [],
  UpdateIsConnected: (value) => set(() => ({ isConnected: value })),
  UpdateAppointments: (value) => set(() => ({ appointments: value })),
  SetSelectionDate: (value) => set(() => ({ selectionDate: value })),
}));

const useUserNavigation = create<UserNavigation>()((set) => ({
  folderEmplacement: '',
  UpdateFolderEmplacement: (value) => set(() => ({ folderEmplacement: value })),
}));

const useUserInformations = create<UserInformations>()((set) => ({
  userInfos: { id: null, firstname: '', lastname: '', email: '' },
  UpdateUserInfos: (value) =>
    set(() => ({
      userInfos: {
        id: value.id,
        firstname: value.firstname,
        lastname: value.lastname,
        email: value.email,
      },
    })),
}));
export { useUser, useUserNavigation, useUserInformations };
