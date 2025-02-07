import { HiArrowPathRoundedSquare } from 'react-icons/hi2'
import usdt_icon from '../../assets/images/usdt_icon.png'
import depo_wallet from '../../assets/icons/depo_wallet.png'
import { useEffect, useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import bank_card from "../../assets/usaAsset/wallet/bank_card.png"
// import depositbg from "../../assets/usaAsset/wallet/depositbg.png"
// import upi from "../../assets/usaAsset/wallet/upi.png"
// import paytm from "../../assets/usaAsset/wallet/paytm.png"
import rechargeIns from "../../assets/usaAsset/wallet/rechargeIns.png"
import save_wallet from "../../assets/usaAsset/wallet/save_wallet.png"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import apis from '../../utils/apis'
import withdrawBg from "../../assets/usaAsset/wallet/withdrawBg.png"
import Loader from '../../reusable_component/Loader/Loader';

const profileApi = apis.profile
function Deposit() {
    const [loading, setloading] = useState(false);
    const [paymenLimts, setPaymenLimts] = useState({})
    const [amountError, setAmountError] = useState("");
    const [amountErrorUSDT, setAmountErrorUSDT] = useState("");
    const [activeModal, setActiveModal] = useState(0);
    // const [payModesList, setPayModesList] = useState(0);
    const [selectedAmount, setSelectedAmount] = useState(200);
    // const [selectedAmountKuber, setSelectedAmountKuber] = useState(10000);
    const [USDTselectedAmount, setUSDTSelectAmount] = useState(10);
    const [upiAmount, setUpiAmount] = useState(selectedAmount);
    // const [upiAmountKuber, setUpiAmountKuber] = useState(selectedAmountKuber);
    const [usdtAmount, setUsdtAmount] = useState(USDTselectedAmount)
    const depositArray = ["200", "300", "500", "1000", "5000", "10000"]
    // const depositArrayKuberPay = ["10000", "15000", "20000", "30000", "50000", "100000"]
    const USDTDepositArray = ["10", "20", "50", "100", "200", "500", "1000", "2000", "5000"]
    const [myDetails, setMyDetails] = useState(null)
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

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
    // console.log("amount", paymenLimts)
    const validateAmount = (amount) => {
        if (!paymenLimts) return;
        let minAmount, maxAmount;
        if (activeModal == 2) {
            minAmount = paymenLimts?.USDT_minimum_deposit;
            maxAmount = paymenLimts?.USDT_maximum_deposit;
            // } else if (activeModal == 1) {
            //     minAmount = paymenLimts?.kuber_pay_minimum_deposit
            //     maxAmount = paymenLimts?.kuber_pay_maximum_deposit
        } else {
            minAmount = paymenLimts?.INR_minimum_deposit;
            maxAmount = paymenLimts?.INR_maximum_deposit;
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
            // console.log("usdtAmountusdtAmount", usdtAmount)
        } else if (activeModal == 0) {
            validateAmount(upiAmount);
            // console.log("upiAmount", upiAmount)
        }
    }, [activeModal]);
    const profileDetails = async (userId) => {
        if (!userId) {
            toast.error("User not logged in");
            navigate("/login");
            return;
        }
        try {
            const res = await axios.get(`${profileApi}${userId}`);
            if (res?.data?.success === 200) {
                setMyDetails(res?.data)
            }
        } catch (err) {
            toast.error(err);
        }
    };

    useEffect(() => {
        getPaymentLimits()
    }, [])

    const payin_deposit = async () => {
        if (!userId) {
            toast.error("User not logged in");
            navigate("/login");
            return;
        }
        setloading(true)
        const payload = {
            userid: userId,
            amount: upiAmount,
        }
        const apiIndianPay = apis.payin_deposit
        const apiUsdtPay = apis.payin_deposit_usdt
        const payloadUsdt = {
            user_id: userId,
            amount: usdtAmount,
            type: 2
        }
        // console.log("payload", activeModal === 0 ? payload : payloadUsdt, activeModal)
        try {
            const res = await axios.post(activeModal === 0 ? apiIndianPay : apiUsdtPay, activeModal === 0 ? payload : payloadUsdt)
            // console.log("res", res)
            if (res?.data?.status == 200) {
                setloading(false)
                window.open(activeModal === 0 ? res?.data?.response?.payment_link : res?.data?.data?.status_url, "_blank");
            } else {
                toast.error(res?.data?.message)
            }
        } catch (er) {
            toast.error(er)
        }
    }
    useEffect(() => {
        if (userId) {
            profileDetails(userId);
        }
    }, [userId]);

    const handleSelectAmount = (amount) => {
        const numericAmount = Number(amount);
        setSelectedAmount(numericAmount);
        setUpiAmount(numericAmount);
        validateAmount(numericAmount);
    };
    // const handleSelectAmountKuber = (amount) => {
    //     const numericAmount = Number(amount);
    //     setSelectedAmountKuber(numericAmount);
    //     setUpiAmountKuber(numericAmount);
    //     validateAmount(numericAmount);
    // };

    const handleUSDTSelectAmount = (amount) => {
        const numericAmount = Number(amount);
        setUSDTSelectAmount(numericAmount);
        setUsdtAmount(numericAmount);
        validateAmount(numericAmount);
    };


    const toggleModal = (modalType) => {
        setActiveModal(modalType);
        setAmountError("");
        setAmountErrorUSDT("");
    };

    const payMethod = [{
        image: bank_card,
        name: "Bank card",
        type: 0
    },
    {
        image: usdt_icon,
        name: "USDT",
        type: 2
    }]

    // console.log("paymenLimts", paymenLimts)
    return (
        <div className='mx-3'>
            {loading == true && <Loader setloading={setloading} loading={loading} />}
            <div className='h-40 w-full object-fill bg-no-repeat  rounded-lg p-2'
                style={{
                    backgroundImage: `url(${withdrawBg})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            >
                <p className='flex items-center gap-4 mt-5'>
                    <p><img className='w-5 h-5' src={depo_wallet} alt="ds" /></p>
                    <p>Balance</p>
                </p>
                <p className='mt-2 text-2xl flex items-center gap-4 ml-5 font-bold'>
                    <p>₹ {myDetails ? Number(myDetails?.data?.wallet + myDetails?.data?.third_party_wallet).toFixed(2) : "0.00"}</p>
                    <HiArrowPathRoundedSquare onClick={() => profileDetails(userId)} className=' text-xl' />
                </p>
            </div>
            <div className="w-full grid grid-cols-3 gap-3 mt-2">
                {payMethod && payMethod?.map((item, i) => (
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
                    <div className='bg-white shadow-lg rounded-lg p-2'>
                        <h3 className="text-lg font-semibold text-bg2 flex items-center ">
                            <img className='w-6 h-6' src={save_wallet} alt="sd" /> &nbsp; <p className='text-black'>Deposit amount </p>
                        </h3>
                        <div className='grid grid-cols-3 mt-3 gap-3'>
                            {depositArray.map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleSelectAmount(item)}
                                    className={`col-span-1 border-[1px] flex items-center justify-center gap-3 rounded-md py-1 border-border1  
                        ${selectedAmount == item ? 'bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white' : 'text-lightGray'}`}>
                                    ₹&nbsp;&nbsp;<p className={`${selectedAmount == item ? ' text-white' : 'text-redLight'}`}>{i === 3 ? "1K" : i === 4 ? "5K" : i === 5 ? "10K" : item}</p>
                                </div>
                            ))}
                        </div>
                        {amountError && <p className="text-red text-xs mt-2">{amountError}</p>}
                        <div className="flex items-center bg-inputBg rounded-full text-sm mt-3 p-1">
                            <div className="w-8 flex items-center justify-center text-redLight text-2xl font-bold">₹</div>
                            <input
                                value={upiAmount == 0 ? "" : upiAmount}
                                onChange={(e) => {
                                    const numericAmount = Number(e.target.value);
                                    setUpiAmount(numericAmount);
                                    validateAmount(numericAmount);
                                }}
                                type="number"
                                placeholder="Please enter the amount"
                                className="w-full p-1 bg-inputBg border-none focus:outline-none text-redLight placeholder:text-xsm"
                            />

                            <button onClick={() => setUpiAmount("0")} className="flex items-center justify-center text-lightGray p-2 rounded-full">
                                <RxCrossCircled size={20} />
                            </button>
                        </div>
                        <button onClick={payin_deposit} className={`mt-4 w-full ${upiAmount >= paymenLimts?.INR_minimum_deposit ? "text-white bg-gradient-to-r from-red to-redLight" : "bg-gradient-to-l from-[#cfd1de] to-[#c7c9d9] text-gray"}   py-3 rounded-full border-none text-xsm `}>
                            Deposit
                        </button>
                    </div>

                    <div className='bg-white shadow-lg rounded-lg p-2 my-10'>
                        <div className='flex items-center gap-3 font-bold'>
                            <img className='w-8 h-8' src={rechargeIns} alt="dfd" />
                            <p className='text-black'>Recharge instructions</p>
                        </div>
                        <div className='' >
                            <ul className="px-2 py-4 my-2 border-border1 border-[1px] rounded-lg text-xsm text-lightGray">
                                <li className="flex items-start">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    If the transfer time is up, please fill out the deposit form again.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    The transfer amount must match the order you created, otherwise the money cannot be credited successfully.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    If you transfer the wrong amount, our company will not be responsible for the lost amount!.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    Note: Do not cancel the deposit order after the money has been transferred.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    <p className='bg-inputBg border-[1px] border-gray p-1 rounded-sm'>Cloud Pay</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            )}
            {/* {(activeModal == 1) && (
                <div className="mt-5 ">
                    <div className='bg-white shadow-lg rounded-lg p-2'>
                        <h3 className="text-lg font-semibold text-bg2 flex items-center ">
                            <img className='w-6 h-6' src={save_wallet} alt="sd" /> &nbsp; <p className='text-black'>Deposit amount </p>
                        </h3>
                        <div className='grid grid-cols-3 mt-3 gap-3'>
                            {depositArrayKuberPay.map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleSelectAmountKuber(item)}
                                    className={`col-span-1 border-[1px] flex items-center justify-center gap-3 rounded-md py-1 border-border1  
                        ${selectedAmountKuber == item ? 'bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white' : 'text-lightGray'}`}>
                                    ₹&nbsp;&nbsp;<p className={`${selectedAmountKuber == item ? ' text-white' : 'text-redLight'}`}>{i === 0 ? "10K" : i === 1 ? "15K" : i === 2 ? "20K" : i === 3 ? "30K" : i === 4 ? "50K" : item}</p>
                                </div>
                            ))}
                        </div>
                        {amountError && <p className="text-red text-xs mt-2">{amountError}</p>}
                        <div className="flex items-center bg-inputBg rounded-full text-sm mt-3 p-1">
                            <div className="w-8 flex items-center justify-center text-redLight text-2xl font-bold">₹</div>
                            <input
                                value={upiAmountKuber == 0 ? "" : upiAmountKuber}
                                onChange={(e) => {
                                    const numericAmount = Number(e.target.value);
                                    setUpiAmountKuber(numericAmount);
                                    validateAmount(numericAmount);
                                }}
                                type="number"
                                placeholder="Please enter the amount"
                                className="w-full p-1 bg-inputBg border-none focus:outline-none text-redLight placeholder:text-xsm"
                            />

                            <button onClick={() => setUpiAmountKuber("0")} className="flex items-center justify-center text-lightGray p-2 rounded-full">
                                <RxCrossCircled size={20} />
                            </button>
                        </div>
                        <button onClick={payin_deposit} className={`mt-4 w-full ${upiAmountKuber >= paymenLimts?.kuber_pay_minimum_deposit ? "text-white bg-gradient-to-r from-red to-redLight" : "bg-gradient-to-l from-[#cfd1de] to-[#c7c9d9] text-gray"}   py-3 rounded-full border-none text-xsm `}>
                            Deposit
                        </button>
                      
                    </div>

                    <div className='bg-white shadow-lg rounded-lg p-2 my-10'>
                        <div className='flex items-center gap-3 font-bold'>
                            <img className='w-8 h-8' src={rechargeIns} alt="dfd" />
                            <p className='text-black'>Recharge instructions</p>
                        </div>
                        <div className='' >
                            <ul className="px-2 py-4 my-2 border-border1 border-[1px] rounded-lg text-xsm text-lightGray">
                                <li className="flex items-start">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    If the transfer time is up, please fill out the deposit form again.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    The transfer amount must match the order you created, otherwise the money cannot be credited successfully.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    If you transfer the wrong amount, our company will not be responsible for the lost amount!.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    Note: Do not cancel the deposit order after the money has been transferred.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    <p className='bg-inputBg border-[1px] border-gray p-1 rounded-sm'>Cloud Pay</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            )} */}

            {activeModal == 2 && (
                <div className="mt-5 ">
                    <div className='bg-white shadow-lg rounded-lg p-2'>
                        <h3 className="text-lg font-semibold text-bg2 flex items-center ">
                            <img className='w-6 h-6' src={save_wallet} alt="sd" /> &nbsp; <p className='text-black'>Deposit amount </p>
                        </h3>
                        <div className='grid grid-cols-3 mt-3 gap-3'>
                            {USDTDepositArray.map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleUSDTSelectAmount(item)}
                                    className={`col-span-1 border-[1px] flex items-center justify-center gap-3 rounded-md py-1 border-border1 text-lightGray 
                        ${USDTselectedAmount == item ? 'bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white' : ''}`}>
                                    $&nbsp;&nbsp;<p className={`${USDTselectedAmount == item ? ' text-white' : 'text-redLight'}`}>{item}</p>
                                </div>
                            ))}
                        </div>

                        {amountErrorUSDT && <p className="text-red text-xs mt-2">{amountErrorUSDT}</p>}
                        <div className='bg-inputBg rounded-md p-3 flex flex-col mt-3 items-center justify-center'>
                            <div className="flex items-center bg-white w-full rounded-full text-sm p-2">
                                <div className="w-8 flex items-center justify-center text-xl font-bold text-bg2">$</div>
                                <div className="w-[1px] mx-2 flex items-center justify-center bg-lightGray h-5"></div>
                                <input
                                    value={usdtAmount == 0 ? "" : usdtAmount}
                                    onChange={(e) => {
                                        const numericAmount = Number(e.target.value);
                                        setUsdtAmount(numericAmount);
                                        validateAmount(numericAmount);
                                    }}

                                    type="number"
                                    placeholder="Please enter the amount"
                                    className="w-full p-1 bg-white border-none focus:outline-none text-redLight placeholder:text-lightGray text-xsm"
                                />
                                <button onClick={() => setUsdtAmount("0")} className="flex items-center justify-center text-lightGray p-2 rounded-full">
                                    <RxCrossCircled size={20} />
                                </button>
                            </div>
                            <div className="flex items-center bg-white w-full rounded-full text-sm mt-3 p-2">
                                <div className="w-8 flex items-center justify-center text-xl font-bold text-bg2">₹</div>
                                <div className="w-[1px] mx-2 flex items-center justify-center bg-lightGray h-5"></div>
                                <p
                                    className="w-full p-1 bg-white border-none focus:outline-none text-redLight placeholder:text-lightGray text-xsm"
                                >{usdtAmount * paymenLimts?.deposit_conversion_rate}</p>
                            </div>
                        </div>
                        <button onClick={payin_deposit} className={`mt-4 w-full ${usdtAmount >= paymenLimts?.USDT_minimum_deposit ? "text-white bg-gradient-to-r from-red to-redLight" : "bg-gradient-to-l from-[#cfd1de] to-[#c7c9d9] text-gray"}   py-3 rounded-full border-none text-xsm `}>
                            Deposit
                        </button>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg p-2 my-10'>
                        <div className='flex items-center gap-3 font-bold'>
                            <img className='w-8 h-8' src={rechargeIns} alt="dfd" />
                            <p className='text-black'>Recharge instructions</p>
                        </div>
                        <div className='' >
                            <ul className="px-2 py-4 my-2 border-border1 border-[1px] rounded-lg text-xsm text-lightGray">
                                <li className="flex items-start">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    If the transfer time is up, please fill out the deposit form again.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    The transfer amount must match the order you created, otherwise the money cannot be credited successfully.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    If you transfer the wrong amount, our company will not be responsible for the lost amount!.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    Note: Do not cancel the deposit order after the money has been transferred.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-redLight font-bold mr-2">◆</span>
                                    <p className='bg-inputBg border-[1px] border-gray p-1 rounded-sm'>Cloud Pay</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Deposit