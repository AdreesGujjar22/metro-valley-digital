export default function robots() {
  const baseUrl = "https://metrovalleydigital.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/mail-success", "/_next/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "anthropic-ai", "Google-Extended", "Applebot"],
        allow: ["/", "/llms.txt", "/llms-full.txt", "/services", "/about-us", "/portfolio", "/pricing", "/faq", "/blog"],
        disallow: ["/api/", "/mail-success"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
