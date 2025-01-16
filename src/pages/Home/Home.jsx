import { useEffect, useRef, useState } from "react";
import lotterybase from "../../assets/lotterybaseimg.png";
import popularbg from "../../assets/category/popularbg.png";
import popularico from "../../assets/category/popularico.png";
import casinobg from "../../assets/category/casinobg.png";
import casinoicon from "../../assets/category/casinoicon.png";
import slotsbg from "../../assets/category/slotsbg.png";
import sloticon from "../../assets/category/sloticon.png";
import sportbg from "../../assets/category/sportbg.png";
import sporticon from "../../assets/category/sporticon.png";
import rummybg from "../../assets/category/rummybg.png";
import rummyicon from "../../assets/category/rummyicon.png";
import fishingbg from "../../assets/category/fishingbg.png";
import fishingicon from "../../assets/category/fishingicon.png";
import originalbg from "../../assets/category/originalbg.png";
import originalicon from "../../assets/category/originalicon.png";
import lotterybase2 from "../../assets/lotterybase2.png";
import DragonTiger from "../../assets/dragontiger/DragonTiger.png";
import { handleGameContainerType } from "../../features/AllGamesContainerSlice";
import { useDispatch, useSelector } from "react-redux";
import AllGamesContainer from "../../reusable_component/AllGamesContainer";
import ImageCarousel from "../../reusable_component/ImageCarousel";
import { RiFireFill } from "react-icons/ri";
import detailbutttonbg from "../../assets/icons/vipsideboard.png";
import micphone from "../../assets/icons/micphone.png"
import { Link, useNavigate } from "react-router-dom";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const notes = [
    "Welcome to the Tiranga Games! Greetings, Gamers and Enthusiasts! the Tiranga",
    "Please be sure to always use our official website for playing the games with the fol",
    "If your deposit is not received, Please send it directly to Tiranga Games Self-service Ce"
];
function Home() {
    const [noteValue, setNoteValue] = useState(notes[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();
    const [redirecting, setRedirecting] = useState(false);
    const { gameName } = useSelector((state) => state.AllGamesContainer);
    const dispatch = useDispatch();
    const buttonRef = useRef(null);
    const fixedScrollHeight = 500;
    const handleNavigation = () => {
        setRedirecting(true);
        // Navigate to a temporary route first
        navigate("/dragonSplash");
        // After 5 seconds, navigate to the Dragon Tiger route
        setTimeout(() => {
            setRedirecting(false);
            navigate("/dragonTiger");
        }, 5000);
    };
    const handlePopularContainer = () => {
        const height = "5rem";
        const gameName = "popular";
        dispatch(handleGameContainerType({ height, gameName }));
    };

    const handleLotteryContainer = () => {
        const height = "5rem";
        const gameName = "lottery";
        dispatch(handleGameContainerType({ height, gameName }));
    };

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

    const buttonData = [
        { bg: casinobg, icon: casinoicon, label: "Casino" },
        { bg: slotsbg, icon: sloticon, label: "Slots" },
        { bg: sportbg, icon: sporticon, label: "Sports" },
        { bg: rummybg, icon: rummyicon, label: "Rummy" },
        { bg: fishingbg, icon: fishingicon, label: "Fishing" },
        { bg: originalbg, icon: originalicon, label: "Original" }
    ]
    return (
        <div className="mb-28 font-inter px-3">
            <div className="mt-3 rounded-xl">
                <ImageCarousel />
            </div>
            <div className='flex justify-between w-full gap-1 mt-1 items-center bg-white text-gray px-1 rounded-full '>
                <div className='shrink-0'><HiMiniSpeakerWave size={20} className="text-bg2" />                </div>
                <div className="h-9 flex items-center overflow-hidden">
                    <div
                        className={`flex-1 xsm:flex-0 text-gray w-[80%] xsm:w-[19rem] text-[10px] xsm:text-xs overflow-hidden text-ellipsis whitespace-normal break-words transition-transform duration-1000 ease-in-out ${animate ? "transform -translate-y-full" : "transform translate-y-0"
                            }`}
                        style={{ transform: animate ? "translateY(-100%)" : "translateY(0)" }}
                    >
                        {noteValue}
                    </div>
                </div>
                <div
                    className='shrink-0 w-[20%]  xsm:w-[22%] py-1 text-white text-xs bg-bg2 flex gap-1 justify-center items-center  rounded-3xl'
                >
                    <RiFireFill className='' />
                    Detail
                </div>
            </div>
            <div ref={buttonRef} className="overflow-y-scroll hide-scrollbar  pt-2">
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={handleNavigation}
                        disabled={redirecting} // Disable button during redirection
                        className="flex bg-fill sm:bg-contain bg-no-repeat h-[4.5rem] w-full xsm:h-[6rem] sm:w-[16.6rem] sm:h-[11rem] md:w-[12.3rem] md:h-[6rem] sm:-mt-8 md:-mt-1.5 justify-between items-center pr-1 rounded-2xl"
                        style={{
                            backgroundImage: `url(${popularbg})`,
                            backgroundPosition: "center",
                        }}
                    >
                        <img
                            src={DragonTiger}
                            className="w-20 h-14 xsm:w-28 xsm:h-16 sm:w-36 sm:h-20 md:w-24 md:h-16"
                            alt="lotterycase not found"
                        />
                        <p className="text-xs font-semibold pr-3 mt-5">Dragon Tiger</p>
                    </button>

                    <Link to="/andarbahar"
                        // onClick={handleLotteryContainer}
                        className="flex justify-between items-center bg-cover pr-1  h-[4.5rem] w-full xsm:h-[6rem] sm:w-[15.6rem] sm:h-[6.5rem] md:w-[11.3rem] md:h-[4.7rem] rounded-xl"
                        style={{
                            backgroundImage: `url(${lotterybase})`,
                            backgroundPosition: "center",

                        }}
                    >
                        <img src={lotterybase2} className="w-20 h-14 xsm:w-28 xsm:h-16 sm:w-36 sm:h-20 md:w-24  md:h-14" alt="lotterycase not found" />
                        <p className="text-xs font-semibold mt-5">Andar Bahar</p>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={handlePopularContainer}
                        className="flex bg-fill sm:bg-contain bg-no-repeat h-[4.5rem] w-full xsm:h-[6rem] sm:w-[16.6rem] sm:h-[11rem] md:w-[12.3rem] md:h-[6rem] sm:-mt-8 md:-mt-1.5 justify-between items-center pr-1 rounded-2xl"
                        style={{
                            backgroundImage: `url(${popularbg})`,
                            backgroundPosition: "center",


                        }}
                    >
                        <img src={popularico} className="w-20 h-14 xsm:w-28 xsm:h-16 sm:w-36 sm:h-20 md:w-24  md:h-16" alt="lotterycase not found" />
                        <p className="text-xs font-semibold pr-3 mt-5">Popular</p>
                    </button>

                    <button
                        onClick={handleLotteryContainer}
                        className="flex justify-between items-center bg-cover pr-1  h-[4.5rem] w-full xsm:h-[6rem] sm:w-[15.6rem] sm:h-[6.5rem] md:w-[11.3rem] md:h-[4.7rem] rounded-xl"
                        style={{
                            backgroundImage: `url(${lotterybase})`,
                            backgroundPosition: "center",

                        }}
                    >
                        <img src={lotterybase2} className="w-20 h-14 xsm:w-28 xsm:h-16 sm:w-36 sm:h-20 md:w-24  md:h-14" alt="lotterycase not found" />
                        <p className="text-xs font-semibold mt-5">Lottery</p>
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2 sm:-mt-8 md:-mt-2">
                    {buttonData.map((button, index) => (
                        <button
                            key={index}
                            onClick={handlePopularContainer}
                            className="flex justify-between bg-center rounded-lg w-full"
                            style={{
                                backgroundImage: `url(${button.bg})`,
                            }}
                        >
                            <img
                                src={button.icon}
                                className="w-14 h-14 xsm:w-20 xsm:h-16 sm:w-36 sm:h-20 md:w-16 md:h-14"
                                alt={`${button.label} icon not found`}
                            />
                            <p className="text-xs font-semibold pr-1 mt-5">{button.label}</p>
                        </button>
                    ))}
                </div>
                {/* <div className="mt-5 flex justify-between items-center">
                    <div className="border-bg3 border-l-4 pl-2">Lottery</div>
                    <button className="flex items-center text-xs border-[1px] border-white px-4 py-0.5 rounded-md">All 4 <LiaGreaterThanSolid /></button>
                </div> */}
            </div>
            <div className="mt-2">
                <AllGamesContainer />
            </div>

        </div>
    );
}

export default Home;
