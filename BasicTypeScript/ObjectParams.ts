// covers the object params in typescript (types and interface)

type numObj = {
  first: number;
  second: number;
};

interface INumObj {
  first: number;
  second: number;
}

// Pass an Object Type Directly
export const addNums = (params:{first:number,second:number})=>{
  return params.first + params.second;
}

// Create a Named Type
export const TaddNums = (params: numObj) => {
  return params.first + params.second;
};

// Create an Interface
export const IaddNums = (params: INumObj) => {
  return params.first + params.second;
};

console.log(IaddNums({first:100,second:100}));
console.log(TaddNums({ first: 10, second: 210 }));
console.log(IaddNums({ first: 10, second: 210 }));
