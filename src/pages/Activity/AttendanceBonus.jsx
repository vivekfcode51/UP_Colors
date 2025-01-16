import bggifts from '../../assets/images/bggifts.png'
import bookmark from '../../assets/images/bookmark.png'
import UnsignInTop from '../../assets/images/UnsignInTop.png'
import coingifts from '../../assets/images/coingifts.png'
import giftsbelow from '../../assets/images/giftsbelow.png'
import { Link } from 'react-router-dom'
import { HiArrowPathRoundedSquare } from 'react-icons/hi2'

function AttendanceBonus() {

    const data = [
        { price: "₹4.00", duration: "1 Day" },
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
        <div className=''>
            <div className='bg-bg2 pl-1'>
                <h1 className='font-bold text-lg'>Attendance Bonus</h1>
                <h1 className='text-xs'>Get your rewards based on consecutive login days</h1>
                <div className='grid grid-cols-2 mt-2'>
                    <div className='col-span-1 px-2'>
                        <div className='h-16 w-full bg-no-repeat sm:h-20 md:h-16 mt-3'
                            style={{
                                backgroundImage: `url(${bookmark})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <h1 className='text-red text-xs text-nowrap  sm:text-center font-bold pt-2'>Attendance Consecutively</h1>
                            <h1 className='text-red text-xs text-nowrap text-center font-bold mt-5'>0 Days</h1>
                        </div>
                        <h1 className='mt-3 sm:mt-6 md:mt-3 text-lg font-bold'>Accumulated </h1>
                        <h1 className='flex items-center gap-2'>0.00
                            <HiArrowPathRoundedSquare className=' text-base sm:text-xl md:text-base'/>
                        </h1>
                        <Link to="/activity/gamerule" ><button className='bg-bg3 rounded-full w-full font-bold text-xs py-2 mt-10 sm:mt-[5.5rem] md:mt-10'>Game rule</button></Link>
                    </div>
                    <div className='w-full h-56 sm:h-[19rem] md:h-56 bg-no-repeat px-2'
                        style={{
                            backgroundImage: `url(${bggifts})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                        }}
                    >
                        <Link to="/activity/attendacehistory" > <button className='bg-bg3 rounded-full w-full font-bold text-xs py-2 mt-[11.3rem] sm:mt-[16rem] md:mt-[11.2rem]'> Attendance History</button></Link>
                    </div>
                </div>
            </div>
            <div className="mt-5 mx-2">
                <div className=' grid grid-cols-2 gap-2'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-bg3 rounded-b-lg flex flex-col justify-center items-center"
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
                            <p className="mt-2 text-xs mb-7">{item.duration}</p>
                        </div>
                    ))}
                </div>
                <div className=' xsm:mt-2 bg-no-repeat w-full rounded-lg h-40 md:h-32 grid grid-cols-2'
                    style={{
                        backgroundImage: `url(${giftsbelow})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}
                >
                    <div></div>
                    <div className=' flex flex-col justify-center items-center font-bold'>
                        <p className=' flex items-center justify-center'>
                            <span className="left-0 w-5 h-px bg-white"></span>
                            <span className='px-2'> ₹6000.00</span>
                            <span className="right-0 w-5 h-px bg-white"></span>
                        </p>
                        <p className='text-xs'>7 Day</p>
                    </div>
                </div>
                <div>
                    <button className='bg-bg3 rounded-full w-full font-bold text-sm py-2 mb-5 xsm:my-10'>Attendance</button>
                </div>
            </div>
        </div>
    )
}

export default AttendanceBonus