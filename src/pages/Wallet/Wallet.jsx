import wallets from "../../assets/icons/wallets.png"
import pro_deposit from "../../assets/icons/pro_deposit.png"
import pro_withdraw from "../../assets/icons/pro_withdraw.png"
import rechargeHistory from "../../assets/icons/rechargeHistory.png"
import withdraw_history from "../../assets/icons/withdraw_history.png"
import CircularIndicator from "../../reusable_component/CircularIndicator";
import { Link } from "react-router-dom"
const Wallet = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Wallet Header */}
      <div className="bg-bg2 flex flex-col justify-center items-center  text-white w-full px-6 pb-24 text-center shadow-md">
        <img className="h-14 w-14" src={wallets} alt="cx" />
        <p className="text-2xl font-bold mt-2">₹ 477.57</p>
        <p className="text-sm mt-1">Total Balance</p>
      </div>
      {/* Wallet Stats */}
      <div className="bg-bg3 shadow-md rounded-lg px-2 pt-5 pb-20 -mt-12 w-11/12 max-w-md">
        <div className="flex justify-between">
          {/* Main Wallet */}
          <div className="flex flex-col items-center">
            <CircularIndicator percentage={100} />

            <p className="mt-2 ">₹ 477.57</p>
            <p className="text-gray-500 text-sm">Main wallet</p>
          </div>

          {/* 3rd Party Wallet */}
          <div className="flex flex-col items-center">
            <CircularIndicator percentage={0} />
            <p className="mt-2 ">₹ 0.00</p>
            <p className="text-gray-500 text-sm">3rd party wallet</p>
          </div>
        </div>

        {/* Main Wallet Transfer */}
        <button className="bg-blue-600 text-xs text-white w-full py-3 mt-4 rounded-full font-semibold hover:bg-red">
          Main wallet transfer
        </button>
        {/* Actions Section */}
        <div className="grid grid-cols-4 gap-4 mt-6 max-w-md">
          <button>
            <Link className="shadow p-1 rounded-lg flex flex-col items-center" to="/wallet/deposit"  >
              <img
                src={pro_deposit}
                alt="Deposit"
                className="w-8 h-8"
              />
              <p className="text-xs mt-2 font-semibold">Deposit</p>
            </Link>
          </button>
          <button>
            <Link className="shadow p-1 rounded-lg flex flex-col items-center" to="/wallet/withdrawal"  >
              <img
                src={pro_withdraw}
                alt="Withdrawal"
                className="w-8 h-8"
              />
              <p className="text-xs mt-2 font-semibold">Withdrawal</p>
            </Link>
          </button>
          <button >
            <Link className="shadow p-1 rounded-lg flex flex-col items-center" to="/wallet/deposithistory"  >
              <img
                src={rechargeHistory}
                alt="Deposit History"
                className="w-8 h-8"
              />
              <p className="text-xs mt-2 font-semibold">Deposit history</p>
            </Link>
          </button>
          <button >
            <Link className="shadow p-1 rounded-lg flex flex-col items-center" to="/wallet/withdrawalhistory"  >
              <img
                src={withdraw_history}
                alt="Withdrawal History"
                className="w-8 h-8"
              />
              <p className="text-xs mt-2 font-semibold">Withdrawal history</p>
            </Link>
          </button>
        </div>


      </div>

    </div>
  );
};

export default Wallet;
