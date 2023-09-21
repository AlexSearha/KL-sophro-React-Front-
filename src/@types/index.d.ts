export interface TestProp {
  accessToken: string;
  refreshToken: string;
}

// ZUSTAND States
export interface UserStateProps {
  isConnected: boolean;
  isAppointmentUpdated: boolean;
  appointments?: AppointmentProps[];
  selectionDate?: string[];
  unavailabilityFrom: number | null;
  unavailabilityTo: number | null;
  specificUnavailabilitesDates: string[];
  UpdateIsConnected: (value: boolean) => void;
  UpdateIsAppointmentUpdated: () => void;
  UpdateAppointments: (value: AppointmentProps[]) => void;
  SetSelectionDate: (value: string[]) => void;
  SetUnavailabilityFrom: (value: number) => void;
  SetUnavailabilityTo: (value: number) => void;
  SetSpecificUnavailabilitesDates: (values: string[]) => void;
}

export interface UserInformationsProps {
  userInfos: {
    id: number | null;
    firstname?: string;
    lastname: string;
    email: string;
    student: boolean | null;
    address: string;
    phone_number: string;
    notification: boolean | null;
    newsletter: boolean | null;
    photo: string;
  };
  UpdateUserInfos: (value: any) => void;
}

export interface UserNavigationProps {
  folderEmplacement: string;
  isLoading: boolean;
  UpdateFolderEmplacement: (value: string) => void;
  UpdateIsLoading: () => void;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface UserProps {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  dateofbirth: string;
  address: string;
  photo: string;
  phone_number: string;
  student: boolean;
  newsletter: boolean;
  notification: boolean;
  confirmed: boolean;
  role_id: number;
  created_at: string;
  updated_at: string;
  appointments: Appointment[];
}

export interface AppointmentProps {
  id: number;
  date: string;
  status: string;
  online: boolean;
  reporting: string;
  exercices: string;
  paid: boolean;
  payment_due: string;
  payment_value: string;
  client_id: number;
  doctor_id: number;
  protocol_id: number;
  created_at: string;
  updated_at: string;
}

export interface UnavailableProps {
  id: number;
  date: string;
  days_of_week_from: number;
  days_of_week_to: number;
}

export interface ValueSubmitProps {
  appointmentDate: string;
  appointmentHour: string;
  comments: string;
}

// API GOUV ADDRESS
export interface APIaddressMainProps {
  features: APIaddressFeaturesProps[];
}

export interface APIaddressFeaturesProps {
  properties: APIaddressPropertiessProps;
}

export interface APIaddressPropertiessProps {
  label: string;
  id: string;
}
