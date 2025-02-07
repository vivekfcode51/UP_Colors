import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import apis from "../../utils/apis";
import { useNavigate } from "react-router-dom";
import person from "../../assets/usaAsset/wallet/person.png"
import exclamation from "../../assets/usaAsset/account/exclamation.png"
import usdtAdress from "../../assets/usaAsset/wallet/usdtaddress.png"
import trcusdt from "../../assets/usaAsset/wallet/trcusdt.png"
const AddUSDTWalletADdress = () => {
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            usdt_wallet_address: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            usdt_wallet_address: Yup.string()
                .required("USDT address is required"),
        }),
        onSubmit: async (values) => {
            const payload = {
                user_id: userId,
                name: values.name,
                usdt_wallet_address: values.usdt_wallet_address,
            };

            try {
                const res = await axios.post(apis.add_usdt_account, payload);
                if (res?.data?.status === 200) {
                    navigate("/wallet/withdrawal")
                    toast.success(res?.data?.message);
                } else {
                    toast.error(res?.data?.message);
                }
            } catch (err) {
                console.error(err);
                toast.error("Something went wrong");
            }
        },
    });

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-start pb-10 pt-3 px-3">
            {/* Alert */}
            <div className="w-full max-w-md bg-inputBg text-redLight rounded-full px-2 py-1 mt-1">
                <p className="flex items-center text-xsm">
                    <span className="mr-2">
                      <img src={exclamation} alt="sd" className="w-6 h-5" />
                    </span>
                    To ensure the safety of your funds, please link your wallet
                </p>
            </div>

            {/* Form */}
            <form onSubmit={formik.handleSubmit} className="w-full max-w-md text-black">
                <div className="mb-8 mt-8">
                    <label className="text-gray-600 text-sm flex items-center">
                        <img src={trcusdt} alt="sfd" className="w-8 h-8 mr-2" />
                        Select main network
                    </label>
                    <select
                        className="w-full placeholder:text-xsm text-gray placeholder:font-bold outline-none mt-3 px-4 py-3 focus:border-[1px] border-redLight rounded-lg bg-inputBg"
                        name="network"
                    >
                        <option value="TRC">TRC</option>
                    </select>
                </div>

                <div className="mb-8">
                    <label className="text-gray-600 text-sm flex items-center">
                        <img src={person} className=" w-7 h-7 mr-2" alt="fg" />
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Please enter your name"
                        className="w-full placeholder:text-xsm text-gray outline-none mt-3 px-4 py-3 focus:border-[1px] border-redLight rounded-lg bg-inputBg"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <p className="text-red text-xs mt-1">{formik.errors.name}</p>
                    ) : null}
                </div>

                <div className="mb-8">
                    <label className="text-gray-600 text-sm flex items-center">
                        <img src={usdtAdress} alt="sfd" className="w-8 h-8 mr-2" />
                        USDT address
                    </label>
                    <input
                        type="text"
                        name="usdt_wallet_address"
                        placeholder="Please enter the USDT address"
                        className="w-full placeholder:text-xsm text-gray outline-none mt-3 px-4 py-3 focus:border-[1px] border-redLight rounded-lg bg-inputBg"
                        value={formik.values.usdt_wallet_address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.usdt_wallet_address && formik.errors.usdt_wallet_address ? (
                        <p className="text-red text-xs mt-1">{formik.errors.usdt_wallet_address}</p>
                    ) : null}
                </div>

                {/* Save button */}
                <button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                    className={`w-full tracking-[2.5px] text-sm font-semibold py-2 rounded-full shadow-md transition-all duration-300
                        ${formik.isValid && formik.dirty ? "bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white" : "bg-[#CBCDDB] text-white cursor-not-allowed"}`}
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default AddUSDTWalletADdress;
