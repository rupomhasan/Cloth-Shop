import Economy from "./Economy";
import MarketValue from "./MarketValueBar";
import MarketValuePie from "./MarketValuePie";

const DashBoard = () => {
  return (
    <div className="mx-3">
      <h3 className="text-2xl ml-16 text-left mt-5 font-bold uppercase">
        DashBoard
      </h3>
      <Economy />
      <div className="grid lg:grid-cols-2 items-center gap-10">
        <MarketValue />
        <MarketValuePie />
      </div>
    </div>
  );
};

export default DashBoard;
