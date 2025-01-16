/* eslint-disable react/prop-types */
import { useState } from "react";
import noData from "../assets/images/no_data_available.png"

const WingoMyHistory = ({ myHistoryData, handlehistorybox }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <>
            {handlehistorybox === 2 ? (
                myHistoryData?.data?.length > 0 ? (
                    myHistoryData?.data?.map((item, i) => (
                        <div key={i} className="px-4 w-full mt-3">
                            <div
                                className="bg-bg2 rounded-md px-4 py-2 grid grid-cols-3"
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                            >
                                <div className="col-span-2 flex gap-2">
                                    <div className="w-10 h-10 flex flex-col rounded-md font-bold overflow-hidden relative">
                                        {item?.name == 0 ? (
                                            <>
                                                <div className="flex-1 bg-red"></div>
                                                <div className="flex-1 bg-voilet"></div>
                                            </>
                                        ) : item?.name == 5 ? (
                                            <>
                                                <div className="flex-1 bg-green"></div>
                                                <div className="flex-1 bg-voilet"></div>
                                            </>
                                        ) : (
                                            <div
                                                className={`flex-1 flex items-center justify-center ${item?.name == 1 ||
                                                    item?.name == 3 ||
                                                    item?.name == 7 ||
                                                    item?.name == 9 ||
                                                    item?.name == "Green"
                                                    ? "bg-green"
                                                    : item?.name == 2 ||
                                                        item?.name == 4 ||
                                                        item?.name == 6 ||
                                                        item?.name == 8 ||
                                                        item?.name == "Red"
                                                        ? "bg-red"
                                                        : item?.name == "Big"
                                                            ? "bg-yellow"
                                                            : item?.name == "Small"
                                                                ? "bg-bg3"
                                                                : "bg-voilet"
                                                    }`}
                                            >
                                                {item?.name[0]}
                                            </div>
                                        )}
                                        {(item?.name == 0 || item?.name == 5) && (
                                            <div className="absolute inset-0 flex items-center justify-center text-white">
                                                {item?.name}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <p>{item?.gamesno}</p>
                                        <p className="text-gray">{item?.created_at}</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex justify-end">
                                    <div>
                                        <div
                                            className={`font-bold flex items-center justify-center ${item?.win_amount === 0 && item?.status === 0 ? "text-gray border-gray" : (item?.win_amount === 0
                                                ? "text-red border-red"
                                                : "text-green border-green"
                                            )} border w-20 h-8 rounded-md`}
                                        >
                                            {item?.win_amount === 0 && item?.status === 0 ? "Pending" : (item?.win_amount === 0 ? "Failed" : "Success")}
                                        </div>
                                        <div
                                            className={`font-bold text-center ${item?.win_amount === 0 && item?.status === 0 ? "text-gray" : (item?.win_amount === 0 ? "text-red" : "text-green")}`}
                                        >
                                            {item?.win_amount === 0 && item?.status === 0 ? "--" : (item?.win_amount === 0
                                                ? `- ₹${item?.amount}.00`
                                                : `+ ₹${item?.win_amount}`)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {activeIndex === i && (
                                <div className="w-full gap-2 mt-3 text-sm">
                                    <div className="bg-bg2 w-full mt-1 py-2 flex items-center justify-between px-2 text-white rounded-md">
                                        <p>Order number</p>
                                        <p>{item?.order_id}</p>
                                    </div>
                                    <div className="bg-bg2 w-full mt-1 py-2 flex items-center justify-between px-2 text-white rounded-md">
                                        <p>Period</p>
                                        <p>{item?.gamesno}</p>
                                    </div>
                                    <div className="bg-bg2 w-full mt-1 py-2 flex items-center justify-between px-2 text-white rounded-md">
                                        <p>Purchase amount</p>
                                        <p>{item?.amount}</p>
                                    </div>
                                    <div className="bg-bg2 w-full mt-1 py-2 flex items-center justify-between px-2 text-white rounded-md">
                                        <p>Amount after tax</p>
                                        <p className="text-red">{item?.trade_amount}</p>
                                    </div>
                                    <div className="bg-bg2 w-full mt-1 py-2 flex items-center justify-between px-2 text-white rounded-md">
                                        <p>Tax</p>
                                        <p>{item?.commission}</p>
                                    </div>
                                    <div className="bg-bg2 w-full mt-1 py-2 flex items-center justify-between px-2 text-white rounded-md">
                                        <p>Result</p>
                                        {item?.status !== 0 ? <p>
                                            {item?.win_number === 1 || item?.win_number === 3 ? (
                                                <>
                                                    <span className="text-green font-bold">
                                                        {item?.win_number}
                                                    </span>{" "}
                                                    <span className="text-green">Green</span>
                                                    <span className="text-bg3">Small</span>
                                                </>
                                            ) : item?.win_number === 7 || item?.win_number === 9 ? (
                                                <>
                                                    <span className="text-green font-bold">
                                                        {item?.win_number}
                                                    </span>{" "}
                                                    <span className="text-green">Green</span>
                                                    <span className="text-yellow">Big</span>
                                                </>
                                            ) : item?.win_number === 2 || item?.win_number === 4 ? (
                                                <>
                                                    <span className="text-red font-bold">
                                                        {item?.win_number}
                                                    </span>{" "}
                                                    <span className="text-red">Red</span>
                                                    <span className="text-bg3">Small</span>
                                                </>
                                            ) : item?.win_number === 6 || item?.win_number === 8 ? (
                                                <>
                                                    <span className="text-red font-bold">
                                                        {item?.win_number}
                                                    </span>{" "}
                                                    <span className="text-red">Red</span>
                                                    <span className="text-yellow">Big</span>
                                                </>
                                            ) : item?.win_number === 0 ? (
                                                <>
                                                    <span className="text-red font-bold">
                                                        {item?.win_number}
                                                    </span>{" "}
                                                    <span className="text-red">Red</span>
                                                    <span className="text-bg3">Small</span>
                                                </>
                                            ) : item?.win_number === 5 ? (
                                                <>
                                                    <span className="text-green font-bold">
                                                        {item?.win_number}
                                                    </span>{" "}
                                                    <span className="text-green">Green</span>
                                                    <span className="text-bg3">Big</span>
                                                </>
                                            ) : null}
                                        </p> : "--"}
                                    </div>
                                    <div className="bg-bg2 w-full mt-1 py-2 flex items-center justify-between px-2 text-white rounded-md">
                                        <p>Select</p>
                                        <p>{item?.number==10? <p className="text-green">Green</p> :item?.number==20?<p className="text-voilet">Violet</p>:item?.number==30?<p className="text-red">Red</p>:item?.number==40?<p className="text-yellow">Big</p>:item?.number==50?<p className="text-bg3">Small</p>:item?.number}</p>
                                    </div>
                                    <div className="bg-bg2 w-full mt-1 py-2 flex items-center justify-between px-2 text-white rounded-md">
                                        <p>Status</p>
                                       {item?.status !== 0 ? <p>{item?.win_amount == 2 ? (<>
                                            <span className="text-red">Failed</span>
                                        </>) : <span className="text-green">Succeed</span>}</p>: <p>Unpaid</p> }
                                    </div>
                                    <div className="bg-bg2 w-full mt-1 py-2 flex items-center justify-between px-2 text-white rounded-md">
                                        <p>Win/Loss</p>
                                        {item?.status !== 0 ? <p>{item?.win_amount == 0 ? (<>
                                            <span className="text-red">₹0.00</span>
                                        </>) : <span className="text-green">₹{item?.win_amount}</span>}</p> :<p>--</p> }
                                    </div>
                                    <div className="bg-bg2 w-full mt-1 py-2 flex items-center justify-between px-2 text-white rounded-md">
                                        <p>Order time</p>
                                        <p>{item?.created_at}</p>
                                    </div>

                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="h-64 sm:h-[22rem] flex flex-col justify-center md:h-64 bg-bg2 mx-4 p-3 mt-3 mb-3 sm:mb-5 md:mb-3">
                        <div className="flex justify-center items-center mt-5">
                            <img
                                src={noData}
                                alt="Not Found"
                                className="w-44 h-28 sm:w-64 sm:h-40 md:w-44 md:h-28"
                            />
                        </div>
                        <p className="text-center mt-5 text-sm sm:text-base md:text-sm font-bold text-gray">
                            No data
                        </p>
                    </div>
                )
            ) : null}
        </>
    );
};

export default WingoMyHistory;
