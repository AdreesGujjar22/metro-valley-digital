"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Reveal all elements in viewport or when scrolled
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    });

    const wowElements = document.querySelectorAll(".wow");
    wowElements.forEach((el) => {
      observer.observe(el);
    });

    // Fallback: If any wow elements are still not animated after 1.5s, trigger them
    const timer = setTimeout(() => {
      document.querySelectorAll(".wow:not(.animated)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("animated");
        }
      });
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return <>{children}</>;
}
