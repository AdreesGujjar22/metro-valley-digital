import Link from "next/link";
import BreadcrumbBg from "../../public/images/metro_agency_hero_1788191381646.jpg";

export default function Breadcrumbs(props) {
  const { title, description, menuLink, menuText, isH1 = true } = props;
  return (
    <>
      {/* <!-- Breadcrumbs --> */}
      <div
        className="breadcrumbs"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.92)), url(${BreadcrumbBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-12">
              <div className="breadcrumbs-content">
                {isH1 ? (
                  <h1 style={{ color: "#ffffff", fontWeight: "800", fontSize: "36px", marginBottom: "12px", lineHeight: "1.2" }}>
                    {title ? title : "Services"}
                  </h1>
                ) : (
                  <div style={{ color: "#ffffff", fontWeight: "800", fontSize: "36px", marginBottom: "12px", lineHeight: "1.2" }}>
                    {title ? title : "Services"}
                  </div>
                )}
                <p>
                  {description
                    ? description
                    : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore."}
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <div className="breadcrumbs-menu">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                    <i className="fa fa-angle-double-right"></i>
                  </li>
                  <li className="active">
                    <Link href={`/${menuLink ? menuLink : "services"}`}>
                      {menuText ? menuText : "Services"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}
    </>
  );
}
