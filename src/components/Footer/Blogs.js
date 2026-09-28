import Image from "next/image";
import Link from "next/link";
import Feed1 from "../../../public/images/local-seo-google-maps-3-pack-dashboard.jpg";
import Feed2 from "../../../public/images/paid-ads-roas-performance-dashboard.jpg";

export default function Blogs() {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        {/* <!-- Latest Post --> */}
        <div className="single-widget">
          <h3 className="widget-title">Growth Guides</h3>
          <div className="widget-post">
            <div className="post-img" style={{ width: "70px", height: "70px", overflow: "hidden", borderRadius: "6px", flexShrink: 0 }}>
              <Link href="/blog">
                <Image src={Feed1} alt="Local Google Maps SEO" width={70} height={70} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </Link>
            </div>
            <div className="post-content">
              <h4>
                <Link href="/blog">
                  How We Rank #1 on Google Maps in Competitive Metro Areas
                </Link>
              </h4>
              <span className="post-date">
                <i className="fa fa-clock-o"></i>Oct 12, 2026
              </span>
            </div>
          </div>
          <div className="widget-post">
            <div className="post-img" style={{ width: "70px", height: "70px", overflow: "hidden", borderRadius: "6px", flexShrink: 0 }}>
              <Link href="/blog">
                <Image src={Feed2} alt="Meta & TikTok ROAS" width={70} height={70} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </Link>
            </div>
            <div className="post-content">
              <h4>
                <Link href="/blog">
                  The 2026 Meta & TikTok Ad Creative Framework for 5x+ ROAS
                </Link>
              </h4>
              <span className="post-date">
                <i className="fa fa-clock-o"></i>Oct 08, 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
