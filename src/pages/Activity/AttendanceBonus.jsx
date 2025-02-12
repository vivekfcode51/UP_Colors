
import UnsignInTop from '../../assets/images/UnsignInTop.png'
import coingifts from '../../assets/images/coingifts.png'
import activityGift from '../../assets/usaAsset/activity/activityGift.png'
import bg_gifts from '../../assets/usaAsset/activity/bg_gifts.png'
import { Link } from 'react-router-dom'
import { HiArrowPathRoundedSquare } from 'react-icons/hi2'
import no_data_available from "../../assets/images/no_data_available.png"
import apis from '../../utils/apis';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../reusable_component/Loader/Loader'
function AttendanceBonus() {
    const [loading, setLoading] = useState(false);
    const [attendanceHistoryData, setAttenddanceHistory] = useState([])
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate()
    const attendanceHistory = async () => {
        setLoading(true)
        if (!userId) {
            toast.error("User not logged in");
            navigate("/login");
            return;
        }
        try {
            const res = await axios.get(`${apis.attendanceList}${userId}`)
            if (res?.data?.status === 200) {
                setLoading(false)
                setAttenddanceHistory(res?.data)
            } else {
                setLoading(false)
                toast.error(res?.data?.message)
            }
        } catch (err) {
            setLoading(false)
            toast.error(err)
        }
    }
    useEffect(() => {
        if (userId) {
            attendanceHistory()
        }
    }, [userId])

    const ClaimAttendance = async (userId) => {
        setLoading(true)
        const payload = {
            userid: userId
        }
        // console.log("payload",payload)
        try {
            const res = await axios.post(apis.attendanceClaim, payload)
            // console.log("res",res)
            if (res?.data?.status === 200) {
                setLoading(false)
                attendanceHistory()
                toast.success(res?.data?.message)
            } else if (res?.data?.status === 400) {
                setLoading(false)
                toast.error(res?.data?.message)
            }
        } catch (err) {
            setLoading(false)
            console.error("Error:", err?.response?.data || err.message);
            toast.error(err?.response?.data?.message || "Something went wrong");
        }

    }
    // ];
    // console.log("attendanceHistoryData", attendanceHistoryData)
    return (
        <div className='font-roboto'>
            {loading && <Loader setLoading={setLoading} loading={loading} />}
            <div className='bg-gradient-to-l from-red to-redLight pl-1'>
                <div className='grid grid-cols-2 pt-10'>
                    <div className='col-span-1 px-2 pb-5'>
                        <div className='flex flex-col justify-between'>
                            <h1 className='font-bold text-lg'>Attendance Bonus</h1>
                            <h1 className='text-xsm font-bold'>Get rewards based on consecutive login days</h1>
                            <h1 className=' text-xsm text-nowrap  xsm:text-center z-50 font-bold pt-2'>Attendance Consecutively {attendanceHistoryData?.attendances_consecutively} Days</h1>
                            <h1 className='mt-3 text-lg font-bold'>Accumulated </h1>
                            <h1 className='flex items-center gap-2 text-[#ffbd40]'>₹{attendanceHistoryData?.accumulated}
                                <HiArrowPathRoundedSquare onClick={attendanceHistory} className=' text-base sm:text-xl md:text-base' />
                            </h1>
                        </div>
                        <Link className='flex justify-center mt-2' to="/activity/gamerule" ><button className='bg-gradient-to-b from-[#ffbd40] to-[#ff7f3d] rounded-full px-10 text-xsm font-bold py-2 '>Game rule</button></Link>
                    </div>
                    <div className='col-span-1 flex flex-col  px-2'>
                        <img className='z-40 -mt-2 w-56 h-[13.8rem] object-fill' src={bg_gifts} alt="ds" />
                        <Link className='z-50 -mt-11 flex justify-center' to="/activity/attendacehistory" > <button className='bg-gradient-to-b from-[#ffbd40] to-[#ff7f3d] rounded-full  text-xsm font-bold p-2'> Attendance History</button></Link>
                    </div>
                </div>
            </div>
            <div className="mt-5 p-2 bg-inputBg">
                <div className=' grid grid-cols-2 gap-2'>
                    {attendanceHistoryData?.data?.map((item, index) => (
                        <div
                            key={index}
                            className={`${item?.status === "0" ? "bg-lightGray" : "bg-white"} rounded-b-lg flex flex-col justify-center items-center`}
                        >
                            <div
                                className="w-full bg-no-repeat text-sm flex items-center justify-center h-10 -mt-0.5"
                                style={{
                                    backgroundImage: `url(${UnsignInTop})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                }}
                            >
                                ₹ {item?.attendance_bonus}
                            </div>
                            <img src={coingifts} className="w-16 h-16 mt-4" alt="icon" />
                            <p className={`mt-2 text-xsm ${item?.status === "0" ? "text-white" : "text-lightGray"} mb-7`}>{item.id} Day</p>
                        </div>
                    ))}
                </div>
                <div className=' mt-2 bg-no-repeat bg-white w-full rounded-lg p-2 grid grid-cols-2'
                >
                    <div> <img src={activityGift} alt="sd" /> </div>
                    <div className=' flex flex-col justify-center text-black items-center text-xsm'>
                        <p className=' flex items-center justify-center'>
                            <span className="left-0 w-5 h-px bg-white"></span>
                            <span className='px-2'> ₹{attendanceHistoryData?.data?.length > 0 && attendanceHistoryData?.data[6]?.attendance_bonus}</span>
                            <span className="right-0 w-5 h-px bg-white"></span>
                        </p>
                        <p className='text-xs'>{attendanceHistoryData?.data?.length > 0 && attendanceHistoryData?.data[6]?.id} Day</p>
                    </div>
                </div>
            </div>
            <div className='px-2 mb-5'>
                <button onClick={() => ClaimAttendance(userId)} className='bg-gradient-to-b from-red to-redLight rounded-full w-full text-sm py-1 my-10'>Attendance</button>
            </div>
        </div>
    )
}

export default AttendanceBonus