// Inheriting interface properties 

import { error } from "console";
import { get } from "http";

interface userId {
  id:number
}

interface User extends userId {
  firstName:string;
  lastName:string;
}

interface IPost extends userId{
  title:string;
  post:string[];
}

interface IComment extends userId {
  comment:string;
}

const Post:IPost = {
  id:1,
  title:"ishq",
  post:["karna mana hai!!!"]
}

console.log(Post.post);