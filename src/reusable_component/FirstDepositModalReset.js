import { useEffect } from "react";

const FirstDepositModalReset = () => {
  useEffect(() => {
    const setDepositModal = () => {
      localStorage.setItem("firstDepositModalValue", "0");
      console.log("Deposit modal reset at 5:10 PM IST");
    };

    const now = new Date();
    const resetTime = new Date();
    resetTime.setHours(0, 0, 0, 0);

    if (now > resetTime) {
      resetTime.setDate(resetTime.getDate() + 1);
    }
    const timeUntilReset = resetTime - now; 
    const resetTimeout = setTimeout(() => {
      setDepositModal();
      setInterval(setDepositModal, 24 * 60 * 60 * 1000); 
    }, timeUntilReset);

    return () => clearTimeout(resetTimeout);
  }, []);
};

export default FirstDepositModalReset;
