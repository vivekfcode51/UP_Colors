import { AiOutlineExclamationCircle } from "react-icons/ai";
import account_yellow from "../../assets/images/account_yellow.png"
import bank from "../../assets/icons/bank.png"
import ifsc_code from "../../assets/icons/ifsc_code.png"
import acc_number from "../../assets/icons/acc_number.png"
const AddBankAccountDetails = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start pb-10 mt-5 px-4">
            {/* Alert */}
            <div className="w-full max-w-md bg-bg2 text-white rounded-full  px-4 py-3 mt-1">
                <p className="flex items-center text-xs ">
                    <span className="mr-2 text-gray "><AiOutlineExclamationCircle size={45} />
                    </span>
                    Need to add beneficiary information to be able to withdraw money
                </p>
            </div>

            {/* Form */}
            <div className="w-full max-w-md bg-bg2 shadow-lg rounded-lg p-6 mt-5">
                {/* Full recipient's name */}
                <div className="mb-4">
                    <label className="text-gray-600 text-sm font-medium flex items-center">
                        <img src={account_yellow} alt="sfd" className="w-5 h-5 mr-2" />
                        Full recipient&apos;s name
                    </label>
                    <input
                        type="text"
                        placeholder="Please enter the recipient's name"
                        className="w-full text-xs text-gray font-bold mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                    />
                </div>

                {/* Bank name */}
                <div className="mb-4">
                    <label className="text-gray-600 text-sm font-medium flex items-center">
                        <img src={bank} alt="sfd" className="w-5 h-5 mr-2" />
                        Bank name
                    </label>
                    <input
                        type="text"
                        placeholder="Please enter your bank name"
                        className="w-full text-xs text-gray font-bold mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                    />
                </div>

                {/* Bank account number */}
                <div className="mb-4">
                    <label className="text-gray-600 text-sm font-medium flex items-center">
                        <img src={acc_number} alt="sfd" className="w-5 h-5 mr-2" />
                        Bank account number
                    </label>
                    <input
                        type="text"
                        placeholder="Please enter your bank account no."
                        className="w-full text-xs text-gray font-bold mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                    />
                </div>

                {/* Bank branch */}
                <div className="mb-4">
                    <label className="text-gray-600 text-sm font-medium flex items-center">
                        <img src={acc_number} alt="sfd" className="w-5 h-5 mr-2" />
                        Bank branch
                    </label>
                    <input
                        type="text"
                        placeholder="Please enter your branch name"
                        className="w-full text-xs text-gray font-bold mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                    />
                </div>

                {/* IFSC code */}
                <div className="mb-6">
                    <label className="text-gray-600 text-sm font-medium flex items-center">
                        <img src={ifsc_code} alt="sfd" className="w-5 h-5 mr-2" />
                        IFSC code
                    </label>
                    <input
                        type="text"
                        placeholder="Please enter IFSC code"
                        className="w-full text-xs text-gray font-bold mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                    />
                </div>

                {/* Save button */}
                <button className="w-full tracking-wider bg-blue-500 text-white text-sm font-semibold py-3 rounded-full shadow-md hover:bg-blue-600">
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddBankAccountDetails;