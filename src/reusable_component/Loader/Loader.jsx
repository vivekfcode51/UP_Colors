import React from "react";
import "./Loader.css";

const Loader = ({setloading,loading}) => {
  return (
    <div className=" z-50 fixed inset-0 flex items-center justify-center z-50 bg-faded-gray">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};
export default Loader