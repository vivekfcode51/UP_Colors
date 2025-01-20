import promotionbg from '../../assets/usaAsset/promotion/promotionbg.png'
import invitation_code from '../../assets/usaAsset/promotion/invitation_code.png'
import sub_ordinate_icon from '../../assets/usaAsset/promotion/sub_ordinate_icon.png'
import rebate_ratio from '../../assets/usaAsset/promotion/rebate_ratio.png'
import invitation from '../../assets/usaAsset/promotion/invitation.png'
import customer from '../../assets/usaAsset/promotion/customer.png'
import commission_icon from '../../assets/usaAsset/promotion/commission_icon.png'
import promotions_data from '../../assets/usaAsset/promotion/promotions_data.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PromotionHome() {
    const [copyInvitation, setCopyInvitation] = useState(false)

     useEffect(() => {
            if (copyInvitation) {
                const timer = setTimeout(() => {
                    setCopyInvitation(false);
                }, 2000); 
                return () => clearTimeout(timer); 
            }
        }, [copyInvitation, setCopyInvitation]);
    return (
        <>
            <div className='bg-white  h-full w-full'>
                <div className='w-full flex flex-col px-3 items-center bg-red h-64 bg-center bg-cover'
                    style={{
                        backgroundImage: `url(${promotionbg})`
                    }}
                >
                    <p className='text-2xl mt-5'>0.00</p>
                    <p className='bg-white text-[15px] mt-1 rounded-full px-2 py-1 text-redLight'>Yesterday&apos;s total commission</p>
                    <p className='text-xsm mt-1'>Upgrade the level to increase commission income</p>
                    <div className='bg-white shadow-md pb-2 w-full mt-2 rounded-lg'>
                        <div className='flex justify-between items-start gap-[1px] w-full'>
                            <div className='bg-redLight py-2.5 text-center rounded-tl-lg w-full '>Direct subordinates</div>
                            <div className='bg-redLight py-2.5 text-center rounded-tr-lg w-full '>Team subordinates</div>
                        </div>
                        <div className='grid w-full grid-cols-2'>
                            <div className='text-black text-xsm col-span-1 flex flex-col items-center px-2'>
                                <div className='flex flex-col items-center pt-3'>
                                    <p>0</p>
                                    <p>number of register</p>
                                </div>
                                <div className='flex flex-col items-center pt-3'>
                                    <p className='text-green'>0</p>
                                    <p>Deposit number</p>
                                </div>
                                <div className='flex flex-col items-center pt-3'>
                                    <p className='text-red'>0</p>
                                    <p>Deposit amount</p>
                                </div>
                                <div className='flex flex-col items-center pt-3'>
                                    <p>0</p>
                                    <p className='text-center'>Number of people making first deposit</p>
                                </div>
                            </div>
                            <div className='text-black text-xsm col-span-1 flex flex-col items-center px-2'>
                                <div className='flex flex-col items-center pt-3'>
                                    <p>0</p>
                                    <p>number of register</p>
                                </div>
                                <div className='flex flex-col items-center pt-3'>
                                    <p className='text-green'>0</p>
                                    <p>Deposit number</p>
                                </div>
                                <div className='flex flex-col items-center pt-3'>
                                    <p className='text-red'>0</p>
                                    <p>Deposit amount</p>
                                </div>
                                <div className='flex flex-col items-center pt-3'>
                                    <p>0</p>
                                    <p className='text-center'>Number of people making first deposit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-5 text-[15px] mt-40 pb-40 bg-white w-full'>
                    <button onClick={()=>setCopyInvitation(true)} className='w-full font-semibold py-1.5 rounded-full bg-gradient-to-l from-[#ff9a8e] to-[#f95959]'>INVITATION LINK</button>
                    <div onClick={()=>setCopyInvitation(true)} className='w-full cursor-pointer flex items-center justify-between mt-10'>
                        <div className='flex items-center gap-2 text-black'>
                            <img className='w-9 h-9' src={invitation_code} alt="ds" />
                            <p>Copy inviation code</p>
                        </div>
                        <div className='text-xsm text-lightGray'>495011219589</div>
                    </div>
                    <Link to="/promotion/subordinatedata" className='w-full flex items-center justify-between mt-10'>
                        <div className='flex items-center gap-2 text-black'>
                            <img className='w-9 h-9' src={sub_ordinate_icon} alt="ds" />
                            <p>Subordinate data</p>
                        </div>
                        <div className='text-xsm text-black'><MdKeyboardArrowRight size={30} /></div>
                    </Link>
                    <Link to="/promotion/commissiondetail" className='w-full flex items-center justify-between mt-10'>
                        <div className='flex items-center gap-2 text-black'>
                            <img className='w-9 h-9' src={commission_icon} alt="ds" />
                            <p>Commission details</p>
                        </div>
                        <div className='text-xsm text-black'><MdKeyboardArrowRight size={30} /></div>
                    </Link>
                    <Link to="/promotion/invitationrules" className='w-full flex items-center justify-between mt-10'>
                        <div className='flex items-center gap-2 text-black'>
                            <img className='w-9 h-9' src={invitation} alt="ds" />
                            <p>Invitation rules</p>
                        </div>
                        <div className='text-xsm text-black'><MdKeyboardArrowRight size={30} /></div>
                    </Link>
                    <div className='w-full flex items-center justify-between mt-10'>
                        <div className='flex items-center gap-2 text-black'>
                            <img className='w-9 h-9' src={customer} alt="ds" />
                            <p>Agent line customer service</p>
                        </div>
                        <div className='text-xsm text-black'><MdKeyboardArrowRight size={30} /></div>
                    </div>
                    <Link to="/promotion/rebateratio" className='w-full flex items-center justify-between mt-10'>
                        <div className='flex items-center gap-2 text-black'>
                            <img className='w-9 h-9' src={rebate_ratio} alt="ds" />
                            <p>Rebate ratio</p>
                        </div>
                        <div className='text-xsm text-black'><MdKeyboardArrowRight size={30} /></div>
                    </Link>
                    <div className='mt-8'>
                        <div className='flex items-center gap-2'>
                            <img className='w-8 h-8' src={promotions_data} alt="df" />
                            <h1 className='text-black font-bold'>promotion data</h1>
                        </div>
                        <div className='grid grid-cols-2 mt-3 text-xsm'>
                            <div className='col-span-1 flex flex-col items-center border-r-[1px] border-border1'>
                                <p className='text-black text-sm'>0.00</p>
                                <p className='text-gray'>This weak</p>
                            </div>
                            <div className='col-span-1 flex flex-col items-center'>
                                <p className='text-black text-sm'>0.04</p>
                                <p className='text-gray'>Total commision</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-3 text-xsm'>
                            <div className='col-span-1 flex flex-col items-center border-r-[1px] border-border1'>
                                <p className='text-black text-sm'>2</p>
                                <p className='text-gray'> direct subordinates</p>
                            </div>
                            <div className='col-span-1 flex flex-col items-center'>
                                <p className='text-black text-sm'>2</p>
                                <p className='text-gray text-center'>Total number subordinates in the team</p>
                            </div>
                        </div>
                    </div>
                </div>
                {copyInvitation && (
                    <div className="fixed inset-0 flex items-center justify-center ">
                        <div className="h-14 w-[300px] bg-black opacity-70 rounded-lg shadow-lg flex flex-col items-center justify-center">
                            <p>Copy successfull</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default PromotionHome