import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Landing = () => {
  const linkName=["Developers","Register","Login"]
  const linkPath = ["/profiles","/register","/login"]
  return (
    <>
    <Navbar name={linkName} link={linkPath} />
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Landing;
