"use client";

import { useState } from "react";
import { PROJECTS_DATA } from "@/data/projects";
import SinglePortfolio from "@/components/SinglePortfolio";

const CATEGORIES = [
  { id: "all", label: "All Case Studies" },
  { id: "local-seo", label: "Local SEO & GMB" },
  { id: "paid-ads", label: "Paid Ads (ROAS)" },
  { id: "web-dev", label: "Next.js & Web" },
  { id: "ai-chatbots", label: "AI & Chatbots" },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.categorySlug === activeCategory);

  return (
    <div className="case-study-portfolio">
      <div className="case-study-tabs" role="group" aria-label="Filter case studies">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={`case-study-tab${activeCategory === category.id ? " is-active" : ""}`}
            aria-pressed={activeCategory === category.id}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="portfolio-main">
        <div className="portfolio-item-active">
          {filteredProjects.map((project) => (
            <SinglePortfolio
              key={project.id}
              image={project.image}
              title={project.title}
              category={`${project.category} · ${project.results[0]?.value} ${project.results[0]?.label}`}
              href={`/case-studies/${project.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
