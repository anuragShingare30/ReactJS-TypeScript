// Typing errors in try-catch block

import { error } from "console";
import { get } from "http";


const tryCatch = (state : "Fail"|"Succeed")=>{
  try{
    if(state === "Fail"){
      throw new Error("Error!!!");
    }
  }catch(e){
    console.log((e as Error).message);
  }
}