// assigning variable as union types

import { get } from "http";

type userRole = {
  id: number;
  firstName: string;
  role:"admin"|"user"|"guest"
}

// we can only select one of the three roles
const userInfo:userRole = {
  id:1,
  firstName:"anurag",
  role:"user"
}



// Narrowing down union type

// use typeof method to narrow down union type
const unionValue = (value : number | {value:number})=>{
  if(typeof(value) === "object"){
    console.log(value.value);
    return;
  }
  console.log(value);
  return;
}

unionValue(200);
unionValue(2032);