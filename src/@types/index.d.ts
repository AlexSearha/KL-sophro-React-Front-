export interface TestProp {
  accessToken: string;
  refreshToken: string;
}

// ZUSTAND States
export interface UserState {
  isConnected: boolean;
  UpdateIsConnected: (value: boolean) => void;
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
