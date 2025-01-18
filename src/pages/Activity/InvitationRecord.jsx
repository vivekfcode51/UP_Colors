import no_data_available from "../../assets/images/no_data_available.png"
function InvitationRecord() {
    const array = [{ name: 21375, uid: 6962905, registrationTime: "2025-04-20 02:48:52", amount: 0 }, { name: 21375, uid: 6962905, registrationTime: "2025-04-20 02:48:52", amount: 0 }]
    return (
        <>
            {array ? <div className="bg-bg1 px-3 text-lightGray font-roboto">
                {array.map((item, i) => (
                    <div key={i} className="bg-white shadow-md rounded-lg mt-3 flex justify-between p-2">
                        <div className="w-[50%]">
                            <p className="text-sm text-black">Member{item.name}</p>
                            <p className="text-xs mt-5">Registration Time</p>
                            <p className="text-xsm mt-3">Deposit Amount</p>
                        </div>
                        <div className="w-[50%] flex flex-col items-end">
                            <p className="text-sm">UID:{item.uid}</p>
                            <p className="text-xs mt-5">{item.registrationTime}</p>
                            <p className="text-xsm text-redLight mt-3">₹{item.amount}.00</p>
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