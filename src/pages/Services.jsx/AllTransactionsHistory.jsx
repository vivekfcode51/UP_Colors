import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

function AllTransactionsHistory() {
  const [modalFirst, handleModalFirst] = useState(false);
  const [modalFirstValue, handleModalFirstValue] = useState("All");
  const [modalSecond, handleModalSecond] = useState(false);
  const [confirmedDate, setConfirmedDate] = useState("Select date");
  const modalRef = useRef(null);
  const modalSecondRef = useRef(null);
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // Months are 0-indexed
  const currentDay = today.getDate();
  const [selectedDate, setSelectedDate] = useState({
    year: currentYear,
    month: currentMonth,
    day: currentDay,
  });
  // Generate dynamic year list
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i); // Current year + next 9 years
  const months = Array.from({ length: 12 }, (_, i) => i + 1); // 1 to 12
  const days = Array.from({ length: 31 }, (_, i) => i + 1); // 1 to 31

  // Event handlers
  const handleSelectYear = (year) => {
    setSelectedDate((prev) => ({ ...prev, year }));
  };

  const handleSelectMonth = (month) => {
    setSelectedDate((prev) => ({ ...prev, month }));
  };

  const handleSelectDay = (day) => {
    setSelectedDate((prev) => ({ ...prev, day }));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModalFirst(false);
      }
    };

    if (modalFirst) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalFirst]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalSecondRef.current && !modalSecondRef.current.contains(event.target)) {
        handleModalSecond(false);
      }
    };

    if (modalSecond) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalSecond]);
  return (
    <div className='mx-3'>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <button
          onClick={() => handleModalFirst(!modalFirst)}
          className="bg-white text-black rounded-md text-xs font-bold py-4 px-2 flex justify-between items-center shadow-md"
        >
          <p>{modalFirstValue}</p>
          <p>
            <IoIosArrowDown size={18} />
          </p>
        </button>
        <button
          onClick={() => handleModalSecond(!modalSecond)}
          className="bg-white text-black rounded-md text-xs font-bold py-4 px-2 flex justify-between items-center shadow-md"
        >
          <p className="text-gray">
            {confirmedDate}
          </p>
          <p>
            <IoIosArrowDown size={18} />
          </p>
        </button>
      </div>
      <div>
        <div className='bg-[#60B2FE] w-full text-white p-2 rounded-t-md mt-5'>Attendance</div>
        <div className='bg-[#96D4F9] text-xs text-black p-2 rounded-b-md'>
          <div className='bg-white flex items-center rounded-md justify-between p-2'>
            <p>Detail</p>
            <p>Attendance</p>
          </div>
          <div className='bg-white mt-2 flex items-center rounded-md justify-between p-2'>
            <p>Time</p>
            <p>02-01-2025 12:10:12</p>
          </div>
          <div className='bg-white mt-2 flex items-center rounded-md justify-between p-2'>
            <p>Balance</p>
            <p className='text-red'>₹4.00</p>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <div className='bg-[#60B2FE] w-full text-white p-2 rounded-t-md mt-5'>Yesterday Commission</div>
        <div className='bg-[#96D4F9] text-xs text-black p-2 rounded-b-md'>
          <div className='bg-white flex items-center rounded-md justify-between p-2'>
            <p>Detail</p>
            <p>Yesterday Commision</p>
          </div>
          <div className='bg-white mt-2 flex items-center rounded-md justify-between p-2'>
            <p>Time</p>
            <p>02-01-2025 12:10:12</p>
          </div>
          <div className='bg-white mt-2 flex items-center rounded-md justify-between p-2'>
            <p>Balance</p>
            <p className='text-red'>₹0.00</p>
          </div>
          <div></div>
        </div>
      </div>
      {/* modals */}
      {modalFirst && (
        <div className="fixed inset-0 z-50 flex justify-center items-end bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="bg-bg2 p-3 rounded-t-xl h-80 w-full sm:w-[540px] md:w-[400px]"
          >
            <button
              onClick={() => handleModalFirst(false)}
              className="text-white"
            >
              Cancel
            </button>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  handleModalFirstValue("All");
                  handleModalFirst(false);
                }}
                className={`${modalFirstValue === "All" ? "text-bg3" : "text-gray"
                  }`}
              >
                All
              </button>
              <button
                onClick={() => {
                  handleModalFirstValue("Deposit");
                  handleModalFirst(false);
                }}
                className={`${modalFirstValue === "Deposit" ? "text-bg3" : "text-gray"
                  }`}
              >
                Deposit
              </button>
              <button
                onClick={() => {
                  handleModalFirstValue("Bonus");
                  handleModalFirst(false);
                }}
                className={`${modalFirstValue === "Bonus" ? "text-bg3" : "text-gray"
                  }`}
              >
                Bonus
              </button>
              <button
                onClick={() => {
                  handleModalFirstValue('Withdrawal');
                  handleModalFirst(false);
                }}
                className={`${modalFirstValue === "Withdrawal" ? "text-bg3" : "text-gray"
                  }`}
              >
                Withdrawal
              </button>
              <button
                onClick={() => {
                  handleModalFirstValue('FirstDepositBonus');
                  handleModalFirst(false);
                }}
                className={`${modalFirstValue === "FirstDepositBonus" ? "text-bg3" : "text-gray"
                  }`}
              >
                First Deposit Bonus
              </button>
              <button
                onClick={() => {
                  handleModalFirstValue('Salary');
                  handleModalFirst(false);
                }}
                className={`${modalFirstValue === "Salary" ? "text-bg3" : "text-gray"
                  }`}
              >
                Salary
              </button>
              <button
                onClick={() => {
                  handleModalFirstValue('GiftCard');
                  handleModalFirst(false);
                }}
                className={`${modalFirstValue === "GiftCard" ? "text-bg3" : "text-gray"
                  }`}
              >
                Gift Card
              </button>
              <button
                onClick={() => {
                  handleModalFirstValue('Yesterday');
                  handleModalFirst(false);
                }}
                className={`${modalFirstValue === "Yesterday" ? "text-bg3" : "text-gray"
                  }`}
              >
                Yesterday Commission
              </button>
            </div>
          </div>
        </div>
      )}

      {modalSecond && (
        <div className="fixed inset-0 z-50 flex justify-center items-end bg-black bg-opacity-50">
          <div
            ref={modalSecondRef}
            className="bg-bg2 p-3 rounded-t-xl h-72 w-full sm:w-[540px] md:w-[400px]"
          >
            <div className='flex items-center justify-between' >
              <button
                onClick={() => handleModalSecond(false)}
                className="text-white"
              >
                Cancel
              </button>
              <p className="text-white">
                Select a date
              </p>
              <button
                onClick={() => {
                  setConfirmedDate(
                    `${selectedDate.day}/${selectedDate.month}/${selectedDate.year}`
                  );
                  handleModalSecond(false);
                }}
                className="text-white"
              >
                Confirm
              </button>
            </div>
            <div className="flex items-start justify-between space-x-6 py-10">
              {/* Years */}
              <div className="flex flex-col items-center overflow-y-auto h-40 hide-scrollbar">
                {years.map((year) => (
                  <div
                    key={year}
                    onClick={() => handleSelectYear(year)}
                    className={`cursor-pointer py-2 px-4 ${selectedDate.year === year ? 'text-bg3' : 'text-gray'
                      }`}
                  >
                    {year}
                  </div>
                ))}
              </div>

              {/* Months */}
              <div className="flex flex-col items-center overflow-y-auto h-40 hide-scrollbar">
                {months
                  .map((month) => (
                    <div
                      key={month}
                      onClick={() => handleSelectMonth(month)}
                      className={`cursor-pointer py-2 px-4 ${selectedDate.month === month ? 'text-bg3' : 'text-gray'
                        }`}
                    >
                      {month}
                    </div>
                  ))}
              </div>

              {/* Days */}
              <div className="flex flex-col items-center overflow-y-auto h-40 hide-scrollbar">
                {days
                  .map((day) => (
                    <div
                      key={day}
                      onClick={() => handleSelectDay(day)}
                      className={`cursor-pointer py-2 px-4 ${selectedDate.day === day ? 'text-bg3' : 'text-gray'
                        }`}
                    >
                      {day}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AllTransactionsHistory