import wallets from "../../assets/usaAsset/wallet/pro_wallet.png"
import CircularIndicator from "../../reusable_component/CircularIndicator";
import depositIcon from "../../assets/usaAsset/wallet/rechargeIcon.png"
import rechargeHistory from "../../assets/usaAsset/wallet/rechargeHistory.png"
import withdraw from "../../assets/usaAsset/wallet/widthdrawBlue.png"
import withdrawHistory from "../../assets/usaAsset/wallet/withdrawHistory.png"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import apis from '../../utils/apis'
const profileApi = apis.profile

const Wallet = () => {
  const [myDetails, setMyDetails] = useState(null)
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const profileDetails = async (userId) => {
    if (!userId) {
      toast.error("User not logged in");
      navigate("/login");
      return;
    }
    try {
      const res = await axios.get(`${profileApi}${userId}`);
      if (res?.data?.success === 200) {
        setMyDetails(res?.data)
      }
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (userId) {
      profileDetails(userId);
    }
  }, [userId]);

  // fund transfer 
  const fundTransferHandler = async () => {
    console.log("userIduserId", userId);
    if (!userId) {
      toast.error("User not logged in");
      navigate("/login");
      return;
    }
    const payload = { id: userId };
    try {
      const res = await axios.post(
        apis.fundTransfer, 
        payload, 
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
        }
      );
  
      console.log("wallet", res);
  
      if (res?.data?.status === 200) {
        profileDetails(userId)
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (er) {
      console.log("er", er);
      toast.error(er);
    }
  };
  
  // console.log("myDetailsmyDetails", myDetails)
  const array = [{ game: "Lottery", amount: 0.04 }, { game: "JILI", amount: 0.04 }, { game: "EVO_Video", amount: 0.04 }, { game: "TV_Chess", amount: 0.04 }, { game: "Wickets9", amount: 0.04 }, { game: "JDB", amount: 0.04 }, { game: "DG", amount: 0.04 }, { game: "CMD", amount: 0.04 }, { game: "CQ9", amount: 0.04 }, { game: "MG", amount: 0.04 }, { game: "SaBa", amount: 0.04 }, { game: "TB", amount: 0.04 }, { game: "PG", amount: 0.04 }, { game: "AG_Video", amount: 0.04 }, { game: "Card365", amount: 0.04 }, { game: "V8Card", amount: 0.04 }]
  return (
    <div className="min-h-screen text-lightGray bg-inputBg flex font-inter flex-col items-center">
      <div className="bg-gradient-to-l from-[#ff9a8e] to-[#f95959] flex flex-col justify-center items-center  text-white w-full px-6 pb-4 text-center shadow-md">
        <img className="h-12 w-12" src={wallets} alt="cx" />
        <p className="text-2xl font- mt-2">₹ {myDetails?.data?.wallet + myDetails?.data?.third_party_wallet}</p>
        <p className="text-xsm mt-1">Total Balance</p>
      </div>
      <div className="bg-white shadow-md rounded-lg px-2 pt-5 pb-20 mt-2 w-11/12 max-w-md">
        <div className="flex text-black">
          <div className="flex w-[50%] flex-col justify-center items-center">
            <CircularIndicator percentage={0} />

            <p className="mt-2 ">₹ {myDetails?.data?.wallet}</p>
            <p className="text-gray-500 text-xsm">Total withdraw amount</p>
          </div>
          <div className="flex w-[50%] flex-col justify-center items-center">
            <CircularIndicator percentage={0} />
            <p className="mt-2 ">₹ {myDetails?.data?.third_party_wallet}</p>
            <p className="text-gray-500 text-xsm">Total deposit amount</p>
          </div>
        </div>
        {/* <Link to="/wallet/transfer" > */}
          <button onClick={fundTransferHandler} className="bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-sm text-white w-full py-2 mt-4 rounded-full outline-none font-semibold">
            Main wallet transfer
          </button>
        {/* </Link> */}
        <div className="grid grid-cols-4 gap-4 mt-6 max-w-md">
          <button className="">
            <Link className=" rounded-lg flex flex-col justify-start h-20 items-center" to="/wallet/deposit"  >
              <img
                src={depositIcon}
                alt="Deposit"
                className="w-16 h-16"
              />
              <p className="text-xs mt-2">Deposit</p>
            </Link>
          </button>
          <button className="">
            <Link className=" rounded-lg flex flex-col justify-start h-20 items-center" to="/wallet/withdrawal"  >
              <img
                src={withdraw}
                alt="Withdrawal"
                className="w-16 h-16"
              />
              <p className="text-xs mt-2">Withdraw</p>
            </Link>
          </button>
          <button className="" >
            <Link className=" rounded-lg flex flex-col justify-start h-20 items-center" to="/wallet/deposithistory"  >
              <img
                src={rechargeHistory}
                alt="Deposit History"
                className="w-16 h-16"
              />
              <p className="text-xs mt-2">Deposit history</p>
            </Link>
          </button>
          <button className="" >
            <Link className=" rounded-lg flex flex-col justify-start h-20 items-center" to="/wallet/withdrawalhistory"  >
              <img
                src={withdrawHistory}
                alt="Withdrawal History"
                className="w-16 h-16"
              />
              <p className="text-xs mt-2">Withdrawal history</p>
            </Link>
          </button>
        </div>

      </div>
      <div className="w-full grid grid-cols-3 pl-4 mt-2 mb-20">
        {array?.map((item, i) => (
          <div
            key={i}
            className={`col-span-1 mb-2 w-28 h-20 rounded-md flex flex-col items-center text-xsm justify-evenly ${i === 0 ? "bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white" : "bg-white"
              } shadow-md text-lightGray`}
          >
            <p>₹ {item?.amount}</p>
            <p>{item?.game}</p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Wallet;
