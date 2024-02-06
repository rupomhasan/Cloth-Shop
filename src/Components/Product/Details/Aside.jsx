import { motion } from "framer-motion";
const Aside = () => {
  return (
    <div>
      <div className="">

        <div className="flex gap-7 text-left items-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 1500 }}
            className="w-16"
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png"
          />
          <div>
            <h3 className="font-semibold text-xl ">Free Shiping </h3>
            <p className="font-semibold text-lg text-[#505050]">
              Free shiping on all order
            </p>
          </div>
        </div>
        <div className="flex gap-7 text-left items-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 1500 }}
            className="w-14"
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png"
          />
          <div>
            <h3 className="font-semibold text-xl text-left">Support 24/7 </h3>
            <p className="font-semibold text-lg text-[#505050]">
              We are here to help you with 24/7.
            </p>
          </div>
        </div>{" "}
        <div className="flex text-left gap-7 items-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 1500 }}
            className="w-14"
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png"
          />
          <div>
            <h3 className="font-semibold text-xl text-left">Money Return</h3>
            <p className="font-semibold text-lg text-[#505050]">
              not satisfied , return it within 14 days.
            </p>
          </div>
        </div>{" "}
        <div className="flex text-left gap-7 items-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 1500 }}
            className="w-14"
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png"
          />
          <div>
            <h3 className="font-semibold text-lg text-left">Order Discount </h3>
            <p className="font-semibold text-xl text-[#505050]">
              Our service brings you special offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
