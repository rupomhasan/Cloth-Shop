import ColumnGroup from "antd/es/table/ColumnGroup";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const Product = () => {
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:2500/productDetails/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((cart) => {
            if (cart.acknowledged) {
              toast.warn("Deleted");
              const newdata = data.filter((res) => res._id !== id);
              console.log(newdata);
              setData(newdata);
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const handleAllDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:2500/products", {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((cart) => {
            if (cart.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your cart has been deleted",
                icon: "success",
              });
              setData([]);
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div>
      <div>
        <p className="text-left ml-16 text-2xl font-bold my-5">Product List</p>
        <div className=" bg-white  p-5  ">
          <div className="flex justify-end my-3">
            <Link to="/profile/addProducts">
              <button className="btn px-5 text-xl bg-purple-500 text-white">
                Add Product
              </button>
            </Link>
          </div>
          <div className="overflow-auto">
            <table className="table ">
              <thead>
                <tr className="">
                  <th className="border-2 text-xl bg-base-200  text-center">
                    Id
                  </th>
                  <th className="border-2 text-xl bg-base-200  text-center">
                    Product Name
                  </th>
                  <th className="border-2 text-xl bg-base-200  text-center">
                    Image
                  </th>
                  <th className="border-2 text-xl bg-base-200  text-center">
                    Price
                  </th>
                  <th className="border-2 text-xl bg-base-200  text-center">
                    Status
                  </th>
                  <th className="border-2 text-xl bg-base-200  text-center">
                    Delete
                  </th>
                  <th className="border-2 text-xl bg-base-200  text-center">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((cloth, idx) => (
                  <tr key={idx} className="">
                    <td className="border-2 text-xl  text-center">
                      {cloth.productId}
                    </td>
                    <td className="border-2 text-xl  text-center">
                      {cloth.productName}
                    </td>
                    <td className="border-2 text-xl  text-center">
                      <img
                        src={cloth.image}
                        className="w-10 h-10"
                        alt="product"
                      />
                    </td>
                    <td className="border-2 text-xl   text-center">
                      <div className="flex items-center ">
                        <TbCurrencyTaka className="text-2xl" />
                        {cloth.price}
                      </div>
                    </td>
                    <td
                      className={` ${
                        cloth.status === "In Stock"
                          ? "text-green-600"
                          : "text-red-600"
                      } border-2 text-xl  text-center font-semibold`}
                    >
                      {cloth.status}
                    </td>
                    <td className="border-2 text-3xl ">
                      <AiFillDelete
                        onClick={() => handleDelete(cloth._id)}
                        className="mx-auto "
                      />
                    </td>
                    <td className="border-2 text-xl   text-center">
                      <Link to={`/profile/updateProduct/${cloth._id}`}>
                        <BiEdit className="mx-auto" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end my-3">
            <button
              onClick={handleAllDelete}
              className="btn px-8 text-xl bg-purple-500 text-white"
            >
              Clear All
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Product;
