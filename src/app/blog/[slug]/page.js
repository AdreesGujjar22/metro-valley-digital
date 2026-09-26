import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogSidebar from "@/components/BlogSidebar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SeoSchemas";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blogs";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.metaTitle}`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.metrovalleydigital.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.metrovalleydigital.com/blog/${post.slug}`,
      siteName: "Metro Valley Digital",
      locale: "en_CA",
      type: "article",
      images: [
        {
          url: `https://www.metrovalleydigital.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`https://www.metrovalleydigital.com${post.image}`],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        image={`https://www.metrovalleydigital.com${post.image}`}
        datePublished={post.date}
        dateModified={post.date}
        authorName={post.author.name}
        url={`https://www.metrovalleydigital.com/blog/${post.slug}`}
      />
      <Breadcrumbs
        title={post.title}
        description={post.summary}
        menuLink={`blog/${post.slug}`}
        menuText="Article Detail"
        isH1={false}
      />

      {/* <!-- Blog Detail Area with Sidebar --> */}
      <section className="blog-single-post section" style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div className="row">
            {/* Left Content Area (col-lg-8) */}
            <div className="col-lg-8 col-12">
              <div className="single-area">
                <div className="single-head">
                  <div style={{ position: "relative", height: "420px", borderRadius: "14px", overflow: "hidden", marginBottom: "24px" }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority
                      sizes="(max-width: 992px) 100vw, 66vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="blog-title-meta">
                    <div className="d-flex flex-wrap align-items-center gap-3 mb-2" style={{ fontSize: "13px", color: "#64748b" }}>
                      <span className="badge bg-success text-white px-3 py-1 rounded-pill fw-bold">
                        {post.category}
                      </span>
                      <span>
                        <i className="fa fa-clock-o text-primary me-1"></i> {post.readTime}
                      </span>
                      <span>
                        <i className="fa fa-calendar text-muted me-1"></i> {post.date}
                      </span>
                      <span>
                        <i className="fa fa-comments text-success me-1"></i> {post.commentsCount}
                      </span>
                    </div>

                    <h1 style={{ fontSize: "30px", fontWeight: "900", color: "#0f172a", lineHeight: "1.3", margin: "14px 0" }}>
                      {post.title}
                    </h1>
                  </div>
                </div>

                {/* Article Content */}
                <div className="single-content" style={{ marginTop: "24px" }}>
                  <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#334155", fontWeight: "500", borderLeft: "4px solid var(--primary-color)", paddingLeft: "16px", marginBottom: "28px" }}>
                    {post.summary}
                  </p>

                  {/* Body Sections */}
                  {post.content.map((sec, idx) => (
                    <div key={idx} className="mb-4">
                      <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", marginBottom: "12px" }}>
                        {sec.heading}
                      </h3>
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} style={{ fontSize: "16px", lineHeight: "1.7", color: "#475569", marginBottom: "14px" }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}

                  {/* Pull Quote */}
                  {post.quote && (
                    <blockquote
                      style={{
                        background: "#f8fafc",
                        borderLeft: "4px solid var(--primary-color)",
                        borderRadius: "0 12px 12px 0",
                        padding: "24px 28px",
                        margin: "32px 0",
                      }}
                    >
                      <i className="fa fa-quote-left text-success mb-2" style={{ fontSize: "24px", opacity: 0.6 }}></i>
                      <p style={{ fontSize: "16px", fontStyle: "italic", color: "#1e293b", lineHeight: "1.7", margin: 0 }}>
                        &ldquo;{post.quote.text}&rdquo;
                      </p>
                      <span style={{ display: "block", marginTop: "10px", fontSize: "13px", fontWeight: "700", color: "var(--primary-color)" }}>
                        — {post.quote.author}
                      </span>
                    </blockquote>
                  )}

                  {/* Project-Related Callout Box */}
                  {post.relatedProject && (
                    <div
                      style={{
                        background: "#f0fdf4",
                        border: "1px solid #bbf7d0",
                        borderRadius: "12px",
                        padding: "20px 24px",
                        margin: "32px 0",
                      }}
                    >
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                        <div>
                          <span className="badge bg-success-subtle text-success fw-bold px-2 py-1 rounded mb-1" style={{ fontSize: "11px" }}>
                            VERIFIED CLIENT OUTCOME
                          </span>
                          <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "800", color: "#166534" }}>
                            {post.relatedProject.title}
                          </h4>
                          <p style={{ margin: 0, fontSize: "14px", color: "#15803d", fontWeight: "600" }}>
                            Results: {post.relatedProject.result}
                          </p>
                        </div>
                        <Link
                          href={post.relatedProject.link}
                          className="btn btn-success fw-bold px-4 py-2 rounded-pill"
                          style={{ backgroundColor: "var(--primary-color)", borderColor: "var(--primary-color)", fontSize: "14px" }}
                        >
                          View Full Case Study
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Tags and Share */}
                  <div className="blog-post-tag mt-4 pt-3 border-top">
                    <div className="row align-items-center">
                      <div className="col-lg-8 col-md-7 col-12 mb-3 mb-md-0">
                        <div className="d-flex flex-wrap align-items-center gap-2">
                          <span style={{ fontSize: "13px", fontWeight: "700", color: "#64748b" }}>Topics:</span>
                          {post.tags.map((tag, tIdx) => (
                            <Link
                              key={tIdx}
                              href="/blog"
                              className="badge bg-light text-dark border text-decoration-none px-3 py-2 rounded-pill"
                              style={{ fontSize: "12px", fontWeight: "600" }}
                            >
                              #{tag}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-5 col-12 text-md-end">
                        <div className="d-inline-flex align-items-center gap-2">
                          <span style={{ fontSize: "13px", fontWeight: "700", color: "#64748b" }}>Share:</span>
                          <Link href="#" className="btn btn-sm btn-outline-secondary rounded-circle" style={{ width: "34px", height: "34px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link href="#" className="btn btn-sm btn-outline-secondary rounded-circle" style={{ width: "34px", height: "34px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                            <i className="fa fa-twitter"></i>
                          </Link>
                          <Link href="#" className="btn btn-sm btn-outline-secondary rounded-circle" style={{ width: "34px", height: "34px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Author Bio Box */}
                  <div
                    className="mt-5 p-4 rounded-4 d-flex flex-column flex-sm-row gap-4 align-items-sm-center"
                    style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                  >
                    <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        sizes="80px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary-color)", fontWeight: "800" }}>
                        Written By
                      </span>
                      <h4 style={{ margin: "4px 0", fontSize: "18px", fontWeight: "800", color: "#0f172a" }}>
                        {post.author.name}
                      </h4>
                      <p style={{ margin: 0, fontSize: "14px", color: "#64748b", lineHeight: "1.5" }}>
                        {post.author.role} based at Metro Valley Digital Vancouver. Specializing in high-intent SEO architectures, paid acquisition funnels, and enterprise Next.js delivery.
                      </p>
                    </div>
                  </div>

                  {/* Consultation CTA Banner */}
                  <div
                    className="mt-5 p-4 rounded-4 text-white"
                    style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", border: "1px solid #334155" }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-8 col-12 mb-3 mb-md-0">
                        <h4 style={{ color: "#ffffff", fontWeight: "800", fontSize: "20px", marginBottom: "6px" }}>
                          Need Help Executing This for Your Business?
                        </h4>
                        <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>
                          Talk directly with our senior growth strategists in Vancouver, Canada for a custom audit.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 text-md-end">
                        <Link
                          href="/contact"
                          className="btn btn-success fw-bold px-4 py-2 rounded-pill"
                          style={{ backgroundColor: "var(--primary-color)", borderColor: "var(--primary-color)" }}
                        >
                          Book Free Audit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Area (col-lg-4) */}
            <div className="col-lg-4 col-12 mt-5 mt-lg-0">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
