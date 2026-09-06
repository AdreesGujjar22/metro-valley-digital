import Link from "next/link";
import Image from "next/image";

export default function AgencyLogo({ isLight = false, light = false, className = "", style = {} }) {
  return (
    <Link
      href="/"
      className={`d-inline-flex align-items-center text-decoration-none ${className}`}
      style={{ display: "inline-flex", alignItems: "center", ...style }}
    >
      <Image
        src="/images/site_logo.png"
        alt="Metro Valley Digital Agency"
        width={160}
        height={48}
        style={{
          width: "auto",
          height: "44px",
          maxWidth: "180px",
          objectFit: "contain",
        }}
        priority
        referrerPolicy="no-referrer"
      />
    </Link>
  );
}


