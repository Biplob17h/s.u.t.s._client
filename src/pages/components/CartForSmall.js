import React, { useContext } from "react";
import { OrderContext } from "../contextApi/HandleOrderContext";
import { toast } from "react-hot-toast";

const CartForSmall = ({ _id, single }) => {
  const {
    price,
    name,
    img,
    course_length,
    seats,
    teacher,
    in_week,
    course_time,
  } = single.course;
  console.log(single);

  //   context api
  const { orderLength, setOrderLength } = useContext(OrderContext);

  //   function
  const handleDelete = () => {
    fetch(`https://suts-server-sable.vercel.app/api/v1/order/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          toast.success(data.messasge);
          setOrderLength(orderLength - 1);
        }
      });
  };
  return (
    <div className="mt-5 ">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-[90%] h-[300px] rounded" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold text-[#0693e3]">{name}</h2>
          <h1 className="text-xl font-semibold">Price : {price} </h1>
          <label
            htmlFor="my_modal_7"
            className="btn btn-ghost text-white bg-[#0693e3] w-full p-0 m-0">
            Details
          </label>
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal text-[20px]">
            <div className="modal-box">
              <h1 className="mt-2">
                <span className="text-[17px] font-semibold">Name :</span>{" "}
                <span className="text-[17px] font-[400]">{name}</span>
              </h1>
              <h1 className="mt-2">
                <span className="text-[17px] font-semibold">Price :</span>{" "}
                <span className="text-[17px] font-[400]">{price} $</span>
              </h1>
              <h1 className="mt-2">
                <span className="text-[17px] font-semibold">Seats :</span>{" "}
                <span className="text-[17px] font-[400]">{seats} only</span>
              </h1>
              <h1 className="mt-2">
                <span className="text-[17px] font-semibold">Teacher :</span>{" "}
                <span className="text-[17px] font-[400]">{teacher}</span>
              </h1>
              <h1 className="mt-2">
                <span className="text-[17px] font-semibold">
                  Class In Week :
                </span>{" "}
                <span className="text-[17px] font-[400]">{in_week} Class</span>
              </h1>
              <h1 className="mt-2">
                <span className="text-[17px] font-semibold">Teacher :</span>{" "}
                <span className="text-[17px] font-[400]">{teacher}</span>
              </h1>
              <h1 className="mt-2">
                <span className="text-[17px] font-semibold">Course Time :</span>{" "}
                <span className="text-[17px] font-[400]">{course_time}</span>
              </h1>
              <h1 className="mt-2">
                <span className="text-[17px] font-semibold">
                  Course Length :
                </span>{" "}
                <span className="text-[17px] font-[400]">
                  {course_length} months
                </span>
              </h1>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartForSmall;
