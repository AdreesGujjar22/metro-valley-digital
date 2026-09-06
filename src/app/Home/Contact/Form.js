"use client";

import { useState } from "react";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="p-4 rounded-3 text-center my-4" style={{ background: "rgba(25, 135, 84, 0.1)", border: "1px solid rgba(25, 135, 84, 0.3)" }}>
        <div style={{ fontSize: "36px", color: "#198754", marginBottom: "12px" }}>
          <i className="fa fa-check-circle"></i>
        </div>
        <h4 style={{ color: "#198754", fontWeight: "700" }}>Audit Request Received!</h4>
        <p style={{ color: "#334155", fontSize: "15px", marginTop: "8px" }}>
          A Senior Growth Strategist from our Toronto or Lahore hub will review your website and reach out within 2-4 business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn btn-outline-success btn-sm mt-3"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Work Email *"
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (e.g. +1 604...)"
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="form-group">
              <select
                name="service"
                className="form-control"
                style={{ height: "50px", borderRadius: "5px", border: "1px solid #e2e8f0", padding: "0 15px", color: "#475569" }}
                defaultValue="local_seo"
                required
              >
                <option value="local_seo">Local SEO & Google 3-Pack</option>
                <option value="paid_ads">Paid Ads (Meta, TikTok, Google)</option>
                <option value="web_dev">Next.js Web / App Engineering</option>
                <option value="ai_bots">AI Chatbots & CRM Automation</option>
                <option value="full_audit">Full Growth Audit</option>
              </select>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <div className="form-group">
              <input
                type="url"
                name="website"
                placeholder="Your Website or Business URL (optional)"
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your target market (Toronto, Canada, Pakistan, etc.) and current growth goals *"
                required
                rows={3}
              ></textarea>
            </div>
          </div>
          <div className="col-lg-12 col-12">
            <div className="form-group contact-button">
              <button
                type="submit"
                className="theme-btn w-100"
                disabled={loading}
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                {loading ? "Analyzing..." : "Claim Free 30-Min Growth Audit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
