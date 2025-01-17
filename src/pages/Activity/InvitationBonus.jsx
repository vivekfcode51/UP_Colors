import { Link } from 'react-router-dom'
import reward from "../../assets/usaAsset/activity/reward.png"
import bonus from "../../assets/usaAsset/activity/bonus.png"
import inviterule from "../../assets/icons/inviterule.png"
import inviterecord from "../../assets/icons/inviterecord.png"
import invitationBonus from "../../assets/usaAsset/activity/invitationBonus.png"
function InvitationBonus() {
    return (
        <div >
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
            <div className='bg-white mx-3 -mt-5 text-gray text-xs py-5 rounded-lg flex items-center justify-evenly'>
                <Link to="/activity/invitationbonus/invitationrewardrule" className='flex flex-col items-center' >
                    <img className='w-8 h-8' src={inviterule} alt="sd" />
                    <p >Invitation reward rules</p>
                </Link>
                <Link to="/activity/invitationbonus/invitationrecord" className='flex flex-col items-center' >
                    <img className='w-8 h-8' src={inviterecord} alt="sd" />
                    <p>Invitation record</p>
                </Link>
            </div>

            <div className='max-h-[500px] overflow-y-auto hide-scrollbar'>
                <div className="relative w-96 h-72 bg-bg2 rounded-2xl overflow-hidden mx-2 mt-5">
                    <div className='flex justify-between pr-2'>
                        <div className='bg-gray rounded-tl-lg flex items-center gap-1 w-[50%] pl-2 py-4'>
                            <p>Bonus</p>
                            <p className='h-5 w-5 bg-bg3 flex items-center rounded-full justify-center'>1</p>
                            <p className='h-5 w-5 bg-bg3 flex items-center justify-center rounded-full'>X</p>
                        </div>
                        <p className='flex items-center text-[#ff8310] text-xs font-bold'>₹55</p>
                    </div>
                    <div className='border-bg3 border-[1px]'></div>                {/* Cutouts */}
                    <div className='bg-bg3 text-xs flex items-center justify-between px-2 font-bold mx-2 mt-2 py-1 rounded-md'>
                        <p>Number of Invitees</p>
                        <p>1</p>
                    </div>
                    <div className='bg-bg3 text-xs flex items-center justify-between px-2 font-bold mx-2 mt-2 py-1 rounded-md'>
                        <p>Recharge per people</p>
                        <p>500</p>
                    </div>
                    <div className='grid grid-cols-2 mt-10 px-2 font-bold'>
                        <div className='col-span-1 flex flex-col items-center '>
                            <p className='text-bg3'>0/1</p>
                            <p className='text-xs'>Number of invitees</p>
                        </div>
                        <div className='col-span-1 flex flex-col items-center '>
                            <p className='text-bg3'>0/1</p>
                            <p className='text-xs'>Deposit numbers</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <button className='bg-gray rounded-full w-full font-bold text-sm py-3 mt-5'>Unfinished</button>
                    </div>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-gray-300 opacity-70 rounded-full"></div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-6 h-6 bg-gray-300 opacity-70 rounded-full"></div>
                    {/* Dashed line */}
                    <div className="absolute top-1/2 left-0 right-0 border-t-[2px] border-bg3 "></div>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-bg1 rounded-full"></div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-bg1 rounded-full"></div>
                </div>
                <div className="relative w-96 h-72 bg-bg2 rounded-2xl overflow-hidden mx-2 mt-5">
                    <div className='flex justify-between pr-2'>
                        <div className='bg-gray rounded-tl-lg flex items-center gap-1 w-[50%] pl-2 py-4'>
                            <p>Bonus</p>
                            <p className='h-5 w-5 bg-bg3 flex items-center rounded-full justify-center'>1</p>
                            <p className='h-5 w-5 bg-bg3 flex items-center justify-center rounded-full'>X</p>
                        </div>
                        <p className='flex items-center text-[#ff8310] text-xs font-bold'>₹55</p>
                    </div>
                    <div className='border-bg3 border-[1px]'></div>                {/* Cutouts */}
                    <div className='bg-bg3 text-xs flex items-center justify-between px-2 font-bold mx-2 mt-2 py-1 rounded-md'>
                        <p>Number of Invitees</p>
                        <p>1</p>
                    </div>
                    <div className='bg-bg3 text-xs flex items-center justify-between px-2 font-bold mx-2 mt-2 py-1 rounded-md'>
                        <p>Recharge per people</p>
                        <p>500</p>
                    </div>
                    <div className='grid grid-cols-2 mt-10 px-2 font-bold'>
                        <div className='col-span-1 flex flex-col items-center '>
                            <p className='text-bg3'>0/1</p>
                            <p className='text-xs'>Number of invitees</p>
                        </div>
                        <div className='col-span-1 flex flex-col items-center '>
                            <p className='text-bg3'>0/1</p>
                            <p className='text-xs'>Deposit numbers</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <button className='bg-gray rounded-full w-full font-bold text-sm py-3 mt-5'>Unfinished</button>
                    </div>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-gray-300 opacity-70 rounded-full"></div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-6 h-6 bg-gray-300 opacity-70 rounded-full"></div>
                    {/* Dashed line */}
                    <div className="absolute top-1/2 left-0 right-0 border-t-[2px] border-bg3 "></div>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-bg1 rounded-full"></div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-bg1 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default InvitationBonus