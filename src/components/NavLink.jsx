import { Link } from "react-router-dom";

export default function NavLink({ path, text }) {
  return (
    <Link to={path} className="nav-link">
      {text}
    </Link>
  );
}

