"use client";

import { useState } from "react";

export default function FaqAccordion({ items, idPrefix }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="panel-group faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${idPrefix}-question-${index}`;
        const panelId = `${idPrefix}-answer-${index}`;

        return (
          <div className={`panel panel-default${isOpen ? " is-open" : ""}`} key={item.q}>
            <h3 className="faq-heading">
              <button
                id={buttonId}
                type="button"
                className="faq-title"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{index + 1}</span> {item.q}
              </button>
            </h3>
            <div
              id={panelId}
              className={`faq-answer-panel${isOpen ? " is-open" : ""}`}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
            >
              <div className="faq-answer-inner">
                <div className="faq-body">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
