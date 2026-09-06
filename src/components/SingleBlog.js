import Image from "next/image";
import Link from "next/link";

import BlogImg from "../../public/images/local_seo_maps_1788193488227.jpg";
import AdminImg from "../../public/images/team_toronto_lead_1788194135436.jpg";

export default function SingleBlog(props) {
  const { image, date, title, adminImg, adminTitle, comments, reviews, slug } = props;
  const postUrl = slug ? `/blog/${slug}` : "/blog/local-seo-google-3-pack-ranking-guide";

  return (
    <>
      <div className="single-blog">
        <div className="blog-img" style={{ height: "240px", overflow: "hidden", position: "relative" }}>
          <Image
            src={image ? image : BlogImg}
            alt={title || "Blog Post"}
            width={380}
            height={240}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <span className="date">{date ? date : "Sep 25"}</span>
        </div>
        <div className="blog-body">
          <h3>
            <Link href={postUrl}>
              {title ? title : "How To Dominate Google 3-Pack and Paid Media in 2026"}
            </Link>
          </h3>
          <div className="blog-meta">
            <div className="single-meta d-flex align-items-center gap-2">
              <div style={{ width: "30px", height: "30px", borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                <Image
                  src={adminImg ? adminImg : AdminImg}
                  alt={adminTitle || "Author"}
                  width={30}
                  height={30}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p>{adminTitle ? adminTitle : "Tariq Vance"}</p>
            </div>
            <div className="single-meta">
              <p>
                <i className="fa fa-comments"></i>{" "}
                <span>{comments ? comments : "15 comments"}</span>
              </p>
            </div>
            <div className="single-meta">
              <p>
                <i className="fa fa-star"></i>{" "}
                <span>{reviews ? reviews : "4.9"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
