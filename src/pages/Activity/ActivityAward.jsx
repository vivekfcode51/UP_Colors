import depo_wallet from "../../assets/icons/depo_wallet.png"
import bnous1 from "../../assets/usaAsset/activity/bonus1.png"
import Activitygift from "../../assets/icons/Activitygift.png"
function ActivityAward() {
  const array = [{ p1: 1000, p2: 38 }, { p1: 5000, p2: 128 }, { p1: 100000, p2: 208 }]
  return (
    <div className='pb-10 font-roboto'>
      <div className='grid grid-cols-3 bg-gradient-to-l from-[#f95959] to-[#ff9a8e] py-3 '>
        <div className='col-span-1'>
          <img
            src={Activitygift}
            alt="Gifts"
            className="w-full  object-cover rounded"
          />
        </div>
        <div className='col-span-2'>
          <h1 className='font-bold'>Activity Record</h1>
          <p className='text-xs'>Complete Weekly/Daily tasks to receive rich records.Weekly rewards can&apos;t be accumulated to the next week, and daily rewards cannot be accumulated to the next day.</p>
        </div>
      </div>
      {array?.map((item, i) => (
        <div key={i} className=' bg-inputBg mx-3  rounded-md mt-3'>
          <div className='flex items-center justify-between pr-2 border-b-[1px] border-border1 text-sm'>
            <button className='bg-green py-2 px-5 rounded-tl-md rounded-br-md '>Daily mission</button>
            <p className=' text-gray text-sm'>Unfinished</p>
          </div>
          <div className='flex  items-center gap-2 mt-3 px-2'>
            <img className="w-7 h-7" src={bnous1} alt="d" />
            <p className='text-xsm text-gray'>Recharge Bonus</p>
            <p className='text-redLight text-sm'>0/{item?.p1}</p>
          </div>
          <div className="px-2">
            <div className='bg-[#e5e8f5] rounded-md text-xs text-[#888] p-2'>If your cumulative deposit reaches the maximum of 100,000 rupees on that day, you can claim the entire bonus</div>
          </div>
          <div className='flex items-center justify-between text-xs mx-2 border-b-[1px] border-border1 py-3'>
            <div className="text-gray ">Award Amount</div>
            <div className='flex items-center gap-2'>
              <img className='w-6 h-6' src={depo_wallet} alt="as" />
              <p className='text-gold'>₹{item?.p2}.00</p>
            </div>
          </div>
          <div className='mt-3 px-2'>
            <button className='rounded-full border-redLight border-[1px] w-full py-2 text-redLight font-bold text-sm'>to complete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ActivityAward