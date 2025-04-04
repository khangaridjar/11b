import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [time, setTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const storedTime = localStorage.getItem("time");
    if (storedTime) {
      setTime(parseInt(storedTime, 10));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 1;
        localStorage.setItem("time", newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    setMinutes(Math.floor(time / 60));
    setSeconds(time % 60);
  }, [time]);

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-800 p-4">
     
      <div className="absolute top-4 left-4">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          ← Back
        </button>
      </div>

      <div className="text-center text-white font-sans">
        <div className="text-6xl font-bold">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </div>
  );
}
