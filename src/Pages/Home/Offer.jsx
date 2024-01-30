import { motion } from "framer-motion";
const Offer = () => {
  return (
    <div className="md:flex gap-10 my-20 px-5 max-w-screen-xl mx-auto">
      <div className="relative my-10 md:my-0 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 , x : 3 }}
          src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/sub-banner1.5d5f9c6f.jpg"
          className=" z-0"
        />
        <div className="absolute  font-playfair right-10 top-10 z-10">
          <p className="text-xl text-red-600 font-bold ">10% OFF</p>
          <h3 className="text-3xl md:text-6xl ">MEN</h3>
        </div>
      </div>
      <div className="relative   overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          className=""
          src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/sub-banner2.3b2448f3.jpg "
        />{" "}
        <div className="absolute  font-playfair right-6 top-10 z-10">
          <p className="text-xl text-red-600 font-bold ">10% OFF</p>
          <h3 className="text-3xl  lg:text-6xl ">WOMAN</h3>
        </div>
      </div>
    </div>
  );
};

export default Offer;
