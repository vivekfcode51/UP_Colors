import axios from "axios"
import apis from "../../utils/apis"
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function ChangeAvatar() {
  const [allavatar, setAllAvatar] = useState([])
  const [myDetails, setMyDetails] = useState(null)
  const userId = localStorage.getItem("userId");
  const profileDetails = async () => {
    try {
      const res = await axios.get(`${apis.profile}${userId}`);
      if (res?.data?.success === 200) {
        setMyDetails(res?.data?.data)
      }
    } catch (err) {
      toast.error(err);
    }
  };
  useEffect(() => {
    if (userId) {
      profileDetails();
    }
  }, [userId]);
  const navigate = useNavigate()
  const AllAvatarHandler = async () => {
    try {
      const res = await axios.get(`${apis.allAvatar}`)
      if (res?.data?.success === "200") {
        profileDetails()
        setAllAvatar(res?.data?.data)
        
      } else {
        toast.error(res?.data?.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const changeavatarHandler = async (image) => {

    const payload = {
      id: userId,
      image
    }
    try {
      const res = await axios.post(apis.update_profile, payload)
      if (res?.data?.status === 200) {
        toast.success("Avatar changes successfully")
        navigate("/setting")
      }
      console.log("res", res)
    } catch (err) {
      console.log("er", err)
    }
  }

  useEffect(() => {
    if (userId) AllAvatarHandler()
  }, [userId])
  return (
    <div className='grid grid-cols-3 p-2 gap-2'>
      {allavatar?.map((item, i) => (
        <button onClick={() => changeavatarHandler(item?.image)} key={i}>
          <img src={item?.image} className={`col-span-1 w-full ${myDetails?.image == item?.image ? "bg-red" : ""} h-28 p-1 rounded-lg`} alt="sd" />
         {myDetails?.image == item?.image ? <p className="flex items-center justify-end"><FaCheckCircle className='-mt-10 text-red rounded-full bg-white' size={20} /></p>:""}
        </button>
      ))}
    </div>
  )
}

export default ChangeAvatar