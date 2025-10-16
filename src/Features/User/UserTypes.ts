export type UserState = {
  user: User | null;
  token: string | null;
};

export type User = {
  id: number;
  name: string;
};

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
