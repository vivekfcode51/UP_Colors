import lotteryIcon from "../../assets/images/lotteryIcon.png"
import depo_wallet from "../../assets/icons/depo_wallet.png"

function ActivityAward() {
  return (
    <div className=''>
      <div className=' bg-bg2 mx-3 pb-10 rounded-md mt-36'>
        <div className='flex items-center justify-between pr-2 border-b-[1px] border-bg3 text-sm'>
          <button className='bg-green py-2 px-10 rounded-md'>Daily mission</button>
          <p className=' text-gray'>Unfinished</p>
        </div>
        <div className='flex  items-center gap-2 py-5 px-2'>
          <img src={lotteryIcon} alt="d" />
          <p className='text-xs'>Lottery Betting Task</p>
          <p className='text-bg3 text-sm'>0/500</p>
        </div>
        <div className='bg-gray h-8 rounded-md mx-7'></div>
        <div className='flex items-center justify-between text-xs py-5 px-2'>
          <div>Award Amount</div>
          <div className='flex items-center gap-2'>
            <img className='w-10 h-10' src={depo_wallet} alt="as" />
            <p className='text-red'>₹5</p>
          </div>
        </div>
        <div className='px-2'>
          <button className='rounded-full border-bg3 border-[1px] w-full py-1 text-xs'>To Complete</button>
        </div>
      </div>
      <div className='mt-3 bg-bg2 mx-3 pb-10 rounded-md'>
        <div className='flex items-center justify-between pr-2 border-b-[1px] border-bg3 text-sm'>
          <button className='bg-green py-2 px-10 rounded-md'>Daily mission</button>
          <p className=' text-gray'>Unfinished</p>
        </div>
        <div className='flex  items-center gap-2 py-5 px-2'>
          <img src={lotteryIcon} alt="d" />
          <p className='text-xs'>Lottery Betting Task</p>
          <p className='text-bg3 text-sm'>0/500</p>
        </div>
        <div className='bg-gray h-8 rounded-md mx-7'></div>
        <div className='flex items-center justify-between text-xs py-5 px-2'>
          <div>Award Amount</div>
          <div className='flex items-center gap-2'>
            <img className='w-10 h-10' src={depo_wallet} alt="as" />
            <p className='text-red'>₹5</p>
          </div>
        </div>
        <div className='px-2'>
          <button className='rounded-full border-bg3 border-[1px] w-full py-1 text-xs'>To Complete</button>
        </div>
      </div>
    </div>
  )
}

export default ActivityAward