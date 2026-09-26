import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogs";

export default function BlogSidebar() {
  const topPosts = BLOG_POSTS.slice(0, 4);

  return (
    <>
      {/* <!-- Blog Sidebar --> */}
      <div className="blog-sidebar">
        <div className="widget widget-search">
          <h4 className="widget-title">Search Articles</h4>
          <form action="/blog">
            <input
              type="search"
              name="q"
              placeholder="Search growth topics..."
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        {/* <!-- Popular Post Widget --> */}
        <div className="widget popular-feeds">
          <h4 className="widget-title">Top Growth Guides</h4>
          <div className="popular-feed-loop">
            {topPosts.map((post) => (
              <div key={post.id} className="single-popular-feed d-flex align-items-center gap-3 mb-3">
                <div className="feed-img" style={{ width: "75px", height: "75px", overflow: "hidden", borderRadius: "8px", flexShrink: 0, position: "relative" }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={75}
                    height={75}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="feed-desc">
                  <h6 style={{ fontSize: "14px", lineHeight: "1.4", margin: 0, fontWeight: "700" }}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h6>
                  <span className="time" style={{ fontSize: "12px", color: "#64748b" }}>
                    <i className="fa fa-calendar me-1"></i> {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <!-- Categories Widget --> */}
        <div className="widget categories-widget">
          <h4 className="widget-title">Categories</h4>
          <ul>
            <li>
              <Link href="/blog">
                Local SEO & GMB<span>3</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Paid Media (PPC)<span>2</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Web Engineering<span>1</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                AI & Automation<span>1</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                AI Search & GEO<span>1</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* <!-- Banner Ad Widget --> */}
        <div className="widget banner-ad-widget" style={{ background: "linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-dark) 100%)", borderRadius: "12px", padding: "28px 20px", color: "#ffffff", textAlign: "center" }}>
          <span className="badge bg-white text-primary px-3 py-1 rounded-pill fw-bold mb-3" style={{ fontSize: "11px", color: "var(--primary-color)" }}>FREE GROWTH AUDIT</span>
          <h4 style={{ color: "#ffffff", fontWeight: "800", fontSize: "20px", marginBottom: "12px" }}>Scale Your Inbound Revenue</h4>
          <p style={{ color: "#e2e8f0", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
            Get a tailored Google Maps & Paid Ads competitor blueprint from our Vancouver strategy team.
          </p>
          <Link href="/contact" className="btn btn-light w-100 fw-bold py-2" style={{ borderRadius: "8px", color: "var(--primary-color)" }}>
            Book 30-Min Audit
          </Link>
        </div>
      </div>
    </>
  );
}
