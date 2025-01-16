
import { Link, useLocation } from "react-router-dom"
import bottomnavbar from "../assets/images/bottomnavbar.png"
import diamond from "../assets/images/diamond.png"
import home_grey from "../assets/images/home_grey.png"
import home_yellow from "../assets/images/home_yellow.png"
import wallet_grey from "../assets/images/wallet_grey.png"
import wallet_yellow from "../assets/images/wallet_yellow.png"
import account_grey from "../assets/images/account_grey.png"
import account_yellow from "../assets/images/account_yellow.png"
import { RxActivityLog } from "react-icons/rx"
function Footer() {
  const location = useLocation()
  return (
    <div className=" grid grid-cols-5 pt-4 items-center h-[5rem] xsm:h-[4rem]"
      style={{
        backgroundImage: `url(${bottomnavbar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link to="/" className="col-span-1 flex flex-col items-center">
        <img src={location.pathname === "/" ? home_yellow : home_grey} className="w-5 h-5 sm:w-7 sm:h-7 md:w-5 md:h-5" alt="" />
        <p className="text-xs sm:text-base md:text-xs text-gray">Home</p>
      </Link>
      <Link to="/activity" className="col-span-1 flex flex-col items-center">
        <RxActivityLog size={18} className={`mt-1 ${location.pathname === "/activity" ? "text-bg3" : "text-blue-300"}`} />
        <p className="text-xs sm:text-base md:text-xs text-gray">Activity</p>
      </Link>
      <Link className="-mt-9 sm:-mt-10 md:-mt-8 col-span-1 flex flex-col items-center ">
        <div className="flex items-center justify-center bg-bg3 border-[2px] border-bg1 rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-14 md:w-14">
          <img src={diamond} className="h-6 w-7 sm:h-9 sm:w-10 md:h-6 md:w-7 mt-1" alt="diamond not found" />
        </div>
        <p className="text-xs sm:text-base md:text-xs text-gray  ">Promotion</p>
      </Link>
      <Link to="/wallet" className="col-span-1 flex flex-col items-center">
        <img src={location.pathname === "/wallet" ? wallet_yellow : wallet_grey} className="w-5 h-5 sm:w-7 sm:h-7 md:w-5 md:h-5" alt="" />
        <p className="text-xs sm:text-base md:text-xs text-gray ">Wallet</p>
      </Link>
      <Link to="/profile" className="col-span-1 flex flex-col items-center">
        <img src={location.pathname === "/profile" ? account_yellow : account_grey} className="w-5 h-5 sm:w-7 sm:h-7 md:w-5 md:h-5" alt="" />
        <p className="text-xs sm:text-base md:text-xs text-gray" >Account</p>
      </Link>
    </div>
  )
}

export default Footer