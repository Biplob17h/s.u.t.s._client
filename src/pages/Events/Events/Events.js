import React, { useEffect, useState } from "react";
import EventBanner from "../EventBanner/EventBanner";
import EventDetails from "../EventDetails/EventDetails";



const Events = () => {
  // get events
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  // get events
  return (
    <div>
      {/* banner */}
      <EventBanner></EventBanner>
      {/* banner */}
      <div className="flex">
        <div className="grid mx-5  md:mx-20 mt-20 lg:grid-cols-2">
          {events.map((event) => (
            <EventDetails key={event.id} event={event}></EventDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
