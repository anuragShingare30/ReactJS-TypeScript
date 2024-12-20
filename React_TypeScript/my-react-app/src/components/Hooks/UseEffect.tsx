import { useEffect } from "react";

/**
    @title Solving errors with useEffect
    * useEffect is expecting to either return void or another function.
    * Always return the function in wrap{}
 */

export const UseTimeout = (timerMs: number) => {
    useEffect(() => {
      setTimeout(()=>{
        console.log("Done");
      }, (timerMs))
    }, [timerMs]);

};
