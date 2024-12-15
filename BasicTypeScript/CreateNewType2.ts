// Creating New Types Based on Others type
// We have created new type by extracting some properties from other type

import { error } from "console";
import { get } from "http";

interface User{
  id:number;
  firstName:string;
  lastName:string;
}

// Omit id from User
type onlyTypeOmit = Omit<User,"id">;

// Pick firstName and lastName from User
type onlyTypePick = Pick<User, "firstName"|"lastName">;

const obj:onlyTypeOmit = {
  firstName:"anurag",
  lastName:"kumar"
};