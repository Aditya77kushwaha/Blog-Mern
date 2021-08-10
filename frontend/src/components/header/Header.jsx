import "./Header.css";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="blogs">My Blogs</Link>
          </li>
          <li>
            <Link to="write">Write</Link>
          </li>
          <li style={{ float: "right" }}>
            <Link className="active" to="profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
