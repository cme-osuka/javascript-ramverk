import { useEffect, useState } from "react";

function useDate(interval) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date())
    }, interval);

    return () => clearInterval(id);    
  }, [])

  return date;
}

export default useDate;