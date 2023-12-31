/* eslint-disable no-lone-blocks */
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineClock } from "react-icons/hi";
const EventDetails = ({ event }) => {
  const {
    title,
    full_description,
    event_time,
    img,
    event_location,
    category,
    organizers,
  } = event;
  return (
    <div className="mb-10 md:mx-10 flex flex-col-reverse ">
      <div className="mt-5">
        <div className="flex items-center space-between">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-sm font-medium px-7 py-3 bg-blue-900 text-white">
            {category}
          </p>
        </div>
        <p className="text-lg font-medium py-2 text-gray-500">
          {full_description}
        </p>
        <p className="text-sm font-medium text-gray-500 py-2">
          Organizers : {organizers[0]}, {organizers[1]}
        </p>
        <p className="text-sm flex items-center font-medium gap-2 text-gray-500">
          <HiOutlineClock />
          {event_time}
        </p>
        <p className="flex text-xs font-medium items-center gap-2 text-gray-500">
          <IoLocationSharp />
          {event_location}
        </p>
      </div>

      <img src={img} alt="" className="w-[500px] lg:h-[350px]" />
    </div>
  );
};

export default EventDetails;

{
  /* <p className="py-2 text-gray-500 text-sm font-medium">
        Attendee : {attendee_count}
      </p> */
}
{
  /* <p className="flex text-sm font-medium text-gray-500">
        Contact-Info :{" "}
        <div className="ml-1">
          <p> Name : {contact_info.name}</p>
          <p> Email : {contact_info.email}</p>
          <p> Phone : {contact_info.phone}</p>
        </div>
      </p> */
}
