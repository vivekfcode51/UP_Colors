import rulehead from "../../assets/icons/rulehead.png"

function GameRule() {

    const attendanceData = [
        { day: 1, accumulatedAmount: "₹200.00", bonus: "₹5.00" },
        { day: 2, accumulatedAmount: "₹1,000.00", bonus: "₹18.00" },
        { day: 3, accumulatedAmount: "₹3,000.00", bonus: "₹100.00" },
        { day: 4, accumulatedAmount: "₹10,000.00", bonus: "₹200.00" },
        { day: 5, accumulatedAmount: "₹20,000.00", bonus: "₹400.00" },
        { day: 6, accumulatedAmount: "₹100,000.00", bonus: "₹3,000.00" },
        { day: 7, accumulatedAmount: "₹200,000.00", bonus: "₹7,000.00" },
    ];
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
                        {attendanceData.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index%2==0?"bg-white":"bg-bg1"} text-lightGray text-sm border-b border-redLight ${index === 0 ? "first:rounded-t-lg" : ""
                                    } ${index === attendanceData.length - 1 ? "last:rounded-b-lg" : ""}`}
                            >
                                <td className="text-center py-2">{item.day}</td>
                                <td className="text-center">{item.accumulatedAmount}</td>
                                <td className="text-center">{item.bonus}</td>
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