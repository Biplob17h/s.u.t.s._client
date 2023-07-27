import React, { useContext, useEffect, useState } from "react";
import logo from "./../../../assets/logo/suts-logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextApi/UserContext";
import Register from "../../Authentication/Register/Register";
import Login from "../../Authentication/Login/Login";
import { OrderContext } from "../../contextApi/HandleOrderContext";
import { countSubTotal } from "../../components/CountSubTotal";
import profileImg from "../../../assets/icons/profile.png";
import { ScrollToTop } from "../../components/ScrollToTop";

const Navbar = () => {
  // context api
  const { user, setUser } = useContext(AuthContext);
  const { order } = useContext(OrderContext);

  // all state
  const [top, setTop] = useState(true);
  const [nav, setNav] = useState(0);

  // use Effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [nav]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [nav]);

  // functions
  // test
  const handleNav = () => {
    console.log("clicked");
    const orr = [];
    order.forEach((element) => {
      orr.push(element.course);
    });
    console.log(orr);
  };

  // on click logout
  const handleLogOut = () => {
    localStorage.setItem("email", "");
    setUser("");
    console.log("log out successfull");
  };

  //scroll
  const scroll = () => {
    if (window.scrollY < 50) {
      setTop(true);
    } else {
      setTop(false);
    }
    setNav(window.scrollY);
  };

  const handleNavScroll = () => {
    ScrollToTop();
  };
  // count total

  const subTotal = countSubTotal(order);

  return (
    <div
      className={`${
        top ? "opacity-100 md:opacity-30 md:hover:opacity-70" : ""
      } fixed top-0 w-[384px] md:w-[1280px] z-10`}>
      <div className="navbar bg-base-100 justify-between">
        {/* for small device */}
        <div className="flex opacity-100 md:hidden z-10">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1]  p-2 shadow bg-base-100 rounded-box w-52">
              {user ? (
                <>
                  <li className="flex flex-row justify-between">
                    {/* cart for small  device*/}
                    <Link to="/cart">
                      <button className="btn">
                        <div className="dropdown dropdown-end">
                          <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle">
                            <div className="indicator">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <span className="badge badge-sm indicator-item">
                                {order?.length}
                              </span>
                            </div>
                          </label>
                        </div>
                      </button>
                    </Link>
                    {/* profile for small  device*/}
                    <Link to="/profile/main" className="btn">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          <img src={profileImg} alt="" />
                        </div>
                      </label>
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
              <li>
                <Link onClick={handleNavScroll} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={handleNavScroll} to="/shop">
                  Courses
                </Link>
              </li>
              <li>
                <Link onClick={handleNavScroll} to="/events">
                  Events
                </Link>
              </li>
              <li>
                <Link onClick={handleNavScroll} to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link onClick={handleNavScroll} to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link onClick={handleNavScroll} to="/news">
                  News
                </Link>
              </li>
              {user ? (
                <></>
              ) : (
                <>
                  <li>
                    <Link>
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Login
                    </Link>
                  </li>
                </>
              )}
              {user ? (
                <>
                  <li>
                    <Link onClick={handleLogOut}>Logout</Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
        {/* for both  device*/}
        <Link to="/">
          <div className="">
            <img className="w-24" src={logo} alt="" />
          </div>
        </Link>
        {/* this for big device */}
        <div className=" hidden md:flex">
          <Link
            onClick={handleNav}
            to="/"
            className="btn btn-ghost hover:text-[#0693e3]">
            Home
          </Link>
          <Link to="/shop" className="btn btn-ghost hover:text-[#0693e3]">
            Courses
          </Link>
          <Link className="btn btn-ghost hover:text-[#0693e3]" to="/events">
            Events
          </Link>
          <Link to="/blog" className="btn btn-ghost hover:text-[#0693e3]">
            Blog
          </Link>
          <Link to="/about" className="btn btn-ghost hover:text-[#0693e3]">
            About Us
          </Link>
          <Link to="/news" className="btn btn-ghost hover:text-[#0693e3]">
            News
          </Link>
          {user ? (
            <>
              {/* cart svg */}
              <div className="dropdown dropdown-end md:mr-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {order?.length}
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg">
                      {order?.length} Items
                    </span>
                    <span className="text-info">Subtotal: {subTotal}$</span>
                    <div className="card-actions">
                      <Link to="/cart" className="btn btn-primary btn-block">
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* profile svg */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={profileImg} alt="" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/profile/main" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="">Settings</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogOut}>Logout</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
              to='/register'
                className=" btn btn-ghost hover:text-[#0693e3]">
                Register
              </Link>
              
              <Link
              to='/login'
                className="btn btn-ghost hover:text-[#0693e3]">
                Login
              </Link>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
