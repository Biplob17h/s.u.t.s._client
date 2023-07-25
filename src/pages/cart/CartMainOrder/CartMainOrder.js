import React, { useContext } from "react";
import { OrderContext } from "../../contextApi/HandleOrderContext";
import TableSingleFile from "../../components/TableSingleFile";
import { Link, useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../components/ScrollToTop";
import { countSubTotal } from "../../components/CountSubTotal";
import CartForSmall from "../../components/CartForSmall";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contextApi/UserContext";

const CartMainOrder = () => {
  // context api
  const { order, setOrderLength } = useContext(OrderContext);
  const { user } = useContext(AuthContext);

  //   function
  const total = countSubTotal(order);
  const navegate = useNavigate();

  const handleConfirmOrder = () => {
    ScrollToTop();
    const confirmOrder = window.confirm(
      "Are you sure you want to buy this courses"
    );
    if (confirmOrder) {
      // delete all data from cart

      fetch("http://localhost:8080/api/v1/order", {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // post data to studies
            const study = {
              email: user,
              studies: order,
            };
            fetch(`http://localhost:8080/api/v1/study`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(study),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.success) {
                  toast.success("Your order confirm successfully");
                  setOrderLength(0);
                  navegate("/confirm");
                } else {
                  toast.error("something went worng. Please try again leter, pro 1");
                }
              });
          } else {
            toast.error("something went worng. Please try again leter");
          }
        });
    } else {
      toast.error("Confirm order cancle by user");
    }
  };
  return (
    <div>
      {/* for small div */}
      <div className="block md:hidden">
        {order.length > 0 ? (
          <>
            {order.map((single) => (
              <CartForSmall
                key={single._id}
                _id={single._id}
                single={single}></CartForSmall>
            ))}

            <div className="px-5">
              <div className="flex justify-between items-center mt-20 border h-[150px] ">
                <h1 className="text-2xl font-semibold">Cart Total</h1>
                <h1 className="text-2xl font-semibold text-[#0693e3]">
                  {total} $
                </h1>
              </div>
              <div className="flex justify-end my-10">
                <button
                  onClick={handleConfirmOrder}
                  className="p-5 font-bold text-xl text-white bg-[#2d76b2] hover:bg-[#434343]">
                  CONFARM ORDER
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className=" mb-80 text-center">
            <h1 className="text-6xl font-bold mb-10">
              Your cart is currently empty.
            </h1>
            <hr className="mb-10" />
            <Link
              to="/shop"
              onClick={ScrollToTop}
              className="p-5 font-bold text-xl text-white bg-[#2d76b2] hover:bg-[#434343]">
              RETRUN TO COURSES
            </Link>
          </div>
        )}
      </div>
      {/* for  big div */}
      <div className="mt-20 mx-5 hidden md:block">
        {order.length > 0 ? (
          <>
            <div className="overflow-x-auto mb-10">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Course Name</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((single) => (
                    <TableSingleFile
                      key={single._id}
                      _id={single._id}
                      single={single.course}></TableSingleFile>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center px-5 mt-20 mx-60 border h-[150px] ">
                <h1 className="text-2xl font-semibold">Cart Total</h1>
                <h1 className="text-2xl font-semibold text-[#0693e3]">
                  {total} $
                </h1>
              </div>
              <div className="flex justify-end mx-60 mt-10">
                <button
                  onClick={handleConfirmOrder}
                  className="p-5 font-bold text-xl text-white bg-[#2d76b2] hover:bg-[#434343]">
                  CONFARM ORDER
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className=" mb-80 text-center">
            <h1 className="text-6xl font-bold mb-10">
              Your cart is currently empty.
            </h1>
            <hr className="mb-10" />
            <Link
              to="/shop"
              onClick={ScrollToTop}
              className="p-5 font-bold text-xl text-white bg-[#2d76b2] hover:bg-[#434343]">
              RETRUN TO COURSES
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartMainOrder;
