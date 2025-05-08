import { useState, useEffect } from "react";

function useDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval); // pulizia alla distruzione del componente
  }, []);

  return currentDate;
}

export default useDate;
