import { Link } from 'react-router-dom'
import reward from "../../assets/usaAsset/activity/reward.png"
import bonus from "../../assets/usaAsset/activity/bonus.png"
import inviterule from "../../assets/usaAsset/activity/inviterule.svg"
import inviterecord from "../../assets/usaAsset/activity/inviterecord.svg"
import invitationBonus from "../../assets/usaAsset/activity/invitationBonus.png"
function InvitationBonus() {
    const array = [{ amount1: 199, noOfIn: 3, rechargePerPeople: 555, value1: 2, value2: 0 }, { amount1: 299, noOfIn: 5, rechargePerPeople: 555, value1: 2, value2: 0 }, { amount1: 599, noOfIn: 10, rechargePerPeople: "1,111", value1: 2, value2: 0 }]
    return (
        <div className='bg-white font-roboto' >
            <header className='bg-gradient-to-r from-[#f95959] to-[#ff9a8e] px-3 pb-5 font-inter'>
                <div className='grid grid-cols-3 py-3 '>
                    <div className='col-span-1'>
                        <img
                            src={invitationBonus}
                            alt="Gifts"
                            className="w-full  object-cover rounded"
                        />
                    </div>
                    <div className='col-span-2 pl-2'>
                        <h1 className='font-bold'>Invite friends and deposit</h1>
                        <p className='text-xs mt-5'>Both parties can receive rewards</p>
                        <p className='text-xs mt-2'>Invite friends to register and recharge to receive rewards</p>
                        <p className='text-xs mt-2'>Activity Date</p>
                        <p className='text-lg text-nowrap mt-2'>2024-05-01 - 2024-05-31</p>
                    </div>
                </div>
            </header>
            <div className='bg-white shadow-lg mx-3 -mt-5 text-gray text-xsm py-5 rounded-lg flex items-center justify-evenly'>
                <Link to="/activity/invitationbonus/invitationrewardrule" className='flex flex-col items-center' >
                    <img className='w-16 h-16' src={inviterule} alt="sd" />
                    <p >Invitation reward rules</p>
                </Link>
                <Link to="/activity/invitationbonus/invitationrecord" className='flex flex-col items-center' >
                    <img className='w-16 h-16' src={inviterecord} alt="sd" />
                    <p>Invitation record</p>
                </Link>
            </div>

            <div className='max-h-[500px] overflow-y-auto hide-scrollbar'>
                {array?.map((item, i) => (
                    <div key={{ i }} className="relative w-96 h-72 bg-bg1 rounded-2xl overflow-hidden mx-2 mt-2">
                        <div className='flex justify-between pr-2 text-xsm'>

                            <div
                                className="bg-[#BABFE0] rounded-tl-lg flex items-center gap-1 w-[40%] pl-2 py-3 relative"
                                style={{
                                    clipPath: 'polygon(0 0, calc(100% - 1rem) 0, 100% 100%, calc(100% - 1rem) 100%, 0 100%)',
                                }}
                            >
                                <p>Bonus</p>
                                <p className="h-5 w-5 text-[#BABFE0] bg-white flex items-center rounded-full justify-center">
                                    {i + 1}
                                </p>
                            </div>

                            <p className="flex items-center text-[#ff8310] text-xsm font-bold">₹{item.amount1}.00</p>

                        </div>
                        <div className='border-border1 border-[1px]'></div>
                        <div className='bg-inputBg text-xsm text-gray flex items-center justify-between px-2 mx-2 mt-2 py-1 rounded-md'>
                            <p>Number of Invitees</p>
                            <p className='text-black'>{item.noOfIn}</p>
                        </div>
                        <div className='bg-inputBg text-xsm text-gray flex items-center justify-between px-2 mx-2 mt-2 py-1 rounded-md'>
                            <p>Recharge per people</p>
                            <p className='text-redLight'>₹{item.rechargePerPeople}.00</p>
                        </div>
                        <div className='grid grid-cols-2 mt-10 px-2'>
                            <div className='col-span-1 flex flex-col items-center '>
                                <p className='text-gold'>{item.value1}/{item.noOfIn}</p>
                                <p className='text-xsm text-gray'>Number of invitees</p>
                            </div>
                            <div className='col-span-1 flex flex-col items-center '>
                                <p className='text-redLight'>{item.value2}/{item.noOfIn}</p>
                                <p className='text-xsm text-gray'>Deposit number</p>
                            </div>
                        </div>
                        <div className='px-2'>
                            <button className='bg-[#CBCDDC] rounded-full w-full font-bold text-sm py-2 mt-5'>Unfinished</button>
                        </div>
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-bg1 opacity-70 rounded-full"></div>
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-6 h-6 bg-bg1 opacity-70 rounded-full"></div>
                        {/* Dashed line */}
                        <div className="absolute top-1/2 left-0 right-0 border-t-[2px] border-border1 "></div>
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full"></div>
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-white rounded-full"></div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default InvitationBonus