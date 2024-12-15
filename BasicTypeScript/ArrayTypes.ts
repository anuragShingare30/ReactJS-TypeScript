// working with arrays and assigning types to arrays

import { get } from "http";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post[];
}

interface Post { 
  id:number,
  title:string,
}

const defaultUser:User = {
  id:100,
  firstName:"anurag",
  lastName:"shingare",
  role:"super-admin",
  posts:[
    {id:1,title:"post1"},
    {id:2,title:"post2"}
  ]
}

const getUserInfo = (user:User)=>{
  return user.posts.map((post)=>{
    return post.title;
  });
}

console.log(getUserInfo(defaultUser));