import avatar from '../../assets/usaAsset/wallet/avatar.svg'
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import apis from '../../utils/apis'
import { useEffect, useState } from "react";
import axios from "axios";
const profileApi = apis.profile

function FundTransfer() {
    const [myDetails, setMyDetails] = useState(null)
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
  
    const profileDetails = async (userId) => {
      if (!userId) {
        toast.error("User not logged in");
        navigate("/login");
        return;
      }
      try {
        const res = await axios.get(`${profileApi}${userId}`);
        if (res?.data?.success === 200) {
          setMyDetails(res?.data)
        }
      } catch (err) {
        toast.error(err);
      }
    };
  
    useEffect(() => {
      if (userId) {
        profileDetails(userId);
      }
    }, [userId]);
    return (
        <div>
            <div className='bg-gradient-to-r from-[#A8ECF3] to-[#C8F1F4] px-3 flex flex-col items-center'>
                <img className='w-16 h-16 mt-5' src={avatar} alt="df" />
                <p className='mt-3 text-lg font-bold pb-28'>{myDetails?.data?.name}</p>
            </div>
        </div>
    )
}

export default FundTransfer