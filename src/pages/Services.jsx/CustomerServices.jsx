import { Link } from 'react-router-dom'
import customerBg from '../../assets/images/customerBg.png'
import email_tab from '../../assets/icons/email_tab.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BiLogoTelegram } from 'react-icons/bi'

function CustomerServices() {
  const handleEmailClick = () => {
    window.location.href = "mailto:someone@example.com?subject=Subject&body=Body%20text";
  };

  return (
    <div>
      <div className='bg-gradient-to-l from-[#f95959] to-[#ff9a8e]'><img src={customerBg} alt="ds" /></div>
      <div className='mt-5 px-5 flex items-center justify-between w-full font-bold text-black'>
        <p>Self Service</p>
        <button className='px-3 py-1.5 text-xsm rounded-full border-none bg-gradient-to-b from-[#f95959] to-[#ff9a8e] shadow-lg flex items-center justify-center text-white'>My Issue</button>
      </div>
      <div className=' text-xsm px-5'>
        <button className='w-full mt-5 border-b-[1px] pb-2 border-gray'>
          <Link to="https://t.me/TWagent" target='_blank' className=' py-2 rounded-lg  w-full flex items-center justify-between gap-2 text-gray bg-white'>
            <div className='flex items-center gap-2'>

              <div className='bg-bg2 rounded-full w-10 h-10 text-white p-1 flex items-center justify-center'> <BiLogoTelegram size={30} /> </div>
              <p>Telegram</p>
            </div>
            <p className='flex items-center gap-2'>
              <MdKeyboardArrowRight
                size={28} className='text-2xl' />
            </p>
          </Link>
        </button>
        <button className='w-full mt-5 border-b-[1px] pb-2 border-gray'>
          <Link to="https://t.me/TWagent" target='_blank' className=' py-2 rounded-lg  w-full flex items-center justify-between gap-2 text-gray bg-white'>
            <div className='flex items-center gap-2'>

              <div className='bg-bg2 rounded-full w-10 h-10 text-white p-1 flex items-center justify-center'> <BiLogoTelegram size={30} /> </div>
              <p>Telegram</p>
            </div>
            <p className='flex items-center gap-2'>
              <MdKeyboardArrowRight
                size={28} className='text-2xl' />
            </p>
          </Link>
        </button>
        <button className='w-full mt-5 border-b-[1px] pb-2 border-gray'>
          <Link to="https://t.me/TWagent" target='_blank' className=' py-2 rounded-lg  w-full flex items-center justify-between gap-2 text-gray bg-white'>
            <div className='flex items-center gap-2'>

              <div className='bg-bg2 rounded-full w-10 h-10 text-white p-1 flex items-center justify-center'> <BiLogoTelegram size={30} /> </div>
              <p>Telegram</p>
            </div>
            <p className='flex items-center gap-2'>
              <MdKeyboardArrowRight
                size={28} className='text-2xl' />
            </p>
          </Link>
        </button>
        {/* <button className='w-full mt-5'>
          <Link to="https://t.me/tirangawinclubgame" target='_blank' className='px-5 py-2 rounded-lg  w-full flex items-center justify-between gap-2 text-black bg-white'>
            <div className='bg-bg3 rounded-full w-10 h-10 text-white p-1 flex items-center justify-center'> <BiLogoTelegram size={30} /> </div>
            <p>Channel</p>
            <p className='flex items-center gap-2'>
              <MdKeyboardArrowRight
                size={28} className='text-2xl' />
            </p>
          </Link>
        </button>
        <button
          className='px-5 py-2 rounded-lg w-full flex items-center justify-between gap-2 text-black bg-white mt-5'
          onClick={handleEmailClick}
        >
          <div>
            <img className='w-9 h-10' src={email_tab} alt="sd" />
          </div>
          <p>Email</p>
          <p className='flex items-center gap-2'>
            <MdKeyboardArrowRight size={28} />
          </p>
        </button> */}
      </div>
    </div>
  )
}

export default CustomerServices