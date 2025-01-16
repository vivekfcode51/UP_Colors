import rulehead from "../../assets/icons/rulehead.png"

function GameRule() {

    const attendanceData = [
        { day: 1, accumulatedAmount: "₹200.00", bonus: "₹4.00" },
        { day: 2, accumulatedAmount: "₹500.00", bonus: "₹20.00" },
        { day: 3, accumulatedAmount: "₹3000.00", bonus: "₹165.00" },
        { day: 4, accumulatedAmount: "₹8000.00", bonus: "₹180.00" },
        { day: 5, accumulatedAmount: "₹20000.00", bonus: "₹450.00" },
        { day: 6, accumulatedAmount: "₹80000.00", bonus: "₹2200.00" },
        { day: 7, accumulatedAmount: "₹200000.00", bonus: "₹6000.00" },
    ];
    return (
        <div>
            <div className="px-3">
                <table className="w-full text-xs font-bold overflow-hidden rounded-lg border border-gray-300">
                    <thead className="bg-bg2 p-4 rounded-t-lg">
                        <tr>
                            <th className="py-4 text-center">Continuous Attendance</th>
                            <th className="text-center">Accumulated Amount</th>
                            <th className="text-center">Attendance Bonus</th>
                        </tr>
                    </thead>
                    <tbody className="bg-bg3">
                        {attendanceData.map((item, index) => (
                            <tr
                                key={index}
                                className={`border-b border-gray ${index === 0 ? "first:rounded-t-lg" : ""
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
            <div className='px-3 pb-5'>
                <div className='mt-3 bg-no-repeat'
                    style={{
                        backgroundImage: `url(${rulehead})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",

                    }}
                >
                    <div className="text-white text-center font-bold text-lg rounded-t-2xl py-2">
                        Rules
                    </div>
                </div>
                <ul className="space-y-4 text-xs font-bold border-[#374992] border-b-2 border-l-2 border-r-2 -mt-2 px-2 py-5">
                    <li className="flex items-start">
                        <span className="text-bg3 font-bold mr-2">◆</span>
                        The higher the number of consecutive login days, the more rewards you get, up to 7 consecutive days.
                    </li>
                    <li className="flex items-start">
                        <span className="text-bg3 font-bold mr-2">◆</span>
                        During the activity, please check once a day.
                    </li>
                    <li className="flex items-start">
                        <span className="text-bg3 font-bold mr-2">◆</span>
                        Players with no deposit history cannot claim the bonus.
                    </li>
                    <li className="flex items-start">
                        <span className="text-bg3 font-bold mr-2">◆</span>
                        Deposit requirements must be met from day one.
                    </li>
                    <li className="flex items-start">
                        <span className="text-bg3 font-bold mr-2">◆</span>
                        The platform reserves the right to final interpretation of this activity.
                    </li>
                    <li className="flex items-start">
                        <span className="text-bg3 font-bold mr-2">◆</span>
                        When you encounter problems, please contact customer service.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GameRule