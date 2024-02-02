import PropTypes from "prop-types";

import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const SepcialProducts = ({ specialClouth }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
      {specialClouth.map((clouth, idx) => (
        <div key={idx}>
          <Link to="/">
            <div className="card  bg-base-50 shadow-xl">
              <figure>
                <img src={clouth?.image} alt={clouth?.productType} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {clouth?.productName}
                  <div
                    className={`${
                      clouth?.dailyDeals ? "badge badge-secondary" : "hiddden"
                    } `}
                  >
                    {clouth?.dailyDeals}
                  </div>
                </h2>
                <p className="text-left font-bold text-lg text-gray-600">
                  Price :{" "}
                  <span className="text-xl text-black">
                    {clouth?.price} <span className="text-gray-600">Taka</span>
                  </span>
                </p>
                <div className="card-actions justify-end">
                  <div className="badge  badge-outline text-lg font-semibold bg-[#6a6bff] p-3 text-white">
                    Fashion
                  </div>
                  <div className="badge badge-outline text-lg font-bold bg-[#6a6bff] p-3 text-white">
                    {clouth?.status}
                  </div>
                </div>
                <div>
                  <Rating
                    style={{ maxWidth: 130 }}
                    value={clouth?.rating}
                    // itemStyles={myStyles}
                    readOnly
                  />
                  {clouth?.rating}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
SepcialProducts.propTypes = {
  specialClouth: PropTypes.node,
};

export default SepcialProducts;
