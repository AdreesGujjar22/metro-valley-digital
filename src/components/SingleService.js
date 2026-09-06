import Link from "next/link";
import Image from "next/image";

import ServiceImg1 from "../../public/images/local_seo_maps_1788193488227.jpg";

export default function SingleService(props) {
  const {
    cardNumberClass,
    cardNumber,
    image,
    icon,
    title,
    description,
    btnURL,
  } = props;

  return (
    <>
      <div className="single-service">
        {cardNumber && (
          <div className={cardNumberClass ? cardNumberClass : "number"}>
            <h6>{cardNumber}</h6>
          </div>
        )}
        <div className="service-head" style={{ display: "inline-block", position: "relative" }}>
          <div className="service-img" style={{ width: "120px", height: "120px", overflow: "hidden", position: "relative", borderRadius: "50%", border: "4px solid #f1f5f9", boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}>
            <Image
              src={image ? image : ServiceImg1}
              alt={title || "Service"}
              width={120}
              height={120}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <i className={icon ? icon : "fa fa-bolt"}></i>
        </div>
        <div className="service-content">
          <h4>
            <Link
              href={btnURL ? (btnURL.startsWith("/") ? btnURL : `/${btnURL}`) : "/contact"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {title ? title : "Growth Strategy"}
            </Link>
          </h4>
          <p>
            {description
              ? description
              : "High-impact performance digital marketing and engineering."}
          </p>
        </div>
        <div className="service-bottom">
          <Link
            href={btnURL ? (btnURL.startsWith("/") ? btnURL : `/${btnURL}`) : "/contact"}
            aria-label={title || "Learn more"}
          >
            <i className="fa fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
