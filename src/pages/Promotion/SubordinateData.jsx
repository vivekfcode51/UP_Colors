import React, { useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'

function SubordinateData() {
  const [modalFirstValue, handleModalFirstValue] = useState(0);
  const [confirmedDate, setConfirmedDate] = useState("Select date");
  const [modalFirst, handleModalFirst] = useState(false);
  const modalRef = useRef(null);

  return (
    <div className='p-2 h-full w-full'>
      <div className='w-full flex items-center justify-between bg-white rounded-md p-2'>
        <input placeholder='search subordinate UID' className='bg-white text-[15px] text-black outline-none' type="text" name="" id="" />
        <div className='bg-redLight rounded-3xl px-5 py-0.5'> <IoSearchOutline className='text-white' size={30} /> </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <button
          onClick={() => handleModalFirst(!modalFirst)}
          className="bg-white text-black rounded-md text-xsm  py-4 px-2 flex justify-between items-center shadow-md"
        >
          <p>{modalFirstValue === 0 ? "All" : modalFirstValue === 1 ? "Tier 1" : modalFirstValue === 2 ? "Tier 2" : ""}</p>
          <p>
            <IoIosArrowDown size={18} />
          </p>
        </button>
        <button
          className="bg-white text-black rounded-md text-xsm  py-4 px-2 flex justify-center items-center shadow-md"
        >
          <input onChange={(e) => setConfirmedDate(e.target.value)} className='outline-none' type="date" />
        </button>
      </div>
      <div className='bg-[#f7f7f7]'>
        <div className='grid grid-cols-2 w-full p-2  mt-3 text-xsm'>
          <div className='col-span-1 flex flex-col items-center border-r-[1px] border-lightGray'>
            <p className='text-black text-sm font-bold'>0</p>
            <p className='text-lightGray'>Deposit number</p>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <p className='text-black text-sm font-bold'>0</p>
            <p className='text-lightGray'>Deposit amount</p>
          </div>
        </div>
        <div className='grid grid-cols-2 w-full p-2  mt-3 text-xsm'>
          <div className='col-span-1 flex flex-col items-center border-r-[1px] border-lightGray'>
            <p className='text-black text-sm font-bold'>0</p>
            <p className='text-lightGray'>Number of bettors</p>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <p className='text-black text-sm font-bold'>0</p>
            <p className='text-lightGray'>Total bet</p>
          </div>
        </div>
        <div className='grid grid-cols-2 w-full p-2  mt-3 text-xsm'>
          <div className='col-span-1 flex flex-col items-center border-r-[1px] border-lightGray'>
            <p className='text-black text-sm font-bold'>0</p>
            <p className='text-lightGray text-center'>Number of people making first deposit</p>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <p className='text-black text-sm font-bold'>0</p>
            <p className='text-lightGray'>First deposit amount</p>
          </div>
        </div>
      </div>
      {/*  modal  */}
      {modalFirst && (
        <div className="fixed inset-0 z-50 flex justify-center items-end bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="bg-white p-3 rounded-t-xl h-80 w-full xsm:w-[400px]"
          >
            <button
              onClick={() => handleModalFirst(false)}
              className="text-gray"
            >
              Cancel
            </button>
            <div className="flex flex-col gap-2 mt-20">
              <button
                onClick={() => {
                  handleModalFirstValue(0);
                  handleModalFirst(false);
                }}
                className={`border-b-[1px] border-border1 py-2 ${modalFirstValue === "All" ? "text-gray" : "text-lightGray"
                  }`}
              >
                All
              </button>
              <button
                onClick={() => {
                  handleModalFirstValue(1);
                  handleModalFirst(false);
                }}
                className={`border-b-[1px] border-border1 py-2 ${modalFirstValue === "Processing" ? "text-gray" : "text-lightGray"
                  }`}
              >
                Tier 1
              </button>
              <button
                onClick={() => {
                  handleModalFirstValue(2);
                  handleModalFirst(false);
                }}
                className={`border-b-[1px] border-border1 py-2 ${modalFirstValue === "Completed" ? "text-gray" : "text-lightGray"
                  }`}
              >
                Tier 2
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SubordinateData