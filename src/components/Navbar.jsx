import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/movieview">Movie View</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/contact">Contact</Link> */}
      <Link to="/Profit">Profit Calculator</Link>
    </nav>
  );
}
