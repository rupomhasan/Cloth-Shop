import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import "@smastrom/react-rating/style.css";

const AllProducts = ({ all }) => {
  console.log(all);
  const {
    productName,
    productId,
    status,
    productType,
    price,
    dailyDeals,
    rating,
    image,
  } = all;
  console.log(rating);

  return (
    <div>
      <div className="card  bg-base-50 shadow-xl">
        <figure>
          <img src={image} alt={productType} />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title">
              {productName}
              <div
                className={`${
                  dailyDeals ? "badge badge-secondary " : "hiddden"
                }  `}
              >
                {dailyDeals}
              </div>
            </h2>
          </div>
          <p className="text-left font-bold text-lg text-gray-600">
            Price :{" "}
            <span className="text-xl text-black">
              {price} <span className="text-gray-600">Taka</span>
            </span>
          </p>
          <div className="card-actions justify-end">
            <div className="badge  badge-outline text-lg font-semibold bg-[#6a6bff] p-3 text-white">
              Fashion
            </div>
            <div className="badge badge-outline text-lg font-bold bg-[#6a6bff] p-3 text-white">
              {status}
            </div>
          </div>
          <div>
            <Rating
              style={{ maxWidth: 130 }}
              value={rating}
              // itemStyles={myStyles}
              readOnly
            />
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

AllProducts.propTypes = {
  all: PropTypes.node,
};

export default AllProducts;
