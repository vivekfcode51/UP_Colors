import usdt_icon from '../../assets/images/usdt_icon.png';
import fastpay_image from '../../assets/images/fastpay_image.png';
import no_data_available from '../../assets/images/no_data_available.png';
import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RxDashboard } from 'react-icons/rx';
import upi from "../../assets/usaAsset/wallet/upi.png"
import { PiCopyLight } from 'react-icons/pi';

function DepositHistory() {
    const [activeModal, setActiveModal] = useState(0);
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
        setActiveModal((prev) => (prev === modalType ? modalType : modalType));
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

    const array = [{ status: "To Be Paid", balance: 200, type: "WOW Pay", time: "2025-01-15 05:19:29 PM", orderNumber: 2025011526522256 }]
    return (
        <>
            <div className='w-full'>
                <div className="hide-scrollbar overflow-x-auto py-3 mx-3">
                    <div className="flex gap-2 text-xsm font-bold">
                        <div
                            className={`w-32 py-3 flex-shrink-0 flex items-center justify-between shadow-lg rounded-lg ${activeModal === 0 ? "bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white" : "bg-white text-gray"
                                }  px-7 cursor-pointer`}
                            onClick={() => toggleModal(0)}
                        >
                            <RxDashboard className={``} size={20} />
                            <p className="font-bold text-nowrap">All</p>
                        </div>
                        <div
                            className={`w-32 py-3 flex-shrink-0 flex items-center justify-between shadow-lg rounded-lg ${activeModal === 1 ? "bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white" : "bg-white text-gray"
                                }  px-5 cursor-pointer`}
                            onClick={() => toggleModal(1)}
                        >
                            <img className='w-5 h-5' src={upi} alt="UPI Payment" />
                            <p className=" font-bold text-nowrap">UPI-APP</p>
                        </div>
                        <div
                            className={`w-32 py-3 flex-shrink-0 flex items-center justify-between shadow-lg rounded-lg ${activeModal === 2 ? "bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white" : "bg-white text-gray"
                                }  px-3 cursor-pointer`}
                            onClick={() => toggleModal(2)}
                        >
                            <img className='w-5 h-5' src={upi} alt="UPI Payment" />
                            <p className=" font-bold text-nowrap">UPI-Manual</p>
                        </div>
                        <div
                            className={`w-32 py-3 flex-shrink-0 flex items-center justify-between shadow-lg rounded-lg ${activeModal === 3 ? "bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white" : "bg-white text-gray"
                                }  px-5 cursor-pointer`}
                            onClick={() => toggleModal(3)}
                        >
                            <img className="w-6 h-6" src={usdt_icon} alt="USDT TRC 20" />
                            <p className=" text-nowrap">USDT</p>
                        </div>
                    </div>
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
                        // onClick={() => handleModalSecond(!modalSecond)}
                        className="bg-white text-black rounded-md text-xs font-bold py-4 px-2 flex justify-center items-center shadow-md"
                    >
                        {/* <p className="text-gray">
                            {confirmedDate}
                        </p> */}
                        <input type="date" />
                        {/* <p>
                            <IoIosArrowDown size={18} />
                        </p> */}
                    </button>
                </div>
                <div className='px-3 mt-3'>
                    {array && array.length > 0 ? (
                        array.map((item, i) => (
                            <div className='bg-white rounded-lg p-2' key={i}>
                                <div className='flex text-gray justify-between items-center'>
                                    <p className='bg-green text-white rounded-lg px-3 py-0.5'>Deposit</p>
                                    <p className='text-xsm text-black font-semibold'>{item.status}</p>
                                </div>
                                <div className='bg-border1 mt-3 w-full h-[1px]'></div>
                                <div className='flex mt-3 text-gray justify-between items-center'>
                                    <p className='text-xsm font-bold'>Balance</p>
                                    <p className='text-xsm font-semibold text-red'>₹{item.balance}.00</p>
                                </div> <div className='flex mt-4 text-gray justify-between items-center'>
                                    <p className='text-xsm font-bold'>Type</p>
                                    <p className='text-xsm text-gray font-semibold'>{item.type}</p>
                                </div> <div className='flex mt-4 text-gray justify-between items-center'>
                                    <p className='text-xsm font-bold'>Time</p>
                                    <p className='text-xsm text-gray font-semibold'>{item.time}</p>
                                </div> <div className='flex my-4 text-gray justify-between items-center'>
                                    <p className='text-xsm font-bold'>Order Number</p>
                                    <p className='text-xsm flex items-center text-gray font-semibold'>{item.orderNumber} &nbsp; <PiCopyLight size={15} />
                                    </p>
                                </div>
                            </div>
                            
                        ))
                    ) : (
                        <div className="flex flex-col items-center mt-10">
                            <img src={no_data_available} alt="No data" />
                            <p className="mt-10 text-black">No data</p>
                        </div>
                    )}
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
                                    className={`${modalFirstValue === "All" ? "text-black" : "text-white"
                                        }`}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => {
                                        handleModalFirstValue("Processing");
                                        handleModalFirst(false);
                                    }}
                                    className={`${modalFirstValue === "Processing" ? "text-black" : "text-white"
                                        }`}
                                >
                                    Processing
                                </button>
                                <button
                                    onClick={() => {
                                        handleModalFirstValue("Completed");
                                        handleModalFirst(false);
                                    }}
                                    className={`${modalFirstValue === "Completed" ? "text-black" : "text-white"
                                        }`}
                                >
                                    Completed
                                </button>
                                <button
                                    onClick={() => {
                                        handleModalFirstValue('Reject');
                                        handleModalFirst(false);
                                    }}
                                    className={`${modalFirstValue === "Reject" ? "text-black" : "text-white"
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
