export type UserState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  tokenObject: any | null;
  isAuth: boolean;
  loginStep: number;
};

export type User = {
  id: number;
  name: string;
};
