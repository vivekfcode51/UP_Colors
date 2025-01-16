import { PiCopySimpleFill } from 'react-icons/pi'
import editPswIcon from "../../assets/icons/editPswIcon.png"
import EmailIcon from "../../assets/icons/EmailIcon.png"
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
function Setting() {
  return (
    <div>
      <div className='bg-bg2 rounded-b-full h-72 w-full'>
      </div>
      <div className='bg-white rounded-lg -mt-48 text-black m-5 p-3'>
        <div className='flex items-center justify-between'>
          <div className='bg-gray w-24 h-24 rounded-full '></div>
          <Link to="/changeavatar">  <p className='text-black flex items-center'>Change Avatar <MdKeyboardArrowRight
            className='text-black' size={28} /></p></Link>
        </div>
        <div className='flex mt-5 border-bg3 border-b-[1px] pb-5 items-center justify-between text-xs'>
          <p>Nickname</p>
          <p>DBWLEV</p>
        </div>
        <div className='flex mt-5 pb-5 items-center justify-between text-xs'>
          <p>UID</p>
          <p className='flex items-center gap-2'>
            ITVO3228
            <PiCopySimpleFill size={20} className='text-bg3' />
          </p>
        </div>
      </div>
      <div className='border-l-2 pl-3 mx-5 font-bold border-bg3'>
        Security Information
      </div>
      <div className='mx-5'>
        <button className='w-full mt-5'>
          <Link to="/changepassword" className='px-5 py-2 rounded-lg  w-full flex items-center justify-between gap-2 text-black bg-white'>
            <div> <img className='w-14 h-14' src={editPswIcon} alt="sd" /> </div>
            <p>Login Password</p>
            <p className='flex items-center gap-2'>
              Edit
              <MdKeyboardArrowRight
              size={28} className='text-2xl' />
            </p>
          </Link>
        </button>
        <button className='w-full mt-5'>
          <Link to="/bindmail" className='px-5 py-2 rounded-lg  w-full flex items-center justify-between gap-2 text-black bg-white'>
            <div> <img className='w-14 h-14' src={EmailIcon} alt="sd" /> </div>
            <p>Blind Mailbox</p>
            <p className='flex items-center gap-2'>
              to bind
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
  )
}

export default Setting