import teamport from '../../assets/icons/teamport.png'

function ActivityGifts() {
    return (
        <div className='mx-3'>
            <div className='bg-bg2 rounded p-2 mt-60'>
                <p>Hi</p>
                <p className='mt-5'>We have a gift for you</p>
                <p className='mt-5'>Please enter the gift code below</p>
                <input className='w-full rounded p-2 mt-3' type="text" placeholder='Please enter gift code' />
                <button className='bg-bg3 rounded-full w-full font-bold text-sm py-3 mt-5'>Receive</button>
            </div>
            <div className='mt-3'>
                <div className='flex items-center gap-5 w-10 h-10'>
                    <img src={teamport} alt="sa" />
                    <h1 className=''>History</h1>
                </div>
            </div>
        </div>
    )
}

export default ActivityGifts