// Assigning types to variables

import { get } from "http";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin?: boolean;
}

const defaultUser: User = {
  id: 10,
  firstName: "anurag",
  lastName: "shingare",
};

const getUserId = (user: User): string => {
  return `Hello!, ${user.firstName} here with id ${user.id}`;
};

console.log(getUserId(defaultUser));
