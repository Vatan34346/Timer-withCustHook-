import { useEffect, useState } from "react";

const useCounter = (direction=true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(direction)
        {
            setCounter(preValue => preValue + 1);
        }else{
            setCounter(preValue=>preValue-1);
        }

    }, 1000);

    //clean up
    return () => clearInterval(interval);
  }, [direction]);


  return counter;
};

export default useCounter;
