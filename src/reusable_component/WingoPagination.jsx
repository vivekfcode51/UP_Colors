/* eslint-disable react/prop-types */
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const WingoPagination = ({
  currentPage,
  totalPages,
  hasMore,
  onPrevClick,
  onNextClick,
  prevDisabled,
  nextDisabled,
}) => {
  return (
    <div className="pagination rounded-md flex bg-bg2 py-2 sm:py-3 md:py-2 items-center justify-center gap-10 mt-5 mb-5 mx-4">
      <button
        onClick={onPrevClick}
        className="flex items-center justify-center font-semibold w-10 sm:w-16 md:w-10 text-sm sm:text-lg md:text-sm py-2 sm:py-4 md:py-2 rounded-lg bg-bg4 text-gray-400"
        disabled={prevDisabled}
      >
        <MdKeyboardArrowLeft className="font-extrabold text-4xl text-white" />
      </button>
      <p className="text-gray-400">{currentPage}{totalPages}</p>
      <button
        onClick={onNextClick}
        className="flex items-center justify-center font-semibold w-10 sm:w-16 md:w-10 text-sm sm:text-lg md:text-sm py-2 sm:py-4 md:py-2 rounded-lg bg-bg3 text-white"
        disabled={nextDisabled}
      >
        <MdKeyboardArrowRight className="font-extrabold text-4xl text-white" />
      </button>
    </div>
  );
};

export default WingoPagination;
