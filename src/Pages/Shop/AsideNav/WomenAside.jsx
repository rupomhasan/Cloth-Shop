import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const WomenAside = ({ women }) => {
  const [dress, setDress] = useState([]);
  const [tShirt, setTShirt] = useState([]);
  const [sweater, setSweater] = useState([]);
  const [coat, setCoat] = useState([]);
  const [jecket, setJecket] = useState([]);
  useEffect(() => {
    const dress = women.filter((clouth) => clouth.productType === "Dress");
    const tShirt = women.filter((clouth) => clouth.productType === "Dress");
    const sweater = women.filter((clouth) => clouth.productType === "Sweater");
    const coat = women.filter((clouth) => clouth.productType === "Dress");
    const jecket = women.filter((clouth) => clouth.productType === "Jacket");
    console.log(dress);
    setCoat(coat);
    setTShirt(tShirt);
    setDress(dress);
    setJecket(jecket);
    setSweater(sweater);
  }, [women]);

  console.log(women);

  return (
    <div>
      <div className="px-3 ml-3">
        <ul className="text-left space-y-3 border ">
          <p className="text-xl  text-center py-2 border-b-2  border-dashed bg-base-300   font-bold">
            WOMEN
          </p>
          <li className="flex items-center justify-between  hover:bg-base-200 px-5 py-2  rounded">
            <p className="text-lg font-semibold">Dress</p>
            <p className="font-bold">( {dress.length || 0} )</p>
          </li>
          <li className="flex items-center justify-between hover:bg-base-200 px-5 py-2 rounded">
            <p className="text-lg font-semibold">T-Shirt</p>
            <p className="font-bold">({tShirt.length || 0})</p>
          </li>{" "}
          <li className="flex items-center justify-between hover:bg-base-200 px-5 py-2 rounded">
            <p className="text-lg font-semibold">Sweater</p>
            <p className="font-bold">({sweater.length || 0})</p>
          </li>{" "}
          <li className="flex items-center justify-between hover:bg-base-200 px-5 py-2 rounded">
            <p className="text-lg font-semibold">Coat</p>
            <p className="font-bold">({coat.length || 0})</p>
          </li>
          <li className="flex items-center justify-between hover:bg-base-200 px-5 py-2 rounded">
            <p className="text-lg font-semibold">Jecket</p>
            <p className="font-bold">({jecket.length || 0})</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

WomenAside.propTypes = {
  women: PropTypes.node,
};
export default WomenAside;
