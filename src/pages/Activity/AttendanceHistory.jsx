import no_data_available from "../../assets/images/no_data_available.png"
import apis from '../../utils/apis';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment';
function AttendanceHistory() {
  const [atttendanceList, setAttenddanceList] = useState([])
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate()
  const attendanceHistory = async () => {
    if (!userId) {
      toast.error("User not logged in");
      navigate("/login");
      return;
    }
    try {
      const res = await axios.get(`${apis.attendanceHistory}${userId}`)
      if (res?.data?.status === 200) {
        setAttenddanceList(res?.data?.data)
      } else {
        toast.error(res?.data?.message)
      }
    } catch (err) {
      toast.error(err)
    }
  }
  useEffect(() => {
    if (userId) {
      attendanceHistory()
    }
  }, [userId])

  // console.log("atttendanceListatttendanceList", atttendanceList)
  return (
    <div className="px-3 font-roboto">
      <table className='w-full mt-10'>
        <thead>
          <tr className='text-black font-bold'>
            <th>ID</th>
            <th>Attendance Bonus</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {atttendanceList?.length > 0 ? atttendanceList?.map((item, i) => (
            <tr key={i} className='text-lightGray text-xsm bg-inputBg border-b '>
              <td className='text-center py-2'>{item?.id}</td>
              <td className='text-center' >₹{item?.attendance_bonus}</td>
              {/* <td className={`text-center ${item?.status === "0" ? "text-green" : ""}`}>{item?.status === "0" ? "Claimed" : "Yet to claim"}</td> */}
              <td className='text-center'>{moment(item?.created_at).format("DD-MM-YYYY")}</td>
            </tr>
          )) : <>
            <img className="mt-10" src={no_data_available} alt="ds" />
            <p className="text-center mt-10">No Data</p>
          </>}

        </tbody>
      </table>

    </div>
  )
}

export default AttendanceHistory
