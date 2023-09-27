import { create } from 'zustand';
import {
  UseDoctorProps,
  UserInformationsProps,
  UserNavigationProps,
  UserStateProps,
} from '../@types';

const useUser = create<UserStateProps>()((set) => ({
  isConnected: false,
  isAppointmentUpdated: false,
  appointments: [],
  selectionDate: [],
  unavailabilityFrom: null,
  unavailabilityTo: null,
  specificUnavailabilitesDates: [],
  UpdateIsConnected: (value) => set(() => ({ isConnected: value })),
  UpdateIsAppointmentUpdated: () =>
    set((state) => ({ isAppointmentUpdated: !state.isAppointmentUpdated })),
  UpdateAppointments: (value) => set(() => ({ appointments: value })),
  SetSelectionDate: (value) => set(() => ({ selectionDate: value })),
  SetUnavailabilityFrom: (value) => set(() => ({ unavailabilityFrom: value })),
  SetUnavailabilityTo: (value) => set(() => ({ unavailabilityTo: value })),
  SetSpecificUnavailabilitesDates: (value) =>
    set(() => ({ specificUnavailabilitesDates: value })),
}));

const useDoctor = create<UseDoctorProps>()((set) => ({
  allAppointments: [],
  UpdateAllAppointments: (value) => set(() => ({ allAppointments: value })),
}));

const useUserNavigation = create<UserNavigationProps>()((set) => ({
  folderEmplacement: '',
  isLoading: false,
  UpdateFolderEmplacement: (value) => set(() => ({ folderEmplacement: value })),
  UpdateIsLoading: () => set((state) => ({ isLoading: !state.isLoading })),
}));

const useUserInformations = create<UserInformationsProps>()((set) => ({
  userInfos: {
    id: null,
    firstname: '',
    lastname: '',
    email: '',
    student: null,
    address: '',
    phone_number: '',
    notification: null,
    newsletter: null,
    photo: '',
  },
  UpdateUserInfos: (value) =>
    set(() => ({
      userInfos: {
        id: value.id,
        firstname: value.firstname,
        lastname: value.lastname,
        email: value.email,
        student: value.student,
        address: value.address,
        phone_number: value.phone_number,
        notification: value.notification,
        newsletter: value.newsletter,
        photo: value.photo,
      },
    })),
}));
export { useUser, useUserNavigation, useUserInformations, useDoctor };
