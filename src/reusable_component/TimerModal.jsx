/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TimerModal = ({ duration, isOpen, onClose, parentRef }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isWarning, setIsWarning] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (parentRef?.current) {
      const parentRect = parentRef.current.getBoundingClientRect();
      setModalPosition({
        top: parentRect.top - 200,
        left: parentRect.left,
      });
    }
  }, [parentRef]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const elapsed = now.getSeconds() % duration;
      setTimeLeft(duration - elapsed);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [duration]);

  useEffect(() => {
    if (timeLeft <= 5 && timeLeft > 0) {
      setIsWarning(true);
      onClose(true);
    } else {
      setIsWarning(false);
      if (timeLeft > 5) onClose(false);
    }
  }, [timeLeft]);
  const seconds = timeLeft % 60;
  return (
   
    <div className={` rounded-2xl h-full md:h-[16.5rem] mt-5 sm:mt-3 md:-mt-8 w-full absolute modal ${isOpen ? "block" : "hidden"}`}>
      <div
        className="bg-black opacity-80 h-full w-full absolute inset-0 rounded-2xl"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      >
      </div>
      <div className="modal-content relative flex items-center justify-center h-full mt-2">
        <div className={`flex items-center justify-center space-x-8 sm:space-x-12 md:space-x-9 ${isWarning ? 'text-redLight' : ''}`}>
          <div className='bg-white  h-[10rem] w-[6.5rem] sm:h-[15rem] sm:w-[10rem] md:h-[11rem] md:w-[7.5rem] rounded-2xl flex items-center justify-center font-semibold text-[9rem] sm:text-[12rem] md:text-[9rem] '>
            {formatTime(seconds)[0]}
          </div>
          <div className='bg-white  h-[10rem] w-[6.5rem] sm:h-[15rem] sm:w-[10rem] md:h-[11rem] md:w-[7.5rem] rounded-2xl flex items-center justify-center font-semibold text-[9rem] sm:text-[12rem] md:text-[9rem] '>
            {formatTime(seconds)[1]}
          </div>
        </div>
      </div>
    </div>

  );
};
const formatTime = (value) => value.toString().padStart(2, '0');

export default TimerModal;
