// passing optional params in typescript

type getName = {
  first: string;
  middle: string;
  last?: string | undefined;
};

const getFullName = (params: getName) => {
  return `My name is ${params.first} ${params.middle}`;
};

const getName = (first: string, last?: string) => {
  if (last) {
    return `My name is ${first} ${last}`;
  }
  return `My name is ${first}`;
};

console.log(getFullName({ first: "James", middle: "Michael" }));
console.log(getName("anurag"));
