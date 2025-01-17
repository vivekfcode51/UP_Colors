
import usawinlogo from "../assets/usawinlogo.jpeg"
import kefu from "../assets/icons/kefu.png"
import { MdEmail, MdKeyboardArrowLeft } from "react-icons/md"
import { Link, useLocation } from "react-router-dom";
import awardRecord from "../assets/icons/awardRecord.png"
import Activitygift from "../assets/icons/Activitygift.png"
import gift from "../assets/images/gift.png"
import rechargeHistory from "../assets/icons/rechargeHistory.png";
import downloadUsa from "../assets/icons/downloadUsa.png";
import bethistory from "../assets/Andarbahar/bethistory.png";
function Header() {
  const location = useLocation();
  const userId = localStorage.getItem('userId');

  return (
    <div className="font-inter">
      {location?.pathname === "/" ? <div className='bg-white  p-2 flex justify-between items-center'>
        <img className='w-24 h-9' src={usawinlogo} alt="logo not found" />
        {!userId ? <div className=" gap-2 flex">
          <Link to="/login" className="flex items-center border border-bg3 text-bg3 rounded-md text-xs py-1 px-4">Log in</Link>
          <Link to="/register" className="bg-bg3 flex items-center border border-bg3 text-white rounded-md text-xs py-0.5 px-4">Register</Link>
        </div> :
          <div className="flex items-center">
            <div className="relative w-8 h-8">
              <MdEmail className="absolute top-2/3 right-3.5 w-7 h-7 text-bg2 transform -translate-y-1/2" />
              <div className="absolute top-0 right-1 w-5 h-5 bg-red rounded-full transform -translate-y-1/2 animate-pulse-fade"></div>
            </div>
            <img className="mt-2" src={downloadUsa} alt="sd" />
          </div>}
      </div>
        : location?.pathname === "/activity" ? <div className="w-full h-[3.22rem] bg-gradient-to-r from-[#f95959] to-[#ff9a8e] flex items-center justify-center"><img className='w-24 h-9' src={usawinlogo} alt="logo not found" /></div>
          : location?.pathname === "/activity/invitationbonus" ? <div className='bg-gradient-to-r from-[#f95959] to-[#ff9a8e] h-[3.22rem] flex items-center justify-between'>
            <Link to="/activity" >
              <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
            </Link>
            <p className='text-sm'>Invitation bonus</p>
            <div></div>
          </div>
            : location?.pathname === "/activity/award" ? <header className='h-[3.22rem] bg-gradient-to-l from-[#f95959] to-[#ff9a8e] px-3'>
              <div className='flex items-center justify-between'>
                <Link to="/activity" >
                  <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                </Link>
                <Link to="/activity/award/collectionrecord" className='flex items-center'>
                  <img className='h-5 w-5' src={awardRecord} alt="ds" />
                  <p className='text-xs'>Collection record</p>
                </Link>
              </div>

            </header>
              : location?.pathname === "/activity/invitationbonus/invitationrewardrule" ? <div className='flex items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e]'>
                <Link to="/activity/invitationbonus" >
                  <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                </Link>
                <p className='text-sm'>Invitation reward rules</p>
                <div></div>
              </div>
                : location?.pathname === "/activity/invitationbonus/invitationrecord" ? <div className='flex items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e]'>
                  <Link to="/activity/invitationbonus" >
                    <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                  </Link>
                  <p className='text-sm'>Invitation record</p>
                  <div></div>
                </div>
                  : location?.pathname === "/activity/rebate" ? <div className='flex items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                    <Link to="/activity" >
                      <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                    </Link>
                    <p className='text-sm'>Rebate</p>
                    <div></div>
                  </div>
                    : location?.pathname === "/activity/gifts" ? <header className='bg-gradient-to-l from-[#f95959] to-[#ff9a8e] px-3'>
                      <div className='flex items-center justify-between'>
                        <Link to="/activity" >
                          <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                        </Link>
                        <p className='text-sm'>Gift</p>
                        <p className='text-sm'></p>
                      </div>
                      <div className="mt-10">
                        <img src={gift} alt="sd" />
                      </div>
                    </header>
                      : location?.pathname === "/activity/attendance" ? <div className='flex  items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                        <Link to="/activity" >
                          <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                        </Link>
                        <p className='text-sm'>Attendance</p>
                        <div></div>
                      </div>
                        : location?.pathname === "/activity/gamerule" ? <div className='flex  items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                          <Link to="/activity/attendance" >
                            <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                          </Link>
                          <p className='text-sm'>Game Rules</p>
                          <div></div>
                        </div>
                          : location?.pathname === "/activity/attendacehistory" ? <div className='flex  items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                            <Link to="/activity/attendance" >
                              <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                            </Link>
                            <p className='text-sm'>Attendance History</p>
                            <div></div>
                          </div>
                            : location?.pathname === "/wallet" ? <div className='flex  items-center justify-center bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                              <p className='text-sm'>Wallet</p>
                              <div></div>
                            </div>
                              : location?.pathname === "/wallet/deposit" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                <Link to="/wallet" >
                                  <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                </Link>
                                <p className='text-sm'>Deposit</p>
                                <Link to="wallet/deposithistory" className='text-xs'>Deposit History</Link>
                              </div>
                                : location?.pathname === "/wallet/withdrawal" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                  <Link to="/wallet" >
                                    <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                  </Link>
                                  <p className='text-sm'>Withdrawal</p>
                                  <Link to="wallet/withdrawalhistory" className='text-xs'>Withdrawal History</Link>
                                </div>
                                  : location?.pathname === "/wallet/deposithistory" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                    <Link to="/wallet" >
                                      <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                    </Link>
                                    <p className='text-sm'>Deposit History</p>
                                    <p className='text-xs'></p>
                                  </div>
                                    : location?.pathname === "/wallet/withdrawalhistory" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                      <Link to="/wallet" >
                                        <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                      </Link>
                                      <p className='text-sm'>Withdrawal History</p>
                                      <p className='text-xs'></p>
                                    </div>
                                      : location?.pathname === "/wallet/withdrawal/addbankaccount" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                        <Link to="/wallet/withdrawal" >
                                          <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                        </Link>
                                        <p className='text-sm'>Add a bank account number</p>
                                        <p className='text-xs'></p>
                                      </div>
                                        : location?.pathname === "/wallet/withdrawal/addusdtwalletaddress" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                          <Link to="/wallet/withdrawal" >
                                            <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                          </Link>
                                          <p className='text-sm'>Add USDT wallet address</p>
                                          <p className='text-xs'></p>
                                        </div>
                                          : location?.pathname === "/notifications" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                            <Link to="/profile" >
                                              <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                            </Link>
                                            <p className='text-sm'>Notification</p>
                                            <p className='text-xs'></p>
                                          </div>
                                            : location?.pathname === "/vip" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                              <Link to="/profile" >
                                                <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                              </Link>
                                              <p className='text-sm'>VIP</p>
                                              <p className='text-xs'></p>
                                            </div>
                                              : location?.pathname === "/gamehistory" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                <Link to="/profile" >
                                                  <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                </Link>
                                                <p className='text-sm'>All Bet History</p>
                                                <p className='text-xs'></p>
                                              </div>
                                                : location?.pathname === "/alltransactionhistory" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                  <Link to="/profile" >
                                                    <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                  </Link>
                                                  <p className='text-sm'>Transaction History</p>
                                                  <p className='text-xs'></p>
                                                </div>
                                                  : location?.pathname === "/setting" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                    <Link to="/profile" >
                                                      <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                    </Link>
                                                    <p className='text-sm'>Setting Center</p>
                                                    <p className='text-xs'></p>
                                                  </div>
                                                    : location?.pathname === "/changepassword" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                      <Link to="/setting" >
                                                        <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                      </Link>
                                                      <p className='text-sm'>Change Password</p>
                                                      <p className='text-xs'></p>
                                                    </div>
                                                      : location?.pathname === "/bindmail" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                        <Link to="/setting" >
                                                          <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                        </Link>
                                                        <p className='text-sm'>Bind Mailbox</p>
                                                        <p className='text-xs'></p>
                                                      </div>
                                                        : location?.pathname === "/feedback" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                          <Link to="/profile" >
                                                            <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                          </Link>
                                                          <p className='text-sm'>Feedback</p>
                                                          <p className='text-xs'></p>
                                                        </div>
                                                          : location?.pathname === "/customerservices" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                            <Link to="/profile" >
                                                              <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                            </Link>
                                                            <p className='text-sm'>Customer Service</p>
                                                            <p className='text-xs'></p>
                                                          </div>
                                                            : location?.pathname === "/beginnersguide" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                              <Link to="/profile" >
                                                                <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                              </Link>
                                                              <p className='text-sm'>Beginners Guide</p>
                                                              <p className='text-xs'></p>
                                                            </div>
                                                              : location?.pathname === "/aboutus" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                                <Link to="/profile" >
                                                                  <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                </Link>
                                                                <p className='text-sm'>About Us</p>
                                                                <p className='text-xs'></p>
                                                              </div>
                                                                : location?.pathname === "/aboutus/child" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                                  <Link to="/aboutus" >
                                                                    <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                  </Link>
                                                                  <p className='text-sm'>About Us</p>
                                                                  <p className='text-xs'></p>
                                                                </div>
                                                                  : location?.pathname === "/aboutus/confidential" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                                    <Link to="/aboutus" >
                                                                      <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                    </Link>
                                                                    <p className='text-sm'>Confidentiality Agreement</p>
                                                                    <p className='text-xs'></p>
                                                                  </div>
                                                                    : location?.pathname === "/aboutus/risk" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                                      <Link to="/aboutus" >
                                                                        <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                      </Link>
                                                                      <p className='text-sm'>Risk Disclosure Agreement</p>
                                                                      <p className='text-xs'></p>
                                                                    </div>
                                                                      : location?.pathname === "/aboutus/tc" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                                        <Link to="/aboutus" >
                                                                          <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                        </Link>
                                                                        <p className='text-sm'>Terms & Condition</p>
                                                                        <p className='text-xs'></p>
                                                                      </div>
                                                                        : location?.pathname === "/aboutus/faqs" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                                          <Link to="/aboutus" >
                                                                            <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                          </Link>
                                                                          <p className='text-sm'>TirangaWin FAQs</p>
                                                                          <p className='text-xs'></p>
                                                                        </div>
                                                                          : location?.pathname === "/changeavatar" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                                            <Link to="/setting" >
                                                                              <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                            </Link>
                                                                            <p className='text-sm'>Change Avatar</p>
                                                                            <Link to="#" className="col-span-1 bg-" >
                                                                              <img className="h-8 w-8" src={rechargeHistory} alt="ds" />
                                                                            </Link>
                                                                          </div>
                                                                            : location?.pathname === "/dragonTiger" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                                              <Link to="/" >
                                                                                <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                              </Link>
                                                                              <p className='text-sm'>Dragon Tiger</p>
                                                                              <Link to="/dragonTiger/history" className="col-span-1 bg-" >
                                                                                <img className="h-8 w-8" src={rechargeHistory} alt="ds" />
                                                                              </Link>
                                                                            </div>
                                                                              : location?.pathname === "/dragonTiger/history" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                                                <Link to="/dragonTiger" >
                                                                                  <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                                </Link>
                                                                                <p className='text-sm'>Dragon Tiger</p>
                                                                                <p className='text-sm'></p>

                                                                              </div>
                                                                                : location?.pathname === "/andarbahar" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                                                  <Link to="/" >
                                                                                    <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                                  </Link>
                                                                                  <p className='text-sm'>Andar Bahar</p>
                                                                                  <Link to="/andarbahar/history" className="col-span-1 bg-gradient-to-l from-[#f95959] to-[#ff9a8e]" >
                                                                                    <img className="h-8 w-8" src={bethistory} alt="ds" />
                                                                                  </Link>
                                                                                </div>
                                                                                  : location?.pathname === "/andarbahar/history" ? <div className='flex px-2 items-center justify-between bg-gradient-to-l from-[#f95959] to-[#ff9a8e] h-[3.22rem]'>
                                                                                    <Link to="/andarbahar" >
                                                                                      <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                                    </Link>
                                                                                    <p className='text-sm'>Andar Bahar</p>
                                                                                    <p className='text-sm'></p>

                                                                                  </div>
                                                                                    : location?.pathname === "/register" || location?.pathname === "/login" ? <div className='bg-gradient-to-l from-[#f95959] to-[#ff9a8e] px-3 pt-2 sm:pt-2 md:pt-2 pb-2 sm:pb-1 md:pb-2 flex justify-between items-center'>
                                                                                      <Link to="/" >
                                                                                        <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                                      </Link>
                                                                                      <img className='w-24 h-8' src={usawinlogo} alt="logo not found" />
                                                                                      <p className='text-sm'></p>

                                                                                    </div>
                                                                                      : location?.pathname === "/forgotPassword" ? <div className='bg-gradient-to-l from-[#f95959] to-[#ff9a8e] px-3 pt-2 sm:pt-2 md:pt-2 pb-2 sm:pb-1 md:pb-2 flex justify-between items-center'>
                                                                                        <Link to="/login" >
                                                                                          <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                                        </Link>

                                                                                      </div>
                                                                                        : <div className='bg-gradient-to-l from-[#f95959] to-[#ff9a8e] px-3 pt-2 sm:pt-2 md:pt-2 pb-2 sm:pb-1 md:pb-2 flex justify-between items-center'>
                                                                                          <Link to="/" >
                                                                                            <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
                                                                                          </Link>
                                                                                          <img className='w-28 h-7 sm:w-48 sm:h-10 md:w-28 md:h-7' src={usawinlogo} alt="logo not found" />
                                                                                          <img className='w-7 h-7 sm:w-9 sm:h-9 md:w-7 md:h-7' src={kefu} alt="logo not found" />

                                                                                        </div>}
    </div>
  )
}

export default Header