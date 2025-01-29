import { HiArrowPathRoundedSquare } from 'react-icons/hi2'
import usdt_icon from '../../assets/images/usdt_icon.png'
import depo_wallet from '../../assets/icons/depo_wallet.png'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import depositbg from "../../assets/usaAsset/wallet/depositbg.png"
import chip from "../../assets/usaAsset/wallet/chip.png"
import plus from "../../assets/usaAsset/wallet/plus.png"
import axios from 'axios';
import apis from '../../utils/apis'
import { toast } from 'react-toastify';

function Withdrawal() {
    const [activeModal, setActiveModal] = useState(0);
    const [payModesList, setPayModesList] = useState(0);
    const [bankInput, setBankInput] = useState(0);
    const [usdtInput, setUSDTInput] = useState(0);
    const [viewAccountDetails, setViewAccountDetails] = useState(null)
    const [myDetails, setMyDetails] = useState(null)
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const toggleModal = (modalType) => {
        setActiveModal((prev) => (prev === modalType ? modalType : modalType));
    };
    const accountView = async (userid) => {
        if (!userId) {
            toast.error("User not logged in");
            navigate("/login");
            return;
        }
        try {
            const res = await axios.get(`${apis.accountView}?userid=${userid}`)
            if (res?.data?.status === "200") {
                setViewAccountDetails(res?.data?.data)
            }
        } catch (err) {
            toast.error(err)
        }
    }
console.log("myDetails",myDetails)
    const profileDetails = async (userId) => {
        if (!userId) {
            toast.error("User not logged in");
            navigate("/login");
            return;
        }
        try {
            const res = await axios.get(`${apis.profile}${userId}`);
            if (res?.data?.success === 200) {
                setMyDetails(res?.data)
            }
        } catch (err) {
            toast.error(err);
        }
    };
    const getPayModes = async () => {
        try {
            const res = await axios.get(apis.payModes)
            if (res?.data?.status == 200) {
                setPayModesList(res?.data?.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getPayModes()
    }, [])
    useEffect(() => {
        if (userId) {
            profileDetails(userId);
            accountView(userId);
        }
    }, [userId]);

    const payoutWithdrawHandler = async () => {
        if (!userId && !viewAccountDetails[0]?.id) {
            toast.error("User not logged in");
            navigate("/login");
            return;
        }
        const payload = {
            user_id: userId,
            account_id: viewAccountDetails[0]?.id,
            type: activeModal,
            amount: bankInput
        }
        // console.log("payload", payload)

        try {
            const res = await axios.post(apis?.payout_withdraw, payload)
            console.log(res)
            if (res?.data?.status === 200) {
                toast.success(res?.data?.message)
            } else {
                toast.error(res?.data?.message)
            }
        } catch (err) {
            toast.error(err)
        }
    }
    return (
        <div className='px-3 h-full bg-white'>
            <div className='h-40 w-full object-fill bg-no-repeat  rounded-lg p-2'
                style={{
                    backgroundImage: `url(${depositbg})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            >
                <p className='flex items-center gap-4 mt-5'>
                    <p><img className='w-5 h-5' src={depo_wallet} alt="ds" /></p>
                    <p>Availale Balance</p>
                </p>
                <p className='mt-2 text-2xl flex items-center gap-2 font-bold'>
                    <p>₹ {myDetails?.data?.wallet + myDetails?.data?.third_party_wallet}</p>
                    <HiArrowPathRoundedSquare onClick={() => profileDetails(userId)} className=' ' size={22} />
                </p>

            </div>
            <div className="w-full grid grid-cols-3 gap-3 mt-2">
                {payModesList && payModesList?.map((item, i) => (
                    <div
                        onClick={() => toggleModal(item?.type)}
                        key={i}
                        className={`col-span-1 mb-2 p-4 rounded-md flex flex-col items-center text-xsm justify-evenly ${item?.type == activeModal ? "bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white" : "bg-white text-gray"
                            } shadow-md text-lightGray`}
                    >
                        <img className='w-10 h-10' src={item.image} alt="UPI Payment" />
                        <p className='text-nowrap'>{item?.name}</p>
                    </div>
                ))}
            </div>
            {/* Modals */}
            {(activeModal == 0 || activeModal == 1) && (
                <div className="mt-5 ">
                    <div className='bg-inputBg rounded-lg p-2'>
                        {viewAccountDetails && viewAccountDetails.length > 0 ?
                            <div>
                                <div className='text-gray text-xs border-b-[1px] border-dotted py-2'>
                                    <p className='text-gray'> <b>Bank name:</b>&nbsp;<span className='text-lightGray'>{viewAccountDetails[0]?.bank_name}</span>  </p>
                                    <p> <b>Recipient&apos;s Name:</b> &nbsp;<span className='text-lightGray'>{viewAccountDetails[0]?.name}</span>  </p>
                                    <p> <b>Account Number:</b> &nbsp; <span className='text-lightGray'>{viewAccountDetails[0]?.account_num}</span>  </p>
                                    <p> <b>IFSC:</b> &nbsp; <span className='text-lightGray'>{viewAccountDetails[0]?.ifsc_code}</span>  </p>
                                </div>
                                <Link to="/customerservices" className='text-xsm w-full flex items-end justify-end text-redLight'>Change bank card information</Link>
                            </div>
                            : <button className='w-full'>
                                <Link to="/wallet/withdrawal/addbankaccount" className="flex flex-col items-center rounded-l-full text-sm p-1" >
                                    <img className='w-12 h-12' src={plus} alt="sd" />
                                    <h3 className="text-xsm mt-2 text-blackLight flex items-center ">
                                        Add a bank account number
                                    </h3>
                                </Link>
                            </button>}
                    </div>
                    <div className='bg-white rounded-lg p-2 mt-3 mb-20'>
                        <p className='text-xs text-redLight'>Need to add beneficiary information to be able to withdraw money</p>
                        <div className='bg-inputBg rounded-md p-3 flex mt-3 items-center justify-center'>
                            <div className="flex items-center bg-white w-full rounded-full text-sm p-2">
                                <div className="w-8 flex items-center justify-center text-xl font-bold text-bg2">₹</div>
                                <div className="w-[1px] mx-2 flex items-center justify-center bg-lightGray h-5"></div>
                                <input
                                    onChange={(e) => setBankInput(e.target.value)}
                                    type="number"
                                    placeholder="Please enter the amount"
                                    className="w-full p-1 bg-white border-none focus:outline-none text-redLight placeholder:text-lightGray text-xsm"
                                />
                            </div>

                        </div>
                        <button onClick={payoutWithdrawHandler} className={`mt-4 w-full ${bankInput ? "bg-gradient-to-r from-[#B5885F] to-[#D6B088]" : "bg-gradient-to-l from-[#cfd1de] to-[#c7c9d9]"}  text-white py-3 rounded-full border-none text-xsm `}>
                            Withdraw
                        </button>

                        <div className='mt-10' >
                            <ul className="px-2 py-4 my-2 bg-inputBg  rounded-lg text-xs  text-blackLight">
                                <li className="flex items-start">
                                    <span className="text-redLight  mr-2">◆</span>
                                    Need to bet <p className='text-redLight'> &nbsp; ₹0.00&nbsp;</p> to be able to withdraw.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight  mr-2">◆</span>
                                    Withdraw time: <p className='text-redLight'>&nbsp;00:00-23:59&nbsp;</p>
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight  mr-2">◆</span>
                                    Inday Remaining Withdrawal Times  <p className='text-redLight'>&nbsp;3&nbsp;</p>
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight  mr-2">◆</span>
                                    Withdrawal amount range  <p className='text-redLight'>&nbsp;₹{myDetails?.india_pay?.min_amount.toFixed(2)} - ₹{myDetails?.india_pay?.max_amount.toFixed(2)}&nbsp;</p>
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight  mr-2">◆</span>
                                    Please confirm your beneficial account information before withdrawing.If your information is incorrect, our company will not be liable for the amount of loss
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight  mr-2">◆</span>
                                    If your beneficial information is incorrect, please contact to customer service.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
            }

            {
                activeModal == 2 && (
                    <div className="mt-5 ">
                        <div className='bg-inputBg rounded-lg p-2'>
                            <button className='w-full'>
                                <Link to="/wallet/withdrawal/addusdtwalletaddress" className="flex flex-col items-center rounded-l-full text-sm mt-3 p-1" >
                                    <img className='w-12 h-12' src={plus} alt="sd" />
                                    <h3 className="text-xsm mt-2 text-blackLight flex items-center ">
                                        Add address
                                    </h3>
                                </Link>
                            </button>
                        </div>
                        <div className='bg-white rounded-lg p-2 mt- mb-10'>
                            <p className='text-xs text-redLight'>Need to add beneficiary information to be able to withdraw money</p>
                            <div className='bg-inputBg rounded-md p-3 flex flex-col mt-3 items-center justify-center'>
                                <div className="flex items-center bg-white w-full rounded-full text-sm p-2">
                                    <div className="w-8 flex items-center justify-center text-xl font-bold text-bg2">$</div>
                                    <div className="w-[1px] mx-2 flex items-center justify-center bg-lightGray h-5"></div>
                                    <input
                                        onChange={(e) => setUSDTInput(e.target.value)}
                                        type="number"
                                        placeholder="Please enter the amount"
                                        className="w-full p-1 bg-white border-none focus:outline-none text-redLight placeholder:text-lightGray text-xsm"
                                    />
                                </div>
                                <div className="flex items-center bg-white w-full rounded-full text-sm mt-3 p-2">
                                    <div className="w-8 flex items-center justify-center text-xl font-bold text-bg2">₹</div>
                                    <div className="w-[1px] mx-2 flex items-center justify-center bg-lightGray h-5"></div>
                                    <p
                                        className="w-full p-1 bg-white border-none focus:outline-none text-redLight placeholder:text-lightGray text-xsm"
                                    >{usdtInput * myDetails?.usdt_payout_amount}</p>
                                </div>
                            </div>

                            {/* <p className='text-gray text-xs font-bold mt-2 flex'>Withdrawal balance &nbsp;<p className='text-bg3'>₹ 400.00</p></p> */}
                            <button onClick={payoutWithdrawHandler} className={`mt-4 w-full ${usdtInput ? "bg-gradient-to-r from-[#B5885F] to-[#D6B088]" : "bg-gradient-to-l from-[#cfd1de] to-[#c7c9d9]"}  text-white py-3 rounded-full border-none text-xsm `}>
                                Withdraw
                            </button>
                            <div className='mt-10' >
                                <ul className="px-2 py-4 my-2 bg-inputBg  rounded-lg text-xs text-blackLight">
                                    <li className="flex items-start">
                                        <span className="text-redLight  mr-2">◆</span>
                                        Need to bet <p className='text-redLight'> &nbsp; $0.00&nbsp;</p> to be able to withdraw.
                                    </li>
                                    <li className="flex items-start mt-2">
                                        <span className="text-redLight  mr-2">◆</span>
                                        Withdraw time: <p className='text-redLight'>&nbsp;00:00-23:59&nbsp;</p>
                                    </li>
                                    <li className="flex items-start mt-2">
                                        <span className="text-redLight  mr-2">◆</span>
                                        Inday Remaining Withdrawal Times  <p className='text-redLight'>&nbsp;3&nbsp;</p>
                                    </li>
                                    <li className="flex items-start mt-2">
                                        <span className="text-redLight  mr-2">◆</span>
                                        Withdrawal amount range <p className='text-redLight'>&nbsp;${myDetails?.usdt?.min_amount.toFixed(2)} - ${myDetails?.usdt?.max_amount.toFixed(2)}&nbsp;</p>
                                    </li>
                                    <li className="flex items-start mt-2">
                                        <span className="text-redLight  mr-2">◆</span>
                                        Please confirm your beneficial account information before withdrawing.If your information is incorrect, our company will not be liable for the amount of loss
                                    </li>
                                    <li className="flex items-start mt-2">
                                        <span className="text-redLight  mr-2">◆</span>
                                        If your beneficial information is incorrect, please contact to customer service.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default Withdrawal