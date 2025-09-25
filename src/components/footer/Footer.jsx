import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
const Footer = () => {
  return (
    <div className="bg-black text-white py-5">
      <div className="flex justify-center items-center">
        {/* <img src={footerImg} alt="" /> */}
      </div>
      <footer className="footer sm:footer-horizontal  flex flex-col justify-center sm:flex-row sm:justify-between px-5  sm:text-lg border-b-1 border-gray-300 container mx-auto py-3">
        <nav>
          <h1 className="footer-title">CS — Ticket System</h1>
          <p>
            We are a passionate team <br />
            dedicated to providing the best <br /> services to our customers.
          </p>
        </nav>

        <nav>
          <h1 className="footer-title">Company</h1>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h1 className="footer-title">Services</h1>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h1 className="footer-title">Information</h1>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h1 className="footer-title">Social Links</h1>
          <a className="link link-hover">
            <FaFacebook />
          </a>
          <a className="link link-hover">
            <IoLogoInstagram />
          </a>
          <a className="link link-hover">
            <FaGithub />
          </a>
          <a className="link link-hover">
            <FaLinkedin />
          </a>
        </nav>
      </footer>
      <div className="py-5 text-xl text-center">
        <p>@2025 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
