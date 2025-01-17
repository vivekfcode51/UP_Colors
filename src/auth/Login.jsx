import { MdKeyboardArrowDown, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import apis from '../utils/apis';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../reusable_component/Loader/Loader';
import loginPhone from "../assets/icons/loginPhone.png"
import phoneUsa from "../assets/icons/phoneUsa.png"
import passwordUsa from "../assets/icons/passwordUsa.png"
import cutomerService from "../assets/icons/cutomerService.png"
import forgetPassword from "../assets/icons/forgetPassword.png"
const loginEndpoint = apis?.login;

function Login() {
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [checkAgreement, setCheckAgreement] = useState(false);
  const [formData, setFormData] = useState({ mobile: '', email: '', password: '' });
  const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const payload = { identity: formData.mobile, password: formData.password };
      const response = await axios.post(loginEndpoint, payload);
      if (response?.status === 200) {
        localStorage.setItem("userId", response?.data?.id)
        setLoading(false)
        toast.success("Login successful!");
        navigate("/")
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setLoading(false)
      console.log("Error:", err?.response?.data?.message);
    }
  };

  return (
    <>
      {loading && <Loader setLoading={setLoading} loading={loading} />}
      <section className="h-[100vh] font-inter w-full flex  flex-col items-start dark:text-white">
        <div className="bg-gradient-to-l from-[#f95959] to-[#ff9a8e] w-full pb-5">
          <h1 className="text-sm font-bold font-inter px-10 mt-2">Log in</h1>
          <p className="text-[10px] px-10 mt-2">Please login with your phone number or email </p>
          <p className="text-[10px] px-10">If you forget your password,please contact customer service </p>
        </div>
        <div className="flex flex-col w-full items-center justify-center px-5 lg:py-0">
          <div className="bg-bg1 w-full  text-white">
            <div className="flex  flex-col items-center justify-center w-full py-2 border-b-2 text-redLight border-redLight" >
              <div>
                <img className='w-6 h-6' src={loginPhone} alt="sd" />
              </div>
              <div className="text-sm mt-2">Log in with phone</div>
            </div>
            <form className="space-y-4 md:space-y-6 mt-3" onSubmit={handleLogin}>
              <div className="">
                <div className=' flex items-center gap-2 py-2'>
                  <div>
                    <img className='w-6 h-6' src={phoneUsa} alt="sd" />
                  </div>
                  <label htmlFor="mobile" className=" text-sm text-gray font-medium">Phone number</label>
                </div>
                <div className='flex items-center mt-2 gap-2'>
                  <p className='bg-inputBg w-[30%] text-gray p-3 flex items-center rounded-md'>+91 <MdKeyboardArrowDown size={20} />
                  </p>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    placeholder="Please enter the phone number"
                    className="col-span-[60%] bg-inputBg text-[14px] focus:border-[1px] border-bg2 rounded-md outline-none w-full pl-3 p-3 placeholder:text-gray text-gray"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <div className='flex items-center py-2 gap-2'>
                  <div>
                    <img className='w-6 h-6' src={passwordUsa} alt="sd" />
                  </div>
                  <label htmlFor="password" className="text-sm text-gray font-medium"> Password</label>
                </div>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-inputBg mt-2 focus:border-[1px] text-[14px] border-bg2 rounded-md outline-none w-full pl-3 p-3 placeholder:text-gray text-gray"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 top-10 pr-3 flex items-center text-gray opacity-25"
                >
                  {passwordVisible ? <MdVisibilityOff size={20} /> : <MdVisibility className='dark:text-gray opacity-65' size={20} />}
                </button>
              </div>
              <div className="flex items-center mt-4">
                <div onClick={() => setCheckAgreement(!checkAgreement)} className={`flex items-center cursor-pointer rounded-full ${checkAgreement ? "text-chocolate bg-white " : "text-chocolate"}`}>
                  {checkAgreement ? (
                    <FaCheckCircle size={20} />
                  ) : (
                    <FaRegCircle size={20} />
                  )}
                </div>
                <label htmlFor="agree" className="text-gray ml-2 text-xs sm:text-base md:text-xs">Remember Password</label>
              </div>
              <div className='flex flex-col font-bold items-center justify-center'>
                <button
                  type="submit"
                  className="w-[90%] font-bold tracking-[0.20333rem] py-2.5 rounded-full border-none bg-gradient-to-b from-[#f95959] to-[#ff9a8e] shadow-lg flex items-center justify-center"
                >
                  Log in
                </button>
                <button className='w-[90%] border border-redLight mt-5 tracking-[2px] rounded-full p-2'> <Link to="/register" className="font-bold text-sm hover:underline text-redLight tracking-[0.20333rem] ">Register</Link>
                </button>
              </div>
            </form>
          </div>
          <div className='grid grid-cols-2 w-full text-gray text-xsm mt-10'>
            <Link to="/forgotPassword" className='col-span-1 flex flex-col items-center justify-center'>
              <img className='w-10 h-10' src={forgetPassword} alt="sd" />
              <p>Forgot Password</p>
            </Link>
            <Link to="/customerservices" className='col-span-1 flex flex-col items-center justify-center'>
              <img className='w-10 h-10' src={cutomerService} alt="sd" />
              <p>Customer Service</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
