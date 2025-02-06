import axios from "axios";
import apis from "../utils/apis"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
export const fetchAllGames = async (setAllGamesListView) => {
    try {
        const res = await axios.post(apis.all_game_list);
        if (res?.data?.status === 200) {
            setAllGamesListView(res);
        } else {
            setAllGamesListView(null);
        }
    } catch (err) {
        console.error("Error fetching all games:", err);
    }
};

export const fetchGameURL = async (gameid, userId,navigate) => {
    if (!gameid || !userId){
        navigate("/login")
    };
    const payload = {
        user_id: userId,
        game_id: gameid
    };

    try {
        const res = await axios.post(apis.get_game_url, payload);
        if (res?.data?.status === 200) {
            const gameUrl = res?.data?.game_url;
            if (gameUrl) {
                window.open(gameUrl, "_blank"); 
            }
        }
    } catch (err) {
        console.error("Error fetching game URL:", err);
    }
};
export const fetchAllGamesSpribe = async (setAllGamesListView) => {
    try {
        const res = await axios.get(apis.all_game_list_spribe);
        if (res?.data?.status === 200) {
            setAllGamesListView(res);
        } else {
            setAllGamesListView(null);
        }
    } catch (err) {
        console.error("Error fetching all games:", err);
    }
};

export const fetchGameURLSpribe = async (gameid, userId,navigate) => {
    if (!gameid || !userId){
        navigate("/login")
    };

    const payload = {
        user_id: userId,
        game_id: gameid
    };

    try {
        const res = await axios.post(apis.get_game_url_spribe, payload);
        if (res?.data?.data?.msg ==="Success") {
            const gameUrl = res?.data?.data?.payload?.game_launch_url;
            if (gameUrl) {
                window.open(gameUrl, "_blank"); 
            }
        }
    } catch (err) {
        console.error("Error fetching game URL:", err);
    }
};
