import { Link } from 'react-router-dom'
import aboutus from '../../assets/images/aboutus.png'
import aboutusicon from '../../assets/icons/aboutus.png'
import privacy from '../../assets/icons/privacy.png'
import risk from '../../assets/icons/risk.png'
import big_guide from '../../assets/icons/big_guide.png'
import { MdKeyboardArrowRight } from 'react-icons/md'

function AboutUs() {
  return (
    <div>
      <div className='bg-bg3'>
        <img src={aboutus} alt="sd" className='w-[90%] ' />
      </div>
       <div className='bg-bg2 mx-3 mt-3 rounded-md'>
                      <Link to="/aboutus/child" className='px-2 border-b border-bg1 py-4 text-sm sm:text-lg md:text-sm flex justify-between items-center'>
                          <div className='flex items-center'>
                              <img src={aboutusicon} className='rounded-full h-8 w-8' alt="not found" />&nbsp;About Us
                          </div>
                          <div className='flex items-center'>
                              <MdKeyboardArrowRight size={25} className="text-gray" />
                          </div>
                      </Link>
                      <Link to="/aboutus/confidential" className='px-2 border-b border-bg1 py-4 text-sm sm:text-lg md:text-sm flex justify-between items-center' >
                          <div className='flex items-center'>
                              <img src={privacy} className='rounded-full h-8 w-8' alt="not found" />&nbsp;Confidentiality Agreement
                          </div>
                          <div className='flex items-end'>
                              <MdKeyboardArrowRight size={25} className="text-gray" />
                          </div>
                      </Link>
                      <Link to="/aboutus/risk" className='px-2 border-b border-bg1 py-4 text-sm sm:text-lg md:text-sm flex justify-between items-center' >
                          <div className='flex items-center'>
                              <img src={risk} className='rounded-full h-8 w-8' alt="not found" />&nbsp;Risk Disclosure Agreement
                          </div>
                          <div className='flex items-end'>
                              <MdKeyboardArrowRight size={25} className="text-gray" />
                          </div>
                      </Link>
                      <Link to="/aboutus/tc" className='px-2 border-b border-bg1 py-4 text-sm sm:text-lg md:text-sm flex justify-between items-center' >
                          <div className='flex items-center'>
                              <img src={big_guide} className='rounded-full h-8 w-8' alt="not found" />&nbsp;Terms & Condition
                          </div>
                          <div className='flex items-end'>
                              <MdKeyboardArrowRight size={25} className="text-gray" />
                          </div>
                      </Link>
                      <Link to="/aboutus/faqs" className='px-2 border-b border-bg1 py-4 text-sm sm:text-lg md:text-sm flex justify-between items-center' >
                          <div className='flex items-center'>
                              <img src={risk} className='rounded-full h-8 w-8' alt="not found" />&nbsp;TirangaWin FAQs
                          </div>
                          <div className='flex items-end'>
                              <MdKeyboardArrowRight size={25} className="text-gray" />
                          </div>
                      </Link>
                  </div>
    </div>
  )
}

export default AboutUs