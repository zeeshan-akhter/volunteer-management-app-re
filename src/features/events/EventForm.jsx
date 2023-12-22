import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addEventAsync, updateEventAsync } from "../../features";

const EventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const event = state ? state : null;

  const [eventInput, setEventInput] = useState({
    name: event ? event.name : "",
    date: event ? event.date : "",
    location: event ? event.location : "",
    description: event ? event.description : "",
    requiredVolunteerRoles: event ? event.requiredVolunteerRoles.join(", ") : ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event) {
      dispatch(
        updateEventAsync({
          id: event._id,
          updatedEvent: eventInput
        })
      );
      navigate(`/events/${event._id}`);
    } else {
      dispatch(addEventAsync(eventInput));
      navigate("/events");
    }
  };

  return (
    <div className="page">
      <h2>{event ? "Edit" : "Add"} Event</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Event Name: </strong>
              </td>
              <td>
                <input
                  placeholder="Event Name"
                  type="text"
                  value={eventInput.name}
                  onChange={(e) =>
                    setEventInput({ ...eventInput, name: e.target.value })
                  }
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Event Date: </strong>
              </td>
              <td>
                <input
                  placeholder="Date"
                  type="date"
                  value={eventInput.date}
                  onChange={(e) =>
                    setEventInput({ ...eventInput, date: e.target.value })
                  }
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Location: </strong>
              </td>
              <td>
                <input
                  placeholder="Event Location"
                  type="text"
                  value={eventInput.location}
                  onChange={(e) =>
                    setEventInput({ ...eventInput, location: e.target.value })
                  }
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Description: </strong>
              </td>
              <td>
                <input
                  placeholder="Event Description"
                  type="text"
                  value={eventInput.description}
                  onChange={(e) =>
                    setEventInput({
                      ...eventInput,
                      description: e.target.value
                    })
                  }
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Required Volunteer Roles: </strong>
              </td>
              <td>
                <input
                  placeholder="Event Volunteer Roles"
                  type="text"
                  value={eventInput.requiredVolunteerRoles}
                  onChange={(e) =>
                    setEventInput({
                      ...eventInput,
                      requiredVolunteerRoles: e.target.value
                        .replace(/ /g, "")
                        .split(",")
                    })
                  }
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">{event ? "Update" : "Add"} Event</button>
      </form>
    </div>
  );
};

export default EventForm;
