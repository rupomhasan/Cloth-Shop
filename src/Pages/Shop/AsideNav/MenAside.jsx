import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const MenAside = ({ men }) => {
  const [shirt, setShirt] = useState([]);
  const [tShirt, setTShirt] = useState([]);
  const [watch, setWatch] = useState([]);
  const [jeans, setJeans] = useState([]);
  const [jecket, setJecket] = useState([]);

  useEffect(() => {
    const shirt = men.filter((clouth) => clouth.productType === "Shirt");
    const tShirt = men.filter((clouth) => clouth.productType === "T-Shirt");
    const watch = men.filter((clouth) => clouth.productType === "Watch");
    const jeans = men.filter((clouth) => clouth.productType === "Jeans Jecket");
    const jecket = men.filter((clouth) => clouth.productType === "Shirt");

    console.log(shirt, tShirt, watch, jeans, jecket);
    setShirt(shirt);
    setJeans(jeans);
    setJecket(jecket);
    setTShirt(tShirt);
    setWatch(watch);
  }, [men]);

  console.log(men);
  return (
    <div className="px-3 ml-3">
      <ul className="text-left space-y-3 border ">
        <p className="text-xl  text-center py-2 border-b-2  border-dashed bg-base-300   font-bold">
          MEN
        </p>
        <li className="flex items-center justify-between  hover:bg-base-200 px-5 py-2  rounded">
          <p className="text-lg font-semibold">Shirt</p>
          <p className="font-bold">( {shirt.length || 0} )</p>
        </li>
        <li className="flex items-center justify-between hover:bg-base-200 px-5 py-2 rounded">
          <p className="text-lg font-semibold">T-Shirt</p>
          <p className="font-bold">({tShirt.length || 0})</p>
        </li>{" "}
        <li className="flex items-center justify-between hover:bg-base-200 px-5 py-2 rounded">
          <p className="text-lg font-semibold">Watch</p>
          <p className="font-bold">({watch.length || 0})</p>
        </li>{" "}
        <li className="flex items-center justify-between hover:bg-base-200 px-5 py-2 rounded">
          <p className="text-lg font-semibold">Jeans</p>
          <p className="font-bold">({jeans.length || 0})</p>
        </li>
        <li className="flex items-center justify-between hover:bg-base-200 px-5 py-2 rounded">
          <p className="text-lg font-semibold">Jeans Jecket</p>
          <p className="font-bold">({jecket.length || 0})</p>
        </li>
      </ul>
    </div>
  );
};

MenAside.propTypes = {
  men: PropTypes.node,
};

export default MenAside;
