import React from "react";
import { Link } from "react-router-dom";
import footerBg from '../../../assets/h3-footer-image.jpg';
import imgMap from '../../../assets/footer-map-2.png'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content" style={{backgroundImage:`url(${footerBg})`
    }}>
      <div>
        <span className="footer-title">Educate</span>
        <p>Providing Life Changing Experiences <br /> Through Education.
             Class That Fit Your <br /> Busy Life. Closer to Home</p>
        <Link className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Latest News</span>
        <Link className="link link-hover">Graduate Admissions</Link>
        <Link className="link link-hover">Continuing Education</Link>
        <Link className="link link-hover">Current Students</Link>
      </div>
      <div>
        <span className="footer-title">Useful Links</span>
        <Link className="link link-hover">Popular Courses</Link>
        <Link className="link link-hover">Forums</Link>
        <Link className="link link-hover">Our Teachers</Link>
        <Link className="link link-hover">Upcoming Events</Link>
        <Link className="link link-hover">Contact Us</Link>
      </div>
      <div>
      <span className="footer-title">Flexible learning</span>
      <img src={imgMap} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
