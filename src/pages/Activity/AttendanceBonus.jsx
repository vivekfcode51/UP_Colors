import bggifts from '../../assets/images/bggifts.png'
import bookmark from '../../assets/images/bookmark.png'
import UnsignInTop from '../../assets/images/UnsignInTop.png'
import coingifts from '../../assets/images/coingifts.png'
import activityGift from '../../assets/usaAsset/activity/activityGift.png'
import bg_gifts from '../../assets/usaAsset/activity/bg_gifts.png'
import { Link } from 'react-router-dom'
import { HiArrowPathRoundedSquare } from 'react-icons/hi2'

function AttendanceBonus() {

    const data = [
        { price: "₹4.00", duration: "1 Day " },
        { price: "₹20.00", duration: "1 Day" },
        { price: "₹50.00", duration: "3 Days" },
        { price: "₹100.00", duration: "7 Days" },
        { price: "₹200.00", duration: "15 Days" },
        { price: "₹400.00", duration: "30 Days" },
        { price: "₹800.00", duration: "60 Days" },
        { price: "₹1,600.00", duration: "120 Days" },
        { price: "₹3,200.00", duration: "240 Days" },
        { price: "₹6,400.00", duration: "1 Year" },
    ];

    return (
        <div className='font-roboto'>
            <div className='bg-gradient-to-l from-[#f95959] to-[#ff9a8e] pl-1'>

                <div className='grid grid-cols-2 pt-10'>
                    <div className='col-span-1 px-2 pb-5'>
                        <div className='flex flex-col justify-between'>
                            <h1 className='font-bold text-lg'>Attendance Bonus</h1>
                            <h1 className='text-xsm font-bold'>Get rewards based on consecutive login days</h1>
                            <h1 className=' text-xsm text-nowrap  xsm:text-center z-50 font-bold pt-2'>Attendance Consecutively 0 Days</h1>
                            <h1 className='mt-3 text-lg font-bold'>Accumulated </h1>
                            <h1 className='flex items-center gap-2 text-[#ffbd40]'>₹0.00
                                <HiArrowPathRoundedSquare className=' text-base sm:text-xl md:text-base' />
                            </h1>
                        </div>
                        <Link className='flex justify-center mt-2' to="/activity/gamerule" ><button className='bg-gradient-to-b from-[#ffbd40] to-[#ff7f3d] rounded-full px-10 text-xsm font-bold py-2 '>Game rule</button></Link>
                    </div>
                    <div className='col-span-1 flex flex-col  px-2'>
                        <img className='z-40 -mt-2 w-56 h-[13.8rem] object-fill' src={bg_gifts} alt="ds" />
                        <Link className='z-50 -mt-12 flex justify-center' to="/activity/attendacehistory" > <button className='bg-gradient-to-b from-[#ffbd40] to-[#ff7f3d] rounded-full  text-xsm font-bold p-2'> Attendance History</button></Link>
                    </div>
                </div>
            </div>
            <div className="mt-5 p-2 bg-inputBg">
                <div className=' grid grid-cols-2 gap-2'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-b-lg flex flex-col justify-center items-center"
                        >
                            <div
                                className="w-full bg-no-repeat text-sm flex items-center justify-center h-10 -mt-0.5"
                                style={{
                                    backgroundImage: `url(${UnsignInTop})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                }}
                            >
                                {item.price}
                            </div>
                            <img src={coingifts} className="w-16 h-16 mt-4" alt="icon" />
                            <p className="mt-2 text-xsm text-lightGray mb-7">{item.duration}</p>
                        </div>
                    ))}
                </div>
                <div className=' mt-2 bg-no-repeat bg-white w-full rounded-lg p-2 grid grid-cols-2'
                >
                    <div> <img src={activityGift} alt="sd" /> </div>
                    <div className=' flex flex-col justify-center text-black items-center text-xsm'>
                        <p className=' flex items-center justify-center'>
                            <span className="left-0 w-5 h-px bg-white"></span>
                            <span className='px-2'> ₹7000.00</span>
                            <span className="right-0 w-5 h-px bg-white"></span>
                        </p>
                        <p className='text-xs'>7 Day</p>
                    </div>
                </div>
            </div>
            <div className='px-2 mb-5'>
                <button className='bg-gradient-to-b from-[#f95959] to-[#ff9a8e] rounded-full w-full text-sm py-1 my-10'>Attendance</button>
            </div>
        </div>
    )
}

export default AttendanceBonus