import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { OrderContext } from "../contextApi/HandleOrderContext";

const TableSingleFile = ({ single, _id }) => {
  const {
    price,
    name,
    img,
    course_length,
    seats,
    teacher,
    in_week,
    course_time,
  } = single;

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
    <tr>
      <th>
        <button onClick={handleDelete} className="btn btn-ghost">
          X
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-24 h-24 rounded">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <th>
        <label htmlFor="my_modal_7" className="btn btn-ghost btn-xs">
          Details
        </label>
        {/* Put this part before </body> tag */}
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
              <span className="text-[17px] font-semibold">Class In Week :</span>{" "}
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
              <span className="text-[17px] font-semibold">Course Length :</span>{" "}
              <span className="text-[17px] font-[400]">
                {course_length} months
              </span>
            </h1>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </th>
    </tr>
  );
};

export default TableSingleFile;
