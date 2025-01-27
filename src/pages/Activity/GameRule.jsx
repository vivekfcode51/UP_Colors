import { useEffect, useState } from "react";
import rulehead from "../../assets/icons/rulehead.png"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import apis from "../../utils/apis";

function GameRule() {
     const [invitationListData, setInvitationListData] = useState([])
        const navigate = useNavigate();
        const userId = localStorage.getItem("userId");
    const attendanceList = async () => {
        if (!userId) {
            toast.error("User not logged in");
            navigate("/login");
            return;
        }
        try {
            const res = await axios.get(`${apis.attendanceList}${userId}`)
            // console.log(res)
            if (res?.data?.status === 200) {
                setInvitationListData(res?.data?.data)
            } else {
                toast.error(res?.data?.message)
            }
        } catch (err) {
            toast.error(err)
        }
    }
    useEffect(() => {
        if (userId) {
            attendanceList()
        }
    }, [userId])
    console.log("invitationListData",invitationListData)
    return (
        <div className="pb-10 font-roboto">
            <div className="px-3 mt-3">
                <table className="w-full text-sm overflow-hidden rounded-lg">
                    <thead className="bg-redLight ">
                        <tr>
                            <th className="py-1 text-center">Continuous Attendance</th>
                            <th className="text-center">Accumulated Amount</th>
                            <th className="text-center">Attendance Bonus</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {invitationListData?.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index%2==0?"bg-white":"bg-bg1"} text-lightGray text-sm border-b border-redLight ${index === 0 ? "first:rounded-t-lg" : ""
                                    } ${index === invitationListData?.length - 1 ? "last:rounded-b-lg" : ""}`}
                            >
                                <td className="text-center py-2">{item.id}</td>
                                <td className="text-center">{item.accumulated_amount}</td>
                                <td className="text-center">{item.attendance_bonus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='px-3 pb-5 rounded-lg bg-white text-lightGray mx-3'>
                <div className='mt-5 bg-no-repeat'
                    // style={{
                    //     backgroundImage: `url(${rulehead})`,
                    //     backgroundPosition: "center",
                    //     backgroundSize: "contain",

                    // }}
                >
                     <div className=" text-center font-bold text-lg rounded-t-2xl py-2">
                        Rules
                    </div>
                </div>
                <ul className="space-y-4 text-xsm -mt-2 px-2 py-5">
                    <li className="flex items-start">
                        <span className="text-redLight font-bold mr-2">◆</span>
                        The higher the number of consecutive login days, the more rewards you get, up to 7 consecutive days.
                    </li>
                    <li className="flex items-start">
                        <span className="text-redLight font-bold mr-2">◆</span>
                        During the activity, please check once a day.
                    </li>
                    <li className="flex items-start">
                        <span className="text-redLight font-bold mr-2">◆</span>
                        Players with no deposit history cannot claim the bonus.
                    </li>
                    <li className="flex items-start">
                        <span className="text-redLight font-bold mr-2">◆</span>
                        Deposit requirements must be met from day one.
                    </li>
                    <li className="flex items-start">
                        <span className="text-redLight font-bold mr-2">◆</span>
                        The platform reserves the right to final interpretation of this activity.
                    </li>
                    <li className="flex items-start">
                        <span className="text-redLight font-bold mr-2">◆</span>
                        When you encounter problems, please contact customer service.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GameRule