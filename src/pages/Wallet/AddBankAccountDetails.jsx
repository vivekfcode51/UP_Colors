import { AiOutlineExclamationCircle } from "react-icons/ai";
import account_yellow from "../../assets/usaAsset/wallet/person.png"
import bank from "../../assets/usaAsset/wallet/bank.png"
import ifsc_code from "../../assets/usaAsset/wallet/ifsc.png"
import acc_number from "../../assets/usaAsset/wallet/card.png"
import { PiGreaterThan } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const AddBankAccountDetails = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-start pb-10 pt-2 px-3">
            {/* Alert */}
            <div className="w-full max-w-md bg-inputBg text-redLight rounded-full  px-2 py-1 mt-1">
                <p className="flex items-center text-xsm font-semibold ">
                    <span className="mr-2 text-[#B1835A] "><AiOutlineExclamationCircle size={20} />
                    </span>
                    To ensure the safety of your funds, please bind your bank account
                </p>
            </div>

            {/* Form */}
            <div className="w-full max-w-md text-black rounded-lg mt-5">
                {/* Bank name */}
                <div className="mb-8">
                    <label className=" text-xsm font-medium flex items-center">
                        <img src={bank} alt="sfd" className="w-7 h-7 mr-2" />
                        Choose a bank
                    </label>
                    <Link to="/wallet/withdrawal/addbankaccount/selectbank"
                        className="w-full text-xsm flex items-center justify-between text-white font-bold mt-2 px-4 py-2 bg-gradient-to-l from-[#f95959] to-[#ff9a8e] rounded-lg "
                    > <p>Please select a bank </p> <MdKeyboardArrowRight size={25} />
                    </Link>
                </div>
                {/* Full recipient's name */}
                <div className="mb-8">
                    <label className=" text-xsm font-medium flex items-center">
                        <img src={account_yellow} alt="sfd" className="w-7 h-7 mr-2" />
                        Full recipient&apos;s name
                    </label>
                    <input
                        type="text"
                        placeholder="Please enter the recipient's name"
                        className="w-full text-xsm text-gray placeholder:font-bold outline-none mt-2 px-4 py-3 focus:border-[1px] border-redLight rounded-lg  bg-inputBg"
                    />
                </div>

                {/* Bank account number */}
                <div className="mb-8">
                    <label className=" text-xsm font-medium flex items-center">
                        <img src={acc_number} alt="sfd" className="w-7 h-7 mr-2" />
                        Bank account number
                    </label>
                    <input
                        type="text"
                        placeholder="Please enter your bank account number"
                        className="w-full placeholder:text-xsm text-gray placeholder:font-bold outline-none mt-2 px-4 py-3 focus:border-[1px] border-redLight rounded-lg  bg-inputBg"
                    />
                </div>

                {/* phone number */}
                <div className="mb-8">
                    <label className=" text-xsm font-medium flex items-center">
                        <img src={acc_number} alt="sfd" className="w-7 h-7 mr-2" />
                        Phone number
                    </label>
                    <input
                        type="text"
                        placeholder="Please enter your phone number"
                        className="w-full text-xsm text-gray placeholder:font-bold outline-none mt-2 px-4 py-3 focus:border-[1px] border-redLight rounded-lg  bg-inputBg"
                    />
                </div>

                {/* IFSC code */}
                <div className="mb-28">
                    <label className=" text-xsm font-medium flex items-center">
                        <img src={ifsc_code} alt="sfd" className="w-7 h-7 mr-2" />
                        IFSC code
                    </label>
                    <input
                        type="text"
                        placeholder="Please enter IFSC code"
                        className="w-full text-xsm text-gray placeholder:font-bold outline-none mt-2 px-4 py-3 focus:border-[1px] border-redLight rounded-lg  bg-inputBg"
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

export default AddBankAccountDetails;