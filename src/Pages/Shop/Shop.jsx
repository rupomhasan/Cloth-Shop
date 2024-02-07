import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MenClouth from "./MenClouth";
import WomanClouth from "./WomanClouth";
import Allclouth from "./Allclouth";
import MenAside from "./AsideNav/MenAside";
import WomenAside from "./AsideNav/WomenAside";

const Shop = () => {
  const [womenClouth, setWomenClouth] = useState([]);
  const [menClouth, setMenClouth] = useState([]);

  const [isMen, setIsMen] = useState(false);
  const [isWomen, setIsWomen] = useState(false);
  const [all, setAll] = useState(true);
  const clouths = useLoaderData();
  console.log(clouths);

  useEffect(() => {
    const men = clouths.filter((clouth) => clouth.gender === "Men");
    const women = clouths.filter((clouth) => clouth.gender === "Women");
    setMenClouth(men);
    setWomenClouth(women);
    console.log(men, women);
  }, [clouths]);

  const handleMen = () => {
    setAll(false);
    setIsWomen(false);
    setIsMen(true);
  };
  const handleWomen = () => {
    setAll(false);
    setIsMen(false);
    setIsWomen(true);
  };
  const handleAll = () => {
    setIsMen(false);
    setIsWomen(false);
    setAll(true);
  };

  return (
    <div>
      <div>
        <div className=" mb-5 md:mb-16">
          <img
            className="w-full"
            src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/2.3af0bcb2.jpg"
          />
        </div>
        <div className="bg-base-200">
          <div className=" md:flex justify-between px-5 py-10  text-xl font-montserrat font-semibold  max-w-screen-xl mx-auto">
            <p
              onClick={handleAll}
              className={`${
                all ? "text-gray-500" : ""
              } text-xl font-montserrat font-semibold text-left`}
            >
              All
            </p>
            <div className="flex gap-1 ">
              <p
                className={`${isMen ? "text-gray-500" : ""}`}
                onClick={handleMen}
              >
                MEN
              </p>
              <span>/</span>
              <p
                className={`${isWomen ? "text-gray-600 " : ""}`}
                onClick={handleWomen}
              >
                WOMEN
              </p>
            </div>
            <div className="flex gap-2">
              <Link to="/" className="hover:link">
                HOME
              </Link>
              <span>/</span> <p className="hover:link text-gray-600">SHOP</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto md:flex ">
        {isMen && (
          <div className="w-[100%] mt-5">
            <MenAside men={menClouth} />
          </div>
        )}

        {isWomen && (
          <div className="w-[100%] mt-5">
            <WomenAside women={womenClouth} />
          </div>
        )}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {all &&
            clouths.map((clouth, idx) => (
              <Allclouth key={idx} all={clouth}></Allclouth>
            ))}
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {isMen &&
            menClouth.map((singleMen, idx) => (
              <MenClouth key={idx} men={singleMen} />
            ))}
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {isWomen &&
            womenClouth.map((singleWomen, idx) => (
              <WomanClouth key={idx} women={singleWomen} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
