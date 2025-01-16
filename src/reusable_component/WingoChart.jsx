/* eslint-disable react/prop-types */
// Reusable WingoChart component
const WingoChart = ({ handlehistorybox, gameHistoryData }) => {
    if (handlehistorybox !== 1) return null;
  
    const renderGradientBackground = (num) => {
      if (num === '0') {
        return (
          <>
            <span
              className="absolute inset-0 bg-red rounded-full"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
            ></span>
            <span
              className="absolute inset-0 bg-violet-500 rounded-full"
              style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
            ></span>
          </>
        );
      }
      if (num === '5') {
        return (
          <>
            <span
              className="absolute inset-0 bg-green rounded-full"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
            ></span>
            <span
              className="absolute inset-0 bg-voilet rounded-full"
              style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
            ></span>
          </>
        );
      }
      return null;
    };
  
    const renderGameRow = (item) => {
      return (
        <div key={item.gamesno} className="w-full flex items-center justify-between">
          <div className="w-[35%] flex justify-start text-center">
            <p className="text-xs sm:text-base md:text-xs">{item?.gamesno}</p>
          </div>
          <div className="flex gap-1 w-[65%] justify-end px-1 sm:px-2 md:px-1 h-12 items-center">
            {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num, index) => {
              const isHighlighted = num == item?.number;
              const isGreenNumber = [1, 3, 7, 9].includes(item?.number);
              const isRedNumber = [2, 4, 6, 8].includes(item?.number);
  
              return (
                <div
                  key={index}
                  className={`relative border border-gray h-3.5 sm:h-6 md:h-4 w-3.5 sm:w-6 md:w-4 col-span-1 rounded-full flex justify-center items-center  ${
                    isGreenNumber && isHighlighted
                      ? "bg-green"
                      : isRedNumber && isHighlighted
                      ? "bg-red"
                      : ""
                  } ${isHighlighted ? "text-white" : "text-gray"}`}
                >
                  {isHighlighted && renderGradientBackground(num)}
                  <span className="relative z-10">{num}</span>
                </div>
              );
            })}
          </div>
          <p
            className={`ml-2 border border-gray ${
              [0, 1, 2, 3, 4].includes(item?.number)
                ? "bg-bg3"
                : "bg-yellow"
            } h-3.5 sm:h-6 md:h-4 w-3.5 sm:w-6 md:w-4 col-span-1 rounded-full flex justify-center items-center p-1 sm:p-2 md:p-1 text-white`}
          >
            {[0, 1, 2, 3, 4].includes(item?.number) ? "S" : "B"}
          </p>
        </div>
      );
    };
  
    return (
      <div className="bg-bg1 px-4 w-full mt-5">
        <div className="flex w-full bg-bg4 rounded-t-lg py-2 sm:py-3 md:py-2 font-semibold">
          <p className="text-sm sm:text-lg md:text-sm w-[35%] flex justify-center items-center">Period</p>
          <p className="text-sm sm:text-lg md:text-sm w-[65%] flex justify-center items-center">Number</p>
        </div>
        <div className="text-xs sm:text-lg md:text-xs w-full bg-bg2 py-2 sm:py-3 md:py-2 px-2">
          {gameHistoryData?.map(renderGameRow)}
        </div>
      </div>
    );
  };
  
  export default WingoChart;
  