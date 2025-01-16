import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
import invitation_gift from "../../assets/icons/invitation_gift.png"
import inviterule from "../../assets/icons/inviterule.png"
import inviterecord from "../../assets/icons/inviterecord.png"

function InvitationBonus() {
    return (
        <div >
            <header className='bg-bg2 px-3 pb-32 font-inter'>
                <div className='flex items-center justify-between'>
                    <Link to="/activity" >
                        <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                    </Link>
                    <p className='text-sm'>Invitation bonus</p>
                    <div></div>
                </div>
                <div className='grid grid-cols-3 py-3 '>
                    <div className='col-span-1'>
                        <img
                            src={invitation_gift}
                            alt="Gifts"
                            className="w-full  object-cover rounded"
                        />
                    </div>
                    <div className='col-span-2 px-5'>
                        <h1 className='font-bold'>Invite friends and deposit</h1>
                        <p className='text-xs mt-2'>Both parties can receive rewards</p>
                        <p className='text-xs mt-2'>Invite friends to register and recharge to receive rewards</p>
                        <p className='text-xs mt-2'>Activity Date</p>
                        <p className='text-xs mt-2'>26-12-2024 - 30-12-2024</p>
                    </div>
                </div>
            </header>
            <div className='bg-bg3 mx-3 -mt-16 text-xs py-5 rounded-md flex items-center justify-evenly'>
                <Link to="/activity/invitationbonus/invitationrewardrule" className='flex flex-col items-center' >
                    <img src={inviterule} alt="sd" />
                    <p >Invitation reward rules</p>
                </Link>
                <Link to="/activity/invitationbonus/invitationrecord" className='flex flex-col items-center' >
                    <img src={inviterecord} alt="sd" />
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