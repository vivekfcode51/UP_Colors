import { useEffect, useState } from 'react'
import { fetchAllGames, fetchAllGamesSpribe, fetchGameURL, fetchGameURLSpribe } from "../../reusable_component/gameApi";
import jilli1 from "../../assets/usaAsset/homeScreen/JILLI1.png"
import jilli2 from "../../assets/usaAsset/homeScreen/JILLI2.png"
import jilli3 from "../../assets/usaAsset/homeScreen/JILLI3.png"
import jilli4 from "../../assets/usaAsset/homeScreen/JILLI4.png"
import jilli5 from "../../assets/usaAsset/homeScreen/JILLI5.png"
import jilli6 from "../../assets/usaAsset/homeScreen/JILLI6.png"
import { useNavigate } from "react-router-dom";
function AllGames() {
    const [activeModal, setActiveModal] = useState(1);
    const [allGamesListView, setAllGamesListView] = useState(null)
    const userId = localStorage.getItem("userId")
    const toggleModal = (modalType) => {
        setActiveModal((prev) => (prev === modalType ? modalType : modalType));
    };
    const navigate= useNavigate()
    const payMethod = [{
        image: jilli6,
        image1: jilli5,
        name: "Lottery",
        type: 0
    },
    {
        image: jilli3,
        image1: jilli2,
        name: "Jilli",
        type: 1
    },
    {
        image: jilli1,
        image1: jilli4,
        name: "Spribe",
        type: 2
    }]

    useEffect(() => {
        if (activeModal === 1) {
            fetchAllGames(setAllGamesListView);
        } else if (activeModal === 2) {
            fetchAllGamesSpribe(setAllGamesListView);
        }
    }, [activeModal]);
    console.log("allGamesListView", allGamesListView)
    return (
        <div>
            <div className="hide-scrollbar overflow-x-auto py-3 mx-3">
                <div className="flex gap-2 text-xsm font-bold">
                    {payMethod && payMethod?.map((item, i) => (
                        <div key={i}
                            className={`w-32  xsm:py-3 flex-shrink-0 flex flex-col items-center justify-between shadow-lg rounded-lg ${activeModal == item?.type ? "bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white" : "bg-white text-gray"
                                }  px-3 cursor-pointer`}
                            onClick={() => toggleModal(item?.type)}
                        >
                            <img className='w-24 h-8 xsm:h-10' src={activeModal === item?.type ? item?.image : item?.image1} alt="UPI Payment" />
                            <p className=" font-bold text-nowrap">{item?.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-3 w-full">
                {allGamesListView && activeModal === 1 ? (
                    allGamesListView?.data?.data?.map((item, i) => (
                        <div onClick={() => fetchGameURL(item?.id, userId,navigate)} key={i} className="flex flex-col items-center text-black p-2">
                            <img src={item?.img} className="w-36 h-32 rounded-lg" alt="sd" />
                        </div>
                    ))
                ) : allGamesListView && activeModal === 2 ? (
                    allGamesListView?.data?.message?.data?.map((item, i) => (
                        <div onClick={() => fetchGameURLSpribe(item?.game_id_long, userId,navigate)} key={i} className="flex flex-col items-center text-black p-2">
                            <img src={item?.game_image} className="w-36 h-32 rounded-lg" alt="sd" />
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center text-black text-xl w-full col-span-3">No data</div>
                )}
            </div>
        </div>
    )
}

export default AllGames