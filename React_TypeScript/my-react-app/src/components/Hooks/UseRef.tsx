import { useEffect, useRef } from "react";


// PASSING THE TYPE OF ref VALUE INITIALLY
export const UseRef1 = () => {
    const id = useRef<React.ReactNode>("");

    useEffect(() => {
      id.current = "Random value!";
    }, []);
  
    return <div></div>;
}


// provide only the element type as argument, and use null as initial value. 
export const UseRef2 = () => {
    const ref = useRef<HTMLDivElement>(null);
  
    return <div ref={ref} />;
  };