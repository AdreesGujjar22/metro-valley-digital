import Image from "next/image";

import TeamImg from "../../public/images/team_toronto_lead_1788194135436.jpg";
import Link from "next/link";

export default function SingleTeam(props) {
  const { image, name, designation } = props;

  return (
    <>
      <div className="single-team text-center" style={{ background: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" }}>
        <div className="team-img" style={{ height: "300px", width: "100%", position: "relative", overflow: "hidden" }}>
          <Image
            src={image ? image : TeamImg}
            alt={name || "Team Member"}
            width={280}
            height={300}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="team-bottom">
          <div className="team-content" style={{ padding: "16px 12px 8px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", marginBottom: "4px" }}>{name ? name : "Sam Martin"}</h4>
            <p style={{ color: "#ffffff", fontSize: "14px", fontWeight: "500", opacity: "0.95" }}>{designation ? designation : "Web Designer"}</p>
          </div>
          <div className="team-social">
            <ul>
              <li>
                <Link href="#" aria-label="LinkedIn">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="Twitter">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="Facebook">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

