import React, { useEffect, useRef } from "react";
import LotteryGamesList from "../components/LotteryGamesList";
import { useSelector } from "react-redux";
import PopularGamesList from "../components/PopularGamesList";

function AllGamesContainer() {
    const { gameName } = useSelector((state) => state.AllGamesContainer);
    const renderGamesList = () => {
        switch (gameName) {
            case "lottery":
                return (
                    <div className="">
                        <LotteryGamesList />
                    </div>
                );
            case "popular":
                return (
                    <div className="">
                        <PopularGamesList />
                    </div>
                );
            default:
                return null;
        }
    };

    // Scroll to a fixed position after rendering
    // Only run the effect when gameName changes

    return (
        <div > {/* Assign ref to the div wrapping the rendered component */}
            {renderGamesList()}
        </div>
    );
}

export default AllGamesContainer;
