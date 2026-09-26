"use client";

import Image from "next/image";
import Link from "next/link";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

export default function SinglePortfolio(props) {
  const { image, title, category, href = "/portfolio" } = props;

  const imageUrl = typeof image === "object" ? image.src : image;
  const sanitizedIdentifier = imageUrl.replace(/[^a-zA-Z0-9]/g, "");

  const images = [{ id: sanitizedIdentifier, src: imageUrl }];
  return (
    <>
      <SlideshowLightbox
        lightboxIdentifier={`lightbox-${sanitizedIdentifier}`}
        showThumbnails={false}
        imgAnimation="fade"
        thumbnailBorder="white"
        iconColor="white"
        framework="next"
        images={images}
      >
        <div className="portfolio-single">
          <div className="portfolio-img" style={{ width: "100%", height: "280px", position: "relative", overflow: "hidden" }}>
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={title || "Portfolio Project"}
                width={400}
                height={280}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </div>
          <div className="portfolio-content">
            <h4>
              <Link href={href}>
                {title ? title : "Art & Studio"}
              </Link>
            </h4>
            <p>{category ? category : "UI/UX, Branding"}</p>
          </div>
          <Link
            className="p-button"
            href="#portfolio"
            data-lightboxjs={`lightbox-${sanitizedIdentifier}`}
          >
            <i className="fa fa-image"></i>
          </Link>
        </div>
      </SlideshowLightbox>
    </>
  );
}
