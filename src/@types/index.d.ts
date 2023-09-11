export interface TestProp {
  accessToken: string;
  refreshToken: string;
}

// ZUSTAND States
export interface UserState {
  isConnected: boolean;
  appointments?: AppointmentProps[];
  UpdateIsConnected: (value: boolean) => void;
  UpdateAppointments: (value: AppointmentProps[]) => void;
}

export interface UserInformations {
  userInfos: {
    id: number | null;
    firstname?: string | null;
    lastname: string;
    email: string;
  };
  UpdateUserInfos: (value: any) => void;
}

export interface UserNavigation {
  folderEmplacement: string;
  UpdateFolderEmplacement: (value: string) => void;
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
  paiment_due: string;
  paiment_value: string;
  client_id: number;
  doctor_id: number;
  protocol_id: number;
  created_at: string;
  updated_at: string;
}

export interface DateCalendarProps {
  $D: number;
  $H: number;
  $M: number;
  $W: number;
  $d: Date;
  $ms: number;
  $y: number;
}
