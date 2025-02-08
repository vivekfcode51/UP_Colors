import { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import apis from "../../utils/apis";
import { toast } from 'react-toastify';
import moment from 'moment';
import no_data_available from '../../assets/images/no_data_available.png';
import Loader from '../../reusable_component/Loader/Loader';

const NewSubordinate = () => {
  const [loading, setLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(1);
  const [newSubordinateData, setNewSubordinateData] = useState([]);

  const toggleModal = (modalType) => {
    setActiveModal(modalType); 
  };

  const userId = localStorage.getItem("userId");

  const NewSubordinateHandler = useCallback(async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${apis.newSubordinate}${userId}&type=${activeModal}`);
      if (res?.data?.status === 200) {
        setLoading(false)
        setNewSubordinateData(res?.data?.data);
      } else {
        setLoading(false)
        setNewSubordinateData([]);
      }
    } catch (err) {
      setLoading(false)
      console.error(err);
    }
  }, [userId, activeModal]);

  useEffect(() => {
    NewSubordinateHandler(); 
  }, [NewSubordinateHandler]);

  return (
    <div>
      {loading && <Loader setLoading={setLoading} loading={loading} />}
      <div className="hide-scrollbar overflow-x-auto py-3 mx-3">
        <div className="flex justify-between text-xsm">
          <div
            className={`w-28 py-3 flex-shrink-0 flex items-center justify-between shadow-lg rounded-lg ${
              activeModal === 1 ? "bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white" : "bg-white text-gray"
            }  px-7 cursor-pointer`}
            onClick={() => toggleModal(1)}
          >
            <p className="text-nowrap">Today</p>
          </div>
          <div
            className={`w-28 py-3 flex-shrink-0 flex items-center justify-between shadow-lg rounded-lg ${
              activeModal === 2 ? "bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white" : "bg-white text-gray"
            }  px-5 cursor-pointer`}
            onClick={() => toggleModal(2)}
          >
            <p className="text-nowrap">Yesterday</p>
          </div>
          <div
            className={`w-28 py-3 flex-shrink-0 flex items-center justify-between shadow-lg rounded-lg ${
              activeModal === 3 ? "bg-gradient-to-l from-[#ff9a8e] to-[#f95959] text-white" : "bg-white text-gray"
            }  px-3 cursor-pointer`}
            onClick={() => toggleModal(3)}
          >
            <p className="text-nowrap">This month</p>
          </div>
        </div>
      </div>
      {newSubordinateData?.length > 0 ? (
        <div className="px-3 text-xsm text-lightGray mt-5">
          {newSubordinateData.map((item, i) => (
            <div key={i} className="flex items-center border-b-[1px] border-border1 justify-between py-5">
              <div className="flex flex-col justify-center gap-2">
                <p>{item?.mobile.slice(5)}***{item?.mobile.slice(8, 10)}</p>
                <p className="text-black">Direct subordinates</p>
              </div>
              <div className="flex flex-col items-end justify-center gap-2">
                <p>UID:{item?.u_id}</p>
                <p>{moment(item?.created_at).format('DD-MM-YYYY HH:mm:ss')}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10">
          <img src={no_data_available} alt="No data" />
          <p className="mt-10 text-black">No data</p>
        </div>
      )}
    </div>
  );
};

export default NewSubordinate;
