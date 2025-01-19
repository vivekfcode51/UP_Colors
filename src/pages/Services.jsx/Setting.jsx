import { PiCopySimpleFill } from 'react-icons/pi'
import editPswIcon from "../../assets/icons/editPswIcon.png"
import EmailIcon from "../../assets/icons/EmailIcon.png"
import { Link } from 'react-router-dom'
import email from "../../assets/usaAsset/account/email.png"
import password from "../../assets/usaAsset/account/password.png"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import { TfiEmail } from 'react-icons/tfi'
import { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { RxCross2 } from 'react-icons/rx'
function Setting() {
  const [nickNameModal, setNicknameModal] = useState(false)
  return (
    <div className='bg-white'>
      <div className='bg-gradient-to-l from-[#ff9a8e] to-[#f95959] rounded-b-3xl h-40
       w-full'>
      </div>
      <div className='bg-bg1 rounded-lg -mt-36 text-black mx-3 p-3'>
        <div className='flex items-center justify-between'>
          <div className='bg-gray w-20 h-20 rounded-full '></div>
          <Link to="/changeavatar">  <p className='text-lightGray flex items-center'>Change Avatar <MdKeyboardArrowRight
            className='text-lightGray' size={28} /></p></Link>
        </div>
        <button onClick={() => setNicknameModal(true)} className='w-full flex mt-5 border-border1 border-b-[1px] pb-5 items-center justify-between text-xsm'>
          <p className='text-lightGray'>Nickname</p>
          <p className='flex items-center'>DBWLEV <MdKeyboardArrowRight className='text-lightGray' size={28} /></p>
        </button>
        <div className='flex mt-5 pb-5 items-center justify-between text-xsm'>
          <p className='text-lightGray'>UID</p>
          <p className='flex items-center gap-2'>
            ITVO3228
            <PiCopySimpleFill size={20} className='text-redLight' />
          </p>
        </div>
      </div>
      <div className='bg-white mt-5 py-10'>
        <div className='border-l-4 pl-3 mx-5 bg-white font-bold text-black border-redLight'>
          Security Information
        </div>
        <div className='mx-5 bg-white'>
          <button className='w-full mt-5'>
            <Link to="/changepassword" className='py-2 rounded-lg  w-full flex items-center justify-between gap-2 text-black bg-white'>
              <div className='flex items-center gap-3'>
                <IoMdLock size={30} className='text-redLight' />
                <p>Login Password</p>
              </div>
              <p className='flex text-lightGray items-center gap-2'>
                Edit
                <MdKeyboardArrowRight
                  size={28} className='text-2xl' />
              </p>
            </Link>
          </button>
          <button className='w-full mt-10'>
            <Link to="/bindmail" className='pl-2 py-2 rounded-lg  w-full flex items-center justify-between gap-2 text-black bg-white'>
              <div className='flex items-center gap-3'>
                <TfiEmail size={20} className='text-redLight' />
                <p>Blind mailbox</p>
              </div>
              <p className='flex text-lightGray items-center gap-2'>
                to bind
                <MdKeyboardArrowRight
                  size={28} className='' />
              </p>
            </Link>
          </button>
          <button className='w-full mt-10'>
            <Link to="/bindmail" className='pl-2 py-2 rounded-lg  w-full flex items-center justify-between gap-2 text-black bg-white'>
              <div className='flex items-center gap-3'>
                <TfiEmail size={20} className='text-redLight' />
                <p>Google Verification</p>
              </div>
              <p className='flex text-lightGray items-center gap-2'>
                unopened
                <MdKeyboardArrowRight
                  size={28} className='' />
              </p>
            </Link>
          </button>
          <button className='w-full mt-10'>
            <Link to="/bindmail" className='pl-2 py-2 rounded-lg  w-full flex items-center justify-between gap-2 text-black bg-white'>
              <div className='flex items-center gap-3'>
                <TfiEmail size={20} className='text-redLight' />
                <p>Updated version</p>
              </div>
              <p className='flex text-lightGray items-center gap-2'>
                1.0.9
                <MdKeyboardArrowRight
                  size={28} className='' />
              </p>
            </Link>
          </button>
          {/* <button className='w-full mt-5'>
          <Link className='px-5 py-2 rounded-lg  w-full flex items-center justify-between gap-2 text-gray bg-white'>
            <div> <img className='w-14 h-14' src={versionUpdate} alt="sd" /> </div>
            <p>Updated version</p>
            <p className='flex items-center gap-2'>
              1.0.0
              <MdKeyboardArrowRight size={28} className='' />
            </p>
          </Link>
        </button> */}
        </div>
      </div>
      {nickNameModal && (
        <div className="fixed inset-0 flex flex-col items-center justify-center ">
          <div className="h-96 w-[370px] bg-red p-2 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className='w-full flex items-center justify-center py-3 font-bold px-5'>
              <p className='bg-white h-0.5 w-7'></p> &nbsp;&nbsp;
              <p className='px-7'>Change Nickname</p>&nbsp;&nbsp;
              <p className='bg-white h-0.5 w-7'></p>
            </div>
            <div className='bg-white rounded-lg h-full pt-4 flex flex-col items-center justify-between w-full p-3'>
              <div className='w-full'>
                <div className='w-full flex gap-2 justify-start items-center'>
                  <CgProfile size={20} className='text-red' />
                  <p className='text-black'>Nickname</p>
                </div>
                <div className='text-black bg-inputBg rounded-full pl-6 mt-5 p-3 w-full'>Member44207</div>
              </div>
              <button
                type="submit"
                className="mt-5 w-full font-bold py-2 rounded-full border-none bg-gradient-to-b from-[#f95959] to-[#ff9a8e] shadow-lg flex items-center justify-center"
              >
                Confirm
              </button>
            </div>
          </div>
          <div className=' text-black mt-2 border-[1px] h-7 w-7 border-lightGray rounded-full ' >
            <button className='p-0.5' onClick={() => setNicknameModal(false)}><RxCross2 className='text-lightGray' size={20} />    </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Setting