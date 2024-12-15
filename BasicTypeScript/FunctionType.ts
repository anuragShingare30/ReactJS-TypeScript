// function return type annotations

import { get } from "http";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  // posts: Array<Post>;
  posts:Post[];
}

interface Post {
  id:number,
  title:string,
}

const makeUser = ():User =>{
  return {
    id:1,
    firstName:"anurag",
    lastName:"shingare",
    role:"super-admin",
    posts:[{id:1,title:"go to gym"}]
  };
}

console.log(makeUser());