/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import no_data_available from "../../assets/images/no_data_available.png"
import { toast } from "react-toastify";
import axios from "axios";
import apis from "../../utils/apis";
import { useEffect, useState } from "react";
function InvitationRecord() {
    const navigate = useNavigate();
    const [invitationRecordData, setInvitationRecordData] = useState([])
    const userId = localStorage.getItem("userId");
    const InvitationRecord = async () => {
        if (!userId) {
            toast.error("User not logged in");
            navigate("/login");
            return;
        }
        try {
            const res = await axios.get(`${apis.Invitation_records}${userId}`)
            if (res?.data?.status === 200) {
                setInvitationRecordData(res?.data?.data)
            } else {
                toast.error(res?.data?.message)
            }
        } catch (err) {
            console.log("Internal server error")
        }
    }

    useEffect(() => {
        InvitationRecord()
    }, [])
    //    console.log("invitationRecordData",invitationRecordData)
    const array = [{ name: 21375, uid: 6962905, registrationTime: "2025-04-20 02:48:52", amount: 0 }, { name: 21375, uid: 6962905, registrationTime: "2025-04-20 02:48:52", amount: 0 }]
    return (
        <>
            {invitationRecordData ? <div className="bg-bg1 px-3 text-lightGray font-roboto">
                {invitationRecordData?.map((item, i) => (
                    <div key={i} className="bg-white shadow-md rounded-lg mt-3 flex justify-between p-2">
                        <div className="w-[50%]">
                            <p className="text-sm text-black">Member{item.name}</p>
                            <p className="text-xs mt-5">Registration Time</p>
                            <p className="text-xsm mt-3">Deposit Amount</p>
                        </div>
                        <div className="w-[50%] flex flex-col items-end">
                            <p className="text-sm">UID:{item.u_id}</p>
                            <p className="text-xs mt-5">{item.created_at}</p>
                            <p className="text-xsm text-redLight mt-3">₹{item.first_recharge_amount}</p>
                        </div>
                    </div>
                ))}
            </div> :
                <div className="px-3">
                    <img className="mt-10" src={no_data_available} alt="ds" />
                    <p className="text-center mt-10">No Data</p>
                </div>}
        </>
    )
}

export default InvitationRecord