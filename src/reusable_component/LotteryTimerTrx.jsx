/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import TimerModal from "./TimerModal";

const LotteryTimerTrx = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isWarning, setIsWarning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateTimeLeft = () => {
    const now = new Date();
    const secondsInCycle = (now.getMinutes() * 60 + now.getSeconds()) % duration;
    const remainingTime = duration - secondsInCycle; 
    setTimeLeft(remainingTime);
  };

  useEffect(() => {
    calculateTimeLeft();
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval); 
  }, [duration]);

  useEffect(() => {
    if (timeLeft <= 5 && timeLeft > 0) {
      setIsWarning(true);
      setIsModalOpen(true); 
    } else {
      setIsWarning(false);
      if (timeLeft > 5) setIsModalOpen(false); 
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatTime = (value) => value.toString().padStart(2, "0");

  return (
    <div className="relative w-full">
      <div className={`flex justify-end space-x-1 ${isWarning ? "text-red" : ""}`}>
        <div className="bg-white text-black h-8 w-5 flex items-center justify-center font-semibold">
          {formatTime(minutes)[0]}
        </div>
        <div className="bg-white text-black h-8 w-5 flex items-center justify-center font-semibold">
          {formatTime(minutes)[1]}
        </div>
        <div className="bg-white text-black h-8 w-4 flex items-center justify-center font-semibold">
          :
        </div>
        <div className="bg-white text-black h-8 w-5 flex items-center justify-center font-semibold">
          {formatTime(seconds)[0]}
        </div>
        <div className="bg-white text-black h-8 w-5 flex items-center justify-center font-semibold">
          {formatTime(seconds)[1]}
        </div>
      </div>
      <div
        className="absolute mt-[7rem] xsm:mt-[8.9rem] flex items-center h-[16.5rem] xsm:h-[17.7rem] left-0"
        style={{ width: "214%", transform: "translateX(-50%)" }}
      >
        <TimerModal
          duration={duration}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default LotteryTimerTrx;
