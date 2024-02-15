import { Tournament } from "@prisma/client";

export type Driver = {
  id: string;
  name: string;
  icon: string;
  full_image: string;
};

export type Wing = {
  id: string;
  name: string;
  icon: string;
};

export type Kart = {
  id: string;
  name: string;
  icon: string;
};

export type Wheel = {
  id: string;
  name: string;
  icon: string;
};

export type UserWithoutPassword = {
  id: string;
  name: string;
  email: string;
  password?: string;
  profilePicture?: string;
};

export type UserWithData = UserWithoutPassword & {
  invites: Tournament[];
  participatingIn: Tournament[];
};
