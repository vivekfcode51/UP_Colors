import axios from "axios";
import apis from "../utils/apis"; 
export const fetchAllGames = async (setAllGamesListView) => {
    // setLoading(true)
    try {
        const res = await axios.post(apis.all_game_list);
        if (res?.data?.status === 200) {
            // setLoading(false)
            setAllGamesListView(res);
        } else {
            // setLoading(false)
            setAllGamesListView(null);
        }
    } catch (err) {
        // setLoading(false)
        console.error("Error fetching all games:", err);
    }
};

export const fetchGameURL = async (gameid, userId,navigate,setLoading) => {
    setLoading(true)
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
            setLoading(false)
            const gameUrl = res?.data?.game_url;
            if (gameUrl) {
                window.open(gameUrl, "_blank"); 
            }
        }
    } catch (err) {
        setLoading(false)
        console.error("Error fetching game URL:", err);
    }
};
export const fetchAllGamesSpribe = async (setAllGamesListView,) => {
    // setLoading(true)
    try {
        const res = await axios.get(apis.all_game_list_spribe);
        if (res?.data?.status === 200) {
            // setLoading(false)
            setAllGamesListView(res);
        } else {
            // setLoading(false)
            setAllGamesListView(null);
        }
    } catch (err) {
        // setLoading(false)
        console.error("Error fetching all games:", err);
    }
};

export const fetchGameURLSpribe = async (gameid, userId,navigate,setLoading) => {
console.log("gameid, userId,navigate,setLoading")
    setLoading(true)
    if (!gameid || !userId){
        // navigate("/login")
    };

    const payload = {
        user_id: userId,
        game_id: gameid
    };

    try {
        const res = await axios.post(apis.get_game_url_spribe, payload);
        if (res?.data?.data?.msg ==="Success") {
            setLoading(false)
            const gameUrl = res?.data?.data?.payload?.game_launch_url;
            if (gameUrl) {
                window.open(gameUrl, "_blank"); 
            }
        }
    } catch (err) {
        setLoading(false)
        console.error("Error fetching game URL:", err);
    }
};

export const getFirstDepositPlans = async (userId) => {
  try {
    const res = await axios.get(`${apis.extra_first_deposit_bonus}${userId}`);
    if (res?.data?.status == 200) {
      return res.data.data;
    }
  } catch (err) {
    console.error("Error fetching first deposit plans:", err);
    return [];
  }
};

