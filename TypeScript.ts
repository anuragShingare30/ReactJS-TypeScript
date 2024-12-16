// declaration
let num : number = 12
let word: string = "hello";


// UNION TYPES
let union : string | number;
union = 12
union = "anu"


// only out off this value is allowed for role variable
let role:"admin"|"user"|"super-admin";


// ARRAY
let numsArray : string[] = ["hello","rohit","bhai"] 

interface userInfo {
    id:number;
    title:string;
}

const userInfoArr:Array<userInfo> = [
    {
        id:1,
        title:"let"
    },
    {
        id:2,
        title:"have"
    }
]




// FUNCTIONS

let TypeScript = async ():Promise<string> => {
    return "hello";
} 

let sumNum = (num1:number, num2:number, num3?:number):number=>{
    return num1+num2;
}


// TYPE ALIASES

type UserType = {
    username:string,
    age:number,
    salary?:number,
    theme:"light"|"dark"
}

let getUser = (user:UserType) =>{
    let newUser:UserType = {
        username:user.username,
        age:user.age,
        theme:"light"
    }
    return newUser;
}



// INTERFACES

interface IUser {
    username:string,
    age:number,
    phone?:number
}

interface IEmployee extends IUser {
    empId:number
}

let EmpForm:IEmployee = {
    username:"rohit",
    age:12,
    empId:1
}
let UserForm:IUser = {
    username:"rohiy",
    age:12
}

// GENERICS

interface IPost1<T> {
    id:number,
    username:string,
    post:string,
    extra:T[]
}

let Post1:IPost1<String> = {
    id: 1,
    username:"rohiy",
    post:"hola amigos",
    extra:["helel"]
}



interface IPost2<T extends object>{
    id:number,
    username:string,
    post:string,
    extra:T[]
}

let Post2:IPost2<{username:string,age:number}> = {
    id:1,
    username:"rohiy",
    post:"hola amigos",
    extra:[{username:"anurag", age:12}]
}
let Post3:IPost2<IUser> = {
    id:1,
    username:"rohiy",
    post:"hola amigos",
    extra:[{username:"anurag", age:12, phone:123}]
}
