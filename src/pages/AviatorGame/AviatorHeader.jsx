import React from 'react'
import usawinlogo from "../../assets/usawinlogo.png"
import { FiAlignJustify } from "react-icons/fi";

function AviatorHeader() {
  return (
    <>
     <header className=' flex items-center justify-between h-[3.22rem] w-full px-3'>
        <img className='w-24 h-9' src={usawinlogo} alt="sfrs" />
        <div className='flex items-center gap-2 text-xsm'>
            <div className='flex'>How to play?</div>
            <div>206.00</div>
            <div><FiAlignJustify />            </div>
        </div>
     </header>
    </>
  )
}
 
export default AviatorHeader
