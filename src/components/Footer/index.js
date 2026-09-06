import About from "./About";
import Links from "./Links";
import Contact from "./Contact";
import Copyright from "./Copyright";

import FooterBg from "../../../public/images/metro_agency_hero_1788191381646.jpg";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer Area --> */}
      <footer
        className="footer-area"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 18, 32, 0.95), rgba(10, 18, 32, 0.98)), url(${FooterBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="footer-top py-5">
          <div className="container">
            <div className="row g-4">
              <About />
              <Links />
              <Contact />
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
      {/* <!-- End Footer Area --> */}
    </>
  );
}
