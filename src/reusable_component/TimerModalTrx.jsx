/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TimerModalTrx = ({ duration, isOpen, onClose, parentRef }) => {
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

//   useEffect(() => {
//     setTimeLeft(duration); // Reset timeLeft when duration changes
  
//     const interval = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev > 0) return prev - 1;
//         clearInterval(interval);
//         return 0;
//       });
//     }, 1000);
  
//     return () => clearInterval(interval);
//   }, [duration]);
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
    if (timeLeft === 10) {  // Only trigger modal at exactly 10 seconds
      setIsWarning(true);
      onClose(true);
    } else if (timeLeft > 10) {
      setIsWarning(false);
      onClose(false);
    }
  }, [timeLeft]);
  const seconds = timeLeft % 60;
  return (
   
    <div className={` rounded-2xl h-[20rem] xs:h-[22rem] xsm:h-[19.5rem] mt-14 xs:mt-[5.5rem] xsm:-mt-3 w-full absolute modal ${isOpen ? "block" : "hidden"}`}>
      <div
        className="bg-black opacity-80 h-full w-full absolute inset-0 rounded-2xl"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      >
      </div>
      <div className="modal-content relative flex items-center justify-center h-full mt-2">
        <div className={`flex items-center justify-center space-x-8 xsm:space-x-9 ${isWarning ? 'text-red' : ''}`}>
          <div className='bg-white  h-[10rem] w-[6.5rem] xsm:h-[12rem] xsm:w-[7.5rem] rounded-2xl flex items-center justify-center font-extrabold text-[10rem] '>
            {formatTime(seconds)[0]}
          </div>
          <div className='bg-white  h-[10rem] w-[6.5rem] xsm:h-[12rem] xsm:w-[7.5rem] rounded-2xl flex items-center justify-center font-extrabold text-[10rem] '>
            {formatTime(seconds)[1]}
          </div>
        </div>
      </div>
    </div>

  );
};
const formatTime = (value) => value.toString().padStart(2, '0');

export default TimerModalTrx;
