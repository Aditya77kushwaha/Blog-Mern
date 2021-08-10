import "./Header.css";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">Blogs</a>
          </li>
          <li>
            <a href="#contact">Profile</a>
          </li>
          <li style={{ float: "right" }}>
            <a className="active" href="#about">
              About
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
