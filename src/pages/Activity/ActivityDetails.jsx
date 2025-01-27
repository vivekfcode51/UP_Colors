import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import apis from '../../utils/apis';
import { toast } from 'react-toastify';

function ActivityDetails() {
    const { id } = useParams();
    const [bannerData, setBannerData] = useState([])
    const bannerDataHandler = async () => {
        try {
            const res = await axios.get(apis.slider)
            if (res?.data?.success === 200) {
                console.log(res)
                const maindata = res?.data?.data?.filter(item => item?.id == id)
                setBannerData(maindata)
            } else {
                toast.error(res?.data?.message)
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        bannerDataHandler()
    }, [])
    // console.log("bannerData filrer", bannerData)
    // console.log("id", id)
    return (
        <div>
            <div className='bg-gradient-to-r from-[#f95959] to-[#ff9a8e] h-[3.22rem] flex items-center justify-between'>
                <Link to="/activity" >
                    <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                </Link>
                <p className='text-sm'>Activity Details</p>
                <div></div>
            </div>
            <div className='w-full'>
                <img className='w-full h-[11rem]' src={bannerData[0]?.image} alt="df" />

                <div className='w-full text-black mt-5 flex flex-col items-center  gap-2 px-3'>
                    <h1>{bannerData[0]?.title}</h1>
                    <img src={bannerData[0]?.link} alt="fd" />
                </div>
            </div>
        </div>
    )
}

export default ActivityDetails