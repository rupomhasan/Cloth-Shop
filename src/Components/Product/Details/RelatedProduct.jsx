import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const RelatedProduct = ({ deals }) => {
  const { image, rating, productName,  _id } = deals;

  return (
    <Link to={`/productDetails/${_id}`}>
      <div className="card bg-gray-100 m-5">
        <div>
          <img className="" src={image} alt="" />
        </div>
        <div className="my-5 text-left px-2 ">
          <Rating style={{ maxWidth: 130 }} value={rating} readOnly />

          <h3 className="text-xl font-montserrat font-semibold my-1">
            {productName}
          </h3>
        </div>
      </div>
    </Link>
  );
};

RelatedProduct.propTypes = {
  deals: PropTypes.node,
  offerdPrice: PropTypes.number,
};
export default RelatedProduct;
