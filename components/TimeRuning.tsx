"use client";
import { useLayoutEffect, useState } from "react";

interface TimeRuningProps {
  setTimeOfff: (isTimeoff: boolean) => void;
}
function TimeRuning({ setTimeOfff }: TimeRuningProps) {
  const [time, setTime] = useState(60);
  useLayoutEffect(() => {
    const id = setInterval(() => {
      setTime(() => {
        if (time - 1 < 0) {
          setTimeOfff(true);
        }
        return time - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [time]);
  return (
    <div className="flex">
      <div className="w-12 h-12 rounded-full border-2 border-blue-800 m-auto flex items-center justify-center font-bold text-lg">
        {time.toString().padStart(2, "0")}
      </div>
    </div>
  );
}
export default TimeRuning;
