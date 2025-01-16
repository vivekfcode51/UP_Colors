/* eslint-disable react/prop-types */

import winnerANouncement from "../assets/images/winredpopup.png"
import LooseANouncement from "../assets/images/wingolostimage.png"
import { ImCross } from "react-icons/im";

const WingoWinnerAnnoucement = ({ data, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {/* Modal Background */}
            <div
                className="z-50 relative w-80 bg-no-repeat h-[500px] bg-contain bg-center"
                style={{ backgroundImage: `url(${data.win === 0 ? LooseANouncement : winnerANouncement})` }}
            >
                {/* Modal Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h2 className="text-2xl mt-60 font-semibold text-white">{data.win === 0 ? "Sorry" : "Congratulations!"}</h2>
                    <p className=" text-sm text-black mt-8">
                        Lottery Result:  <span className={`${data?.number === 0 || data?.number === 2 || data?.number === 4 || data?.number === 6 || data?.number === 8 ? "bg-red" : "bg-green"} font-bold text-white p-2 rounded-lg`}>
                            {data?.number === 0
                                ? `Red Voilet ${data?.number} Small`
                                : data?.number === 1
                                    ? `Green ${data?.number} Small`
                                    : data?.number === 2
                                        ? `Red ${data?.number} Small`
                                        : data?.number === 3
                                            ? `Green ${data?.number} Small`
                                            : data?.number === 4
                                                ? `Red ${data?.number} Small`
                                                : data?.number === 5
                                                    ? `Green Voilet ${data?.number} Big`
                                                    : data?.number === 6
                                                        ? `Red ${data?.number} Big`
                                                        : data?.number === 7
                                                            ? `Green ${data?.number} Big`
                                                            : data?.number === 8
                                                                ? `Red ${data?.number} Big`
                                                                : data?.number === 9
                                                                    ? `Green ${data?.number} Big`
                                                                    : ""}
                        </span>
                    </p>
                    <p className=" text-2xl text-bg1">
                        <p className="mt-14 text-2xl text-bg1">
                           {data?.win === 0 ?"":"Bonus"} 
                            <p className="font-bold text-yellow-400">{data?.win === 0 ? "Lost" : `₹ ${data?.win?.toFixed(2)}`}</p>
                        </p>
                    </p>
                    <p className=" text-2xl  text-bg1">
                        <p className="mt-8 text-sm flex text-bg1">
                            Period:{" "}
                            <p className="font-bold text-yellow-400">{data?.gameid === 1 ? `1 min , ${data?.gamesno}` : data?.gameid === 2 ? `3 mins${data?.gamesno}` : data?.gameid === 3 ? `5 mins${data?.gamesno}` : data?.gameid === 4 ? `10 mins${data?.gamesno}` : "null"}</p>
                        </p>
                    </p>
                    <button
                        className="mt-20 px-6 py-2 bg-yellow-500 font-extrabold text-white rounded-md hover:bg-yellow-600"
                        onClick={onClose}
                    >
                        <ImCross className="border-4 p-1 border-white rounded-full" size={32} />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default WingoWinnerAnnoucement