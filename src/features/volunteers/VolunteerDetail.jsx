import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteVolunteerAsync } from "../../features";

const VolunteerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const volunteerToUpdate = useSelector(({ volunteers: { volunteers } }) =>
    volunteers.find((volunteer) => volunteer._id === id)
  );

  if (!volunteerToUpdate) {
    return <p>Volunteer not found!</p>;
  }

  const handleDelete = (id) => {
    dispatch(deleteVolunteerAsync(id));
    navigate("/");
  };

  return (
    <div>
      <h2>Volunteer Detail</h2>
      <p>
        <strong>Name: </strong>
        {volunteerToUpdate.name}
      </p>
      <p>
        <strong>Contact: </strong>
        {volunteerToUpdate.contact}
      </p>
      <p>
        <strong>Availability: </strong>
        {volunteerToUpdate.availability ? "Yes" : "No"}
      </p>
      <p>
        <strong>Skills: </strong>
        {volunteerToUpdate.skills.join(", ")}
      </p>
      <p>
        <strong>Areas of Interest: </strong>
        {volunteerToUpdate.areasOfInterest.join(", ")}
      </p>
      <p>
        <strong>Events: </strong>
        {volunteerToUpdate.events.map(({ name }) => name).join(", ")}
      </p>

      <NavLink to={`/volunteers/edit/${id}`} state={volunteerToUpdate}>
        <button>Edit Volunteer</button>
      </NavLink>

      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default VolunteerDetail;
