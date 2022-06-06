export const EMPTY_USER: User = {
  username: undefined,
  password: undefined,
};

export interface User {
  username: string;
  password: string;
}
