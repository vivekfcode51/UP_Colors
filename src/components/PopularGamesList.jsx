import popuplarbg1 from '../assets/category/popuplarbg1.png';
import aviator from '../assets/category/aviator.png';
import plinkpo from '../assets/category/plinkpo.png';
import limbo from '../assets/category/limbo.png';
import aviator2 from '../assets/category/aviator2.png';
import plinko from '../assets/category/plinko.png';
import mines from '../assets/category/mines.png';
import fortune from '../assets/category/fortune.png';
import royalfishing from '../assets/category/royalfishing.png';
import superrich from '../assets/category/superrich.png';
import fortunerabbit from '../assets/category/fortunerabbit.png';
import deco_first from "../assets/images/deco_first.png";
import deco_second from "../assets/images/deco_second.png";
import deco_third from "../assets/images/deco_third.png";
import deco_four from "../assets/images/deco_four.png";
import { LiaGreaterThanSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { RiFireFill } from 'react-icons/ri';

function PopularGamesList() {
  const lottery = [
    { bg: popuplarbg1, name: "Win Go", img: deco_first, route: "/lottery/wingo" },
    { bg: popuplarbg1, name: "K3", img: deco_second, route: "/lottery/k3" },
    { bg: popuplarbg1, name: "5D", img: deco_third, route: "/lottery/5d" },
    { bg: popuplarbg1, name: "Trx Win Go", img: deco_four, route: "/lottery/trxwingo" },
  ];
  const original = [
    { bg: aviator, name: "AVIATOR", route: "#" },
    { bg: plinkpo, name: "PLINKPO", route: "#" },
    { bg: limbo, name: "LIMBO", route: "#" },
    { bg: aviator2, name: "AVIATOR", route: "#" },
    { bg: plinko, name: "PLINKO", route: "#" },
    { bg: mines, name: "MINES", route: "#" },
  ];
  const platform = [
    { bg: aviator, name: "AVIATOR", route: "#", percentage: "97.21%" },
    { bg: aviator2, name: "AVIATOR", route: "#", percentage: "96.5%" },
    { bg: fortune, name: "PLINKPO", route: "#", percentage: "97.36%" },
    { bg: royalfishing, name: "LIMBO", route: "#", percentage: "97.18%" },
    { bg: superrich, name: "PLINKO", route: "#", percentage: "96.44%" },
    { bg: fortunerabbit, name: "MINES", route: "#", percentage: "97.23%" },
  ];

  return (
    <>
      <div className="mt-5 flex justify-between items-center">
        <div className="border-bg3 border-l-4 pl-2">Lottery</div>
        <button className="flex items-center text-xs border-[1px] border-white px-4 py-0.5 rounded-md">All  <span className='text-bg3 ml-1'>4</span> <LiaGreaterThanSolid /></button>
      </div>
      <div className="grid grid-cols-2 gap-2 h-full mt-1">
        {lottery.map((item, index) => (
          <Link key={index} className='h-56' to={`${item?.route}`} >
            <div
              className="col-span-1 font-bold rounded-xl h-56"

              style={{ backgroundImage: `url(${item.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <h1 className='pt-6 text-center' >{item.name}</h1>
              <div className='flex items-center justify-center mt-7'>
                <img src={item?.img} alt="d" />
              </div>
              <div className='flex mt-8 justify-end mr-3'>
                <button className="flex items-center border-[1px] border-white px-4 rounded-full">Go <LiaGreaterThanSolid /></button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div className="border-bg3 border-l-4 pl-2">Original</div>
        <button className="flex items-center text-xs border-[1px] border-white px-4 py-0.5 rounded-md">All <span className='text-bg3 ml-1'>35</span> <LiaGreaterThanSolid /></button>
      </div>
      <div className="grid grid-cols-3 gap-2 h-full mt-1">
        {original?.map((item, index) => (
          <Link key={index} className='col-span-1 text-xs font-bold  rounded-xl flex flex-col justify-between items-center h-44' to={`${item?.route}`} >
            <img className='h-full' src={item?.bg} alt="w" />
          </Link>
        ))}
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div className='flex items-center gap-'>

          <div className='text-bg3'> <RiFireFill /> </div>
          <div className="">Platform recommendation</div>
        </div>
        <button className="flex items-center text-xs border-[1px] border-white px-4 py-0.5 rounded-md">All <span className='text-bg3 ml-1'>6</span> <LiaGreaterThanSolid /></button>
      </div>
      <div className="grid grid-cols-3 gap-2 h-full mt-1">
        {platform?.map((item, index) => (
          <Link key={index} className='col-span-1 mt-3 text-xs font-bold  rounded-xl flex flex-col justify-between items-center h-44' to={`${item?.route}`} >
            <img className='h-full' src={item?.bg} alt="w" />
            <div className='flex items-center justify-between bg-bg3 w-full p-0.5 text-white rounded-lg mt-1'>
              <p>Odds of</p>
              <p className=''>{item?.percentage}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default PopularGamesList;
