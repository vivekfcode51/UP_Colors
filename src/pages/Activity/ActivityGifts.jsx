import teamport from '../../assets/icons/teamport.png'

function ActivityGifts() {
    return (
        <div className='mx-3 font-roboto'>
            <div className='bg-inputBg text-sm text-lightGray rounded p-2 mt-60 pb-10'>
                <p className='text-gray'>Hi</p>
                <p className='text-gray'>We have a gift for you</p>
                <p className='text-black mt-5'>Please enter the gift code below</p>
                <input className='w-full bg-[#EBEBEB] rounded p-2 mt-3' type="text" placeholder='Please enter gift code' />
                <button className='bg-gradient-to-b from-[#f95959] to-[#ff9a8e] text-white rounded-full w-full text-sm py-3 mt-5'>Receive</button>
            </div>
            {/* <div className='mt-3'>
                <div className='flex items-center gap-5 w-10 h-10'>
                    <img src={teamport} alt="sa" />
                    <h1 className=''>History</h1>
                </div>
            </div> */}
        </div>
    )
}

export default ActivityGifts