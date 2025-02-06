import { fetchAllGames, fetchGameURL } from "../reusable_component/gameApi";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import viewall from "../assets/usaAsset/homeScreen/viewall.png"
import { useNavigate } from "react-router-dom";
function LobbyGamesList() {
  const navigate=useNavigate()
  const userId = localStorage.getItem("userId")
  const [allGamesListView, setAllGamesListView] = useState(null)
  useEffect(() => {
    fetchAllGames(setAllGamesListView);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 w-full">
        {allGamesListView ? (
          allGamesListView?.data?.lobby?.map((item, i) => (
            <div onClick={() => fetchGameURL(item?.id, userId,navigate)} key={i} className=" flex flex-col items-center text-black p-2 ">
              <img src={item?.img} className="w-36 h-24 rounded-lg" alt="sd" />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center text-black text-xl w-full col-span-3">No data</div>
        )}
      </div>
      <div className="w-full mt-2 font-bold flex items-center justify-center">
        <Link className="border-[1px] flex items-center justify-center w-full border-bg2 text-red p-2 rounded-full gap-2" to="/allgames">
          <button className="flex items-center">
            <img className="w-7 h-7" src={viewall} alt="ds" />
            <p className="text-xsm">View All</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LobbyGamesList