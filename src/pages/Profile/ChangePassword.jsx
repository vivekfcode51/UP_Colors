import React, { useState } from 'react';
import { FaGreaterThan, FaKey } from 'react-icons/fa';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import password from "../../assets/icons/password.png"
function ChangePassword() {
    const [passwordVisibility, setPasswordVisibility] = useState({
        login_password: false,
        new_password: false,
        password_confirmation: false,
    });

    const [allInputs, setAllInputs] = useState({
        login_password: "",
        new_password: "",
        password_confirmation: "",
    });

    const togglePasswordVisibility = (field) => {
        setPasswordVisibility((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleInputChange = (field, value) => {
        setAllInputs((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <div>
            <div className="w-full text-gray rounded-lg p-6">
                {/* Login Password */}
                <div className="relative">
                    <div className="flex items-center py-2 gap-2">
                        <img src={password} alt="cf" className='w-6 h-6'/>
                        <label htmlFor="login_password" className="text-sm ">
                            Login Password
                        </label>
                    </div>
                    <input
                        onChange={(e) => handleInputChange("login_password", e.target.value)}
                        type={passwordVisibility.login_password ? "text" : "password"}
                        name="login_password"
                        id="login_password"
                        placeholder="Login Password"
                        className="bg-inputBg text-gray rounded-md outline-none block w-full p-3.5 dark:placeholder-gray dark:text-gray text-[15px]"
                    />
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility("login_password")}
                        className="absolute inset-y-0 right-0 top-8 pr-3 flex items-center text-text dark:text-text"
                    >
                        {passwordVisibility.login_password ? <MdVisibilityOff className='text-gray opacity-35' size={20} /> : <MdVisibility className='text-gray opacity-35' size={20} />}
                    </button>
                </div>

                {/* New Password */}
                <div className="relative mt-5">
                    <div className="flex items-center py-2 gap-2">
                    <img src={password} alt="cf" className='w-6 h-6'/>
                    <label htmlFor="new_password" className="text-sm ">
                            New login Password
                        </label>
                    </div>
                    <input
                        onChange={(e) => handleInputChange("new_password", e.target.value)}
                        type={passwordVisibility.new_password ? "text" : "password"}
                        name="new_password"
                        id="new_password"
                        placeholder="New login Password"
                        className="bg-inputBg text-gray rounded-md outline-none block w-full p-3.5 dark:placeholder-gray dark:text-gray text-[15px]"
                    />
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility("new_password")}
                        className="absolute inset-y-0 right-0 top-8 pr-3 flex items-center text-text dark:text-text"
                    >
                        {passwordVisibility.new_password ? <MdVisibilityOff className='text-gray opacity-35' size={20} /> : <MdVisibility className='text-gray opacity-35' size={20} />}
                    </button>
                </div>

                {/* Confirm Password */}
                <div className="relative mt-5">
                    <div className="flex items-center py-2 gap-2">
                    <img src={password} alt="cf" className='w-6 h-6'/>
                    <label htmlFor="password_confirmation" className="text-sm ">
                           New Confirm Password
                        </label>
                    </div>
                    <input
                        onChange={(e) => handleInputChange("password_confirmation", e.target.value)}
                        type={passwordVisibility.password_confirmation ? "text" : "password"}
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="New Confirm Password"
                        className="bg-inputBg text-gray rounded-md outline-none block w-full p-3.5 dark:placeholder-gray dark:text-gray text-[15px]"
                    />
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility("password_confirmation")}
                        className="absolute inset-y-0 right-0 top-8 pr-3 flex items-center text-text dark:text-text"
                    >
                        {passwordVisibility.password_confirmation ? <MdVisibilityOff className='text-gray opacity-35' size={20} /> : <MdVisibility className='text-gray opacity-35' size={20} />}
                    </button>
                </div>
                    <div className='mx-3 text-end flex items-center justify-end gap-2 mt-5 text-xsm'>
                        Contact customer services <FaGreaterThan size={12} />
                    </div>

                {/* Save Button */}
                <button className="w-full mt-20 tracking-[2px] bg-gradient-to-b from-[#f95959] to-[#ff9a8e] text-white text-lg font-semibold py-2 rounded-full shadow-md ">
                    Save changes 
                </button>
            </div>
        </div>
    );
}

export default ChangePassword;
