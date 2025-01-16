import { HiArrowPathRoundedSquare } from 'react-icons/hi2'
import usdt_icon from '../../assets/images/usdt_icon.png'
import fastpay_image from '../../assets/images/fastpay_image.png'
import depo_wallet from '../../assets/icons/depo_wallet.png'
import rec_ins from '../../assets/icons/rec_ins.png'
import { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';

function Deposit() {
    const [upiAmount, setUpiAmount] = useState("")
    const [usdtAmount, setUsdtAmount] = useState("")
    const [activeModal, setActiveModal] = useState("UPI");
    const toggleModal = (modalType) => {
        setActiveModal((prev) => (prev === modalType ? null : modalType));
    };
    return (
        <div className='mx-3'>
            <div className='h-40 bg-bg3 sm:h-52 md:h-40 mt-5 rounded-lg p-2'
            // style={{
            //     backgroundImage: `url(${card_image})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}
            >
                <p className='flex items-center gap-4'>
                    <p><img className='w-7 h-6' src={depo_wallet} alt="ds" /></p>
                    <p>Balance</p>
                </p>
                <p className='mt-7 flex items-center gap-4 ml-5 font-bold'>
                    <p>₹ 400.00</p>
                    <HiArrowPathRoundedSquare className=' text-base sm:text-xl md:text-base' />
                </p>
                <p className='flex items-center justify-end gap-3 mt-12 sm:mt-24 md:mt-12'>
                    <p>****</p>
                    <p>****</p>
                </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                <div
                    className={`col-span-1 flex flex-col items-center justify-center shadow-lg rounded-lg ${activeModal === "UPI" ? "bg-bg3" : "bg-bg2"} mt-5 p-5 cursor-pointer`}
                    onClick={() => toggleModal("UPI")}
                >
                    <img src={fastpay_image} alt="UPI Payment" />
                    <p className="mt-5 font-bold">UPI Payment</p>
                </div>
                <div
                    className={`col-span-1 flex flex-col items-center justify-center shadow-lg ${activeModal === "USDT" ? "bg-bg3" : "bg-bg2"} rounded-lg mt-5 p-5 cursor-pointer`}
                    onClick={() => toggleModal("USDT")}
                >
                    <img
                        className="w-12 h-12"
                        src={usdt_icon}
                        alt="USDT TRC 20"
                    />
                    <p className="mt-5">USDT TRC 20</p>
                </div>
                <div className="col-span-1"></div>
            </div>

            {/* Modals */}
            {activeModal === "UPI" && (
                <div className="mt-5 ">
                    <div className='bg-white shadow-lg rounded-lg p-2'>
                        <h3 className="text-lg font-semibold text-bg2 flex items-center ">
                            ₹ &nbsp; <p className='text-black'>UPI Payment </p>
                        </h3>
                        <div className="flex items-center bg-gray rounded-l-full text-sm mt-3  p-1">
                            <div className="w-8 flex items-center justify-center text-bg2">₹</div>
                            <input
                                value={upiAmount}
                                onChange={(e) => setUpiAmount(e.target.value)}
                                type="number"
                                placeholder="Enter amount"
                                className="w-full p-1 bg-gray border-none focus:outline-none text-white placeholder-white"
                            />
                            <button onClick={() => setUpiAmount("0")} className=" flex items-center justify-center hover:bg-slate-500 p-2 rounded-full"><RxCrossCircled size={20} />
                            </button >
                        </div>
                        {upiAmount && <p className='text-black mt-3 font-bold text-xs'>Total amount in rupess : {upiAmount}.00</p>
                        }
                    </div>
                    <button className="mt-4 w-full bg-blue-500 text-white py-3 font-bold rounded-full border-none text-xs hover:bg-blue-600">
                        UPI Payment
                    </button>
                    <div className='bg-white shadow-lg rounded-lg p-2 my-10'>
                        <div className='flex items-center gap-3 font-bold'>
                            <img className='w-8 h-8' src={rec_ins} alt="dfd" />
                            <p className='text-black'>Recharge instructions</p>
                        </div>
                        <div className='' >
                            <ul className="p-2 my-2 border-bg3 border-[1px] rounded-lg text-xs text-black">
                                <li className="flex items-start">
                                    <span className="text-bg3 font-bold mr-2">◆</span>
                                    If the transfer time is up, please fill out the deposit form again.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-bg3 font-bold mr-2">◆</span>
                                    The transfer amount must match the order you created, otherwise the money cannot be credited successfully.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-bg3 font-bold mr-2">◆</span>
                                    If you transfer the wrong amount, our company will not be responsible for the lost amount!.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-bg3 font-bold mr-2">◆</span>
                                    Note: Do not cancel the deposit order after the money has been transferred.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            )}

            {activeModal === "USDT" && (
                <div className="mt-5 ">
                    <div className='bg-white shadow-lg rounded-lg p-2'>
                        <h3 className="text-lg font-semibold text-bg3 flex items-center ">
                            <img className='w-10 h-10' src={usdt_icon} alt="" />
                            &nbsp; <p className='text-black font-bold'>USDT Amount </p>
                        </h3>
                        <div className="flex items-center bg-gray rounded-l-full text-sm mt-3  p-1">
                            <div className="w-10 flex items-center justify-center">
                                <img className='w-6 h-6' src={usdt_icon} alt="" />
                            </div>
                            <input
                                value={usdtAmount}
                                type="number"
                                onChange={(e) => setUsdtAmount(e.target.value)}
                                placeholder="Enter usdt amount"
                                className="w-full p-1 bg-gray border-none focus:outline-none text-white placeholder-white"
                            />
                            <button onClick={() => setUsdtAmount("0")} className=" flex items-center justify-center hover:bg-slate-500 p-2 rounded-full"><RxCrossCircled size={20} />
                            </button >
                        </div>
                        {usdtAmount && <p className='text-black font-bold text-xs mt-3'>Total amount in rupess : {usdtAmount}.00</p>
                        }
                    </div>
                    <button className="mt-4 w-full bg-blue-500 text-white py-3 font-bold rounded-full border-none text-xs hover:bg-blue-600">
                        USDT TRC 20 Deposit
                    </button>
                    <div className='bg-white shadow-lg rounded-lg p-2 my-10'>
                        <div className='flex items-center gap-3 font-bold'>
                            <img className='w-8 h-8' src={rec_ins} alt="dfd" />
                            <p className='text-black'>Recharge instructions</p>
                        </div>
                        <div className='' >
                            <ul className="p-2 my-2 border-bg3 border-[1px] rounded-lg text-xs text-black">
                                <li className="flex items-start">
                                    <span className="text-bg3 font-bold mr-2">◆</span>
                                    If the transfer time is up, please fill out the deposit form again.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-bg3 font-bold mr-2">◆</span>
                                    The transfer amount must match the order you created, otherwise the money cannot be credited successfully.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-bg3 font-bold mr-2">◆</span>
                                    If you transfer the wrong amount, our company will not be responsible for the lost amount!.
                                </li>
                                <li className="flex items-start mt-2">
                                    <span className="text-bg3 font-bold mr-2">◆</span>
                                    Note: Do not cancel the deposit order after the money has been transferred.
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