import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
import noData from "../../assets/images/no_data_available.png"

function CollectionRecord() {
    const [selected, setSelected] = useState("Daily")
    return (
        <div className='bg-bg1 font-roboto' >
            <header className='py-2 bg-white flex justify-between items-center'>
                <Link to="/activity/award" >
                    <MdKeyboardArrowLeft className=" text-3xl text-black" />
                </Link>
                <div className='text-black text-lg'>Receive History</div>
                <div></div>
            </header>
            <div className="py-2 px-2 text-lg flex">
              
                <button
                    onClick={() => setSelected("Weekly")}
                    className={`w-full px-4 rounded-md ${selected === "Weekly" ? "bg-gradient-to-r from-[#f95959] to-[#ff9a8e] text-white" : "bg-white text-gray"
                        }`}
                >
                    Weekly
                </button>
                <button
                    onClick={() => setSelected("Daily")}
                    className={` w-full px-4 py-2 rounded-md ${selected === "Daily" ? "bg-gradient-to-r from-[#f95959] to-[#ff9a8e] text-white" : "bg-white text-gray"
                        }`}
                >
                    Daily
                </button>
            </div>
            <div>
                <div className="h-64 sm:h-[22rem] flex flex-col justify-center md:h-64 mx-4 p-3 mt-3 mb-3 sm:mb-5 md:mb-3">
                    <div className="flex justify-center items-center mt-5">
                        <img
                            src={noData}
                            alt="Not Found"
                            className="w-44 h-28 sm:w-64 sm:h-40 md:w-44 md:h-28"
                        />
                    </div>
                    <p className="text-center mt-5 text-sm sm:text-base md:text-sm font-bold text-gray">
                        No data
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CollectionRecord