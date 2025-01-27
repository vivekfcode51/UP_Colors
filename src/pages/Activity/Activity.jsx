
import gift_redeem from "../../assets/images/gift_redeem.png"
import banner1 from "../../assets/Banner_1.png"
import banner2 from "../../assets/Banner_2.png"
import banner3 from "../../assets/Banner_3.png"
import sign_in_banner from "../../assets/images/sign_in_banner.png"
import reward from "../../assets/usaAsset/activity/reward.png"
import bonus from "../../assets/usaAsset/activity/bonus.png"
import { Link } from "react-router-dom";
import axios from "axios"
import apis from "../../utils/apis"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
function Activity() {
  const [bannerData, setBannerData] = useState([])
  const bannerDataHandler = async () => {
    try {
      const res = await axios.get(apis.slider)
      if (res?.data?.success === 200) {
        setBannerData(res?.data?.data)
      } else {
        toast.error(res?.data?.message)
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    bannerDataHandler()
  }, [])
  // console.log("bannerData", bannerData)
  return (
    <div className="font-roboto w-full pb-20">
      <div className=" px-3 pb-2 bg-gradient-to-r from-[#f95959] to-[#ff9a8e]">
        <h2 className="text-white font-semibold text-lg ">Activity</h2>
        <p className="text-xs pt-5">
          Please remember to follow the event page. <br /> We will launch user feedback
          activities from time to time.
        </p>
      </div>
      {/* Content Section */}
      <div className="p-3">
        <div className="flex items-center text-lightGray  gap-8 mb-6">
          <Link to="/activity/award" className="flex flex-col items-center justify-center">
            <img src={reward} className="h-8 w-8" alt="sd" />
            <p className="font-bold text-[10px] mt-1">Activity Award</p>
          </Link>
          <Link to="/activity/invitationbonus" className="flex flex-col items-center justify-center">
            <img src={bonus} className="h-8 w-8" alt="sd" />
            <p className="font-bold text-[10px] mt-1">Invitation Bonus</p>
          </Link>
        </div>

        {/* Gift and Attendance Bonus Section */}
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          <Link to="/activity/gifts" className="rounded-lg shadow-md">
            <img
              src={gift_redeem}

              alt="Gifts"
              className="w-full h-[50%] object-fill rounded"
            />
            <h3 className="font-bold text-black mt-2 text-sm px-2">Gifts</h3>
            <p className="text-lightGray text-xs font-bold px-2">
              Enter the redemption code to receive gift rewards.
            </p>
          </Link>
          <Link to="/activity/attendance" className=" rounded-lg shadow-md">
            <img
              src={sign_in_banner}
              alt="Attendance Bonus"
              className="w-full h-[50%] object-fill rounded"
            />
            <h3 className="font-bold text-black mt-2 text-sm px-2">
              Attendance Bonus
            </h3>
            <p className="text-lightGray font-bold text-xs px-2">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p>
          </Link>
        </div>

        {/* Promotion Banner */}
        {bannerData?.map((item, i) => (
          <Link key={i} to={`/activity/details/${item?.id}`}>
            <div className="rounded-lg shadow-md bg-bg2 mt-2">
              <img
                src={item?.image}

                alt="Gifts"
                className="w-full h-40 object-fill rounded-lg"
              />

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}

export default Activity;
