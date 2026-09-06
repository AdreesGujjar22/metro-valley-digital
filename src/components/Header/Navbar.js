"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import AgencyLogo from "../AgencyLogo";
import MobileOffcanvas from "../MobileOffcanvas";

export default function Navbar() {
  const pathname = usePathname();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <!-- Header Start --> */}
      <header className={`header ${isSticky ? "sticky" : "header-transparent"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="header-inner-top">
                <div className="header-inner">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-8">
                      {/* <!-- Modern Agency Logo --> */}
                      <div className="logo py-1">
                        <AgencyLogo isLight={!isSticky} />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-4">
                      <div className="main-menu-top d-flex align-items-center justify-content-end">
                        <div className="main-menu">
                          <div className="navbar">
                            <div className="nav-item">
                              {/* <!-- Main-Menu --> */}
                              <ul className="nav-menu mobile-menu navigation">
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/" ? "active" : ""
                                    }`}
                                    href="/"
                                  >
                                    Home
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/services" ||
                                      pathname === "/seo-services" ||
                                      pathname === "/geo-generative-engine-optimization" ||
                                      pathname === "/local-seo-google-business-profile" ||
                                      pathname === "/website-seo-optimization" ||
                                      pathname === "/social-media-marketing" ||
                                      pathname === "/paid-advertising-ppc" ||
                                      pathname === "/shopify-ecommerce-development" ||
                                      pathname === "/amazon-ebay-product-research" ||
                                      pathname === "/website-development" ||
                                      pathname === "/ai-chatbot-integration" ||
                                      pathname === "/ai-website-building" ||
                                      pathname === "/mobile-app-development"
                                        ? "active"
                                        : ""
                                    }`}
                                    href="/services"
                                  >
                                    Services
                                    <i className="fa fa-angle-down"></i>
                                  </Link>
                                  <ul className="sub-menu" style={{ minWidth: "260px" }}>
                                    <li>
                                      <Link href="/services">
                                        <strong>All 12 Services Overview</strong>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/seo-services">SEO Services (Rank Higher)</Link>
                                    </li>
                                    <li>
                                      <Link href="/geo-generative-engine-optimization">GEO (AI Search Optimization)</Link>
                                    </li>
                                    <li>
                                      <Link href="/local-seo-google-business-profile">Local SEO & Google Maps</Link>
                                    </li>
                                    <li>
                                      <Link href="/website-seo-optimization">Website SEO & Speed</Link>
                                    </li>
                                    <li>
                                      <Link href="/paid-advertising-ppc">Paid Ads (Meta, TikTok, Google)</Link>
                                    </li>
                                    <li>
                                      <Link href="/social-media-marketing">Social Media Marketing</Link>
                                    </li>
                                    <li>
                                      <Link href="/shopify-ecommerce-development">Shopify & E-Commerce</Link>
                                    </li>
                                    <li>
                                      <Link href="/amazon-ebay-product-research">Amazon & eBay Research</Link>
                                    </li>
                                    <li>
                                      <Link href="/website-development">Website Development</Link>
                                    </li>
                                    <li>
                                      <Link href="/ai-chatbot-integration">AI Chatbot Integration</Link>
                                    </li>
                                    <li>
                                      <Link href="/ai-website-building">AI Website Building</Link>
                                    </li>
                                    <li>
                                      <Link href="/mobile-app-development">Mobile App Development</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/portfolio"
                                        ? "active"
                                        : ""
                                    }`}
                                    href="/portfolio"
                                  >
                                    Portfolio
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={` ${
                                      pathname.startsWith("/blog")
                                        ? "active"
                                        : ""
                                    }`}
                                    href="/blog"
                                  >
                                    Blog
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    Pages<i className="fa fa-angle-down"></i>
                                  </Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/about-us"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/about-us"
                                      >
                                        About Us
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/team" ? "active" : ""
                                        }`}
                                        href="/team"
                                      >
                                        Team
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/pricing"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/pricing"
                                      >
                                        Pricing
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/testimonials"
                                            ? "active"
                                            : ""
                                        }`}
                                        href="/testimonials"
                                      >
                                        Testimonials
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={` ${
                                          pathname === "/faq" ? "active" : ""
                                        }`}
                                        href="/faq"
                                      >
                                        Faq&apos;s
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    className={` ${
                                      pathname === "/contact" ? "active" : ""
                                    }`}
                                    href="/contact"
                                  >
                                    Contact
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Menu-Right --> */}
                        <div className="menu-right d-none d-lg-block ms-3">
                          <Link href="/contact" className="theme-btn" style={{ padding: "9px 18px", fontSize: "13.5px", whiteSpace: "nowrap" }}>
                            <i className="fa fa-bolt me-1" style={{ marginRight: "6px" }}></i> Free Growth Audit
                          </Link>
                        </div>
                        {/* <!-- End-Menu-Right --> */}

                        {/* <!-- Mobile Hamburger Toggler (Visible on <992px) --> */}
                        <div className="d-lg-none ms-3 d-flex align-items-center">
                          <MobileOffcanvas isSticky={isSticky} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- End Header --> */}
    </>
  );
}
