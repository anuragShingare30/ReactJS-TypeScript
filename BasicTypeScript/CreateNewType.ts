// Combining types/inteface to create new types/interface

import { error } from "console";
import { get } from "http";

interface userId {
  id:number;
}

interface User extends userId {
  firtsName: string;
  lastName:string;
}

interface Post extends userId {
  title:string;
  body:string;
}

// either we can use interface extends keyword
interface objType extends User,Post {};
// or we can use & to create new type
type obj2Type = User & Post;

const obj = ():objType => {
  return {
    id:1,
    firtsName:"anurag",
    lastName:"shingare",
    title:"ishq",
    body:"ishq"
  }
}

console.log(obj().id);