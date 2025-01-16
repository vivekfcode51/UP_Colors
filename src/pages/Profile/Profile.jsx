import { useEffect, useState } from 'react'
import { HiMiniArrowPathRoundedSquare } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setProfileDetails } from "../../features/ProfileDetailsSlice"
import pro_deposit from "../../assets/icons/pro_deposit.png"
import walletnew from "../../assets/icons/walletnew.png"
import withdraw_history from "../../assets/icons/withdraw_history.png"
import pro_withdraw from "../../assets/icons/pro_withdraw.png"
import pro_vip from "../../assets/icons/pro_vip.png"
import profilevip1 from "../../assets/icons/profilevip1.png"
import pro_notification from "../../assets/icons/pro_notification.png"
import notification from "../../assets/icons/notification.png"
import gift from "../../assets/icons/gift.png"
import bet_history from "../../assets/icons/bet_history.png"
import trans_history from "../../assets/icons/trans_history.png"
import rechargeHistory from "../../assets/icons/rechargeHistory.png"
import setting from "../../assets/icons/setting.png"
import feedback from "../../assets/icons/feedback.png"
import customer from "../../assets/icons/customer.png"
import big_guide from "../../assets/icons/big_guide.png"
import aboutus from "../../assets/icons/aboutus.png"
import { FaRegCopy } from 'react-icons/fa'
import { LiaSignOutAltSolid } from 'react-icons/lia'
import { MdKeyboardArrowRight } from 'react-icons/md'
import axios from 'axios';
import { toast } from 'react-toastify';
import apis from '../../utils/apis'
const profileApi = apis.profile

function Profile() {
    const [myDetails, setMyDetails] = useState(null)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = localStorage.getItem("userId");
    const avatar = "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg";

    const logoutHandler = () => {
        localStorage.removeItem("userId");
        navigate("/login");
    };

    const profileDetails = async (userId) => {
        if (!userId) {
            toast.error("User not logged in");
            navigate("/login");
            return;
        }
        try {
            const res = await axios.get(`${profileApi}${userId}`);
            if (res?.status === 200) {
                setMyDetails(res?.data)
                dispatch(setProfileDetails({ total_wallet: res.data.total_wallet }))
            }
        } catch (err) {
            toast.error(err);
        }
    };

    useEffect(() => {
        if (userId) {
            profileDetails(userId);
        }
    }, [userId]);

    const handleCopyUID = () => {
        if (myDetails?.u_id) {
            navigator.clipboard
                .writeText(myDetails.u_id)
                .then(() => {
                    toast.success('UID copied to clipboard!');
                })
                .catch(() => {
                    toast.error('Failed to copy UID.');
                });
        } else {
            toast.error('UID is not available.');
        }
    };
    // console.log("myDetailsmyDetails", myDetails?.total_wallet)
    return (
        <div className='h-full w-full mb-72 sm:mb-[27rem] md:mb-72 3xl:mb-40'>
            {/* balance div */}
            <div className='bg-bg2 relative h-[35%] sm:h-[42%] md:h-[35%] 3xl:h-[30%] px-3 flex justify-center rounded-b-[2rem]'>
                <div className='grid grid-cols-4 px-3'>
                    <div className='col-span-1 flex items-center -mt-20 justify-center'>
                        <img src={myDetails?.userimage ? myDetails?.userimage : avatar} className='rounded-full' alt="not found" />
                    </div>
                    <div className='col-span-3 flex flex-col justify-center -mt-20 px-2'>
                        <div className=' flex items-center justify-start gap-2'>
                            <p className='capitalise text-sm sm:text-2xl md:text-lg'>{myDetails?.username}</p>
                            <img className='h-6 w-14 sm:h-8 sm:16 md:h-6 md:w-14' src={profilevip1} alt="not found" />
                        </div>
                        <div className='mt-3 bg-yellow text-sm sm:text-lg md:text-sm rounded-full w-48 sm:w-64 md:w-48 flex items-center justify-center '>
                            UID &nbsp;&nbsp;|&nbsp;&nbsp;{myDetails?.u_id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleCopyUID}> <FaRegCopy /></button>
                        </div>
                        <div className='mt-1 text-xs sm:text-sm md:text-xs'>Last Login : {myDetails?.last_login_time}</div>
                    </div>
                </div>
                <div className="absolute bg-bg4 left-3 right-3 top-40 sm:top-52 md:top-40 px-3 pt-3 pb-6 rounded-md text-sm sm:text-xl md:text-sm">
                    <h1 className='text-gray '>Total balance</h1>
                    <p className='flex items-center'> <b className='text-xl'>₹</b> &nbsp;  {myDetails?.total_wallet} &nbsp; &nbsp; <span><HiMiniArrowPathRoundedSquare onClick={() => profileDetails(userId)} className='text-gray text-xl' />
                    </span></p>
                    <div className='grid grid-cols-4 mt-8'>
                        <Link className='col-span-1 flex flex-col items-center justify-center' to="/wallet">
                            <img src={walletnew} className='h-8 w-8 sm:h-12 md:h-8 sm:w-12 md:w-8' alt="not fond" />
                            <p className=''> Wallet</p>
                        </Link>
                        <Link className='col-span-1 flex flex-col items-center justify-center' to="/wallet/deposit">
                            <img src={pro_deposit} className='h-8 w-8 sm:h-12 md:h-8 sm:w-12 md:w-8' alt="not fond" />
                            <p className=''>  Deposit</p>
                        </Link>
                        <Link className='col-span-1 flex flex-col items-center justify-center' to="/wallet/withdrawal">
                            <img src={pro_withdraw} className='h-8 w-8 sm:h-12 md:h-8 sm:w-12 md:w-8' alt="not fond" />
                            <p className=''> Withdraw</p>
                        </Link>
                        <Link className='col-span-1 flex flex-col items-center justify-center' to="/vip">
                            <img src={pro_vip} className='h-8 w-8 sm:h-12 md:h-8 sm:w-12 md:w-8' alt="not fond" />
                            <p className=''> VIP</p>
                        </Link>
                    </div>
                </div>
            </div>
            {/* 2dn div */}
            {/* <div className='grid grid-cols-6 bg-bg2 rounded-md  p-2 mt-24 sm:mt-32 md:mt-24 mx-3 '>
                <div className='col-span-1 flex items-center  justify-center'>
                    <img src={vault} className='rounded-full h-12 w-12' alt="not found" />
                </div>
                <div className='col-span-5 flex flex-col justify-center  pl-2'>
                    <div className=' flex items-center justify-between'>
                        <p className='font-bold text-sm sm:text-xl md:text-sm'>Safe</p>
                        <div className='flex items-center justify-center '>

                            <div className=' bg-yellow text-sm sm:text-lg md:text-sm rounded-full w-16 sm:w-16 md:w-16 flex items-center justify-center '>
                                ₹ &nbsp;  0.00
                            </div>
                            &nbsp; <MdKeyboardArrowRight size={25} className="text-gray" />
                        </div>
                    </div>

                    <div className=' text-xs sm:text-sm md:text-xs'>The daily interest rate is 0.1%,and the income is calculated once every 1 minutes</div>
                </div>
            </div> */}
            {/* 3rd div */}
            <div className='grid grid-cols-2 mx-3 gap-2 mt-24 sm:mt-32 md:mt-28'>
                <button >
                    <Link to="/gamehistory" className='col-span-1 px-2 py-4 rounded-md flex items-center bg-bg2 justify-start' >
                        <img src={bet_history} className='rounded-full h-10 w-10' alt="not found" />
                        <div>
                            <h1 className='text-sm sm:text-xl md:text-sm'>Game History</h1>
                            <h1 className=' text-xs sm:text-sm md:text-xs text-gray'> My Game History</h1>
                        </div>
                    </Link>
                </button>
                <button >
                    <Link to="/alltransactionhistory" className='col-span-1 px-2 py-4 rounded-md flex items-center bg-bg2 justify-start' >
                        <img src={trans_history} className='rounded-full h-10 w-10' alt="not found" />
                        <div>
                            <h1 className='text-sm sm:text-xl md:text-sm'>Transaction</h1>
                            <h1 className=' text-xs sm:text-sm md:text-xs text-gray'> My Transaction History</h1>
                        </div>
                    </Link>
                </button>
                <button >
                    <Link to="/wallet/deposithistory" className='col-span-1 px-2 py-4 rounded-md flex items-center bg-bg2 justify-start' >
                        <img src={rechargeHistory} className='rounded-full h-10 w-10' alt="not found" />
                        <div>
                            <h1 className='text-sm sm:text-xl md:text-sm'>Deposit</h1>
                            <h1 className=' text-xs sm:text-sm md:text-xs text-gray'> My Deposit History</h1>
                        </div>
                    </Link>
                </button>
                <button >
                    <Link to="/wallet/withdrawalhistory" className='col-span-1 px-2 py-4 rounded-md flex items-center bg-bg2 justify-start' >
                        <img src={withdraw_history} className='rounded-full h-10 w-10' alt="not found" />
                        <div>
                            <h1 className='text-sm sm:text-xl md:text-sm'>Withdraw</h1>
                            <h1 className=' text-xs sm:text-sm md:text-xs text-gray'> My Withdraw History</h1>
                        </div>
                    </Link>
                </button>
            </div>

            {/* notification , gifts*/}
            <div className='bg-bg2 mx-3 mt-3 rounded-md'>
                <Link to="/notifications" className='px-2 border-b border-bg1 py-4 text-sm sm:text-lg md:text-sm flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={pro_notification} className='rounded-full h-8 w-8' alt="not found" />&nbsp;Notification
                    </div>
                    <div className='flex items-center'>
                        <p className='bg-red w-7 h-6 rounded-full flex items-center justify-center'>16</p>&nbsp;
                        <MdKeyboardArrowRight size={25} className="text-gray" />
                    </div>
                </Link>
                <Link to="/activity/gifts" className='px-2 border-b border-bg1 py-4 text-sm sm:text-lg md:text-sm flex justify-between items-center' >
                    <div className='flex items-center'>
                        <img src={gift} className='rounded-full h-8 w-8' alt="not found" />&nbsp;Gifts
                    </div>
                    <div className='flex items-end'>
                        <MdKeyboardArrowRight size={25} className="text-gray" />
                    </div>
                </Link>
            </div>

            {/* service center */}
            <div className='mx-3  mt-3 rounded-md px-3 py-4 bg-bg2'>
                <h1 className='text-sm sm:text-lg md:textsm'>Service Center</h1>
                <div className='grid grid-cols-3 my-5'>
                    <button >
                        <Link to="/setting" className='flex flex-col items-center justify-center pt-2'>
                            <img src={setting} className='h-8 w-8 sm:h-10 sm:w-10 md:h-8 md:w-8' alt="not found" />
                            <p className='text-xs sm:text-sm md:text-xs text-gray mt-1'>Settings</p>
                        </Link>
                    </button>
                    <button >
                        <Link to="/feedback" className='flex flex-col items-center justify-center pt-2'>
                            <img src={feedback} className='h-8 w-8 sm:h-10 sm:w-10 md:h-8 md:w-8' alt="not found" />
                            <p className='text-xs sm:text-sm md:text-xs text-gray mt-1'>Feedback</p>
                        </Link>
                    </button>
                    <button >
                        <Link to="/notifications" className='flex flex-col items-center justify-center pt-2'>
                            <img src={notification} className='h-8 w-8 sm:h-10 sm:w-10 md:h-8 md:w-8' alt="not found" />
                            <p className='text-xs sm:text-sm md:text-xs text-gray mt-1'>Notification</p>
                        </Link>
                    </button>
                    <button >
                        <Link to="/customerservices" className='flex flex-col items-center justify-center pt-2'>
                            <img src={customer} className='h-8 w-8 sm:h-10 sm:w-10 md:h-8 md:w-8' alt="not found" />
                            <p className='text-xs sm:text-sm md:text-xs text-gray mt-1'>Customer Service</p>
                        </Link>
                    </button>
                    <button >
                        <Link to="/beginnersguide" className='flex flex-col items-center justify-center pt-2'>
                            <img src={big_guide} className='h-8 w-8 sm:h-10 sm:w-10 md:h-8 md:w-8' alt="not found" />
                            <p className='text-xs sm:text-sm md:text-xs text-gray mt-1'>Beginner&apos;s Guide</p>
                        </Link>
                    </button>
                    <button >
                        <Link to="/aboutus" className='flex flex-col items-center justify-center pt-2'>
                            <img src={aboutus} className='h-8 w-8 sm:h-10 sm:w-10 md:h-8 md:w-8' alt="not found" />
                            <p className='text-xs sm:text-sm md:text-xs text-gray mt-1'>About us</p>
                        </Link>
                    </button>
                </div>
            </div>

            {/* logout button */}
            <div className='mx-3'>
                <button onClick={logoutHandler} className='flex items-center justify-center border border-bg3 mt-10  py-1 rounded-full w-full text-bg3'><LiaSignOutAltSolid className='rotate-[-90deg]' size={30} />  &nbsp;  &nbsp; Logout
                </button>
            </div>

        </div>
    )
}

export default Profile