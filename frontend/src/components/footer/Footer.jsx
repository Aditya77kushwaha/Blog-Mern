import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/adityakushwaha007/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/mwlite/in/aditya-kushwaha-9469821b5"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/Aditya77kushwaha"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>

          {/* <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                    />
                    <label className="form-label" for="form5Example2">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section> */}

          <section className="mb-4">
            <p>
              I am a passionate programmer who is skilled at Full Stack web
              developement using Django and Mern stack, Android developement
              using Java in Android Studio, Data Science and a Competitive
              Programmer.
            </p>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright :
          <a className="text-white" href="https://mdbootstrap.com/">
            Aditya Kushwaha
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
