import { Link, json, useLoaderData } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiWifiHighBold } from "react-icons/pi";
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import Aside from "./Aside";
import RelatedProduct from "./RelatedProduct";
import Slider from "react-slick";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer, toast } from "react-toastify";

const ProductsDetails = () => {
  const clouth = useLoaderData();
  const [clouths, setClouth] = useState([]);
  const [newDeals, setNewDeals] = useState([]);
  const [newType, setNewtype] = useState([]);
  const {
    availableSizes,
    image,
    offer,
    price,
    productDetails,

    productName,
    productType,
    rating,
    ratingReview,
    dailyDeals,
    status,
  } = clouth;

  useEffect(() => {
    fetch("http://localhost:2500/products")
      .then((res) => res.json())
      .then((data) => {
        setClouth(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const deals = clouths.filter((clouth) => clouth.dailyDeals === dailyDeals);
    setNewDeals(deals);

    const type = clouths.filter((clouth) => clouth.productType === productType);
    setNewtype(type);
  }, [clouths, productType, dailyDeals]);

  const justifyed = offer / 100;
  const newPrice = price - price * justifyed || price;
  const orginalNumber = Math.round(newPrice);

  var settings = {
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          className: "center",
          centerMode: true,
          centerPadding: "50px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    var sizeElement = document.getElementById("size");
    var size = sizeElement.options[sizeElement.selectedIndex].value; //help by ChatGPT
    const quantity = parseInt(document.getElementById("quantity").value);
    const name = document.getElementById("name").innerText;
    const image = document.getElementById("img").getAttribute("src");
    const status = document.getElementById("status").innerText;
    const subTotal = orginalNumber * quantity;

    if (status === "In Stock") {
      const cart = {
        image,
        name,
        size,
        price,
        quantity,
        subTotal,
      };
      console.log(cart);

      fetch("http://localhost:2500/addedCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      })
        .then((res) => res.json())
        .then((feedback) => {
          if (feedback.acknowledged) {
            toast.success("Successfully Added ", {
              transition: Bounce,
              position: "bottom-left",
            });
          } else {
            toast.warn("Got Error", {
              transition: Bounce,
              position: "bottom-left",
            });
          }
        })
        .catch((error) => {
          toast.warn(error.message, {
            transition: Bounce,
            position: "bottom-left",
          });
          console.log(error.message);
        });
    } else {
      toast.warn("Out of stock", {
        transition: Bounce,
        position: "bottom-left",
      });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-base-200 my-10">
        <div className="flex justify-between px-5 py-10  text-xl font-montserrat font-semibold">
          <p className="text-xl font-montserrat font-semibold">PRODUCT</p>
          <div className="flex gap-2">
            <Link to="/" className="hover:link">
              HOME
            </Link>
            <span>/</span> <p className="hover:link text-gray-600">PRODUCT</p>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-2">
        <div className="hidden lg:flex min-w-80 w-[65%] h-fit">
          <div className="border-2 p-5 ">
            <p className="font-extrabold text-3xl text-left mb-3 underline  font-playfair">
              Service
            </p>
            <Aside />
          </div>
          <div></div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 px-5 ">
          <div className="">
            <img id="img" src={image} alt="" />
            <p className="text-2xl font-bold text-left mt-10 text-gray-600 font-montserrat">
              Description :{" "}
            </p>
            <p className="text-gray-500 font-medium text-justify mb-6 mt-3">
              ChicStyles, a premier fashion destination, brings the latest
              trends for both men and women. Elevate your style with our Women's
              Fashion collection, featuring chic dresses like the Floral Maxi
              and timeless Leather Jackets. For men, discover urban
              sophistication with Slim Fit Denim Jeans or exude elegance in our
              Tailored Suits. Our carefully curated selection ensures a perfect
              blend of comfort and fashion-forward statements.
            </p>
          </div>
          <div className="text-left">
            <div className="border-b-2 border-dashed">
              <h2 id="name" className="font-semibold text-2xl mb-5">
                {productName}
              </h2>
              <div className="flex gap-2 items-center ">
                <p
                  className={` ${"line-through text-gray-500 text-lg font-semibold"} `}
                >
                  {price}
                </p>
                <p className="text-red-500 text-xl font-semibold">
                  {offer || 0}
                  {clouth?.offer === String ? "" : <span>% off</span>}
                </p>
              </div>
              <p id="price">{orginalNumber} Taka</p>
            </div>
            <form className="border-b-2 border-dashed ">
              <span className="text-lg font-bold">Available Sizes</span>
              <select
                id="size"
                className="flex gap-2 font-semibold py-2 rounded pl-2"
              >
                {availableSizes.map((size, idx) => (
                  <option key={idx}>{size}</option>
                ))}
              </select>
              <p
                id="status"
                className={`${
                  status === "In Stock" ? "text-green-600" : "text-red-600 "
                } text-xl font-semibold mt-5`}
              >
                {status}
              </p>
              <p className="text-xl font-semibold">Quantity</p>
              <input
                type="number"
                min="1"
                id="quantity"
                max="10"
                path="note"
                defaultValue="1"
                className="text-gray-900 block px-3 w-16 border bg-white h-10 text-2xl font-bold my-2 rounded-sm"
              />

              <button
                onClick={handleAddToCart}
                className="btn btn-sm px-10 bg-[#a749ff] text-white text-xl mb-5"
              >
                Add To Cart
              </button>
            </form>
            <div className="border-b-2 border-dashed">
              <p className="font-bold text-xl mb-1 ">Product Details : </p>
              <p className="text-lg mb-4">{productDetails}</p>
            </div>

            <div className="mb-10">
              <div className=" flex justify-between items-center my-2 ">
                <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
                <p className="mr-5 text-xl font-bold">( {ratingReview} )</p>
              </div>
              <p className="font-semibold text-xl my-3">Share it</p>
              <div className="flex gap-2 text-xl ">
                <FaFacebookF className="hover:text-blue-500" />
                <FaGooglePlusG className="hover:text-orange-400" />
                <FaInstagram className="hover:text-orange-400" />
                <FaTwitter className="hover:text-blue-400" />
                <PiWifiHighBold className="hover:text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <Slider {...settings} className="overflow-hidden">
          {newDeals.map((deals, idx) => (
            <RelatedProduct key={idx} deals={deals} />
          ))}
        </Slider>
      </div>
      <div>
        <ToastContainer theme="colored" />
      </div>
    </div>
  );
};

export default ProductsDetails;
