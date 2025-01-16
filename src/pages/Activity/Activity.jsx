import activityIcon1 from "../../assets/icons/activityIcon1.png"
import activityIcon2 from "../../assets/icons/activityIcon2.png"
import activityIcon3 from "../../assets/icons/activityIcon3.png"
import gift_redeem from "../../assets/images/gift_redeem.png"
import banner1 from "../../assets/Banner_1.png"
import banner2 from "../../assets/Banner_2.png"
import banner3 from "../../assets/Banner_3.png"
import sign_in_banner from "../../assets/images/sign_in_banner.png"
import { Link } from "react-router-dom";
function Activity() {
  return (
    <div className="font-inter w-full pb-20">
      <div className=" px-3 pb-2 bg-bg2">
        <h2 className="text-white font-semibold text-lg ">Activity</h2>
        <p className="text-gray-500 text-xs pt-5">
          Please remember to follow the event page. We will launch user feedback
          activities from time to time.
        </p>
      </div>
      {/* Content Section */}
      <div className="p-3">
        {/* Activity Tiles */}
        <div className="flex items-center justify-around mb-6">
          <Link to="/activity/award" className="flex flex-col items-center justify-center">
            <div className="bg-[#FB7B69] rounded-lg p-5 text-center">
              <img src={activityIcon1} className="h-8 w-8" alt="sd" />
            </div>
            <p className="font-bold text-[10px] mt-1">Activity Award</p>
          </Link>
          <Link to="/activity/invitationbonus" className="flex flex-col items-center justify-center">
            <div className="bg-[#76BBFF] rounded-lg p-5 text-center">
              <img src={activityIcon2} className="h-8 w-8" alt="sd" />
            </div>
            <p className="font-bold text-[10px] mt-1">Invitation Bonus</p>
          </Link>
          <Link to="/activity/rebate" className="flex flex-col items-center justify-center">
            <div className="bg-[#FC820E] rounded-lg p-5 text-center">
              <img src={activityIcon3} className="h-8 w-8" alt="sd" />
            </div>
            <p className="font-bold text-[10px] mt-1">Betting rebate</p>
          </Link>
        </div>

        {/* Gift and Attendance Bonus Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Link to="/activity/gifts" className="rounded-lg shadow-md">
            <img
              src={gift_redeem}

              alt="Gifts"
              className="w-full h-[80%] object-fill rounded"
            />
            <h3 className="font-bold mt-2 text-sm">Gifts</h3>
            <p className="text-gray text-xs">
              Enter the redemption code to receive gift rewards.
            </p>
          </Link>
          <Link to="/activity/attendance" className=" rounded-lg shadow-md">
            <img
              src={sign_in_banner}
              alt="Attendance Bonus"
              className="w-full h-[80%] object-fill rounded"
            />
            <h3 className="font-bold mt-2 text-sm">
              Attendance Bonus
            </h3>
            <p className="text-gray text-xs">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p>
          </Link>
        </div>

        {/* Promotion Banner */}
        <div className="rounded-lg shadow-md bg-bg2 mt-20">
          <img
            src={banner1}

            alt="Gifts"
            className="w-full h-40 object-fill rounded-t"
          />
          <p className=" text-xs text-center py-4">
            Enter the redemption code to receive gift rewards.
          </p>
        </div>
        <div className="rounded-lg shadow-md bg-bg2 mt-2">
          <img
            src={banner2}

            alt="Gifts"
            className="w-full h-40 object-fill rounded-t"
          />
          <p className=" text-xs text-center py-4">
            Enter the redemption code to receive gift rewards.
          </p>
        </div>
        <div className="rounded-lg shadow-md bg-bg2 mt-2">
          <img
            src={banner3}

            alt="Gifts"
            className="w-full h-40 object-fill rounded-t"
          />
          <p className=" text-xs text-center py-4">
            Enter the redemption code to receive gift rewards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
