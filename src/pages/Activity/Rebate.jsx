import rebateVector from "../../assets/icons/rebateVector.png"
import rebatewallet from "../../assets/icons/rebatewallet.png"

function Rebate() {
  return (
    <div className='px-3 mt-3'>
      <div className='bg-bg2 p-2 rounded-lg text-xs font-bold'>
        <h1 className="text-sm">All total betting rebate </h1>
        <div className="flex items-center gap-1 border-[1px] border-white w-40 py-1 rounded mt-3">
          <img className="" src={rebateVector} alt="" />
          <p>Real-Time count</p>
        </div>
        <div className="flex items-center gap-1 justify-between w-40 mt-3">
          <img className="" src={rebatewallet} alt="" />
          <p className="text-lg">null</p>
        </div>
        <div className="bg-bg3 rounded py-3 mt-3 text-sm text-center">Upgrade VIP level to increase rebate rate</div>
        <div className="grid grid-cols-2 gap-10 mt-3">
          <div className="col-span-1 bg-bg3 rounded flex flex-col items-center justify-center h-20 text-sm">
            <p>Today rebate</p>
            <p className="text-bg2">0</p>
          </div>
          <div className="col-span-1 bg-bg3 rounded flex flex-col items-center justify-center h-20 text-sm">
            <p>Total rebate</p>
            <p className="text-bg2">0</p>
          </div>
        </div>
        <p className="mt-3">Automatic code washing at 01:00:00 every morning </p>
        <button className='bg-gray rounded-full w-full font-bold text-sm py-3 mt-5'>One-Click rebate</button>
      </div>
      <div className="mt-5">
        <div className="border-l-4 border-bg2 pl-5 py-3" >Rebate History</div>
      </div>
    </div>
  )
}

export default Rebate