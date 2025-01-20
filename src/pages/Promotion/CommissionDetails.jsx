import React, { useState } from 'react'

function CommissionDetails() {
  const [confirmedDate, setConfirmedDate] = useState("Select date");

  return (
    <div className='w-full h-full p-2'>
      <button
        className="bg-white text-lightGray rounded-md text-xsm  py-2.5  px-2 flex justify-center items-center shadow-md"
      >
        <input onChange={(e) => setConfirmedDate(e.target.value)} className='outline-none' type="date" />
      </button>
      <div className='bg-inputBg px-2 py-3 text-xsm text-black mt-3'>
        <p>Settlement successful</p>
        <p>2025-01-05-12:21:55</p>
        <p>The commission has been automatically credited to your balance </p>
        <div className='mt-3 bg-white p-2 rounded-md flex items-center justify-between'>
          <p>Number of bettors</p>
          <p className='text-black font-semibold'>0 People</p>
        </div>
        <div className='mt-2 bg-white p-2 rounded-md flex items-center justify-between'>
          <p>Bet amount</p>
          <p className='text-black font-semibold'>0.00</p>
        </div>
        <div className='mt-2 bg-white p-2 rounded-md flex items-center justify-between'>
          <p>commission payout</p>
          <p className='text-black font-semibold'>0</p>
        </div>
        <div className='mt-2 bg-white p-2 rounded-md flex items-center justify-between'>
          <p>Date</p>
          <p className='text-black font-semibold'>2025-01-05-12:21:55</p>
        </div>
      </div>
    </div>
  )
}

export default CommissionDetails