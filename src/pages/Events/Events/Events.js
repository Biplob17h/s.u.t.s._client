import React, { useEffect, useState } from "react";
import EventBanner from "../EventBanner/EventBanner";
import EventsPost from "../EventsPost/EventsPost";
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
      <div className="lg:grid lg:grid-cols-2 mx-5">
        {events.map(event=><EventDetails
        key={event.id}
        event={event}
        >
        </EventDetails>)}
      </div>
      {/* event posts */}
      {/* <EventsPost></EventsPost> */}
      {/* event posts */}
    </div>
  );
};

export default Events;
