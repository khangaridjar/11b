import { useState, useEffect } from 'react';

export default function Home() {
  const [time, setTime] = useState(0); 
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const storedTime = localStorage.getItem('time');
    if (storedTime) {
      setTime(parseInt(storedTime, 10));
    }
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 1;
        localStorage.setItem('time', newTime); 
        return newTime;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    setMinutes(Math.floor(time / 60));
    setSeconds(time % 60);
  }, [time]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="text-center text-white font-sans">
        <div className="text-6xl font-bold">
          {minutes}:{seconds}
        </div>
      </div>
    </div>
  );
}
