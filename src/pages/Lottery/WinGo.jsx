import { useEffect, useRef, useState } from 'react';
import lotterybg1 from "../../assets/icons/vipwelfareBG.png";
import gamewallet from "../../assets/icons/gamewallet.png";
import detailbutttonbg from "../../assets/icons/vipsideboard.png";
import time from "../../assets/icons/time.png";
import timehover from "../../assets/icons/time_color.png";
import { HiArrowPathRoundedSquare } from 'react-icons/hi2';
import { RiFireFill } from 'react-icons/ri';
import bgcut from "../../assets/images/bg_cut_red.png"
import zero from "../../assets/images/zero.png"
import one from "../../assets/images/one.png"
import two from "../../assets/images/two.png"
import three from "../../assets/images/three.png"
import four from "../../assets/images/four.png"
import five from "../../assets/images/five.png"
import six from "../../assets/images/six.png"
import seven from "../../assets/images/seven.png"
import eight from "../../assets/images/eight.png"
import nine from "../../assets/images/nine.png"
import howtoplay from "../../assets/icons/howtoplay.png"
import micphone from "../../assets/icons/micphone.png"
import LotteryTimer from '../../reusable_component/LotteryTimer';
import TimerModal from '../../reusable_component/TimerModal';
import LotteryBetModal from '../../reusable_component/LotteryBetModal';
import { toast } from 'react-toastify';
import apis from '../../utils/apis'
import axios from 'axios';
import WingoMyHistory from '../../reusable_component/WingoMyHistory';
import WingoChart from '../../reusable_component/WingoChart';
import WingoWinnerAnnoucement from '../../reusable_component/WingoWinnerAnnoucement';
import GameHistoryBox from '../../reusable_component/WingoGameHistory';
import WingoPagination from '../../reusable_component/WingoPagination';
import countdownone from '../../assets/music/countdownone.mp3';
const profileApi = apis.profile
const wingo_bet_api = apis.wingo_bet
const wingo_my_history = apis.wingo_my_history
const wingo_game_history = apis.wingo_game_history
const wingo_win_amount_announcement = apis.wingo_win_amount_announcement
const images = [zero, one, two, three, four, five, six, seven, eight, nine];
const notes = [
  "Welcome to the Tiranga Games! Greetings, Gamers and Enthusiasts! the Tiranga",
  "Please be sure to always use our official website for playing the games with the fol",
  "If your deposit is not received, Please send it directly to Tiranga Games Self-service Ce"
];
const WinGo = () => {
  const [myDetails, setMyDetails] = useState(null)
  const [selectedIMgIndex, setSelectedImgIndex] = useState("1 min");
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(0);
  const [handlehistorybox, sethandlehistorybox] = useState(0);
  const [callTimer, setCallTimer] = useState(60)
  const [timerModal, setTimerModal] = useState(false);
  const [betModal, setBetModal] = useState(false);
  const [fifthDivWidth, setFifthDivWidth] = useState(null);
  const fifthDivRef = useRef();
  const [gameDetails, setGameDetails] = useState({ gameId: 1, betButtonId: "", colorCode: "" })
  const [timeLeft, setTimeLeft] = useState(0);
  const [noteValue, setNoteValue] = useState(notes[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [gameHistoryData, setGameHistoryData] = useState([])
  const [myHistoryData, setMyHistoryData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [myHistoryCurrentPage, setMyHistoryCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMyHistory, setIsLoadingMyHistory] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [myHistoryHasMore, setMyHistoryHasMore] = useState(true);
  const [modalData, setModalData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBetDone, setIsBetDone] = useState(false);
  const audioRef = useRef(null);
  const userId = localStorage.getItem("userId");
  const limit = 10;
  const handleTimerClick = (item, duration) => {
    setSelectedImgIndex(item);
    setCallTimer(duration)
  };

  const gameDetailsHandler = (item) => {
    setGameDetails((prevDetails) => ({
      ...prevDetails,
      gameId: item?.gameid
    }));
    // setRefreshKey((prevKey) => prevKey + 1);
    handleTimerClick(item.time, item.duration);
  };
  const handleBtnClick = (color, betButtonId) => {
    setBetModal(true);
    setGameDetails({ ...gameDetails, betButtonId: betButtonId, colorCode: color });
  };

  const handlehistoryClick = (buttonValue) => {
    setSelectedHistoryIndex(buttonValue);
    sethandlehistorybox(buttonValue)
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % notes.length);
        setNoteValue(notes[(currentIndex + 1) % notes.length]);

        setAnimate(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, notes]);

  const handleCloseModal = (v) => {
    setTimerModal(v);
  };

  useEffect(() => {
    if (fifthDivRef.current) {
      setFifthDivWidth(fifthDivRef.current.offsetWidth);
    }
  }, []);

  const profileDetails = async () => {
    if (!userId) {
      return;
    }
    try {
      const res = await axios.get(`${profileApi}${userId}`);
      if (res?.status === 200) {
        setMyDetails(res?.data)
      }
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    profileDetails();
  }, [userId]);

  const calculateTimeLeft = () => {
    const now = new Date();
    const secondsInCycle = (now.getMinutes() * 60 + now.getSeconds()) % callTimer;
    const remainingTime = Math.max(callTimer - secondsInCycle, 0); // Ensure non-negative timeLeft
    setTimeLeft(remainingTime);
  };

  useEffect(() => {
    const updateTimer = () => {
      calculateTimeLeft();
      setTimeout(updateTimer, 1000); // Recursively call every 1 second
    };

    updateTimer();
    return () => clearTimeout(updateTimer);
  }, [callTimer]);


  const winAmountAnnouncement = async () => {
    try {
      const res = await axios.get(`${wingo_win_amount_announcement}?userid=${userId}&game_id=${gameDetails?.gameId}&gamesno=${gameHistoryData[0]?.gamesno + 1}`)
      if (res?.status === 200) {
        console.log("res", res)
        toast.success(`You ${res?.data?.result} ${res?.data?.win}`)
        const data = res.data;
        setModalData(data);
        setIsModalVisible(true);
      }
    } catch (err) {
      console.log(err)
    }
  }

  const myHistory = async () => {
    if (isLoadingMyHistory || !myHistoryHasMore) return toast.error("failed");
    setIsLoadingMyHistory(true)
    try {
      const offset = (myHistoryCurrentPage - 1) * limit;
      const res = await axios.get(`${wingo_my_history}?userid=${userId}&game_id=${gameDetails?.gameId}&limit=${limit}&offset=${offset}`)
      if (res?.status === 200) {
        setMyHistoryData(res?.data)
        // console.log("res?.data", res?.data)
        if (res?.data?.data?.length < limit) {
          setMyHistoryHasMore(true);
        }
      }
    } catch (err) {
      console.log(err)
      setMyHistoryData(err?.data);
    } finally {
      setIsLoadingMyHistory(false);
    }
  }
  // console.log("myHistoryDatamyHistoryData", myHistoryData)
  const gameHistory = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    try {
      const offset = (currentPage - 1) * limit;
      const res = await axios.get(
        `${wingo_game_history}?game_id=${gameDetails?.gameId}&limit=${limit}&offset=${offset}`
      );
      if (res?.data?.data) {
        setGameHistoryData(res.data.data);
        if (res.data.data.length < limit) {
          setHasMore(true);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const nextPage = () => {
    if (hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const myHistoryNextPage = () => {
    if (myHistoryHasMore) {
      setMyHistoryCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const myHistoryPrevPage = () => {
    if (myHistoryCurrentPage > 1) {
      setMyHistoryCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    if (timeLeft < 6) {
      if (isBetDone) {
        localStorage.setItem("betStatus", "1")
      } else {
        localStorage.setItem("betStatus", "0")
      }
      setBetModal(false)
    }
    if (timeLeft > 0 && timeLeft <= 1) {
      profileDetails()
      myHistory()
      const betStatus = localStorage.getItem("betStatus")
      if (betStatus == 1) {
        winAmountAnnouncement()
      }
      gameHistory()
      setIsBetDone(false)
    }

  }, [timeLeft])

  useEffect(() => {
    myHistory()
    gameHistory()
    const betStatus = localStorage.getItem("betStatus")
    if (betStatus == 1) {
      winAmountAnnouncement()
    }
  }, [gameDetails?.gameId, currentPage, myHistoryCurrentPage])

  useEffect(() => {
    if (timeLeft > 0 && timeLeft < 6) {
      audioRef.current.muted = false;
      audioRef.current
        .play()
    }
  }, [timeLeft]);

  return (
    <>
      {isModalVisible && modalData && (
        <div className="relative z-50 font-inter">
          <WingoWinnerAnnoucement
            data={modalData}
            onClose={() => setIsModalVisible(false)}
          /></div>
      )}
      <div className='bg-bg1 h-full font-inter'>
        <audio ref={audioRef} className='' src={countdownone}>
          Your browser does not support the audio element.
        </audio>
        <div className='bg-bg2 h-[18rem] sm:h-[48%] md:h-[19rem] rounded-b-[55px] px-4 pt-2'>
          {/* 1st div */}
          <div
            className='p-5 h-[9rem] sm:h-[11.5rem] md:h-[9rem] rounded-3xl'
            style={{
              backgroundImage: `url(${lotterybg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
            }}
          >
            <div className='flex justify-center gap-5 items-center'>
              <p className='ml-10 font-semibold text-base sm:text-2xl md:text-base'><b className='text-xl'>₹</b> &nbsp;{myDetails?.total_wallet}</p>
              <button onClick={profileDetails}>
                <HiArrowPathRoundedSquare size={20}  className='text-gray ' />
              </button>
            </div>
            <div className='flex justify-center gap-2 items-center'>
              <img className='h-7 w-7 sm:h-10 md:h-7 sm:w-10 md:w-7' src={gamewallet} alt="not found" />
              <p className='text-base sm:text-xl md:text-base'>Wallet balance</p>
            </div>
            <div className='mt-4 sm:mt-8 md:mt-5 flex justify-between items-center'>
              <button className='bg-red text-base sm:text-xl md:text-base font-semibold w-32 sm:w-48 md:w-36 h-10 sm:h-12 md:h-10 rounded-full'>Withdraw</button>
              <button className='bg-green text-base sm:text-xl md:text-base font-semibold w-32 sm:w-48 md:w-36 h-10 sm:h-12 md:h-10 rounded-full'>Deposit</button>
            </div>
          </div>

          {/* 2nd div */}
          <div className='flex justify-between w-full gap-1 md:gap-2 mt-6 mg:mt-5 items-center'>
            <div className='shrink-0'><img src={micphone} className='w-7 h-7 ' alt="not found" /></div>
            <div className="h-7 sm:h-12 md:h-7 flex items-center overflow-hidden">
              <div
                className={`flex-1 md:flex-0 text-[#C0C1D4] w-60 sm:w-[360px] md:w-80 text-[10px] sm:text-sm md:text-xs overflow-hidden text-ellipsis whitespace-normal break-words transition-transform duration-1000 ease-in-out ${animate ? "transform -translate-y-full" : "transform translate-y-0"
                  }`}
                style={{ transform: animate ? "translateY(-100%)" : "translateY(0)" }}
              >
                {noteValue}
              </div>
            </div>
            <div
              className='shrink-0  w-[24%] md:w-[22%] text-xs sm:text-xl md:text-xs py-1 sm:py-0 flex gap-1 justify-center items-center  rounded-3xl'
              style={{
                backgroundImage: `url(${detailbutttonbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

              }}
            >
              <RiFireFill className='text-white' />
              Detail
            </div>
          </div>

          {/* game id 3rd div */}
          <div className='bg-bg4 grid grid-cols-4 w-full rounded-xl mt-5'>
            {[
              { label: 'Win go', time: '1 min', duration: 60, gameid: 1 },
              { label: 'Win go', time: '3 min', duration: 180, gameid: 2 },
              { label: 'Win go', time: '5 min', duration: 300, gameid: 3 },
              { label: 'Win go', time: '10 min', duration: 600, gameid: 4 },
            ].map((item) => (
              <div
                key={item.time}
                className={`flex flex-col col-span-1 rounded-xl items-center p-2 cursor-pointer ${selectedIMgIndex === item.time ? 'bg-bg3' : ''}`}
                onClick={() => {
                  gameDetailsHandler(item)
                  handleTimerClick(item.time, item.duration)
                }}
              >
                <img
                  src={selectedIMgIndex === item.time ? timehover : time}
                  className='h-12 sm:h-16 md:h-12 w-12 sm:w-16 md:w-12'
                  alt="timer"
                />
                <p className={`text-sm sm:text-xl md:text-sm ${selectedIMgIndex === item.time ? '' : 'text-gray'}`}>{item.label}</p>
                <p className={`text-sm sm:text-lg md:text-sm  ${selectedIMgIndex === item.time ? '' : 'text-gray'}`}>{item.time}</p>
              </div>
            ))}
          </div>

          {/* game timer 4th div */}
          <div className='flex  justify-between p-3 mt-5 rounded-2xl' style={{
            backgroundImage: `url(${bgcut})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
          }} >
            <div className='w-[50%] pr-3'>
              <button className='flex items-center justify-center  border border-black w-full text-xs sm:text-lg md:text-xs rounded-2xl '> <img src={howtoplay} className='w-6 mr-1' alt="sad" /> How to play</button>
              <p className='text-sm sm:text-lg md:text-base mt-2'>Win Go {selectedIMgIndex}</p>
              <div className='flex items-center justify-between mt-2'>
                <img src={images[gameHistoryData[0]?.number]} className='w-7 sm:w-9 md:w-7' alt="asdf" />
                <img src={images[gameHistoryData[1]?.number]} className='w-7 sm:w-9 md:w-7' alt="asdf" />
                <img src={images[gameHistoryData[2]?.number]} className='w-7 sm:w-9 md:w-7' alt="asdf" />
                <img src={images[gameHistoryData[3]?.number]} className='w-7 sm:w-9 md:w-7' alt="asdf" />
                <img src={images[gameHistoryData[4]?.number]} className='w-7 sm:w-9 md:w-7' alt="asdf" />
              </div>
            </div>
            <div className='w-[50%]'>
              <p className='text-sm sm:text-lg md:text-base text-end font-semibold'>Time remaining</p>
              <div className='flex justify-end items-center gap-1 mt-1 w-full text-sm sm:text-lg md:text-base'>
                <LotteryTimer duration={callTimer} />
              </div>
              <p className='flex justify-end text-sm sm:text-lg md:text-base font-semibold mt-5'>{gameHistoryData[0]?.gamesno + 1}</p>
            </div>
          </div>
        </div>
        {/* betting buttons 5th divv */}
        <div ref={fifthDivRef} className=' bg-bg2 mt-[13.5rem] sm:mt-[15rem] md:mt-[12.5rem] p-3 mx-4 rounded-2xl'>
          <div className='flex items-center bg-red justify-center mr-1'>
            <TimerModal duration={callTimer} isOpen={false} parentRef={fifthDivRef} onClose={(v) => handleCloseModal(v)} style={{ width: fifthDivWidth }} />
          </div>
          <div className='flex justify-between gap-5'>
            <button onClick={() => handleBtnClick("green", 10)} className={`${timerModal ? "" : "relative z-10"}  w-24 xsm:w-40 md:w-24  h-10 sm:h-12 md:h-10 rounded-bl-lg rounded-tr-lg  bg-green text-sm sm:text-xl md:text-base `}>Green</button>
            <button onClick={() => handleBtnClick("voilet", 20)} className={`${timerModal ? "" : "relative z-10"} w-24 xsm:w-40 md:w-24 h-10 sm:h-12 md:h-10 rounded-lg  bg-voilet text-sm sm:text-xl md:text-base`}>Violet</button>
            <button onClick={() => handleBtnClick("red", 30)} className={`${timerModal ? "" : "relative z-10"} w-24 xsm:w-40 md:w-24 h-10 sm:h-12 md:h-10  rounded-tl-lg rounded-br-lg  bg-red text-sm sm:text-xl md:text-base`}>Red</button>
          </div>
          <div className='bg-bg1 mt-5 rounded-lg p-2'>
            {[0, 1].map(row => (
              <div key={row} className={`flex items-center gap-2 ${row === 1 ? 'mt-2' : ''}`}>
                {images.slice(row * 5, row * 5 + 5).map((imgSrc, index) => {
                  const actualIndex = row * 5 + index;
                  const ballColor = [0].includes(actualIndex) ? "rv" : [5].includes(actualIndex) ? "gv" : [2, 4, 6, 8].includes(actualIndex) ? "r" : "g";
                  return (
                    <button
                      key={index}
                      className={`${timerModal ? "" : "relative z-10"} w-[18%] sm:h-[88px] md:w-[61.5px] h-[18%] sm:w-[88px] md:h-[50.5px]`}
                    >
                      <img onClick={() => handleBtnClick(ballColor, actualIndex)} src={imgSrc} className='h-full md:h-14 w-full' alt="ball" />
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
          {/* <div className='mt-3 flex gap-2'>
          <button onClick={handleBtnClick} className={`${timerModal ? "" : "relative z-10"}flex items-center justify-center text-sm sm:text-base md:text-sm w-[26%] py-1 sm:py-2 text-red border border-red rounded-lg`}>
            Random
          </button>
          {['X1', 'X5', 'X10', 'X20', 'X50', 'X100'].map((value, i) => (
            <button
              key={i}
              onClick={() => handleBtnClick(i)}
              className={`${timerModal ? "" : "relative z-10"} flex items-center justify-center text-xs sm:text-base md:text-xs w-[11%] rounded-lg ${selectedBtnIndex === i ? 'bg-green text-white' : 'bg-bg1 text-gray'
                }`}
            >
              {value}
            </button>
          ))}
        </div> */}
          <div className='w-full mt-3 flex'>
            <button
              onClick={() => handleBtnClick("yellow", 40)}
              className={`${timerModal ? "bg-yellow" : "relative z-10 bg-yellow"} rounded-l-full w-[50%] py-2 sm:py-3 md:py-2 text-center text-sm sm:text-xl md:text-base`}>
              Big
            </button>
            <button onClick={() => handleBtnClick("bg3", 50)} className={`${timerModal ? "bg-bg3" : "relative z-10 bg-bg3"} rounded-r-full w-[50%] py-2 sm:py-3 md:py-2 text-center text-sm sm:text-xl md:text-base `}>Small</button>
          </div>
        </div>
        <div className='mt-3 px-4 flex gap-2'>
          {['Game History', 'Chart', 'My history'].map((value, i) => (
            <button
              key={i}
              onClick={() => handlehistoryClick(i)}
              className={`flex items-center justify-center  w-[33%] text-sm sm:text-lg md:text-sm py-2 sm:py-3 md:py-2 rounded-lg ${selectedHistoryIndex === i ? 'bg-bg3 text-white font-semibold' : 'bg-bg2 text-gray'
                }`}
            >
              {value}
            </button>
          ))}
        </div>

        {/* game history  */}
        <GameHistoryBox isVisible={handlehistorybox === 0} gameHistoryData={gameHistoryData} />
        {/* Chart */}
        <WingoChart handlehistorybox={handlehistorybox} gameHistoryData={gameHistoryData} />
        {/* my history */}
        <WingoMyHistory myHistoryData={myHistoryData} handlehistorybox={handlehistorybox} />

        {/* pagination div */}

        {handlehistorybox === 2 ? (
          <WingoPagination
            currentPage={myHistoryCurrentPage}
            totalPages={`/${Math.ceil(myHistoryData?.total_bets / 10)}`}
            hasMore={myHistoryHasMore}
            onPrevClick={myHistoryPrevPage}
            onNextClick={myHistoryNextPage}
            prevDisabled={myHistoryCurrentPage === 1}
            nextDisabled={!myHistoryHasMore}
          />
        ) : (
          <WingoPagination
            currentPage={currentPage}
            totalPages={``}
            hasMore={hasMore}
            onPrevClick={prevPage}
            onNextClick={nextPage}
            prevDisabled={currentPage === 1}
            nextDisabled={!hasMore}
          />
        )}
      </div>
      {/* bet modal */}
      {betModal && !false && (
        <div className="relative z-50">
          <LotteryBetModal setIsBetDone={setIsBetDone} profileDetails={profileDetails} myHistory={myHistory} bet_api={wingo_bet_api} gameDetails={gameDetails} onClose={() => setBetModal(false)} />
        </div>
      )}
    </>
  );
};

export default WinGo;
