import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Allclouth = ({ all }) => {
  const { _id, image, rating, productName, price } = all;

  return (
    <div>
      <Link to={`/productDetails/${_id}`}>
        <div className="card bg-gray-100 m-5">
          <div className="relative ">
            <img className="" src={image} alt="" />
          </div>
          <div className="my-5 text-left px-2 ">
            <Rating style={{ maxWidth: 130 }} value={rating} readOnly />

            <h3 className="text-xl font-montserrat font-semibold my-1">
              {productName}
            </h3>
            <div className="flex gap-5  font-bold items-center">
              <p className="text-xl">{price} Taka</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Allclouth.propTypes = {
  all: PropTypes.node,
};
export default Allclouth;
