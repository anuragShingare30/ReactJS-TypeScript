// Assigning dynamic keys to object

import { error } from "console";
import { get } from "http";

// creating a hashmap with object
interface objType {
  [id:number]:string;
}

const obj:objType = {};

// creating a hashmap with Record keyword 
const obj2: Record<number,string> = {};

const addValue = (_id:number,value:string)=>{
  obj[_id] = value;
}

const deleteValue = (_id:number) =>{
  delete obj[_id];
}
const getValue = (_id:number) =>{
  console.log(obj[_id]);
}

addValue(0,"anurag!!!");
getValue(0);
deleteValue(0);
getValue(0);