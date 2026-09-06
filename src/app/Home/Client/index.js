import Sliders from "./Slider";

export default function Client() {
  return (
    <>
      {/* <!-- Client & Partner Trust Area --> */}
      <div className="client-area py-5" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 text-center">
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#64748b",
                }}
              >
                ⚡ Trusted Platform Integrations & Certified Growth Ecosystem
              </span>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12"
              style={{ position: "relative", padding: "0" }}
            >
              <Sliders />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Client Area --> */}
    </>
  );
}

