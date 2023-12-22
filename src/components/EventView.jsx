import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventList, fetchEvents } from "../features";

const EventView = () => {
  const { events, status, error } = useSelector(({ events }) => events);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEvents());
    }
  }, [status, dispatch]);

  return (
    <div className="page">
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>{error}</p>}
      <EventList events={events} />
    </div>
  );
};

export default EventView;
