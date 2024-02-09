import { Link, useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const MyCart = () => {
  const loderData = useLoaderData();
  const [data, setData] = useState(loderData);

  const cartLength = data.length;

  let totalPrice = 0;
  data.forEach((element) => {
    totalPrice = totalPrice + element.subTotal;
  });

  const handleDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:2500/addedCart/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((cart) => {
        console.log(cart);
        if (cart.acknowledged) {
          toast.warn("Deleted");
          const newdata = data.filter((res) => res._id !== id);
          console.log(newdata);
          setData(newdata);
        }
      })
      .catch((error) => console.log(error));
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
        fetch("http://localhost:2500/addedCart", {
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
        <img
          className="w-full "
          src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/2.3af0bcb2.jpg"
          alt=""
        />
      </div>
      <div className="bg-base-200">
        <div className="max-w-screen-xl mx-auto my-10">
          <div className="flex justify-between p-4 font-semibold text-xl">
            <p className="text-gray-500">CART</p>
            <div className="flex gap-1">
              <Link to="/">HOME</Link>
              <span>/</span>
              <p className="text-gray-500">CART</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 max-w-screen-xl mx-auto overflow-auto">
        {cartLength > 0 ? (
          <div>
            <table className="table border-b ">
              <thead>
                <tr className="text-lg uppercase text-black">
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>subTotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((cloth, idx) => (
                  <tr key={idx} className="text-[16px]">
                    <td>
                      <img className="w-14" src={cloth.image} />
                    </td>
                    <td className="font-montserrat font-medium ">
                      {cloth.name}
                    </td>
                    <td className="font-montserrat font-medium ">
                      {cloth.size}
                    </td>
                    <td className="font-montserrat font-medium ">
                      {cloth.quantity}
                    </td>
                    <td className="font-montserrat font-medium ">
                      {cloth.price}
                    </td>
                    <td className="font-montserrat font-medium ">
                      {cloth.subTotal}
                    </td>
                    <td className="font-montserrat font-medium ">
                      <AiFillDelete
                        onClick={() => handleDelete(cloth._id)}
                        className="mx-auto text-2xl"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className=" flex justify-center mt-2  text-xl font-bold">
              <td>TotalPrice : {totalPrice} Taka</td>
            </p>
          </div>
        ) : (
          <div className="flex justify-center">
            <img src="https://img.freepik.com/free-vector/removing-goods-from-basket-refusing-purchase-changing-decision-item-deletion-emptying-trash-online-shopping-app-laptop-user-cartoon-character_335657-1172.jpg?t=st=1707413384~exp=1707413984~hmac=20a9cfe76ac85a257a1511c98a1d3d1f0287e23d7f3bb25530d192f49545eb3f" />
          </div>
        )}
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between px-5 mb-5 gap-5">
          <Link to="/shop">
            <button className="btn btn-sm text-xl px-6 bg-[#a749ff] text-white">
              Continue
            </button>
          </Link>
          <button
            onClick={handleAllDelete}
            className="btn btn-sm text-xl px-6 bg-[#a749ff] text-white"
          >
            Clear All
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyCart;
