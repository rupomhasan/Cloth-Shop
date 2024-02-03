import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BestSells = ({ sellClouth }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-5 max-w-screen-2xl mx-auto">
      {sellClouth.map((clouth, idx) => (
        <div key={idx}>
          <Link to="/">
            <div className="card  bg-base-50 shadow-xl">
              <figure>
                <img src={clouth?.image} alt={clouth?.productType} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {clouth?.productName}
                  <div>
                    <div
                      className={`${
                        clouth?.dailyDeals ? "badge badge-secondary" : "hiddden"
                      } `}
                    >
                      {clouth?.dailyDeals}
                    </div>
                  </div>
                </h2>
                <p className="text-left font-bold text-lg text-gray-600">
                  Price :{" "}
                  <span className="text-xl text-black">
                    {clouth?.price} <span className="text-gray-600">Taka</span>
                  </span>
                </p>
                <div>
                  <Rating
                    style={{ maxWidth: 130 }}
                    value={clouth?.rating}
                    readOnly
                  />
                </div>
                <div className="card-actions justify-end">
                  <div className="badge  badge-outline text-lg font-semibold bg-[#6a6bff] p-3 text-white">
                    Fashion
                  </div>
                  <div
                    className={` ${
                      clouth.status === "In Stock"
                        ? "text-green-600"
                        : "text-red-600"
                    } badge badge-outline text-lg font-bold  p-3 `}
                  >
                    {clouth.status}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
BestSells.propTypes = {
  sellClouth: PropTypes.node,
};
export default BestSells;
