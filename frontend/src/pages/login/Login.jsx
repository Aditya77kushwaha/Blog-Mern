import "./Login.css";

export default function Login() {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Blogs App</h3>
          <span className="loginDesc">
            Write and share your thoughts with around the world !!!
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Login
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
