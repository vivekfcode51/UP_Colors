import rulehead from "../../assets/icons/rulehead.png"
function InvitationRewardRule() {

    const inviteData = [
        { people: "10000 People", depositAmount: "₹500", bonus: "₹755555" },
        { people: "5000 People", depositAmount: "₹500", bonus: "₹355555" },
        { people: "1000 People", depositAmount: "₹500", bonus: "₹48555" },
        { people: "500 People", depositAmount: "₹500", bonus: "₹25555" },
        { people: "200 People", depositAmount: "₹500", bonus: "₹10955" },
        { people: "70 People", depositAmount: "₹500", bonus: "₹3355" },
        { people: "30 People", depositAmount: "₹500", bonus: "₹1555" },
        { people: "10 People", depositAmount: "₹1,111", bonus: "₹599" },
        { people: "5 People", depositAmount: "₹500", bonus: "₹299" },
        { people: "3 People", depositAmount: "₹500", bonus: "₹199" },
        
    ];
    return (
        <div>
            <div className='px-3 mt-3 text-xsm font-roboto text-lightGray'>
                <p>Invite friends and recharge to get additional platform rewards!</p>
                <p>After being claimed, the rewards will be directly distributed to the wallet balance within 10 minutes.</p>
            </div>
            <div className="mt-5 px-3">
                <table className="w-full text-sm overflow-hidden rounded-lg">
                    <thead className="bg-redLight p-4">
                        <tr>
                            <th className="py-4 text-center">Invite Account</th>
                            <th className="text-center">Deposit Amount</th>
                            <th className="text-center">Bonus</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {inviteData.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index%2==0?"bg-white":"bg-bg1"} text-lightGray text-sm border-b border-redLight ${index === 0 ? "first:rounded-t-lg" : ""
                                    } ${index === inviteData.length - 1 ? "last:rounded-b-lg" : ""}`}
                            >
                                <td className="text-center py-2">{item.people}</td>
                                <td className="text-center">{item.depositAmount}</td>
                                <td className="text-center">{item.bonus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='px-3 pb-5 rounded-lg bg-white  text-lightGray mx-3'>
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
                {/* <ul className="space-y-4 text-xs font-bold border-[#374992] border-b-2 border-l-2 border-r-2 -mt-2 px-2 py-5"> */}
                <ul className="space-y-4 text-xsm -mt-2 px-2 py-5">
                    <li className="flex items-start">
                        <span className="text-redLight font-bold mr-2">◆</span>
                        Only when the number of invited accounts is reached and each account
                        can meet the recharge amount can you receive the bonus.
                    </li>
                    <li className="flex items-start">
                        <span className="text-redLight font-bold mr-2">◆</span>
                        The invitation account meets the requirements, but the recharge
                        amount of the account does not meet the requirements, and the bonus
                        cannot be claimed.
                    </li>
                    <li className="flex items-start">
                        <span className="text-redLight font-bold mr-2">◆</span>
                        Please claim the event bonus within the event period. All bonuses
                        will be cleared after the event expires.
                    </li>
                    <li className="flex items-start">
                        <span className="text-redLight font-bold mr-2">◆</span>
                        Please complete the task within the event period. After the event
                        expires, the invitation record will be cleared.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default InvitationRewardRule