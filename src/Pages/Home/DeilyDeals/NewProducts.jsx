import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const NewProducts = ({ newClouth }) => {
  console.log(newClouth);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
      {newClouth.map((clouth, idx) => (
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
                  <div>
                    <Rating
                      style={{ maxWidth: 130 }}
                      value={clouth?.rating}
                      // itemStyles={myStyles}
                      readOnly
                    />
                  </div>
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
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

NewProducts.propTypes = {
  newClouth: PropTypes.node,
};
export default NewProducts;
