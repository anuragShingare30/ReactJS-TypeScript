// passing promises in an async function

import { error } from "console";
import { get } from "http";

interface User {
  id:number;
  firstName:string;
  lsatName:string;
}

const createThenGetUser = async 
  (
    createUser: () => Promise<string>,
    getUser: (id:number) => Promise<string>) : Promise<User> => {

    
    const userId: string = await createUser();

    const user = await getUser(userId);

    return user;

}

createThenGetUser()
  .then((res) => {
  console.log(res.gender);
})