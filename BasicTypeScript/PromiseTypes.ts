// Typing promise and async requests
// Wrapping function return types with Promises is really useful when working with real world processes like fetching from databases.

import { error } from "console";
import { get } from "http";

interface apiData {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// more effective and professional way
export const fetchDataAs = async (): Promise<apiData> => {
  const data = await fetch("https://swapi.dev/api/people/1")
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return error;
    });

  return data as apiData;
};

// easy to understand and implement way
export const fetchData = async (): Promise<apiData> => {
  const data: apiData = await fetch("https://swapi.dev/api/people/1")
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return error;
    });
  return data;
};

fetchData()
  .then((res) => {
    console.log(res.gender);
  })
  .catch((error) => {
    console.log(error);
  });

fetchDataAs()
  .then((res) => {
    console.log(res.eye_color);
  })
  .catch((error) => {
    console.log(error);
  });
