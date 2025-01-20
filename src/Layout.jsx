/* eslint-disable react/prop-types */
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import usaserviceIcon from "./assets/icons/usaServiceIcon.png";

const Layout = () => {
    const location = useLocation();
    const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
    const bgColor = location?.pathname === "/" ? "bg-bg1" : "bg-bg1";

    const hiddenFooterPaths = new Set(["/login", "/register"]);
    const visibleFooterPaths = new Set(["/", "/activity", "/profile","/promotion", "/wallet"]);

    const footerDisplay = hiddenFooterPaths.has(location?.pathname)
        ? "hidden"
        : visibleFooterPaths.has(location?.pathname)
            ? "block"
            : "hidden";


    const headerDisplay =
        location?.pathname === "/login" ||
        location?.pathname === "/forgotPassword" ||
            location?.pathname === "/register"||
             location?.pathname === "/" ||
                location?.pathname === "/lottery/wingo" ||
                location?.pathname === "/activity" ||
                location?.pathname === "/activity/invitationbonus" ||
                location?.pathname === "/activity/award" ||
                location?.pathname === "/activity/invitationbonus/invitationrewardrule" ||
                location?.pathname === "/activity/invitationbonus/invitationrecord" ||
                location?.pathname === "/activity/rebate" ||
                location?.pathname === "/activity/gifts" ||
                location?.pathname === "/activity/attendance" ||
                location?.pathname === "/activity/attendacehistory" ||
                location?.pathname === "/activity/gamerule" ||
                location?.pathname === "/promotion" ||
                location?.pathname === "/promotion/subordinatedata" ||
                location?.pathname === "/promotion/commissiondetail" ||
                location?.pathname === "/promotion/invitationrules" ||
                location?.pathname === "/promotion/rebateratio" ||
                location?.pathname === "/wallet" ||
                location?.pathname === "/wallet/deposit" ||
                location?.pathname === "/wallet/withdrawal" ||
                location?.pathname === "/wallet/deposithistory" ||
                location?.pathname === "/wallet/withdrawalhistory" ||
                location?.pathname === "/wallet/withdrawal/addbankaccount" ||
                location?.pathname === "/wallet/withdrawal/addbankaccount/selectbank" ||
                location?.pathname === "/wallet/withdrawal/addusdtwalletaddress" ||
                location?.pathname === "/notifications" ||
                location?.pathname === "/vip" ||
                location?.pathname === "/gamehistory" ||
                location?.pathname === "/alltransactionhistory" ||
                location?.pathname === "/setting" ||
                location?.pathname === "/changepassword" ||
                location?.pathname === "/bindmail" ||
                location?.pathname === "/feedback" ||
                location?.pathname === "/customerservices" ||
                location?.pathname === "/beginnersguide" ||
                location?.pathname === "/aboutus" ||
                location?.pathname === "/aboutus/child" ||
                location?.pathname === "/aboutus/confidential" ||
                location?.pathname === "/aboutus/risk" ||
                location?.pathname === "/aboutus/tc" ||
                location?.pathname === "/aboutus/faqs" ||
                location?.pathname === "/changeavatar" ||
                location?.pathname === "/dragonTiger" ||
                location?.pathname === "/dragonTiger/history" ||
                location?.pathname === "/andarbahar" ||
                location?.pathname === "/andarbahar/history"
                ? "block"
                : "hidden";

    const outletPadding = location?.pathname === "/" ? "pb-5" : "pb-0";
    const handleDrag = (e) => {
        setPosition({
            x: e.clientX - 35,
            y: e.clientY - 35,
        });
    };

    const handleDragTouch = (e) => {
        const x = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
        const y = e.type === "mousemove" ? e.clientY : e.touches[0].clientY;

        setPosition({
            x: x - 35,
            y: y - 35,
        });
    };

    const handleDragEnd = (e) => {
        setPosition({
            x: e.clientX - 35,
            y: e.clientY - 35,
        });
    };

    const handleDragEndTouch = (e) => {
        const x = e.type === "mouseup" ? e.clientX : e.changedTouches[0].clientX;
        const y = e.type === "mouseup" ? e.clientY : e.changedTouches[0].clientY;

        setPosition({
            x: x - 35,
            y: y - 35,
        });
    };

    const handleDragStart = (e) => {
        e.dataTransfer.setDragImage(new Image(), 0, 0);
    };

    const handleTouchStart = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex h-screen font-inter">
            <div className="flex-1 bg-[#9195A3]"></div>
            <div
                className={`${bgColor} shrink-0 w-full xsm:w-[400px] text-white relative`}
            >
                <div className={`h-[3.22rem] ${headerDisplay}`}>
                    <Header />
                </div>
                <div
                    className={`${location?.pathname === "/dragonSplash"
                        ? "h-[100%]"
                        : "h-[calc(100%-3.22rem)]"
                        } overflow-y-scroll  hide-scrollbar pb-${outletPadding}`}
                        // } ${location?.pathname === "/" ? "overflow-y-scroll" : ""}  hide-scrollbar pb-${outletPadding}`}
                >
                    <Outlet />
                </div>
                <div
                    className={`absolute bottom-0 left-0 w-full bg-transparent ${footerDisplay}`}
                >
                    <Footer />
                </div>
                <div
                    className={`fixed z-50 ${location?.pathname === "/login" ||
                        location?.pathname === "/register"?"hidden":"block"} `}
                    style={{
                        top: `${position.y}px`,
                        left: `${position.x}px`,
                        cursor: "grab",
                    }}
                    draggable
                    onDrag={handleDrag}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleDragTouch}
                    onTouchEnd={handleDragEndTouch}
                >
                    <Link to="/customerservices">
                        <img
                            src={usaserviceIcon}
                            className="h-14 bg-white rounded-full p-0.5 w-14"
                            alt="Service Icon"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex-1 bg-[#9195A3]"></div>
        </div>
    );
};

export default Layout;
