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

export const fetchGameURL = async (gameid, userId, navigate, setLoading) => {
    localStorage.setItem("jilligamePlayed", 1)
    await  updateJiliWallet()
    setLoading(true)
    if (!gameid || !userId) {
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
                window.location.href = gameUrl
            }
        }
    } catch (err) {
        setLoading(false)
        console.error("Error fetching game URL:", err);
    }
};

export const fetchAllGamesSpribe = async (setAllGamesListView) => {
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

export const fetchGameURLSpribe = async (gameid, userId, navigate, setLoading) => {
    localStorage.setItem("spribegamePlayed", 1)
   await updateSpribeWallet()
    setLoading(true)
    if (!gameid || !userId) {
        // navigate("/login")
    };

    const payload = {
        user_id: userId,
        game_id: gameid
    };

    try {
        const res = await axios.post(apis.get_game_url_spribe, payload);
        if (res?.data?.data?.msg === "Success") {
            setLoading(false)
            const gameUrl = res?.data?.data?.payload?.game_launch_url;
            if (gameUrl) {
                window.location.href = gameUrl
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

/// update jili wallet api 
export const updateJiliWallet = async () => {
    const userId = localStorage.getItem("userId")
    const payload = {
        user_id: userId,
    };
    // alert("updateJiliWallet")
    // console.log("updateJiliWallet", payload)
    try {
        const res = await axios.post(apis.update_jilli_wallet, payload);
        if (res?.data?.status == 200) {
            // console.log("updateJiliWallet response", res)
        }
    } catch (err) {
        console.error("Error fetching game URL:", err);
    }
};
/// update user wallet jili
export const updateUserWalletFromJili = async () => {
    const userId = localStorage.getItem("userId")
    const payload = {
        user_id: userId,
    };
    // alert("updateUserWalletFromJili")
    // console.log("updateJiliWallet", payload)
    try {
        const res = await axios.post(apis.update_jilli_to_user_wallet, payload);
        if (res?.data?.status == 200) {
            console.log("updateUserWalletFromJili response", res)
        }
    } catch (err) {
        console.error("Error fetching game URL:", err);
    }
};
/// update spribe wallet api 
export const updateSpribeWallet = async () => {
    const userId = localStorage.getItem("userId")
    const payload = {
        user_id: userId,
    };
    // alert("updateSpribeWallet")
    // console.log("updateSpribeWallet", payload)
    try {
        const res = await axios.post(apis.update_spribe_wallet, payload);
        if (res?.data?.status == 200) {
            // console.log("updateSpribeWallet response", res)
        }
    } catch (err) {
        console.error("Error fetching game URL:", err);
    }
};
/// update user wallet from spribe 
export const updateUserWalletFromSpribe = async () => {
    const userId = localStorage.getItem("userId")
    const payload = {
        user_id: userId,
    };
    // alert("updateUserWalletFromSpribe")
    // console.log("updateuserWallet from spribe", payload)
    try {
        const res = await axios.post(apis.update_spribe_to_user_wallet, payload);
        // alert("spribe return")
        if (res?.data?.status == 200) {
            console.log("updateUserWalletFromSpribe response", res)
        }
    } catch (err) {
        console.error("Error fetching game URL:", err);
    }
};
