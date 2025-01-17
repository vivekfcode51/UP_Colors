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
     <div>Popular list</div>
    </>
  );
}

export default PopularGamesList;
