import { Routes, Route, NavLink } from "react-router-dom";

import { VolunteerView, EventView } from "./components";
import {
  VolunteerDetail,
  VolunteerForm,
  EventDetail,
  EventForm
} from "./features";

import "./styles.css";

export default function App() {
  const isActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "#495057" : ""
  });

  return (
    <div className="App">
      <div className="navbar">
        <h1>Volunteer Management System</h1>
        <nav>
          <ul className="horizontal">
            <li>
              <NavLink to="/" style={isActiveStyle} className="nav-items">
                Volunteers
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" style={isActiveStyle} className="nav-items">
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<VolunteerView />} />
        <Route path="/events" element={<EventView />} />
        <Route path="/volunteers/:id" element={<VolunteerDetail />} />
        <Route path="/volunteers/add" element={<VolunteerForm />} />
        <Route path="/volunteers/edit/:id" element={<VolunteerForm />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/events/add" element={<EventForm />} />
        <Route path="/events/edit/:id" element={<EventForm />} />
      </Routes>
    </div>
  );
}
