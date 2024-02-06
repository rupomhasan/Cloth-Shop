import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const RelatedProduct = ({ deals, offerdPrice }) => {

  const { image, rating, productName, price, _id } = deals;

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
          <div className="flex gap-5  font-bold items-center">
            <p className="text-xl">{offerdPrice} Taka</p>
            <p className="line-through text-gray-500">{price} Taka</p>
          </div>
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
