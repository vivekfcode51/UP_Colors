import deco_first from "../assets/images/deco_first.png";
import deco_second from "../assets/images/deco_second.png";
import deco_third from "../assets/images/deco_third.png";
import deco_four from "../assets/images/deco_four.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function LotteryGamesList() {
    const games = [
        { id: 1, name: "Win Go", image: deco_first, route: "wingo", description: "Through the platform WIN GO Hash lottery seed as the result of the lottery", bgColor: "bg-bg2" },
        { id: 2, name: "K3", image: deco_second, route: "k3", description: "The player predicts 3 DICE numbers, the winning rate is high, the gameplay is simple, and it is easy to win", bgColor: "bg-bg2" },
        { id: 3, name: "5D", image: deco_third, route: "5d", description: "5 numbers are used as the result of the lottery, and the playing methods are flexible and diverse", bgColor: "bg-bg2" },
        { id: 4, name: "Trx Win Go", image: deco_four, route: "trxwingo", description: "By obtaining the real-time hash value of the TRX blockchain as the result of the lottery", bgColor: "bg-bg2" },
    ];
    return (
        <>
            <div className="flex items-start gap-1 pt-2">
                <div className="bg-bg3 rounded-2xl w-1.5 h-6"></div>
                <p className="font-semibold sm:text-2xl md:text-base ml-1">Lottery</p>
            </div>
            {games?.map((game) => (
                <Link to={`/lottery/${game?.route}`} key={game.id}>
                    <div className={`${game.bgColor} grid grid-cols-4 px-1.5 py-2  w-full mt-3 rounded-xl`}>
                        <div className="col-span-1 h-full flex flex-col items-center justify-between bg-bg3 rounded-xl py-3">
                            <p className="font-semibold text-xs sm:text-lg md:text-xs">{game?.name}</p>
                            <img className="w-12 h-10 sm:h-16 sm:w-20 md:h-10 md:w-12 mt-5" src={game?.image} alt="Win Go" />
                        </div>
                        <div className="col-span-3 pl-1">
                            <div className="flex justify-between">
                                <p className="font-semibold text-lg sm:text-2xl md:text-base">{game.name}</p>
                                <button className="flex justify-center items-center font-semibold bg-bg3 w-28 sm:w-36 md:w-28 h-7 sm:h-8 md:h-7 md:py-0.5 rounded-full text-base sm:text-xl md:text-base">
                                    GO <FaLongArrowAltRight className="font-semibold ml-2" />
                                </button>
                            </div>
                            <div className="bg-bg1 p-2 flex items-center justify-between rounded-md mt-1">
                                <p className="text-[10px] text-[#666]">The highest bonus in history</p>
                                <p>|</p>
                                <p className="text-xs text-[#ff8310]">0.00</p>
                            </div>
                            <div className="flex items-start gap-1 mt-3">
                                <div className="bg-bg3 rounded-2xl w-1.5 h-4 mt-0.5"></div>
                                <p className="text-[0.8rem] sm:text-[1rem] md:text-[0.65rem] text-[#888]">
                                    {game.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
            <div className="flex items-center gap-2 mt-2">
                <div className="bg-bg3 rounded-2xl w-1 h-5"></div>
                <p className="font-semibold">Winning Information</p>
            </div>
        </>
    );
}

export default LotteryGamesList;
