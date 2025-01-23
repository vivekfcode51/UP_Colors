// import { FaRegCopy } from 'react-icons/fa'
import { useEffect, useState } from "react";
import profilevip1 from "../../assets/icons/profilevip1.png"
import vip1 from "../../assets/icons/vip1.png"
import vip2 from "../../assets/icons/vip2.png"
import vip3 from "../../assets/icons/vip3.png"
import vip4 from "../../assets/icons/vip4.png"
import vip5 from "../../assets/icons/vip5.png"
import vip6 from "../../assets/icons/vip6.png"
import vip7 from "../../assets/icons/vip7.png"
import vip8 from "../../assets/icons/vip8.png"
import vip9 from "../../assets/icons/vip9.png"
import vip10 from "../../assets/icons/vip10.png"
import viptop1 from "../../assets/icons/viptop1.png"
import viptop2 from "../../assets/icons/viptop2.png"
import viptick from "../../assets/icons/viptick.png"
import red_diamond from "../../assets/usaAsset/account/red_diamond.png"
import vipstarcoin from "../../assets/usaAsset/account/monthlyReward.png"
import vipGift from "../../assets/usaAsset/account/vipGift.png"
import rebateRate from "../../assets/usaAsset/account/rebateRate.png"
import vipweal from "../../assets/usaAsset/account/red_coins.png"
import yellowheart from "../../assets/usaAsset/account/yellowHeart.png"
import depo_wallet from "../../assets/icons/depo_wallet.png"
import vipcrown from "../../assets/icons/vipcrown.png"
import vipwelfare1 from "../../assets/icons/vipwelfare1.png"
import vipwelfare2 from "../../assets/icons/vipwelfare2.png"
import vipwelfare5 from "../../assets/icons/vipwelfare5.png"
import viprulehead from "../../assets/icons/viprulehead.png"
import vipununlocked from "../../assets/icons/vipununlocked.png"
import vipbg1 from "../../assets/icons/vipbg1.png"
import vipbg2 from "../../assets/icons/vipbg2.png"
import vipbg3 from "../../assets/icons/vipbg3.png"
import vipbg4 from "../../assets/icons/vipbg4.png"
import vipbg5 from "../../assets/icons/vipbg5.png"
import vipbg6 from "../../assets/icons/vipbg6.png"
import vipbg7 from "../../assets/icons/vipbg7.png"
import vipbg8 from "../../assets/icons/vipbg8.png"
import vipbg9 from "../../assets/icons/vipbg9.png"
import vipbg10 from "../../assets/icons/vipbg10.png"
import no_data_available from '../../assets/images/no_data_available.png';

import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const avatar = "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg";
import apis from '../../utils/apis'
import { RiVipDiamondFill } from "react-icons/ri";
const profileApi = apis.profile
function VIP() {
  const [myDetails, setMyDetails] = useState(null)
  const [modal, setModal] = useState("history")
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const profileDetails = async (userId) => {
    if (!userId) {
      toast.error("User not logged in");
      navigate("/login");
      return;
    }
    try {
      const res = await axios.get(`${profileApi}${userId}`);
      console.log("response", res)
      if (res?.status === 200) {
        setMyDetails(res?.data)
        // dispatch(setProfileDetails({ total_wallet: res.data.total_wallet }))
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

  const data = [
    {
      bgColor1: "[#A3B5CF]",
      bg: vipbg1,
      tag: "1",
      img: viptop1,
      img1: vip1,
      img2: viptick,
      status: "Opened",
      total: 1000,
      benefitLevel1: "60",
      benefitMonthly1: "60",
      benefitRebate1: "0.05"
    },
    {
      bgColor1: "[#E8A460]",
      bg: vipbg2,
      tag: "2",
      img: viptop2,
      img1: vip2,
      img2: vipununlocked,
      status: "Not open yet",
      total: 10000,
      benefitLevel1: "180",
      benefitMonthly1: "90",
      benefitRebate1: "0.1"
    },
    {
      bgColor1: "[#FF8781]",
      bg: vipbg3,
      tag: "3",
      img: viptop2,
      img1: vip3,
      img2: vipununlocked,
      status: "Not open yet",
      total: 100000,
      benefitLevel1: "690",
      benefitMonthly1: "290",
      benefitRebate1: "0.15"
    },
    {
      bgColor1: "[#5AD1F3]",
      bg: vipbg4,
      tag: "4",
      img: viptop2,
      img1: vip4,
      img2: vipununlocked,
      status: "Not open yet",
      total: 4000000,
      benefitLevel1: "1690",
      benefitMonthly1: "690",
      benefitRebate1: "0.02"
    },
    {
      bgColor1: "[#F18DDF]",
      bg: vipbg5,
      tag: "5",
      img: viptop2,
      img1: vip5,
      img2: vipununlocked,
      status: "Not open yet",
      total: 20000000,
      benefitLevel1: "6900",
      benefitMonthly1: "1690",
      benefitRebate1: "0.25"
    },
    {
      bgColor1: "[#33B57E]",
      bg: vipbg6,
      tag: "6",
      img: viptop2,
      img1: vip6,
      img2: vipununlocked,
      status: "Not open yet",
      total: 80000000,
      benefitLevel1: "16900",
      benefitMonthly1: "6900",
      benefitRebate1: "0.3"
    },
    {
      bgColor1: "[#37A959]",
      bg: vipbg7,
      tag: "7",
      img: viptop2,
      img1: vip7,
      img2: vipununlocked,
      status: "Not open yet",
      total: 300000000,
      benefitLevel1: "69000",
      benefitMonthly1: "16900",
      benefitRebate1: "0.35"
    },
    {
      bgColor1: "[#458BED]",
      bg: vipbg8,
      tag: "8",
      img: viptop2,
      img1: vip8,
      img2: vipununlocked,
      status: "Not open yet",
      total: 1000000000,
      benefitLevel1: "60",
      benefitMonthly1: "30",
      benefitRebate1: "0.05"
    },
    {
      bgColor1: "[#A05AFD]",
      bg: vipbg9,
      tag: "9",
      img: viptop2,
      img1: vip9,
      img2: vipununlocked,
      status: "Not open yet",
      total: 5000000000,
      benefitLevel1: "690000",
      benefitMonthly1: "169000",
      benefitRebate1: "0.45"
    },
    {
      bgColor1: "[#FB9C3D]",
      bg: vipbg10,
      tag: "10",
      img: viptop2,
      img1: vip10,
      img2: vipununlocked,
      status: "Not open yet",
      total: 9999999999,
      benefitLevel1: "1690000",
      benefitMonthly1: "690000",
      benefitRebate1: "0.5"
    },

  ]

  const rules = [
    {
      heading: "Upgrade standard",
      content: "asdsdssd"
    },
    {
      heading: "Upgrade order",
      content: "asdsdssd"
    },
    {
      heading: "Level maintenance",
      content: "asdsdssd"
    },
    {
      heading: "Download standard",
      content: "asdsdssd"
    },
    {
      heading: "Upgrade bonus",
      content: "asdsdssd"
    },
    {
      heading: "Monthly reward",
      content: "asdsdssd"
    },
    {
      heading: "Real-time rebate",
      content: "asdsdssd"
    },
    {
      heading: "Safe",
      content: "asdsdssd"
    },

  ]

  return (
    <>
      <div className='bg-gradient-to-r from-[#f95959] to-[#ff9a8e]'>
        <div className='grid grid-cols-4 px-3 pt-5 pb-14'>
          <div className='col-span-1 flex items-center  justify-center'>
            <img src={myDetails?.data?.image ? myDetails?.data?.image : avatar} className='w-20 h-20 rounded-full' alt="not found" />
          </div>
          <div className='col-span-3 flex flex-col items-start justify-start px-2'>
            <div className=' flex flex-col items-start justify-start gap-2'>
              <img className='h-6 w-14 xsm:h-7 xsm:w-16' src={profilevip1} alt="not found" />
              <p className='capitalise text-xsm '>{myDetails?.data?.name}</p>
            </div>
            {/* <div className='mt-3 bg-yellow text-sm sm:text-lg md:text-sm rounded-full w-48 sm:w-64 md:w-48 flex items-center justify-center '>
              UID &nbsp;&nbsp;|&nbsp;&nbsp;{myDetails?.u_id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleCopyUID}> <FaRegCopy /></button>
            </div>
            <div className='mt-1 text-xs sm:text-sm md:text-xs'>Last Login : {myDetails?.last_login_time}</div> */}
          </div>
        </div>
      </div>
      <div className=" text-gray text-xs flex items-center justify-evenly px-3 gap-3 -mt-5">
        <div className="bg-white text-center py-3 shadow-md rounded-lg w-full">
          <p className="text-redLight text-sm"> <span className="text-black ">1</span> EXP</p>
          <p className="text-lightGray">My Experience</p>
        </div>
        <div className="bg-white py-3 text-center shadow-md rounded-lg w-full">
          <p className="text-lightGray text-sm"> <span className="text-black ">25</span> Days</p>
          <p className="text-lightGray">Payout time</p>
        </div>
      </div>
      <div className="flex justify-center px-3" >
        <p className="w-full text-xs py-2 text-center text-lightGray rounded-md mt-5 border-border1 border-[2px]">
          VIP level rewards are settled at 2:00 am on the 1st of every month
        </p>
      </div>
      <div className="px-3 pb-5">
        <div className=" flex gap-2 overflow-x-auto snap-x snap-mandatory hide-scrollbar ">
          {data?.map((item, i) => {
            // console.log("tiemrer", item)
            return (
              <div key={i} className="flex-none w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                <div className={`rounded-md`}
                  style={{ backgroundColor: item.bgColor1.replace("[", "").replace("]", "") }} >
                  <div
                    style={{
                      backgroundImage: `url(${item?.bg})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    className={` p-2 rounded-md snap-center mt-3 text-white flex flex-col items-center justify-center`}>
                    <div className="w-full flex items-center justify-between ">
                      <div className="flex flex-col items-start w-full justify-start">
                        <div className="flex text-nowrap items-start w-full  gap-2">
                          <div>
                            <img src={item?.img} className="w-6 h-6" alt="fdd" />
                          </div>
                          <div className="">VIP{item?.tag}</div>
                          <div className="flex items-center gap-2">
                            <img src={item?.img2} className="w-4 h-4" alt="fdd" />
                            <p>{item?.status}</p>
                          </div>
                        </div>
                        <div className="border-white py-1 text-xs rounded mt-2 px-4">
                          Dear vip 1 customer
                        </div>
                      </div>
                      <div className="flex items-center w-full justify-end">
                        <img src={item?.img1} className="w-[5.5rem] h-20" alt="sd" />
                      </div>
                    </div>
                    <div className="text-xs mt-2 w-full px-2">
                      <div className="flex items-center justify-between">
                        <p className="bg-bg2 rounded p-1">0/{item.total}</p>
                        <p>0% Completed</p>
                      </div>
                      <div className="w-full mx-1 bg-red h-2 mt-2"></div>
                      <div className="w-full mx-1">Incomplete will be deducted by the system</div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-white shadow-md rounded-lg mt-3 p-2">
                  <div className="flex items-center border-border1 border-b-2 ">
                    <div><img src={red_diamond} className="w-7 h-7" alt="df" /></div>
                    <div className="w-full font-bold px-2 py-1 text-black">VIP {item?.tag} Benefits level</div>
                  </div>
                  <div className="flex items-center gap-2 mt-5 w-full justify-center px-2">
                    <div className="flex w-32 justify-start ">
                      <img className="w-12 h-12" src={vipGift} alt="fd" />
                    </div>
                    <div className="w-full text-black">
                      <p>Level up rewards</p>
                      <p className="text-xs text-lightGray">Each account can only receive 1 time</p>
                    </div>
                    <div className="w-[50%] flex flex-col gap-1 text-red text-xs">
                      <div className="border-red border-2 flex justify-between items-center  rounded-md p-1">
                        <img src={depo_wallet} className="w-4" alt="sd" />
                        <p className="">{item?.benefitLevel1}</p>
                      </div>
                      <div className="border-redLight flex justify-between items-center  p-1 rounded-md border-2">
                        <div className="bg-red w-4 rounded-full flex items-center justify-center h-4" > <RiVipDiamondFill className="text-white" /></div>
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full justify-evenly mt-5  px-2">
                    <div className="flex w-32 justify-start ">
                      <img className="w-12 h-12" src={vipstarcoin} alt="fd" />
                    </div>
                    <div className="w-full text-black">
                      <p>Monthly rewards</p>
                      <p className="text-xs text-lightGray">Each account can only receive 1 time per month</p>
                    </div>
                    <div className="w-[50%] text-red text-xs flex flex-col gap-1 ">
                      <div className="border-red flex justify-between items-center  rounded-md border-2 p-1">
                        <img src={depo_wallet} className="w-4" alt="sd" />
                        <p className="">{item?.benefitMonthly1}</p>
                      </div>
                      <div className="border-redLight flex justify-between items-center  p-1 rounded-md border-2">
                        <div className="bg-red w-4 rounded-full flex items-center justify-center h-4" > <RiVipDiamondFill className="text-white" /></div>
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 w-full justify-evenly mt-5 px-2">
                    <div className="flex w-32 justify-start ">
                      <img className="w-12 h-12" src={rebateRate} alt="fd" />
                    </div>
                    <div className="w-full text-black">
                      <p>Rebate rate</p>
                      <p className="text-xs text-lightGray">Increase income of rebate</p>
                    </div>
                    <div className="w-[50%] text-redLight text-xs flex flex-col">
                      <div className="border-redLitext-redLight flex justify-between items-center  rounded-md border-2 p-1">
                        <img src={vipweal} className="w-4" alt="sd" />
                        <p className="">{item?.benefitRebate1}%</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className=" gap-2 bg-white shadow-md rounded-lg mt-3 p-2">
                  <div className="flex items-center border-border1 border-b-2">
                    <div><img src={vipcrown} className="w-7 h-7" alt="df" /></div>
                    <div className=" w-full font-bold px-2 py-1 text-black">My Benefits</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-5">
                    <div className="w-full col-span-1">
                      <div className="bg-gradient-to-l from-[#f95959] to-[#ff9a8e] rounded-t-lg w-full flex flex-col items-center justify-center">
                        <div className="w-full h-24 flex flex-col justify-end bg-no-repeat"
                          style={{
                            backgroundImage: `url(${vipwelfare1})`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",

                          }}
                        >
                          <div className="shadow-2xl bg-black opacity-35 text-xs font-bold flex justify-between items-center w-full px-1 pt-1 mt-3">
                            <div className=" flex justify-between items-center  rounded-md  px-1">
                              <img src={depo_wallet} className="w-4" alt="sd" />
                              <p className="">{item?.benefitLevel1}</p>
                            </div>
                            <div className=" flex justify-between items-center  p-1 rounded-md ">
                              <img src={yellowheart} className="w-4" alt="sd" />
                              <p className="">0</p>
                            </div>
                          </div>
                        </div>

                      </div>
                      < p className="text-black text-sm mx-1">Level up rewards</p>
                      <p className="text-xs text-black mt-2 mx-1">Each account can only receive 1 time</p>
                      <button className="mt-5 bg-[#CCCEDC] text-lightGray font-bold text-xsm w-full py-1.5 rounded-full mx-1">Received</button>
                    </div>
                    <div className="w-full col-span-1">
                      <div className="bg-gradient-to-r from-[#f95959] to-[#ff9a8e] rounded-t-lg w-full flex flex-col items-end justify-center">
                        <div className="w-full flex flex-col justify-end h-24 bg-no-repeat"
                          style={{
                            backgroundImage: `url(${vipwelfare2})`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",

                          }}
                        >
                          <div className="text-xs bg-black opacity-35 font-bold flex justify-between items-center w-full px-1 pt-1 mt-">
                            <div className=" flex justify-between items-center  rounded-md p-1">
                              <img src={depo_wallet} className="w-4" alt="sd" />
                              <p className="">{item?.benefitMonthly1}</p>
                            </div>
                            <div className=" flex justify-between items-center  p-1 rounded-md ">
                              <img src={yellowheart} className="w-4" alt="sd" />
                              <p>0</p>
                            </div>
                          </div>
                        </div>

                      </div>
                      <p className="text-black text-sm mx-1" >Monthly rewards</p>
                      <p className="text-xs text-black mt-2 mx-1">Each account can only receive 1 time per monthly received</p>
                      <button className="mt-5 bg-[#CCCEDC] text-lightGray font-bold text-xsm w-full py-1.5 rounded-full mx-1">Received</button>
                    </div>
                    <div className="w-full col-span-1">
                      <div className="bg-gradient-to-l from-[#f95959] to-[#ff9a8e] rounded-t-lg w-full flex flex-col items-center justify-center">
                        <div className="w-full h-24 flex flex-col justify-end bg-no-repeat"
                          style={{
                            backgroundImage: `url(${vipwelfare5})`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",

                          }}
                        >
                          <div className="text-xs bg-black opacity-35 font-bold flex justify-between items-center w-full px-1 pt-1 mt-3">
                            <div className=" flex justify-between items-center  rounded-md p-1">
                              <img src={vipweal} className="w-4" alt="sd" />
                              <p className="">{item?.benefitRebate1}</p>
                            </div>
                            <div className=" flex justify-between items-center  p-1 rounded-md ">
                              <img src={yellowheart} className="w-4" alt="sd" />
                              <p>0</p>
                            </div>
                          </div>
                        </div>

                      </div>
                      <p className="text-black text-sm mx-1" >Rebate rate</p>
                      <p className="text-xs text-black mt-2 mx-1">Increase income of rebate</p>
                      <button className="mt-5 border-redLight text-redLight border-[1px] w-full text-xsm py-1 rounded-full mx-1">Check the Details</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="bg-white grid grid-cols-2  mt-3">
          <button onClick={() => setModal("history")} className={`col-span-1  w-full ${modal === "history" ? "border-redLight text-redLight border-b-[2px]" : "text-gray"} p-3`}>History</button>
          <button onClick={() => setModal("rules")} className={`col-span-1  w-full p-3 ${modal === "rules" ? "border-redLight text-redLight border-b-[2px]" : "text-gray"}`}>Rules</button>
        </div>
        {modal === "history" && <div className="bg-white mt-3 pt-3 px-3">
          <img className="" src={no_data_available} alt="sd" />
        </div>}
        {modal === "rules" && <div className=" rounded-lg mt-3 p-2">
          <h1 className="text-redLight text-lg font-bold text-center mt-2">VIP privileges</h1>
          <h1 className="text-xsm text-lightGray text-center mt-1">VIP rule description</h1>
          {rules?.map(item => (
            <div key={item} className="bg-white rounded-xl border-[1px] mt-3 px-4 pt-0.5 pb-3">
              <p className="w-3 h-[2px] bg-redLight"></p>
              <div className="-mt-5 text-xs h-14 flex justify-center pt-3 bg-no-repeat"
                // style={{
                //   backgroundImage: `url(${viprulehead})`,
                //   backgroundPosition: "center",
                //   backgroundSize: "contain",

                // }}
              >{item?.heading}</div>
              <div className="mt-2 text-gray">{item?.content}</div>
            </div>))}
        </div>}
      </div>
    </>
  )
}

export default VIP