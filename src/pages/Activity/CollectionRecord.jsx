import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
import noData from "../../assets/images/no_data_available.png"

function CollectionRecord() {
    const [selected, setSelected] = useState("Daily")
    return (
        <div className='' >
            <header className='py-2 bg-bg2 flex justify-between items-center'>
                <Link to="/activity/award" >
                    <MdKeyboardArrowLeft className=" text-3xl text-white" />
                </Link>
                <div>Receive History</div>
                <div></div>
            </header>
            <div className="py-2 px-2 text-lg flex gap-4">
                <button
                    onClick={() => setSelected("Daily")}
                    className={` w-full px-4 py-5 rounded-md ${selected === "Daily" ? "bg-bg3 text-white" : "bg-bg2"
                        }`}
                >
                    Daily
                </button>
                <button
                    onClick={() => setSelected("Weekly")}
                    className={`w-full px-4 py-2 rounded-md ${selected === "Weekly" ? "bg-bg3 text-white" : "bg-bg2"
                        }`}
                >
                    Weekly
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