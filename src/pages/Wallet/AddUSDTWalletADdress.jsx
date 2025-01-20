import { AiOutlineExclamationCircle } from "react-icons/ai";
import account_yellow from "../../assets/images/account_yellow.png"
import bank from "../../assets/icons/bank.png"
import ifsc_code from "../../assets/icons/ifsc_code.png"
import acc_number from "../../assets/icons/acc_number.png"
import alias from "../../assets/usaAsset/wallet/alias.png"
const AddUSDTWalletADdress = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-start pb-10 pt-3 px-3">
            {/* Alert */}
            <div className="w-full max-w-md bg-inputBg text-redLight rounded-full  px-2 py-1 mt-1">
                <p className="flex items-center text-xsm">
                    <span className="mr-2 text-[#B1835A] "><AiOutlineExclamationCircle size={20} />
                    </span>
                    To ensure the safety of your funds, please link your wallet
                </p>
            </div>
            {/* Form */}
            <div className="w-full max-w-md text-black">
                <div className="mb-8 mt-8">
                    <label className="text-gray-600 text-sm  flex items-center">
                        <img src="sd" alt="sfd" className="w-5 h-5 mr-2" />
                        Select main network
                    </label>
                    <select className="w-full placeholder:text-xsm text-gray placeholder:font-bold outline-none mt-3 px-4 py-3 focus:border-[1px] border-redLight rounded-lg  bg-inputBg" name="" id="">
                        <option value="TRC">TRC</option>
                    </select>
                    {/* <input
                        type="text"
                        placeholder="Please enter the recipient's name"
                        className="w-full text-xs text-gray font-bold mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                    /> */}
                </div>

                <div className="mb-8">
                    <label className="text-gray-600 text-sm  flex items-center">
                        <img src="sd" alt="sfd" className="w-5 h-5 mr-2" />
                        USDT address
                    </label>
                    <input
                        type="text"
                        placeholder="Please enter the USDT address"
                        className="w-full placeholder:text-xsm text-gray placeholder:font-bold outline-none mt-3 px-4 py-3 focus:border-[1px] border-redLight rounded-lg  bg-inputBg"
                    />
                </div>
                <div className="mb-8">
                    <label className="text-gray-600 text-sm  flex items-center">
                        <img src={alias} alt="sfd" className="w-7 h-7 mr-2" />
                        Address Alias
                    </label>
                    <input
                        type="text"
                        placeholder="Please enter a remark of the withdrawal address"
                        className="w-full placeholder:text-xsm text-gray placeholder:font- outline-none mt-3 px-4 py-3 focus:border-[1px] border-redLight rounded-lg  bg-inputBg"
                    />
                </div>
                {/* Save button */}
                <button className="w-full tracking-[2.5px] bg-[#CBCDDB] text-white text-sm font-semibold py-2 rounded-full shadow-md">
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddUSDTWalletADdress;