import usdt_icon from '../../assets/images/usdt_icon.png';
import fastpay_image from '../../assets/images/fastpay_image.png';
import no_data_available from '../../assets/images/no_data_available.png';
import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function DepositHistory() {
    const [activeModal, setActiveModal] = useState("UPI");
    const [modalFirst, handleModalFirst] = useState(false);
    const [modalFirstValue, handleModalFirstValue] = useState("All");
    const [modalSecond, handleModalSecond] = useState(false);
    const [confirmedDate, setConfirmedDate] = useState("Select date"); // Track displayed date
    const modalRef = useRef(null);
    const modalSecondRef = useRef(null);
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Months are 0-indexed
    const currentDay = today.getDate();

    // State to track selected date
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

    const toggleModal = (modalType) => {
        setActiveModal((prev) => (prev === modalType ? null : modalType));
    };

    // Close modal when clicking outside
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
        <>
            <div>
                <div className="grid grid-cols-4 gap-2 text-xs font-bold mx-3">
                    <div
                        className={`col-span-1 flex flex-col items-center justify-center shadow-lg rounded-lg ${activeModal === "UPI" ? "bg-bg3" : "bg-bg2"
                            } mt-3 px-5 cursor-pointer`}
                        onClick={() => toggleModal("UPI")}
                    >
                        <img src={fastpay_image} alt="UPI Payment" />
                        <p className="mt-1 font-bold text-nowrap">UPI Payment</p>
                    </div>
                    <div
                        className={`col-span-1 flex flex-col items-center justify-center shadow-lg ${activeModal === "USDT" ? "bg-bg3" : "bg-bg2"
                            } rounded-lg mt-3 px-5 py-2 cursor-pointer`}
                        onClick={() => toggleModal("USDT")}
                    >
                        <img className="w-6 h-6" src={usdt_icon} alt="USDT TRC 20" />
                        <p className="mt-3 text-nowrap">USDT TRC 20</p>
                    </div>
                    <div className="col-span-1"></div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3 mx-3">
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
                <div className="flex flex-col items-center mt-10">
                    <img src={no_data_available} alt="No data" />
                    <p className="mt-10">No data</p>
                </div>

                {modalFirst && (
                    <div className="fixed inset-0 z-50 flex justify-center items-end bg-black bg-opacity-50">
                        <div
                            ref={modalRef}
                            className="bg-bg2 p-3 rounded-t-xl h-48 w-full sm:w-[540px] md:w-[400px]"
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
                                        handleModalFirstValue("Processing");
                                        handleModalFirst(false);
                                    }}
                                    className={`${modalFirstValue === "Processing" ? "text-bg3" : "text-gray"
                                        }`}
                                >
                                    Processing
                                </button>
                                <button
                                    onClick={() => {
                                        handleModalFirstValue("Completed");
                                        handleModalFirst(false);
                                    }}
                                    className={`${modalFirstValue === "Completed" ? "text-bg3" : "text-gray"
                                        }`}
                                >
                                    Completed
                                </button>
                                <button
                                    onClick={() => {
                                        handleModalFirstValue('Reject');
                                        handleModalFirst(false);
                                    }}
                                    className={`${modalFirstValue === "Reject" ? "text-bg3" : "text-gray"
                                        }`}
                                >
                                    Reject
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
        </>
    );
}

export default DepositHistory;
