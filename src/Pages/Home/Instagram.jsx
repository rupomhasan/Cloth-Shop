import Slider from "react-slick";
import { FaInstagramSquare } from "react-icons/fa";

import { motion } from "framer-motion";
const Instagram = () => {
  const settings = {
    slidesToShow: 7,
    infinite: true,
    autoplayspeed: 2900,
    // pauseOnHover: false,
    rtl: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="mb-20">
      <div className="my-10">
        <p className="text-center font-playfair font-semibold text-xl md:text-4xl  ">
          _ Follow Us On Instagram _
        </p>
        <p className="text-center text-gray-500 text-lg font-semibold italic hover:link">
          #Fashion
        </p>
      </div>
      <div className="overflow-hidden hover:link">
        <Slider {...settings}>
          <div className="relative overflow-hidden  bg-gray-700 hover : hero-overlay bg-blend-multiply">
            <motion.img
              whileHover={{
                scale: 1.1,
                opacity: 0.7,
              }}
              transition={{ duration: 0.3 }}
              src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/insta/1.jpg "
            />
            <motion.span
              whileHover={{ scale: 1.1, y: 100, opacity: 1 }}
              initial={{ opacity: 0, y: -100 }}
            >
              <FaInstagramSquare className="text-orange-600 absolute text-3xl   top-[45%] left-[45%]" />
            </motion.span>
          </div>{" "}
          <div className="relative overflow-hidden  bg-gray-700 hover : hero-overlay bg-blend-multiply">
            <motion.img
              whileHover={{
                scale: 1.1,
                opacity: 0.7,
              }}
              transition={{ duration: 0.3 }}
              src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/insta/2.jpg "
            />
            <motion.span
              whileHover={{ scale: 1.1, y: 100, opacity: 1 }}
              initial={{ opacity: 0, y: -100 }}
            >
              <FaInstagramSquare className="text-orange-600 absolute text-3xl   top-[45%] left-[45%]" />
            </motion.span>
          </div>{" "}
          <div className="relative overflow-hidden  bg-gray-700 hover : hero-overlay bg-blend-multiply">
            <motion.img
              whileHover={{
                scale: 1.1,
                opacity: 0.7,
              }}
              transition={{ duration: 0.3 }}
              src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/insta/3.jpg "
            />
            <motion.span
              whileHover={{ scale: 1.1, y: 100, opacity: 1 }}
              initial={{ opacity: 0, y: -100 }}
            >
              <FaInstagramSquare className="text-orange-600 absolute text-3xl   top-[45%] left-[45%]" />
            </motion.span>
          </div>{" "}
          <div className="relative overflow-hidden  bg-gray-700 hover : hero-overlay bg-blend-multiply">
            <motion.img
              whileHover={{
                scale: 1.1,
                opacity: 0.7,
              }}
              transition={{ duration: 0.3 }}
              src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/insta/4.jpg "
            />
            <motion.span
              whileHover={{ scale: 1.1, y: 100, opacity: 1 }}
              initial={{ opacity: 0, y: -100 }}
            >
              <FaInstagramSquare className="text-orange-600 absolute text-3xl   top-[45%] left-[45%]" />
            </motion.span>
          </div>{" "}
          <div className="relative overflow-hidden  bg-gray-700 hover : hero-overlay bg-blend-multiply">
            <motion.img
              whileHover={{
                scale: 1.1,
                opacity: 0.7,
              }}
              transition={{ duration: 0.3 }}
              src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/insta/5.jpg "
            />
            <motion.span
              whileHover={{ scale: 1.1, y: 100, opacity: 1 }}
              initial={{ opacity: 0, y: -100 }}
            >
              <FaInstagramSquare className="text-orange-600 absolute text-3xl   top-[45%] left-[45%]" />
            </motion.span>
          </div>{" "}
          <div className="relative overflow-hidden  bg-gray-700 hover : hero-overlay bg-blend-multiply">
            <motion.img
              whileHover={{
                scale: 1.1,
                opacity: 0.7,
              }}
              transition={{ duration: 0.3 }}
              src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/insta/6.jpg "
            />
            <motion.span
              whileHover={{ scale: 1.1, y: 100, opacity: 1 }}
              initial={{ opacity: 0, y: -100 }}
            >
              <FaInstagramSquare className="text-orange-600 absolute text-3xl   top-[45%] left-[45%]" />
            </motion.span>
          </div>{" "}
          <div className="relative overflow-hidden  bg-gray-700 hover : hero-overlay bg-blend-multiply">
            <motion.img
              whileHover={{
                scale: 1.1,
                opacity: 0.7,
              }}
              transition={{ duration: 0.3 }}
              src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/insta/7.jpg "
            />
            <motion.span
              whileHover={{ scale: 1.1, y: 100, opacity: 1 }}
              initial={{ opacity: 0, y: -100 }}
            >
              <FaInstagramSquare className="text-orange-600 absolute text-3xl   top-[45%] left-[45%]" />
            </motion.span>
          </div>{" "}
          <div className="relative overflow-hidden  bg-gray-700 hover : hero-overlay bg-blend-multiply">
            <motion.img
              whileHover={{
                scale: 1.1,
                opacity: 0.7,
              }}
              transition={{ duration: 0.3 }}
              src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/insta/9.jpg "
            />
            <motion.span
              whileHover={{ scale: 1.1, y: 100, opacity: 1 }}
              initial={{ opacity: 0, y: -100 }}
            >
              <FaInstagramSquare className="text-orange-600 absolute text-3xl   top-[45%] left-[45%]" />
            </motion.span>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Instagram;
