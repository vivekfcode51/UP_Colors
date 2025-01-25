import { useEffect, useRef, useState } from "react"
import { handleGameContainerType } from "../../features/AllGamesContainerSlice";
import { useDispatch, useSelector } from "react-redux";
import AllGamesContainer from "../../reusable_component/AllGamesContainer";
import ImageCarousel from "../../reusable_component/ImageCarousel";
import { RiFireFill } from "react-icons/ri";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import bgActiveCategory from "../../assets/usaAsset/homeScreen/bgActiveCategory.png"
import gamecategoryLottery from "../../assets/usaAsset/homeScreen/gamecategoryLottery.png"
import gamecategoryminigames from "../../assets/usaAsset/homeScreen/gamecategoryminigames.png"
import gamecategorypopular from "../../assets/usaAsset/homeScreen/gamecategorypopular.png"
import gamecategoryslots from "../../assets/usaAsset/homeScreen/gamecategoryslots.png"
import gamecategoryfish from "../../assets/usaAsset/homeScreen/gamecategoryfish.png"
import gamecategorycasino from "../../assets/usaAsset/homeScreen/gamecategorycasino.png"
import gamecategoryloby from "../../assets/usaAsset/homeScreen/gamecategoryloby.png"
import gamecategorypoker from "../../assets/usaAsset/homeScreen/gamecategorypoker.png"
import lotterycategorywingo from "../../assets/usaAsset/homeScreen/lotterycategorywingo.png"
import lotterycategorytrx from "../../assets/usaAsset/homeScreen/lotterycategorytrx.png"
import person1 from "../../assets/usaAsset/homeScreen/person1.png"
import person2 from "../../assets/usaAsset/homeScreen/person2.png"
import person3 from "../../assets/usaAsset/homeScreen/person3.png"
import person4 from "../../assets/usaAsset/homeScreen/person4.png"
import person5 from "../../assets/usaAsset/homeScreen/person5.png"
import person6 from "../../assets/usaAsset/homeScreen/person6.png"
import person7 from "../../assets/usaAsset/homeScreen/person7.png"
import person8 from "../../assets/usaAsset/homeScreen/person8.png"
import person9 from "../../assets/usaAsset/homeScreen/person9.png"
import person10 from "../../assets/usaAsset/homeScreen/person10.png"
import person11 from "../../assets/usaAsset/homeScreen/person11.png"
import person12 from "../../assets/usaAsset/homeScreen/person12.png"
import person13 from "../../assets/usaAsset/homeScreen/person13.png"
import person14 from "../../assets/usaAsset/homeScreen/person14.png"
import person15 from "../../assets/usaAsset/homeScreen/person15.png"
import person16 from "../../assets/usaAsset/homeScreen/person16.png"
import person17 from "../../assets/usaAsset/homeScreen/person17.png"
import person18 from "../../assets/usaAsset/homeScreen/person18.png"
import person19 from "../../assets/usaAsset/homeScreen/person19.png"
import person20 from "../../assets/usaAsset/homeScreen/person20.png"
import DailyProfitRankStage from "../../assets/usaAsset/homeScreen/DailyProfitRankStage.png"
import rankbg1 from "../../assets/usaAsset/homeScreen/rankbg1.png"
import rankbg2 from "../../assets/usaAsset/homeScreen/rankbg2.png"
import rankbg3 from "../../assets/usaAsset/homeScreen/rankbg3.png"
import no1badge from "../../assets/usaAsset/homeScreen/no1badge.png"
import no2badge from "../../assets/usaAsset/homeScreen/no2badge.png"
import no3badge from "../../assets/usaAsset/homeScreen/no3badge.png"
import crownno1 from "../../assets/usaAsset/homeScreen/crownno1.png"
import crownno2 from "../../assets/usaAsset/homeScreen/crownno2.png"
import crownno3 from "../../assets/usaAsset/homeScreen/crownno3.png"
const notes = [
    "Welcome to the Tiranga Games! Greetings, Gamers and Enthusiasts! the Tiranga",
    "Please be sure to always use our official website for playing the games with the fol",
    "If your deposit is not received, Please send it directly to Tiranga Games Self-service Ce"
];
function Home() {
    const [currentIndexWin, setCurrentIndexWin] = useState(0);
    const [noteValue, setNoteValue] = useState(notes[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    const { gameName } = useSelector((state) => state.AllGamesContainer);
    const dispatch = useDispatch();
    const buttonRef = useRef(null);
    const fixedScrollHeight = 500;
    const handleLotteryContainer = () => {
        const height = "5rem";
        const gameName = "lottery";
        dispatch(handleGameContainerType({ height, gameName }));
    };
    const handleMiniGamesContainer = () => {
        const height = "5rem";
        const gameName = "minigames";
        dispatch(handleGameContainerType({ height, gameName }));
    };
    const handlePopularContainer = () => {
        const height = "5rem";
        const gameName = "popular";
        dispatch(handleGameContainerType({ height, gameName }));
    };
    const handleSlotsContainer = () => {
        const height = "5rem";
        const gameName = "slots";
        dispatch(handleGameContainerType({ height, gameName }));
    };
    const handleFishingContainer = () => {
        const height = "5rem";
        const gameName = "fishing";
        dispatch(handleGameContainerType({ height, gameName }));
    };
    const handleCasinoContainer = () => {
        const height = "5rem";
        const gameName = "casino";
        dispatch(handleGameContainerType({ height, gameName }));
    };
    const handleLobbyContainer = () => {
        const height = "5rem";
        const gameName = "lobby";
        dispatch(handleGameContainerType({ height, gameName }));
    };
    const handlePokerContainer = () => {
        const height = "5rem";
        const gameName = "poker";
        dispatch(handleGameContainerType({ height, gameName }));
    };
    const buttonData = [
        { onClick: handleLotteryContainer, key: "lottery", bg: bgActiveCategory, icon: gamecategoryLottery, label: "Lottery" },
        { onClick: handleMiniGamesContainer, key: "minigames", bg: bgActiveCategory, icon: gamecategoryminigames, label: "Mini Games" },
        { onClick: handlePopularContainer, key: "popular", bg: bgActiveCategory, icon: gamecategorypopular, label: "Popular" },
        { onClick: handleSlotsContainer, key: "slots", bg: bgActiveCategory, icon: gamecategoryslots, label: "Slots" },
        { onClick: handleFishingContainer, key: "fishing", bg: bgActiveCategory, icon: gamecategoryfish, label: "Fishing" },
        { onClick: handleCasinoContainer, key: "casino", bg: bgActiveCategory, icon: gamecategorycasino, label: "Casino" },
        { onClick: handleLobbyContainer, key: "lobby", bg: bgActiveCategory, icon: gamecategoryloby, label: "Lobby" },
        { onClick: handlePokerContainer, key: "poker", bg: bgActiveCategory, icon: gamecategorypoker, label: "Poker" },
    ];

    useEffect(() => {
        if (gameName && buttonRef.current) {
            const buttonPosition = buttonRef.current.getBoundingClientRect().top + window.scrollY;
            const positionToScroll = Math.max(buttonPosition - fixedScrollHeight, 0);
            window.scrollTo({
                top: positionToScroll,
                behavior: "smooth",
            });
        }
    }, [gameName]);
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
    const winningData = [
        { id: 1, avatar: person1, gameImage: gamecategorycasino, name: "Mem***CQF", amount: "₹600.00" },
        { id: 2, avatar: person2, gameImage: lotterycategorywingo, name: "Mem***CDM", amount: "₹95.00" },
        { id: 3, avatar: person3, gameImage: lotterycategorytrx, name: "Mem***JVW", amount: "₹540.00" },
        { id: 4, avatar: person4, gameImage: gamecategorycasino, name: "Mem***QGS", amount: "₹170.00" },
        { id: 5, avatar: person5, gameImage: gamecategorycasino, name: "Mem***UUQ", amount: "₹600.00" },
        { id: 6, avatar: person6, gameImage: gamecategorycasino, name: "Mem***GTR", amount: "₹85.00" },
        { id: 7, avatar: person7, gameImage: lotterycategorywingo, name: "Mem***WTY", amount: "₹430.00" },
        { id: 8, avatar: person8, gameImage: gamecategorycasino, name: "Mem***HSD", amount: "₹190.00" },
        { id: 9, avatar: person9, gameImage: lotterycategorytrx, name: "Mem***JKL", amount: "₹310.00" },
        { id: 10, avatar: person10, gameImage: gamecategorycasino, name: "Mem***PQR", amount: "₹725.00" },
        { id: 11, avatar: person11, gameImage: gamecategorycasino, name: "Mem***XYZ", amount: "₹245.00" },
        { id: 12, avatar: person12, gameImage: lotterycategorywingo, name: "Mem***AAA", amount: "₹560.00" },
        { id: 13, avatar: person13, gameImage: lotterycategorytrx, name: "Mem***BBB", amount: "₹670.00" },
        { id: 14, avatar: person14, gameImage: gamecategorycasino, name: "Mem***CCC", amount: "₹380.00" },
        { id: 15, avatar: person15, gameImage: lotterycategorywingo, name: "Mem***DDD", amount: "₹290.00" },
        { id: 16, avatar: person16, gameImage: lotterycategorytrx, name: "Mem***EEE", amount: "₹820.00" },
        { id: 17, avatar: person17, gameImage: lotterycategorytrx, name: "Mem***FFF", amount: "₹430.00" },
        { id: 18, avatar: person18, gameImage: lotterycategorytrx, name: "Mem***GGG", amount: "₹600.00" },
        { id: 19, avatar: person19, gameImage: gamecategorycasino, name: "Mem***HHH", amount: "₹950.00" },
        { id: 20, avatar: person20, gameImage: gamecategorycasino, name: "Mem***III", amount: "₹110.00" },
    ];
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndexWin((prevIndex) =>
                prevIndex + 1 >= winningData.length ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(intervalId);
    }, [winningData.length]);

    const visibleData = [
        ...winningData.slice(currentIndexWin, currentIndexWin + 5),
        ...(currentIndexWin + 5 > winningData.length
            ? winningData.slice(0, (currentIndexWin + 5) % winningData.length)
            : []),
    ].slice(0, 5);

    return (
        <div className="mb-28 font-roboto">
            <div className="rounded-xl px-3">
                <ImageCarousel />
            </div>
            <div className='px-3 flex shadow-lg justify-between w-full gap-1 items-center bg-white text-gray p-1 rounded-full '>
                <div className='shrink-0'><HiMiniSpeakerWave size={20} className="text-red" />                </div>
                <div className="h-9 flex items-center overflow-hidden">
                    <div
                        className={`flex-1 font-bold xsm:flex-0 text-gray w-[80%] xsm:w-[19rem] text-[10px] xsm:text-xs overflow-hidden text-ellipsis whitespace-normal break-words transition-transform duration-1000 ease-in-out ${animate ? "transform -translate-y-full" : "transform translate-y-0"
                            }`}
                        style={{ transform: animate ? "translateY(-100%)" : "translateY(0)" }}
                    >
                        {noteValue}
                    </div>
                </div>
                <div
                    className='shrink-0 w-[20%] font-bold xsm:w-[22%] py-1 text-white text-xs bg-red flex gap-1 justify-center items-center  rounded-3xl'
                >
                    <RiFireFill className='' />
                    Detail
                </div>
            </div>
            <div className="overflow-y-scroll pl-3 pr-0.5 w-full mt-5 flex items-start justify-between hide-scrollbar">
                <div className="w-[20%]">
                    {buttonData?.map((item, i) => {
                        return (
                            <button
                                key={i}
                                onClick={item.onClick}
                                className="flex flex-col pt-1 w-[74.5px] mb-3 h-[69.5px] bg-cover bg-no-repeat  justify-between items-center rounded-md"
                                style={{
                                    backgroundImage: `url(${gameName === item.key ? item.bg : ""})`,
                                    backgroundPosition: "center",
                                }}
                            >
                                <img src={item.icon} className="w-12 h-10" alt="lotterycase not found" />
                                <p className={`text-xs pb-1 font-semibold ${gameName === item.key ? "text-white" : "text-black"} `}>{item.label}</p>
                            </button>
                        )
                    })}
                </div>
                <div className=" w-[75%]">
                    <AllGamesContainer />
                </div>
            </div>
            {/* winnng info div */}
            <div className="p-3 text-black max-w-md mx-auto">
                <h2 className="text-lg font-semibold mb-4">Winning information</h2>
                <div className="space-y-2 overflow-hidden">
                    {visibleData
                        .slice()
                        .reverse() // Reverse to add new data at the top
                        .map((data) => (
                            <div
                                key={data.id}
                                className="flex items-center justify-start gap-6 p-3 rounded-lg shadow-md transform transition-transform duration-500 ease-in-out"
                                style={{
                                    animation: `fadeInFromTop 300ms ease-in-out`,
                                }}
                            >
                                <div className="flex items-center space-x-2 w-[35%]">
                                    <img
                                        src={data.avatar}
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <p className="text-xsm font-semibold">{data.name}</p>
                                </div>
                                <div className="flex w-[65%] gap-6">
                                    <div className="bg-redLight flex justify-center items-center rounded-lg w-[4.2rem] h-12">
                                        <img
                                            src={data.gameImage}
                                            alt="Game"
                                            className="w-12 h-9 rounded-md object-fill"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-start items-start">
                                        <p className="text-xsm text-nowrap text-black font-bold">
                                            Receive {data.amount}
                                        </p>
                                        <p className="text-xsm text-nowrap text-slate-300 font-semibold">
                                            Winning amount
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="px-2">
                <div className="h-4 flex items-center gap-2">
                    <div className="w-[3px] h-full bg-red"></div>
                    <p className="text-black text-lg font-semibold">Today&apos;s earnings chart</p>
                </div>
                <div className="mt-10">
                    <div className="text-black flex items-end justify-around">
                        <div className="-mb-[7rem] xs:-mb-[7.2rem] xsm:-mb-[7rem]  flex flex-col justify-center items-center w-[30%]">
                            <div className="object-fill -mb-2 flex items-center justify-center bg-cover w-16 h-16"
                                style={{
                                    backgroundImage: `url(${rankbg2})`
                                }}
                            >
                                <div className="object-fill bg-cover w-14 h-14 rounded-full"
                                    style={{
                                        backgroundImage: `url(${person2})`
                                    }}
                                >
                                    <img src={crownno2} className="-ml-5 -mt-7" alt="sd" />
                                </div>
                            </div>
                            <img className="w-16" src={no2badge} alt="ds" />
                            <p className="text-xsm text-white font-bold z-10 mt-3">Mem***566</p>
                            <p className="text-xsm mt-1 xs:mt-2 font-bold z-10 rounded-full w-full py-1 text-center text-white bg-gradient-to-l from-[#ff8e8a] to-[#ff9a8e] ">₹588,900.00</p>
                        </div>
                        <div className="-mb-[5.6rem] xs:-mb-[6rem] xsm:-mb-[6rem] flex flex-col justify-center items-center w-[40%]">
                            <div className=" object-fill -mb-2 flex items-center justify-center bg-cover w-16 h-16"
                                style={{
                                    backgroundImage: `url(${rankbg1})`
                                }}
                            >
                                <div className="object-fill z-40 bg-cover w-14 h-14 rounded-full"
                                    style={{
                                        backgroundImage: `url(${person1})`
                                    }}
                                >
                                    <img src={crownno1} className=" -ml-5 -mt-7" alt="sd" />
                                </div>
                            </div>
                            <img className="z-40 w-16" src={no1badge} alt="ds" />
                            <p className="text-xsm text-white z-40 font-bold mt-3">Mem***387</p>
                            <p className="text-xsm mt-2 font-bold z-40 rounded-full px-3 py-1 text-center text-white bg-gradient-to-l from-[#ff8e8a] to-[#ff9a8e] ">₹2,853,503.00</p>
                        </div>
                        <div className="-mb-[7rem] xs:-mb-[7.2rem] xsm:-mb-[7rem] flex flex-col justify-center items-center w-[30%]">
                            <div className="object-fill -mb-2 flex items-center justify-center bg-cover w-16 h-16"
                                style={{
                                    backgroundImage: `url(${rankbg3})`
                                }}
                            >
                                <div className="object-fill bg-cover w-14 h-14 rounded-full"
                                    style={{
                                        backgroundImage: `url(${person3})`
                                    }}
                                >
                                    <img src={crownno3} className="-ml-5 -mt-7" alt="sd" />
                                </div>
                            </div>
                            <img className="w-16" src={no3badge} alt="ds" />
                            <p className="text-xsm text-white z-40 font-bold mt-3">Mem***453</p>
                            <p className="text-xsm mt-2 font-bold z-40 rounded-full w-full py-1 text-center text-white bg-gradient-to-l from-[#ff8e8a] to-[#ff9a8e] ">₹240,438.00</p>
                        </div>
                    </div>
                    <img className="object-fill" src={DailyProfitRankStage} alt="sd" />
                    <div className="w-full flex items-center justify-between text-black rounded-md bg-white shadow-lg p-2">
                        <div className="flex items-center text-gray gap-4">
                            <p>4</p>
                            <div className="flex items-center space-x-2 w-[35%]">
                                <img
                                    src={person5}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <p className="text-xsm font-semibold">Mem***879</p>
                            </div>
                        </div>
                        <p className="text-xsm mt-2 font-bold rounded-full px-7 py-1 text-center text-white bg-gradient-to-l from-[#ff8e8a] to-[#ff9a8e] ">₹895,467.00</p>
                    </div>
                    <div className="w-full flex items-center mt-2 justify-between text-black rounded-md bg-white shadow-lg p-2">
                        <div className="flex items-center text-gray gap-4">
                            <p>5</p>
                            <div className="flex items-center space-x-2 w-[35%]">
                                <img
                                    src={person6}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <p className="text-xsm font-semibold">Mem***113</p>
                            </div>
                        </div>
                        <p className="text-xsm mt-2 font-bold rounded-full px-7 py-1 text-center text-white bg-gradient-to-l from-[#ff8e8a] to-[#ff9a8e] ">₹940,928.00</p>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default Home;
