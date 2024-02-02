import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BestSells from "./BestSells";
import NewProducts from "./NewProducts";
import SepcialProducts from "./SepcialProducts";
import AllProducts from "./AllProducts";

const DeailyDeals = () => {
  const [all, setAll] = useState(true);
  const [newProducts, setNew] = useState(false);
  const [special, setSpecial] = useState(false);
  const [sell, setSell] = useState(false);

  const [newClouth, setNewClouth] = useState([]);
  const [specialClouth, setSpecialClouth] = useState([]);
  const [sellClouth, setSellClouth] = useState([]);

  const data = useLoaderData();
  console.log(data);

  const handleAll = () => {
    setSell(false);
    setSpecial(false);
    setNew(false);
    setAll(true);
  };

  const handleNewClouth = () => {
    setAll(false);
    setSpecial(false);
    setSell(false);
    setNew(true);
    const newData = data.filter((detals) => detals.dailyDeals === "new");
    setNewClouth(newData);
  };
  const handleSpecialclouth = () => {
    setAll(false);
    setSell(false);
    setNew(false);
    setSpecial(true);
    const newData = data.filter((special) => special.dailyDeals === "special");
    setSpecialClouth(newData);
  };
  const handleBestSellsClouth = () => {
    setAll(false);
    setNew(false);
    setSpecial(false);
    setSell(true);
    const newData = data.filter((sells) => sells.dailyDeals === "best sell");
    setSellClouth(newData);
    console.log(newData);
  };

  return (
    <div>
      <div>
        <h2 className="text-center font-montserrat mt-24 text-4xl font-semibold ">
          _ DAILY DEALS! _
        </h2>
      </div>
      <div className="text-xl md:text-2xl font-bold flex justify-center my-10">
        <ul className="flex gap-5 md:gap-10 ">
          <li
            className={`${
              all ? "text-gray-600 underline underline-offset-4" : "text-black"
            }`}
            onClick={handleAll}
          >
            All
          </li>
          <li
            className={`${
              newProducts
                ? "text-gray-600 underline underline-offset-4"
                : "text-black"
            }`}
            onClick={handleNewClouth}
          >
            New
          </li>
          <li
            className={`${
              special
                ? "text-gray-600 underline underline-offset-4"
                : "text-black"
            }`}
            onClick={handleSpecialclouth}
          >
            Special
          </li>
          <li
            onClick={handleBestSellsClouth}
            className={`${
              sell ? "text-gray-600 underline underline-offset-4" : "text-black"
            }`}
          >
            BestSells
          </li>
        </ul>
      </div>
      <div className="px-4">
        {all && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10  max-w-screen-2xl mx-auto">
            {data.map((dataDetails, idx) => (
              <AllProducts key={idx} all={dataDetails}></AllProducts>
            ))}
          </div>
        )}
      </div>
      <div>
        {newProducts && <NewProducts newClouth={newClouth} />}
        {special && <SepcialProducts specialClouth={specialClouth} />}
        {sell && <BestSells sellClouth={sellClouth} />}
      </div>
    </div>
  );
};

export default DeailyDeals;
