import { MdKeyboardArrowDown, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import apis from '../utils/apis';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../reusable_component/Loader/Loader';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import loginPhone from "../assets/icons/loginPhone.png"
import phoneUsa from "../assets/icons/phoneUsa.png"
import passwordUsa from "../assets/icons/passwordUsa.png"
import inviteCode from "../assets/icons/inviteCode.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';

const register = apis?.register

function Register() {
  const [loading, setLoading] = useState(false);
  const [checkAgreement, setCheckAgreement] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const validationSchema = Yup.object({
    mobile: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]+$/, 'Phone number must be numeric')
      .min(10, 'Phone number must be at least 10 digits')
      .max(10, 'Phone number cannot exceed 10 digits'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email format'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(8, 'Password cannot exceed 8 characters'),
    password_confirmation: Yup.string()
      .required('Confirm your password')
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .min(6, 'Password confirmation must be at least 6 characters')
      .max(8, 'Password confirmation cannot exceed 8 characters'),
    referral_code: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      mobile: '',
      email: '',
      password: '',
      password_confirmation: '',
      referral_code: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      if (!checkAgreement) {
        toast.warn('Please check Privacy Agreement');
        return;
      }
      setLoading(true);
      try {
        const res = await axios.post(register, values, {
          headers: { 'Content-Type': 'application/json' },
        });
        console.log("resresres", res)
        if (res?.data?.status === 200) {
          toast.success('You have been registered successfully');
          navigate('/login');
        } else {
          toast.error(res?.data?.message)
          // throw new Error('Registration failed');
        }
      } catch (err) {
        toast.error(err.response?.data?.message || err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      {loading && <Loader setLoading={setLoading} loading={loading} />}
      <section className=" w-full flex flex-col items-start dark:text-gray">
        <div className="bg-gradient-to-l from-[#f95959] to-[#ff9a8e] w-full">
          <div className=" text-white pb-5">
            <h1 className="text-sm px-5 font-bold mt-2">Register</h1>
            <p className="text-[10px] px-5 my-2">Please register with your phone number or email </p>
          </div>
        </div>
        <div className="bg-white px-5 flex flex-col h-full w-full  items-center justify-center mx-auto lg:py-0">
          <div className="flex  flex-col items-center justify-center w-full py-2 border-b-2 mx-5 text-redLight border-redLight" >
            <div>
              <img className='w-6 h-6' src={loginPhone} alt="sd" />
            </div>
            <div className="text-sm mt-2">Register your phone</div>
          </div>
          <div className="w-full h-full text-white">
            <form className="space-y-4 w-full md:space-y-6 my-5" onSubmit={formik.handleSubmit}>
              <div className="w-full">
                <div className=' flex items-center gap-2 py-2'>
                  <div>
                    <img className='w-6 h-6' src={phoneUsa} alt="sd" />
                  </div>
                  <label htmlFor="mobile" className=" text-sm text-gray font-medium">Phone number</label>
                </div>
                <div className='flex items-center w-full mt-2 gap-1'>
                  <p className='bg-inputBg w-[30%] text-gray p-3 flex items-center rounded-md'>+91 <MdKeyboardArrowDown size={20} />
                  </p>
                  <input
                    {...formik.getFieldProps('mobile')}

                    type="number"
                    name="mobile"
                    id="mobile"
                    placeholder="Enter your phone number"
                    className={`col-span-[60%] bg-inputBg text-[14px] focus:border-[1px] border-bg2 rounded-md outline-none w-full pl-3 p-3 placeholder:text-gray text-gray`}
                  />
                </div>
                {formik.touched.mobile && formik.errors.mobile && (
                  <div className="text-red text-xs">{formik.errors.mobile}</div>
                )}
              </div>
              <div className="relative">
                <div className='flex items-center py-2 gap-2'>
                  <div>
                    <img className='w-6 h-6' src={passwordUsa} alt="sd" />
                  </div>
                  <label htmlFor="email" className="text-sm text-gray font-medium">Email</label>
                </div>
                <input
                  {...formik.getFieldProps('email')}

                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className={`col-span-[60%] bg-inputBg text-[14px] focus:border-[1px] border-bg2 rounded-md outline-none w-full pl-3 p-3 placeholder:text-gray text-gray`}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red text-xs">{formik.errors.email}</div>
                )}
              </div>
              <div className="relative">
                <div className='flex items-center py-2 gap-2'>
                  <div>
                    <img className='w-6 h-6' src={passwordUsa} alt="sd" />
                  </div>
                  <label htmlFor="password" className="text-sm text-gray font-medium">Set Password</label>
                </div>
                <input
                  {...formik.getFieldProps('password')}

                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-inputBg mt-2 focus:border-[1px] text-[14px] border-bg2 rounded-md outline-none w-full pl-3 p-3 placeholder:text-gray text-gray "
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 top-10 pr-3 flex items-center text-gray opacity-25"
                >
                  {passwordVisible ? <MdVisibilityOff size={20} /> : <MdVisibility className='dark:text-gray opacity-65' size={20} />}
                </button>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red text-xs">{formik.errors.password}</div>
                )}
              </div>
              <div className="relative">
                <div className='flex items-center py-2 gap-2'>
                  <div>
                    <img className='w-6 h-6' src={passwordUsa} alt="sd" />
                  </div>
                  <label htmlFor="password_confirmation" className="text-sm text-gray font-medium">Confirm Password</label>
                </div>
                <input
                  {...formik.getFieldProps('password_confirmation')}

                  type={passwordVisible ? 'text' : 'password'}
                  name="password_confirmation"
                  id="password_confirmation"
                  placeholder="Confirm Password"
                  className="bg-inputBg mt-2 focus:border-[1px] text-[14px] border-bg2 rounded-md outline-none w-full pl-3 p-3 placeholder:text-gray text-gray"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 top-10 pr-3 flex items-center dark:text-gray opacity-35"
                >
                  {passwordVisible ? <MdVisibilityOff size={20} /> : <MdVisibility className='dark:text-gray opacity-65' size={20} />}
                </button>
                {formik.touched.password_confirmation && formik.errors.password_confirmation && (
                  <div className="text-red text-xs">{formik.errors.password_confirmation}</div>
                )}
              </div>
              <div className="">
                <div className="flex items-center gap-2 py-2">
                  <div>
                    <img className='w-6 h-6' src={inviteCode} alt="sd" />
                  </div>
                  <label htmlFor="referral_code" className="text-sm text-gray font-medium"> Invite Code</label>
                </div>
                <input
                  {...formik.getFieldProps('referral_code')}
                  type="text"
                  name="referral_code"
                  id="referral_code"
                  placeholder="Please enter the invitation code"
                  className="bg-inputBg mt-2 focus:border-[1px] text-[14px] border-bg2 rounded-md outline-none w-full pl-3 p-3 placeholder:text-gray text-gray"
                />
              </div>
              <div className="flex items-center mt-4">
                <div onClick={() => setCheckAgreement(!checkAgreement)} className={`flex items-center cursor-pointer rounded-full ${checkAgreement ? "text-chocolate bg-white " : "text-chocolate"}`}>
                  {checkAgreement ? (
                    <FaCheckCircle size={20} />
                  ) : (
                    <FaRegCircle size={20} />
                  )}
                </div>
                <label htmlFor="agree" className="text-gray ml-2 text-xs sm:text-base md:text-xs">I have read and agree </label>
                <a href="/aboutus/risk" className="ml-2 text-redLight underline text-xs sm:text-base md:text-xs">Privacy Agreement</a>
              </div>
              <div className='flex flex-col w-full font-bold items-center justify-center'>
                <button type="submit" className="w-[90%] font-bold tracking-[0.20333rem] py-2.5 rounded-full border-none bg-gradient-to-b from-[#f95959] to-[#ff9a8e] shadow-lg flex items-center justify-center">Register</button>
                <p className="border w-[90%] text-xs border-redLight mt-5 tracking-[2px] text-gray rounded-full p-2 flex gap-2 items-center justify-center">
                  I have an account  <Link to="/login" className="font-bold text-sm hover:underline text-redLight tracking-[0.20333rem] ">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div >
      </section >
    </>
  );
}

export default Register;
