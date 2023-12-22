import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VolunteerList, fetchVolunteers } from "../features";

const VolunteerView = () => {
  const { volunteers, status, error } = useSelector(
    ({ volunteers }) => volunteers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchVolunteers());
    }
  }, [status, dispatch]);

  return (
    <div className="page">
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>{error}</p>}
      <VolunteerList volunteers={volunteers} />
    </div>
  );
};

export default VolunteerView;
