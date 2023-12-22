import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div>
        <NavLink
          to="https://github.com/zeeshan-akhter/volunteer-management-app-re"
          target="_blank"
        >
          GITHUB
        </NavLink>
         <br /> 
        <NavLink
          to="https://replit.com/@zeeshanakhter/volunteer-management-app"
          target="_blank"
        >
          REPLIT
        </NavLink>
      </div>
    </>
  );
}
