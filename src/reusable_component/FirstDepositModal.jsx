/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { ImCross } from 'react-icons/im'
import { getFirstDepositPlans } from './gameApi';
import { Link, useNavigate } from 'react-router-dom';

function FirstDepositModal({ firstDepsoitModal, setFirstDepsoitModal, onClose }) {
    const [getFirstDepositPlansData, setgetFirstDepositPlansData] = useState([])
    const userId = localStorage.getItem("userId")
    const navigate = useNavigate();

    const handleAutoCloseClick = () => {
        const status = localStorage.getItem("firstDepositModalValue");
        if (status === "0") {
            localStorage.setItem("firstDepositModalValue", "1");
            setFirstDepsoitModal(false);
        } else {
            localStorage.setItem("firstDepositModalValue", "0");
            setFirstDepsoitModal(true);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const data = await getFirstDepositPlans(userId);
            setgetFirstDepositPlansData(data);
        };
        fetchData();
    }, [userId]);
    // console.log("getFirstDepositPlansData", getFirstDepositPlansData)
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className='w-full xsm:w-[400px] flex flex-col items-center justify-center'>
                <div className='bg-white text-white h-[80vh] w-[90%] rounded-xl'>
                    <header className='flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-[#f95959] to-[#ff9a8e] font-bold rounded-t-xl h-24 w-full '>
                        <p className='text-xl'>Extra first deposit bonus</p>
                        <p className='text-xsm'>Each account can only receive rewards once</p>
                    </header>
                    <div className='font-semibold overflow-scroll h-[calc(100%-176px)] w-full p-3 text-black'>
                        {getFirstDepositPlansData?.length > 0 ? getFirstDepositPlansData?.map((item, i) => (
                            <div className='bg-inputBg w-full rounded-lg p-2 mt-3' key={i}>
                                <div className='flex items-center justify-between'>
                                    <p className='text-black'>First deposit <span className='text-gold'>{item?.first_deposit_ammount}</span></p>
                                    <p className='text-gold'>+ ₹{item?.bonus.toFixed(2)}</p>
                                </div>
                                <div className='text-gray mt-2'>Deposit <span>{item?.first_deposit_ammount}</span> for the first time and you will receive <span>{item?.bonus}</span> bonus</div>
                                <div className='flex items-center justify-between w-full mt-4'>
                                    <p className=' py-0.5 px-2 bg-gray2 rounded-full w-1/2 text-center'>{item?.status === 0 ? item?.first_deposit_ammount : "0"}/{item?.first_deposit_ammount}</p>
                                    <button
                                        disabled={item?.status === 0}
                                        onClick={() => item?.status === 1 && navigate("/wallet/deposit")}
                                        className={`text-gold border border-gold py-1 px-5 rounded-lg ${item?.status === 0 ? " cursor-not-allowed" : ""}`}
                                    >
                                        {item?.status === 0 ? "Deposited" : "Deposit"}
                                    </button>
                                </div>
                            </div>
                        )) :
                            <div className='mt-10 text-black w-full text-center text-2xl'>no data</div>
                        }
                    </div>
                    <div className={`flex items-center justify-between text-black h-20 w-full px-2 gap-2 cursor-pointer`} >
                        {firstDepsoitModal ? (
                            <div className='flex items-center gap-2' onClick={handleAutoCloseClick}>
                                <FaRegCircle className='text-[#B1835A]' size={26} style={{ color: `[#B1835A]` }} />
                                <p className="text-xs"> No more reminders today</p>
                            </div>
                        ) : (
                            <div className='flex items-center gap-2'>
                                <FaCheckCircle className='text-[#B1835A]' size={26} style={{ color: `[#B1835A]` }} />
                                <p className="text-xs"> No more reminders today</p>
                            </div>
                        )}
                        <Link to="/allFirstDepositPlans" >
                            <button className='bg-gradient-to-r flex items-center justify-center from-[#f95959] to-[#ff9a8e] px-10 py-1.5 font-extrabold text-white rounded-full'>Activity</button>
                        </Link>
                    </div>
                </div>
                <button
                    className=" px-6 py-2 font-extrabold text-white rounded-md "
                    onClick={onClose}
                >
                    <ImCross className="border-4 p-1 border-white rounded-full" size={32} />
                </button>
            </div>
        </div>
    )
}

export default FirstDepositModal