import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useProfile } from "../../reusable_component/gameApi";
import usawinlogo from "../../assets/usawinlogo.png";
import { motion } from "framer-motion"; // Import framer-motion for smooth animations

function AviatorHeader() {
  const userId = localStorage.getItem("userId");
  const { myDetails } = useProfile(userId);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="flex items-center justify-between h-[3.22rem] w-full px-3">
        <img className="w-24 h-8 object-fill" src={usawinlogo} alt="Logo" />
        <div className="flex items-center gap-2 text-xsm relative">
          <div className="flex bg-yellow rounded-full px-2 py-1 text-white">
            How to play?
          </div>
          <div>{myDetails?.data?.wallet} INR</div>
          {/* Button to toggle modal */}
          <div onClick={toggleModal} className="cursor-pointer">
            <FiAlignJustify size={20} />
          </div>

          {/* Smooth opening and closing modal */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-8 right-0 w-40 bg-white shadow-lg rounded-lg p-3"
            >
              <p className="text-sm text-gray-700">User Info</p>
              <p className="text-xs text-gray-500">Wallet: {myDetails?.data?.wallet} INR</p>
              <button
                onClick={toggleModal}
                className="mt-2 w-full text-center bg-red-500 text-white py-1 rounded-md text-xs"
              >
                Close
              </button>
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
}

export default AviatorHeader;
