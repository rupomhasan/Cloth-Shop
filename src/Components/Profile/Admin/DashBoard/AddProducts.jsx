import { ToastContainer, toast } from "react-toastify";

const AddProducts = () => {
  const handleAddProduct = (e) => {
    let availableSizes = [];

    // e.preventDefault();
    e.preventDefault()
    const form = e.target;
    const productName = form.name.value;
    const productId = form.id.value;
    const price = form.price.value;
    const status = form.status.value;
    const offer = form.offer.value;
    const productDetails = form.details.value;
    const productType = form.type.value;
    const image = form.image.value;
    const brandName = form.brand.value;
    const gender = form.gender.value;
    const rating = form.rating.value;
    const ratingReview = form.review.value;
    const dailyDeals = form.deals.value;
    const s = form.s.checked;
    const m = form.m.checked;
    const l = form.l.checked;
    const xl = form.xl.checked;
    const xxl = form.xxl.checked;

    if (s) availableSizes.push("s");

    if (m) availableSizes.push("m");

    if (l) availableSizes.push("l");

    if (xl) availableSizes.push("xl");

    if (xxl) availableSizes.push("xxl");

    const product = {
      productName,
      productId,
      price,
      status,
      availableSizes,
      offer,
      productDetails,
      productType,
      image,
      brandName,
      gender,
      rating,
      ratingReview,
      dailyDeals,
    };
    console.log(product);

    fetch("http://localhost:2500/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Successfully Added");
        }
      });
  };

  return (
    <div>
      <div>
        <p className="text-2xl font-bold text-left ml-16 my-5">
          Add New Product
        </p>
      </div>

      <div className=" max-w-screen-xl mx-auto text-left rounded-xl shadow-xl  bg-white p-10 m-5 md:m-10">
        <form onSubmit={handleAddProduct}>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="my-5">
                <p className="font-medium text-lg font-playfair">
                  1 . Product name
                </p>
                <input
                  type="text"
                  name="name"
                  className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
                />
              </div>
              <div className="my-5">
                <p className="font-medium text-lg font-playfair">
                  2 . Gender name
                </p>
                <input
                  type="text"
                  name="gender"
                  className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
                />
              </div>
              <div className="my-5">
                <p className="font-medium text-lg font-playfair">
                  3 . Product Offer
                </p>
                <input
                  type="Number"
                  name="offer"
                  className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
                />
              </div>
              <div className="my-5">
                <p className="font-medium text-lg font-playfair">
                  4 . Product Price
                </p>
                <input
                  type="number"
                  name="price"
                  className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
                />
              </div>
              <div className="my-5">
                <p className="font-medium text-lg font-playfair">
                  5 . Product Status
                </p>
                <input
                  type="text"
                  name="status"
                  className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
                />
                <div className="my-5">
                  <p className="font-medium text-lg font-playfair">
                    11 . Product Details
                  </p>
                  <textarea
                    className="bg-gray-100 mt-3 w-full py-3 px-5"
                    placeholder="Write..."
                    name="details"
                    rows={5}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="my-5">
                <p className="font-medium text-lg font-playfair">
                  6 . Product Id
                </p>
                <input
                  type="text"
                  name="id"
                  className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
                />
              </div>
              <div className="my-5">
                <p className="font-medium text-lg font-playfair">
                  7 . Product Type
                </p>
                <input
                  type="text"
                  name="type"
                  className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
                />
              </div>
              <div className="my-5">
                <p className="font-medium text-lg font-playfair">
                  8 . Product Review
                </p>
                <input
                  type="Number"
                  name="review"
                  className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
                />
              </div>
              <div className="my-5">
                <p className="font-medium text-lg font-playfair">
                  9 . Product Rating
                </p>
                <input
                  type="number"
                  name="rating"
                  className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
                />
              </div>
              <div className="my-5">
                <p className="font-medium text-lg font-playfair">
                  10 . DailyDeals
                </p>
                <input
                  type="text"
                  name="deals"
                  placeholder="new , special ,best sell or empty "
                  className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
                />
              </div>

              <div className="my-5">
                <p className="font-medium text-lg font-playfair">
                  12 . Brand Name
                </p>
                <input
                  type="text"
                  name="brand"
                  className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
                />
              </div>
              <div>
                <p>13 . Size</p>
                <div className="grid grid-cols-5">
                  <div className="flex gap-2 mt-3">
                    <input name="s" type="Checkbox" value="s" />
                    <p>S</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <input name="m" type="Checkbox" value="s" />
                    <p>M</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <input name="l" type="Checkbox" value="s" />
                    <p>L</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <input name="xl" type="Checkbox" value="s" />
                    <p>XL</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <input name="xxl" type="Checkbox" value="s" />
                    <p>XXL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="my-5">
            <p className="font-medium text-lg font-playfair">14 . Image URL</p>
            <input
              type="text"
              name="image"
              className=" w-full mt-3 rounded bg-gray-100  px-5 py-1 font-montserrat "
            />
          </div>{" "}
          <div>
            <input
              type="submit"
              className="btn w-full uppercase text-2xl bg-purple-500 text-white"
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProducts;
