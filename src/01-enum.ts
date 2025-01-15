export enum ROLES {
  ADMIN = "admin",
  SELLER ="seller",
  CUSTOMER = "customer"
}

export type User = {
  id: number;
  name: string;
  role: ROLES;
};

const aleUser: User = {
  id: 1,
  name: 'Alessandro',
  role: ROLES.ADMIN
};
