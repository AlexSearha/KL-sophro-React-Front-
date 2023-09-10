export interface TestProp {
  accessToken: string;
  refreshToken: string;
}

// ZUSTAND States
export interface UserState {
  isConnected: boolean;
  UpdateIsConnected: (value: boolean) => void;
}
