import axios from "axios"
import apis from "../../utils/apis"
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ChangeAvatar() {
  const [allavatar, setAllAvatar] = useState([])
  const userId = localStorage.getItem("userId");
  const AllAvatarHandler = async () => {
    try {
      const res = await axios.get(`${apis.allAvatar}`)
      if (res?.data?.success === "200") {
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
      if(res?.data?.status===200){
        toast.success("Avatar changes successfully")
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
          <img src={item?.image} className='col-span-1 w-full h-28 bg-gray p-2 rounded-lg' alt="sd" />
        </button>
      ))}
    </div>
  )
}

export default ChangeAvatar