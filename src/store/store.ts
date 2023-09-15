import { create } from 'zustand';
import { UserInformations, UserNavigation, UserState } from '../@types';

const useUser = create<UserState>()((set) => ({
  isConnected: false,
  appointments: [],
  selectionDate: [],
  unavailabilityFrom: null,
  unavailabilityTo: null,
  specificUnavailabilitesDates: [],
  UpdateIsConnected: (value) => set(() => ({ isConnected: value })),
  UpdateAppointments: (value) => set(() => ({ appointments: value })),
  SetSelectionDate: (value) => set(() => ({ selectionDate: value })),
  SetUnavailabilityFrom: (value) => set(() => ({ unavailabilityFrom: value })),
  SetUnavailabilityTo: (value) => set(() => ({ unavailabilityTo: value })),
  SetSpecificUnavailabilitesDates: (value) =>
    set(() => ({ specificUnavailabilitesDates: value })),
}));

const useUserNavigation = create<UserNavigation>()((set) => ({
  folderEmplacement: '',
  UpdateFolderEmplacement: (value) => set(() => ({ folderEmplacement: value })),
}));

const useUserInformations = create<UserInformations>()((set) => ({
  userInfos: {
    id: null,
    firstname: '',
    lastname: '',
    email: '',
    student: null,
  },
  UpdateUserInfos: (value) =>
    set(() => ({
      userInfos: {
        id: value.id,
        firstname: value.firstname,
        lastname: value.lastname,
        email: value.email,
        student: value.student,
      },
    })),
}));
export { useUser, useUserNavigation, useUserInformations };
