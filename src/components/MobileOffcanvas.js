"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Offcanvas } from "react-bootstrap";
import AgencyLogo from "./AgencyLogo";

export default function MobileOffcanvas({ isSticky = false }) {
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to toggle the sub-menu
  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  // Function to check if a menu item is active
  const isActive = (path) => pathname === path;

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="mobile-menu-offcanvas-toggler d-inline-flex flex-column align-items-center justify-content-center"
        aria-label="Open Navigation Menu"
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "8px",
          backgroundColor: isSticky ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.15)",
          border: isSticky ? "1px solid rgba(15, 23, 42, 0.18)" : "1px solid rgba(255, 255, 255, 0.3)",
          cursor: "pointer",
          padding: "0",
          gap: "5px",
          zIndex: 999,
          transition: "all 0.2s ease",
        }}
      >
        <span
          className="line"
          style={{
            width: "22px",
            height: "2.5px",
            backgroundColor: isSticky ? "#0f172a" : "#ffffff",
            borderRadius: "2px",
            display: "block",
          }}
        ></span>
        <span
          className="line"
          style={{
            width: "22px",
            height: "2.5px",
            backgroundColor: isSticky ? "#0f172a" : "#ffffff",
            borderRadius: "2px",
            display: "block",
          }}
        ></span>
        <span
          className="line"
          style={{
            width: "16px",
            height: "2.5px",
            backgroundColor: "var(--primary-color)",
            borderRadius: "2px",
            display: "block",
            marginLeft: "auto",
            marginRight: "6px",
          }}
        ></span>
      </button>

      {/* <!-- Mobile Menu Modal --> */}
      <Offcanvas show={show} onHide={handleClose} className="mobile-menu-modal">
        <div className="modal-dialog offcanvas-dialog">
          <div className="modal-content">
            <div className="modal-header offcanvas-header">
              <div className="offcanvas-logo" onClick={handleClose}>
                <AgencyLogo />
              </div>
              <button type="button" className="btn-close" onClick={handleClose}>
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="mobile-menu-modal-main-body">
              {/* Offcanvas Menu */}
              <nav id="offcanvas-menu" className="navigation offcanvas-menu">
                <ul id="nav" className="list-none offcanvas-men-list">
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/") ? "active" : ""}`}
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(0)}
                    >
                      Services
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul
                      className={`sub-menu ${openSubMenu === 0 ? "open" : ""}`}
                    >
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/services") ? "active" : ""}`}
                          href="/services"
                        >
                          <strong>All 12 Services</strong>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/seo-services") ? "active" : ""}`}
                          href="/seo-services"
                        >
                          SEO Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/geo-generative-engine-optimization") ? "active" : ""}`}
                          href="/geo-generative-engine-optimization"
                        >
                          GEO (AI Search)
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/local-seo-google-business-profile") ? "active" : ""}`}
                          href="/local-seo-google-business-profile"
                        >
                          Local SEO & GMB
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/website-seo-optimization") ? "active" : ""}`}
                          href="/website-seo-optimization"
                        >
                          Website SEO & Speed
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/paid-advertising-ppc") ? "active" : ""}`}
                          href="/paid-advertising-ppc"
                        >
                          Paid Ads (PPC)
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/social-media-marketing") ? "active" : ""}`}
                          href="/social-media-marketing"
                        >
                          Social Media Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/shopify-ecommerce-development") ? "active" : ""}`}
                          href="/shopify-ecommerce-development"
                        >
                          Shopify & E-Commerce
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/amazon-ebay-product-research") ? "active" : ""}`}
                          href="/amazon-ebay-product-research"
                        >
                          Amazon & eBay Research
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/website-development") ? "active" : ""}`}
                          href="/website-development"
                        >
                          Website Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/ai-chatbot-integration") ? "active" : ""}`}
                          href="/ai-chatbot-integration"
                        >
                          AI Chatbot Integration
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/ai-website-building") ? "active" : ""}`}
                          href="/ai-website-building"
                        >
                          AI Website Building
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/mobile-app-development") ? "active" : ""}`}
                          href="/mobile-app-development"
                        >
                          Mobile App Development
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${
                        isActive("/portfolio") ? "active" : ""
                      }`}
                      href="/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${
                        isActive("/service-areas") ? "active" : ""
                      }`}
                      href="/service-areas"
                    >
                      Service Areas
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/blog") ? "active" : ""}`}
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(3)}
                    >
                      Pages<i className="fa fa-angle-down"></i>
                    </a>
                    <ul
                      className={`sub-menu ${openSubMenu === 3 ? "open" : ""}`}
                    >
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/about-us") ? "active" : ""
                          }`}
                          href="/about-us"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/team") ? "active" : ""}`}
                          href="/team"
                        >
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/pricing") ? "active" : ""}`}
                          href="/pricing"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${
                            isActive("/testimonials") ? "active" : ""
                          }`}
                          href="/testimonials"
                        >
                          Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/faq") ? "active" : ""}`}
                          href="/faq"
                        >
                          Faq&apos;s
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/contact") ? "active" : ""}`}
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Mobile menu modal bottom */}
              <div className="mobile-menu-modal-bottom">
                <Link
                  href="/contact"
                  className="theme-btn"
                  onClick={handleClose}
                >
                  <span>Get a quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas>
      {/* <!-- End Mobile Menu Modal --> */}
    </>
  );
}
