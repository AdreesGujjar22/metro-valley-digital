import { COMPANY_INFO } from "./company";

// Each entry drives one fully unique, individually indexable service-area
// landing page at /service-areas/[slug]. Content per area is written to be
// genuinely differentiated (local character, business mix, distance from HQ,
// primary recommended service) rather than a single template with the city
// name swapped in, to avoid thin/duplicate local SEO content.

export const SERVICE_AREAS = [
  // ---------------- Vancouver Neighbourhoods ----------------
  {
    slug: "kitsilano",
    name: "Kitsilano",
    shortName: "Kits",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "3.8 km (approx. 10-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "boutique fitness studios, yoga and wellness brands, surf and outdoor retailers, cafes, and independent restaurants along West 4th Avenue and West Broadway",
    localInsight:
      "Kitsilano shoppers research heavily on mobile while walking the West 4th and Yew Street retail strips, and they favour businesses with strong Google reviews, current photos, and same-day availability. Competition for terms like \"Kits yoga studio\" or \"West 4th cafe\" is dense, so ranking requires tight neighbourhood-level keyword targeting rather than city-wide SEO alone.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "social-media-marketing",
    landmarks: ["Kitsilano Beach", "West 4th Avenue", "Vanier Park"],
    nearby: ["west-point-grey", "fairview", "downtown-vancouver"],
  },
  {
    slug: "mount-pleasant",
    name: "Mount Pleasant",
    shortName: "Mount Pleasant",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "2.9 km (approx. 8-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "craft breweries, design agencies, tech startups, and Main Street's independent retailers occupying converted industrial warehouses",
    localInsight:
      "Mount Pleasant's brewery district and Main Street corridor draw a design-literate, brand-conscious audience. Businesses here compete on visual identity as much as ranking position, so we pair technical SEO with conversion-focused web builds and social content that matches the neighbourhood's creative reputation.",
    recommendedService: "website-development",
    secondaryService: "social-media-marketing",
    landmarks: ["Main Street", "Brewery Creek", "Mount Pleasant Park"],
    nearby: ["fairview", "grandview-woodland", "renfrew-collingwood"],
  },
  {
    slug: "fairview",
    name: "Fairview",
    shortName: "Fairview",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "3.5 km (approx. 9-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "medical and dental clinics, the South Granville design district, and professional offices around City Square and Cambie Street",
    localInsight:
      "Fairview's dense concentration of healthcare and professional-service practices makes local pack visibility and appointment-booking speed the deciding factors in patient and client acquisition. We prioritize Google Business Profile health, review generation, and schema markup that surfaces services directly in search.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "website-seo-optimization",
    landmarks: ["South Granville", "City Square", "VGH Medical District"],
    nearby: ["mount-pleasant", "kitsilano", "downtown-vancouver"],
  },
  {
    slug: "downtown-vancouver",
    name: "Downtown Vancouver",
    shortName: "Downtown",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "4.6 km (approx. 12-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "financial and legal firms, corporate headquarters, hospitality and tourism operators, and a dense cluster of tech companies around Coal Harbour and Yaletown",
    localInsight:
      "Downtown Vancouver is the most competitive search market in the region, with national and international brands bidding on the same terms as local firms. Ranking here requires a combination of authoritative technical SEO, high-intent paid search, and content built for both consumer and B2B decision-makers navigating a crowded core.",
    recommendedService: "seo-services",
    secondaryService: "paid-advertising-ppc",
    landmarks: ["Coal Harbour", "Robson Street", "Waterfront Station"],
    nearby: ["yaletown", "fairview", "west-point-grey"],
  },
  {
    slug: "yaletown",
    name: "Yaletown",
    shortName: "Yaletown",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "4.3 km (approx. 11-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "upscale restaurants, boutique retail in converted heritage warehouses, and a fast-growing base of tech and SaaS startups",
    localInsight:
      "Yaletown's urban professional audience expects a polished digital presence: fast-loading sites, sharp visuals, and frictionless online booking or ordering. We focus Yaletown engagements on site performance, conversion rate optimization, and paid social that matches the neighbourhood's design-forward brand standards.",
    recommendedService: "website-development",
    secondaryService: "paid-advertising-ppc",
    landmarks: ["Yaletown Roundhouse", "Urban Fare", "David Lam Park"],
    nearby: ["downtown-vancouver", "fairview", "mount-pleasant"],
  },
  {
    slug: "commercial-drive",
    name: "Commercial Drive",
    shortName: "The Drive",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "5.1 km (approx. 13-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "independent coffee shops, family-run Italian and international restaurants, and community-rooted retailers along Commercial Drive",
    localInsight:
      "\"The Drive\" runs on loyalty and word of mouth as much as search, so our strategy leans on review velocity, community-oriented content, and hyper-local keyword targeting that reflects how longtime residents actually search for their favourite independent businesses.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "social-media-marketing",
    landmarks: ["Commercial Drive", "Grandview Park", "Trout Lake"],
    nearby: ["grandview-woodland", "renfrew-collingwood", "mount-pleasant"],
  },
  {
    slug: "kerrisdale",
    name: "Kerrisdale",
    shortName: "Kerrisdale",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "8.2 km (approx. 18-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "boutique retail, dental and medical practices, financial advisors, and family-owned shops along the Kerrisdale Village strip",
    localInsight:
      "Kerrisdale's higher-income, older demographic responds to trust signals over discount messaging — polished Google Business Profiles, verified reviews, and clear service pages outperform aggressive promotions. We tailor citation building and on-page content to match that expectation.",
    recommendedService: "website-seo-optimization",
    secondaryService: "local-seo-google-business-profile",
    landmarks: ["Kerrisdale Village", "Point Grey Golf Club", "Maple Grove Park"],
    nearby: ["dunbar-southlands", "west-point-grey", "marpole"],
  },
  {
    slug: "dunbar-southlands",
    name: "Dunbar-Southlands",
    shortName: "Dunbar",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "8.9 km (approx. 20-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "family-oriented services, private schools and tutoring centres, and independent shops along Dunbar Street",
    localInsight:
      "Search competition in Dunbar-Southlands is lighter than the downtown core, which means well-executed local SEO can capture the #1 Map Pack position faster here than in denser neighbourhoods — a real advantage for family-focused service businesses trying to build a first-page presence quickly.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "seo-services",
    landmarks: ["Dunbar Street", "Pacific Spirit Regional Park", "Memorial Park West"],
    nearby: ["west-point-grey", "kerrisdale", "marpole"],
  },
  {
    slug: "marpole",
    name: "Marpole",
    shortName: "Marpole",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "9.6 km (approx. 17-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "logistics and import/export operators near YVR, plus a growing base of condo-serving retail and multicultural food businesses",
    localInsight:
      "Marpole's proximity to Vancouver International Airport brings a mix of logistics, trade, and travel-adjacent businesses that benefit from bilingual content and citation building across both English and Chinese-language directories, alongside standard local SEO fundamentals.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "seo-services",
    landmarks: ["YVR Airport corridor", "Marine Drive", "Cambie Bridge"],
    nearby: ["kerrisdale", "dunbar-southlands", "richmond"],
  },
  {
    slug: "renfrew-collingwood",
    name: "Renfrew-Collingwood",
    shortName: "Renfrew-Collingwood",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "6.4 km (approx. 14-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "multicultural family businesses, restaurants, and retail serving a diverse Chinese, Filipino, and South Asian community near Metrotown",
    localInsight:
      "Renfrew-Collingwood's multilingual customer base means search intent often spans English and Chinese-language queries. We build citation and content strategies that capture both, while optimizing Google Business Profile categories for the specific cuisines and services that dominate local search here.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "social-media-marketing",
    landmarks: ["Central Park", "Renfrew Ravine", "Metrotown border"],
    nearby: ["commercial-drive", "burnaby", "grandview-woodland"],
  },
  {
    slug: "grandview-woodland",
    name: "Grandview-Woodland",
    shortName: "Grandview-Woodland",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "5.4 km (approx. 13-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "independent breweries, artist studios, and gentrifying retail along Commercial Drive and East Broadway",
    localInsight:
      "Grandview-Woodland's East Van identity draws a brand-loyal, socially engaged audience. Businesses here see stronger returns from Instagram and TikTok-driven discovery paired with local SEO than from paid search alone, so we typically blend social media marketing with Map Pack optimization.",
    recommendedService: "social-media-marketing",
    secondaryService: "local-seo-google-business-profile",
    landmarks: ["Commercial Drive", "Trout Lake Park", "The Cultch"],
    nearby: ["commercial-drive", "mount-pleasant", "renfrew-collingwood"],
  },
  {
    slug: "west-point-grey",
    name: "West Point Grey",
    shortName: "West Point Grey",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "7.6 km (approx. 16-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "university-adjacent services near UBC, tutoring and academic services, real estate, and boutique retail along West 10th",
    localInsight:
      "West Point Grey's proximity to UBC creates a seasonal search pattern tied to the academic calendar, with spikes for tutoring, student housing, and moving-related services each September and January. We build content calendars around those cycles rather than treating search volume as flat year-round.",
    recommendedService: "seo-services",
    secondaryService: "website-development",
    landmarks: ["University of British Columbia", "Jericho Beach", "West 10th Avenue"],
    nearby: ["kitsilano", "dunbar-southlands", "kerrisdale"],
  },

  // ---------------- Metro Vancouver Cities ----------------
  {
    slug: "burnaby",
    name: "Burnaby",
    shortName: "Burnaby",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "9.8 km (approx. 18-minute drive) from our Vancouver headquarters",
    businessMix:
      "Metrotown-area retail, SFU-linked education and research services, and a growing tech corridor around Brentwood and Metrotown",
    localInsight:
      "Burnaby's search market is shaped by Metrotown's retail density and a fast-expanding cluster of tech employers, so we combine e-commerce and local SEO strategies depending on whether a client is competing for mall-adjacent foot traffic or B2B tech visibility.",
    recommendedService: "seo-services",
    secondaryService: "shopify-ecommerce-development",
    landmarks: ["Metrotown", "Brentwood Town Centre", "SFU Burnaby Mountain"],
    nearby: ["renfrew-collingwood", "coquitlam", "new-westminster"],
  },
  {
    slug: "richmond",
    name: "Richmond",
    shortName: "Richmond",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "13.7 km (approx. 22-minute drive) from our Vancouver headquarters",
    businessMix:
      "import/export and e-commerce operators near YVR, plus a large concentration of restaurants and retail serving Richmond's majority Chinese-Canadian community",
    localInsight:
      "Richmond is one of the few Metro Vancouver markets where bilingual English/Chinese SEO materially changes outcomes. We build Google Business Profile categories, citations, and on-page content that account for both language groups, alongside logistics-focused keyword targeting for airport-adjacent trade businesses.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "amazon-ebay-product-research",
    landmarks: ["YVR Airport", "Richmond Night Market", "Steveston Village"],
    nearby: ["marpole", "delta", "surrey"],
  },
  {
    slug: "surrey",
    name: "Surrey",
    shortName: "Surrey",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "26.4 km (approx. 32-minute drive) from our Vancouver headquarters",
    businessMix:
      "home services and trades (roofing, HVAC, landscaping), a large South Asian business community, and rapidly expanding residential developments",
    localInsight:
      "As the fastest-growing city in BC, Surrey's neighbourhoods are still forming their local search identity, which creates an early-mover advantage for trades and home-service businesses that invest in Google Business Profile and citation building now, before competition catches up to the population growth.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "paid-advertising-ppc",
    landmarks: ["Guildford Town Centre", "Surrey Central", "Cloverdale"],
    nearby: ["delta", "langley", "richmond"],
  },
  {
    slug: "coquitlam",
    name: "Coquitlam",
    shortName: "Coquitlam",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "20.1 km (approx. 27-minute drive) from our Vancouver headquarters",
    businessMix:
      "family services, retail around Coquitlam Centre, and new residential development along the Evergreen SkyTrain line",
    localInsight:
      "SkyTrain expansion into Coquitlam has reshaped commuter patterns and search behaviour, with growing demand for \"near station\" and \"near me\" queries around Lincoln, Lafarge Lake-Douglas, and Coquitlam Central. We prioritize location-specific landing content over generic city-wide pages here.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "website-development",
    landmarks: ["Coquitlam Centre", "Lafarge Lake", "Rocky Point Park"],
    nearby: ["port-moody", "port-coquitlam", "burnaby"],
  },
  {
    slug: "north-vancouver",
    name: "North Vancouver",
    shortName: "North Van",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "12.3 km (approx. 20-minute drive) from our Vancouver headquarters",
    businessMix:
      "outdoor recreation and tourism operators, home renovation and trades, and higher-income households along the North Shore",
    localInsight:
      "North Vancouver's outdoor-recreation economy sees strong seasonal search swings between hiking/biking services in summer and ski-adjacent businesses in winter, while its renovation and trades sector benefits from consistent, high-value local search volume tied to the North Shore's older housing stock.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "website-seo-optimization",
    landmarks: ["Grouse Mountain", "Lonsdale Quay", "Capilano Suspension Bridge"],
    nearby: ["west-vancouver", "downtown-vancouver", "burnaby"],
  },
  {
    slug: "west-vancouver",
    name: "West Vancouver",
    shortName: "West Van",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "15.8 km (approx. 25-minute drive) from our Vancouver headquarters",
    businessMix:
      "luxury real estate, high-end home services, and professional services catering to some of the highest-income postal codes in Canada",
    localInsight:
      "West Vancouver's affluent client base expects a premium digital experience from the first click — polished websites, concierge-style contact flows, and reputation signals matter more here than discount-driven ad copy. Our SEO and web builds for West Van clients lean heavily into brand trust and visual polish.",
    recommendedService: "website-development",
    secondaryService: "website-seo-optimization",
    landmarks: ["Ambleside", "Horseshoe Bay", "Cypress Mountain"],
    nearby: ["north-vancouver", "downtown-vancouver", "kitsilano"],
  },
  {
    slug: "new-westminster",
    name: "New Westminster",
    shortName: "New West",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "15.2 km (approx. 23-minute drive) from our Vancouver headquarters",
    businessMix:
      "small businesses revitalizing the historic downtown core, riverfront restaurants, and a growing base of independent retailers",
    localInsight:
      "New Westminster's compact, walkable downtown means Map Pack visibility and foot-traffic-driven searches (\"near me,\" \"open now\") carry outsized weight compared to broader city-wide SEO plays, making Google Business Profile optimization the highest-leverage first step for most local businesses.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "social-media-marketing",
    landmarks: ["New Westminster Quay", "Columbia Street", "Queen's Park"],
    nearby: ["burnaby", "coquitlam", "surrey"],
  },
  {
    slug: "delta",
    name: "Delta",
    shortName: "Delta",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "22.6 km (approx. 28-minute drive) from our Vancouver headquarters",
    businessMix:
      "logistics and industrial operators near the Tsawwassen ferry terminal, agricultural businesses, and Ladner's small-town retail core",
    localInsight:
      "Delta spans very different micro-markets — industrial and logistics search intent around the ferry terminal and Highway 17, versus community-driven retail searches in Ladner and Tsawwassen village. We segment keyword strategy by sub-area rather than treating Delta as one uniform market.",
    recommendedService: "seo-services",
    secondaryService: "local-seo-google-business-profile",
    landmarks: ["Tsawwassen Ferry Terminal", "Ladner Village", "Boundary Bay"],
    nearby: ["richmond", "surrey", "langley"],
  },
  {
    slug: "langley",
    name: "Langley",
    shortName: "Langley",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "38.5 km (approx. 40-minute drive) from our Vancouver headquarters",
    businessMix:
      "agriculture and agri-tourism, trades and home services, and fast-growing residential developments along the Fraser Valley corridor",
    localInsight:
      "Langley's rural-to-suburban transition creates strong, steady demand for home services, contractors, and trades keywords, with comparatively lower advertising costs than the Vancouver core — making paid search and local SEO especially cost-efficient for Langley-based service businesses right now.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "paid-advertising-ppc",
    landmarks: ["Fort Langley", "Willowbrook Shopping Centre", "Derby Reach Park"],
    nearby: ["surrey", "delta", "coquitlam"],
  },
  {
    slug: "port-moody",
    name: "Port Moody",
    shortName: "Port Moody",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "23.9 km (approx. 29-minute drive) from our Vancouver headquarters",
    businessMix:
      "waterfront breweries, family-run cafes, and boutique services along Port Moody's compact downtown and Rocky Point waterfront",
    localInsight:
      "Port Moody's small population and tight-knit business community mean local search competition is comparatively low, so businesses that claim and fully optimize their Google Business Profile can often reach the top of the Map Pack faster than in larger neighbouring cities.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "social-media-marketing",
    landmarks: ["Rocky Point Park", "Brewers Row", "Port Moody Station Museum"],
    nearby: ["coquitlam", "port-coquitlam", "burnaby"],
  },
  {
    slug: "port-coquitlam",
    name: "Port Coquitlam",
    shortName: "PoCo",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "24.7 km (approx. 30-minute drive) from our Vancouver headquarters",
    businessMix:
      "trades, home services, and family-owned retail serving a growing residential population along the Traboulay PoCo Trail corridor",
    localInsight:
      "Port Coquitlam's population growth has outpaced its digital competition, giving trades and home-service businesses a meaningful window to lock in strong Map Pack rankings before larger regional and franchise competitors expand into the area.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "website-development",
    landmarks: ["Traboulay PoCo Trail", "Gates Park", "Port Coquitlam Community Centre"],
    nearby: ["coquitlam", "port-moody", "surrey"],
  },

  // ---------------- Extended / Remote Cities ----------------
  {
    slug: "toronto",
    name: "Toronto",
    shortName: "Toronto",
    type: "extended",
    region: "Ontario, Canada",
    distance: "Served remotely from our Vancouver, BC headquarters (3-hour time difference)",
    businessMix:
      "financial services, national e-commerce brands, and a highly competitive professional-services market in Canada's largest city",
    localInsight:
      "Toronto's search market is Canada's most competitive, dominated by national brands and agencies. Our Toronto engagements typically focus on paid advertising and website SEO where budget efficiency and conversion tracking matter more than local Map Pack rankings alone, delivered remotely with the same reporting cadence as our Vancouver clients.",
    recommendedService: "seo-services",
    secondaryService: "paid-advertising-ppc",
    landmarks: ["Financial District", "CN Tower", "King Street West"],
    nearby: ["calgary", "seattle", "downtown-vancouver"],
  },
  {
    slug: "calgary",
    name: "Calgary",
    shortName: "Calgary",
    type: "extended",
    region: "Alberta, Canada",
    distance: "Served remotely from our Vancouver, BC headquarters (1-hour time difference)",
    businessMix:
      "energy-sector suppliers, a growing tech and startup scene, and professional services concentrated in Calgary's downtown core",
    localInsight:
      "Calgary's economy is diversifying beyond energy into tech and professional services, and search demand is following that shift. We support Calgary clients primarily with SEO services and Google Ads campaigns built for B2B lead generation, managed remotely with the same account structure as our BC clients.",
    recommendedService: "paid-advertising-ppc",
    secondaryService: "seo-services",
    landmarks: ["Downtown Calgary", "Stampede Park", "Calgary Tower"],
    nearby: ["toronto", "seattle", "surrey"],
  },
  {
    slug: "seattle",
    name: "Seattle",
    shortName: "Seattle",
    type: "extended",
    region: "Washington, USA",
    distance: "Served remotely from our Vancouver, BC headquarters (approx. 230 km / 3-hour drive north of Seattle)",
    businessMix:
      "tech and SaaS companies, e-commerce brands, and professional-services firms across the greater Puget Sound area",
    localInsight:
      "Seattle is our primary U.S. cross-border market: a short flight or drive from Vancouver, in a compatible time zone, with a tech-forward client base that values fast-moving Next.js builds and data-driven paid media over traditional local SEO tactics. We invoice and report in USD for Seattle-based clients.",
    recommendedService: "website-development",
    secondaryService: "paid-advertising-ppc",
    landmarks: ["Downtown Seattle", "South Lake Union", "Puget Sound"],
    nearby: ["toronto", "calgary", "downtown-vancouver"],
  },
];

export function getAllServiceAreaSlugs() {
  return SERVICE_AREAS.map((a) => a.slug);
}

export function getServiceAreaBySlug(slug) {
  return SERVICE_AREAS.find((a) => a.slug === slug) || null;
}

export function getServiceAreaByName(name) {
  return SERVICE_AREAS.find((a) => a.name === name) || null;
}

export function getServiceAreasByType(type) {
  return SERVICE_AREAS.filter((a) => a.type === type);
}

export function getNearbyAreas(area) {
  if (!area || !area.nearby) return [];
  return area.nearby
    .map((slug) => getServiceAreaBySlug(slug))
    .filter(Boolean);
}

export const SERVICE_AREA_TYPE_LABELS = {
  neighbourhood: "Vancouver Neighbourhood",
  metro: "Metro Vancouver City",
  extended: "Remote / Cross-Border Market",
};

export { COMPANY_INFO };
