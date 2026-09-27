import Link from "next/link";

export default function Links() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        {/* <!-- Quick Links --> */}
        <div className="single-widget f-links">
          <h3 className="widget-title text-white fw-bold">Growth Solutions</h3>
          <ul className="list-unstyled">
            <li>
              <Link href="/service/local-seo-google-business-profile">
                <i className="fa fa-angle-double-right"></i>Local SEO & Google Maps
              </Link>
            </li>
            <li>
              <Link href="/service/seo-services">
                <i className="fa fa-angle-double-right"></i>Organic SEO Services
              </Link>
            </li>
            <li>
              <Link href="/service/geo-generative-engine-optimization">
                <i className="fa fa-angle-double-right"></i>AI Search Optimization (GEO)
              </Link>
            </li>
            <li>
              <Link href="/service/paid-advertising-ppc">
                <i className="fa fa-angle-double-right"></i>Paid Ads (Meta, TikTok, Google)
              </Link>
            </li>
            <li>
              <Link href="/service/shopify-ecommerce-development">
                <i className="fa fa-angle-double-right"></i>Shopify & E-Commerce
              </Link>
            </li>
            <li>
              <Link href="/service/website-development">
                <i className="fa fa-angle-double-right"></i>Custom Web Development
              </Link>
            </li>
            <li>
              <Link href="/service/ai-chatbot-integration">
                <i className="fa fa-angle-double-right"></i>AI Chatbot Integration
              </Link>
            </li>
            <li>
              <Link href="/service-areas">
                <i className="fa fa-angle-double-right"></i>All Service Areas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
