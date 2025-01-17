
import { Link } from "react-router-dom";
import lotterycategorywingo from "../assets/usaAsset/homeScreen/lotterycategorywingo.png"
import lotterycategorytrx from "../assets/usaAsset/homeScreen/lotterycategorytrx.png"
import viewall from "../assets/usaAsset/homeScreen/viewall.png"
function LotteryGamesList() {
    const games = [
        { id: 1, name: "Win Go", image: lotterycategorywingo, route: "wingo", description1: "Guess Number", description2: "Green/Red/Violet to win", bgColor: "bg-gradient-to-l from-[#ff9a8e] to-[#f95959]" },
        { id: 2, name: "Trx Win", image: lotterycategorytrx, route: "trxwingo", description1: "Guess Number", description2: "Green/Red/Violet to win", bgColor: "bg-gradient-to-l from-[#ff9a8e] to-[#f95959]" },
    ];
    return (
        <>
            {games?.map((game) => (
                <Link className="w-full mb-2 flex items-center justify-center" to={`/lottery/${game?.route}`} key={game.id}>
                    <div className={`${game.bgColor} flex justify-between px-1  pt-1 pb- w-full rounded-3xl`}>
                        <div className="col-span-1 pl-3">
                            <p className="font-bold text-lg">{game.name}</p>
                            <p className="text-xs font-semibold text-slate-200 mt-2.5">
                                {game.description1}
                            </p>
                            <p className="text-xs font-semibold text-slate-200 mt-1">
                                {game.description2}
                            </p>
                        </div>
                        <div className="col-span-1 w-[89px] h-[90px] flex justify-end ">
                            <img className="w-full h-full" src={game?.image} alt="Win Go" />
                        </div>
                    </div>
                </Link>
            ))}
            <div className="w-full mt-2 font-bold flex items-center justify-center">
                <button className="border-[1px] flex items-center justify-center w-full border-bg2 text-red p-2 rounded-full gap-2">
                    <img className="w-7 h-7" src={viewall} alt="ds" />
                    <p className="text-xsm">View All</p>
                </button>
            </div>
        </>
    );
}

export default LotteryGamesList;
