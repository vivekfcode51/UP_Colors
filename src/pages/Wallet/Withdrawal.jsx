import { HiArrowPathRoundedSquare } from 'react-icons/hi2'
import depo_wallet from '../../assets/icons/depo_wallet.png'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import plus from "../../assets/usaAsset/wallet/plus.png"
import withdrawBg from "../../assets/usaAsset/wallet/withdrawBg.png"
import axios from 'axios';
import apis from '../../utils/apis'
import { toast } from 'react-toastify';

function Withdrawal() {
    const [amountError, setAmountError] = useState("");
    const [amountErrorUSDT, setAmountErrorUSDT] = useState("");
    const [paymenLimts, setPaymenLimts] = useState({})
    const [upiAmount, setUpiAmount] = useState(300);
    const [upiAmountKuber, setUpiAmountKuber] = useState(10000);
    const [usdtAmount, setUsdtAmount] = useState(10)
    const [activeModal, setActiveModal] = useState(0);
    const [payModesList, setPayModesList] = useState(0);
    const [viewAccountDetails, setViewAccountDetails] = useState(null)
    const [viewAccountDetailsUSDT, setViewAccountDetailsUSDT] = useState(null)
    const [myDetails, setMyDetails] = useState(null)
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const toggleModal = (modalType) => {
        setActiveModal((prev) => (prev === modalType ? modalType : modalType));
    };

    const getPaymentLimits = async () => {
        try {
            const res = await axios.get(`${apis.getPaymentLimits}`);
            if (res?.data?.status === 200) {
                setPaymenLimts(res?.data?.data)
            }
        } catch (err) {
            toast.error(err);
        }
    };
    const validateAmount = (amount) => {
        // console.log("amount", amount)
        if (!paymenLimts) return;
        let minAmount, maxAmount;
        if (activeModal == 2) {
            minAmount = paymenLimts?.USDT_minimum_withdraw;
            maxAmount = paymenLimts?.USDT_maximum_withdraw;
        } else if (activeModal == 1) {
            minAmount = paymenLimts?.kuber_pay_minimum_withdraw
            maxAmount = paymenLimts?.kuber_pay_maximum_withdraw
        } else {
            minAmount = paymenLimts?.indin_pay_minimum_withdraw;
            maxAmount = paymenLimts?.indin_pay_maximum_withdraw;
        }
        amount = Number(amount);
        if (isNaN(amount) || amount < minAmount || amount > maxAmount) {
            setAmountError(`Amount must be between ₹${minAmount} - ₹${maxAmount}`);
            setAmountErrorUSDT(`Amount must be between $${minAmount} - $${maxAmount}`);
        } else {
            setAmountError("");
            setAmountErrorUSDT("");
        }
    };
    useEffect(() => {
        if (activeModal == 2) {
            validateAmount(usdtAmount);
        } else if (activeModal == 1) {
            validateAmount(upiAmountKuber);
        } else if (activeModal == 0) {
            validateAmount(upiAmount);
        }
    }, [activeModal]);
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
    const accountViewUSDT = async () => {
        if (!userId) {
            toast.error("User not logged in");
            navigate("/login");
            return;
        }
        try {
            const res = await axios.get(`${apis.usdt_account_view}${userId}`);
            if (res?.data?.status === 200) {
                setViewAccountDetailsUSDT(res?.data?.data);
            } else {
                toast.error("Error: " + res?.data?.message);
            }
        } catch (err) {
            console.error("API Error:", err);
            toast.error("Something went wrong");
        }
    };

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
        getPaymentLimits()
    }, [])
    useEffect(() => {
        if (userId) {
            profileDetails(userId);
            accountView(userId);
            accountViewUSDT();
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
            amount: activeModal == 0 ? upiAmount : activeModal == 1 ? upiAmountKuber : activeModal == 2 ? usdtAmount : null
        }
        console.log("payload", payload)
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
                    backgroundImage: `url(${withdrawBg})`,
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
            {(activeModal == 0) && (
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
                        {amountError && <p className="text-red text-xs mt-2">{amountError}</p>}
                        <div className='bg-inputBg rounded-md p-3 flex mt-3 items-center justify-center'>
                            <div className="flex items-center bg-white w-full rounded-full text-sm p-2">
                                <div className="w-8 flex items-center justify-center text-xl font-bold text-bg2">₹</div>
                                <div className="w-[1px] mx-2 flex items-center justify-center bg-lightGray h-5"></div>
                                <input
                                    value={ upiAmount}
                                    onChange={(e) => {
                                        const numericAmount = Number(e.target.value);
                                        setUpiAmount(numericAmount);
                                        validateAmount(numericAmount);
                                    }}
                                    type="number"
                                    placeholder="Please enter the amount"
                                    className="w-full p-1 bg-white border-none focus:outline-none text-redLight placeholder:text-lightGray text-xsm"
                                />
                            </div>
                        </div>
                        <button onClick={payoutWithdrawHandler} className={`mt-4 w-full ${upiAmount>=paymenLimts?.indin_pay_minimum_withdraw ? "bg-gradient-to-r from-red to-redLight" : "bg-gradient-to-l from-[#cfd1de] to-[#c7c9d9]"}  text-white py-3 rounded-full border-none text-xsm `}>
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
                                    Withdrawal amount range  <p className='text-redLight'>&nbsp;₹{paymenLimts?.indin_pay_minimum_withdraw?.toFixed(2)} - ₹{paymenLimts?.indin_pay_maximum_withdraw?.toFixed(2)}&nbsp;</p>
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
            )}
            {(activeModal == 1) && (
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
                        {amountError && <p className="text-red text-xs mt-2">{amountError}</p>}
                        <div className='bg-inputBg rounded-md p-3 flex mt-3 items-center justify-center'>
                            <div className="flex items-center bg-white w-full rounded-full text-sm p-2">
                                <div className="w-8 flex items-center justify-center text-xl font-bold text-bg2">₹</div>
                                <div className="w-[1px] mx-2 flex items-center justify-center bg-lightGray h-5"></div>
                                <input
                                    value={upiAmountKuber}
                                    onChange={(e) => {
                                        const numericAmount = Number(e.target.value);
                                        setUpiAmountKuber(numericAmount);
                                        validateAmount(numericAmount);
                                    }}
                                    type="number"
                                    placeholder="Please enter the amount"
                                    className="w-full p-1 bg-white border-none focus:outline-none text-redLight placeholder:text-lightGray text-xsm"
                                />
                            </div>
                        </div>
                        <button onClick={payoutWithdrawHandler} className={`mt-4 w-full ${upiAmountKuber>=paymenLimts?.kuber_pay_minimum_withdraw ? "bg-gradient-to-r from-[#B5885F] to-[#D6B088]" : "bg-gradient-to-l from-[#cfd1de] to-[#c7c9d9]"}  text-white py-3 rounded-full border-none text-xsm `}>
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
                                    Withdrawal amount range  <p className='text-redLight'>&nbsp;₹{paymenLimts?.kuber_pay_minimum_withdraw.toFixed(2)} - ₹{paymenLimts?.kuber_pay_maximum_withdraw.toFixed(2)}&nbsp;</p>
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
            )}

            {
                activeModal == 2 && (
                    <div className="mt-5 ">
                        <div className='bg-inputBg rounded-lg p-2'>
                            {viewAccountDetailsUSDT && viewAccountDetailsUSDT.length > 0 ?
                                <div>
                                    <div className='text-gray text-xs border-b-[1px] border-dotted py-2'>
                                        <p className='text-gray'> <b>Name:</b>&nbsp;<span className='text-lightGray'>{viewAccountDetailsUSDT[0]?.name}</span>  </p>
                                        <p> <b>USDT Address:</b> &nbsp;<span className='text-lightGray'>{viewAccountDetailsUSDT[0]?.usdt_wallet_address}</span>  </p>
                                        <p> <b>Created at:</b> &nbsp;<span className='text-lightGray'>{viewAccountDetailsUSDT[0]?.created_at}</span>  </p>
                                    </div>
                                    <Link to="/customerservices" className='text-xsm w-full flex items-end justify-end text-redLight'>Change bank card information</Link>
                                </div>
                                : <button className='w-full'>
                                    <Link to="/wallet/withdrawal/addusdtwalletaddress" className="flex flex-col items-center rounded-l-full text-sm mt-3 p-1" >
                                        <img className='w-12 h-12' src={plus} alt="sd" />
                                        <h3 className="text-xsm mt-2 text-blackLight flex items-center ">
                                            Add address
                                        </h3>
                                    </Link>
                                </button>}
                        </div>
                        <div className='bg-white rounded-lg p-2 mt- mb-10'>
                            <p className='text-xs text-redLight'>Need to add beneficiary information to be able to withdraw money</p>
                            {amountErrorUSDT && <p className="text-red text-xs mt-2">{amountErrorUSDT}</p>}
                            <div className='bg-inputBg rounded-md p-3 flex flex-col mt-3 items-center justify-center'>
                                <div className="flex items-center bg-white w-full rounded-full text-sm p-2">
                                    <div className="w-8 flex items-center justify-center text-xl font-bold text-bg2">$</div>
                                    <div className="w-[1px] mx-2 flex items-center justify-center bg-lightGray h-5"></div>
                                    <input
                                        value={usdtAmount}
                                        onChange={(e) => {
                                            const numericAmount = Number(e.target.value);
                                            setUsdtAmount(numericAmount);
                                            validateAmount(numericAmount);
                                        }}
                                        // onChange={(e) => setUsdtAmount(e.target.value)}
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
                                    >{usdtAmount * paymenLimts?.withdraw_conversion_rate}</p>
                                </div>
                            </div>
                            <button onClick={payoutWithdrawHandler} className={`mt-4 w-full ${usdtAmount>=paymenLimts?.USDT_minimum_withdraw ? "bg-gradient-to-r from-[#B5885F] to-[#D6B088]" : "bg-gradient-to-l from-[#cfd1de] to-[#c7c9d9]"}  text-white py-3 rounded-full border-none text-xsm `}>
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
                                        Withdrawal amount range <p className='text-redLight'>&nbsp;${paymenLimts?.USDT_minimum_withdraw.toFixed(2)} - ${paymenLimts?.USDT_maximum_withdraw.toFixed(2)}&nbsp;</p>
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