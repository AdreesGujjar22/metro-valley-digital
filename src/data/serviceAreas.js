import { COMPANY_INFO } from "./company";

// Each entry drives one fully unique, individually indexable service-area
// landing page at /{category}-{area} (e.g. /local-seo-burnaby). Content per area is written to be
// genuinely differentiated (local character, business mix, distance from HQ,
// primary recommended service) rather than a single template with the city
// name swapped in, to avoid thin/duplicate local SEO content.

export const SERVICE_AREAS = [
  // ---------------- Vancouver Neighbourhoods ----------------
  {
    slug: "kitsilano",
    name: "Kitsilano",
    h1: "Kitsilano Local SEO & Google Maps Rankings",
    metaTitle: "Kitsilano SEO & Digital Marketing",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web development for boutique fitness studios, yoga and wellness brands in Kitsilano. Get a free audit.",
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
    h1: "Website Design & Development for Mount Pleasant Brands",
    metaTitle: "Mount Pleasant SEO, Ads & Web Design",
    metaDescription:
      "Metro Valley Digital's SEO, paid ads, and web development team supports craft breweries, design agencies, tech startups in Mount Pleasant. Get a free audit.",
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
    h1: "Fairview Local SEO for Clinics & Professional Practices",
    metaTitle: "Fairview SEO & Digital Marketing",
    metaDescription:
      "From local SEO to paid ads and web design, Metro Valley Digital supports Fairview's medical clinics and the South Granville design district. Get a free audit.",
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
    h1: "SEO & Search Marketing for Downtown Vancouver Businesses",
    metaTitle: "SEO Services in Downtown Vancouver",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web design for Downtown Vancouver's financial firms, hotels, and corporate offices. Get a free audit.",
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
    h1: "Yaletown Web Development for Startups & Hospitality Brands",
    metaTitle: "Yaletown SEO & Digital Marketing",
    metaDescription:
      "Metro Valley Digital's SEO, paid ads, and web design team supports Yaletown's upscale restaurants, boutique retail, and tech startups. Get your free audit.",
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
    h1: "Commercial Drive Local SEO for Independent Businesses",
    metaTitle: "SEO Services in Commercial Drive",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web development for independent coffee shops, family-run Italian in Commercial Drive. Get a free audit.",
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
    h1: "Kerrisdale Website SEO for Established Local Brands",
    metaTitle: "Kerrisdale SEO & Digital Marketing",
    metaDescription:
      "From local SEO to paid ads and web development, Metro Valley Digital supports boutique retail, dental and medical in Kerrisdale. Get a free growth audit today.",
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
    h1: "Dunbar-Southlands Local SEO for Family-Focused Businesses",
    metaTitle: "SEO Services in Dunbar-Southlands",
    metaDescription:
      "From local SEO to paid ads and web development, Metro Valley Digital supports family-oriented services, private schools in Dunbar-Southlands. Get a free audit.",
    shortName: "Dunbar",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "8.9 km (approx. 20-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "family-oriented services, private schools and tutoring centres, and independent shops along Dunbar Street",
    localInsight:
      "Search competition in Dunbar-Southlands is lighter than the downtown core, which means well-executed local SEO can capture the #1 local map position faster here than in denser neighbourhoods — a real advantage for family-focused service businesses trying to build a first-page presence quickly.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "seo-services",
    landmarks: ["Dunbar Street", "Pacific Spirit Regional Park", "Memorial Park West"],
    nearby: ["west-point-grey", "kerrisdale", "marpole"],
  },
  {
    slug: "marpole",
    name: "Marpole",
    h1: "Marpole Local SEO for Trades & Logistics Businesses",
    metaTitle: "Marpole SEO & Marketing Services",
    metaDescription:
      "Metro Valley Digital's SEO, paid ads, and web development team supports logistics and import/export operators near YVR in Marpole. Get a free growth audit.",
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
    h1: "Renfrew-Collingwood Local SEO for Diverse Communities",
    metaTitle: "SEO Services in Renfrew-Collingwood",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web development for multicultural family businesses in Renfrew-Collingwood. Get a free growth audit.",
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
    h1: "Grandview-Woodland Social Media Marketing for Makers & Studios",
    metaTitle: "SEO Services in Grandview-Woodland",
    metaDescription:
      "From local SEO to paid ads and web design, Metro Valley Digital supports Grandview-Woodland's breweries, artist studios, and retail shops. Get your free audit.",
    shortName: "Grandview-Woodland",
    type: "neighbourhood",
    region: "Vancouver, BC",
    distance: "5.4 km (approx. 13-minute drive) from our Victoria Dr headquarters",
    businessMix:
      "independent breweries, artist studios, and gentrifying retail along Commercial Drive and East Broadway",
    localInsight:
      "Grandview-Woodland's East Van identity draws a brand-loyal, socially engaged audience. Businesses here see stronger returns from Instagram and TikTok-driven discovery paired with local SEO than from paid search alone, so we typically blend social media marketing with local Google Maps optimization.",
    recommendedService: "social-media-marketing",
    secondaryService: "local-seo-google-business-profile",
    landmarks: ["Commercial Drive", "Trout Lake Park", "The Cultch"],
    nearby: ["commercial-drive", "mount-pleasant", "renfrew-collingwood"],
  },
  {
    slug: "west-point-grey",
    name: "West Point Grey",
    h1: "West Point Grey SEO for Established Local Businesses",
    metaTitle: "West Point Grey SEO & Web Design",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web development for university-adjacent services near UBC in West Point Grey. Get a free growth audit.",
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
    h1: "Burnaby SEO & Search Marketing Services",
    metaTitle: "Burnaby SEO & Marketing Services",
    metaDescription:
      "From local SEO to paid ads and web development, Metro Valley Digital supports Metrotown-area retail, SFU-linked education in Burnaby. Get a free growth audit.",
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
    h1: "Richmond Local SEO for Restaurants & Import Businesses",
    metaTitle: "Richmond SEO & Digital Marketing",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web development for import/export and e-commerce operators in Richmond. Get a free growth audit today.",
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
    h1: "Surrey Local SEO for Growing Neighbourhoods & New Businesses",
    metaTitle: "SEO & Marketing Services in Surrey",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web development for home services and trades (roofing, HVAC, landscaping) in Surrey. Get a free audit.",
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
    h1: "Coquitlam Local SEO for Family-Focused Businesses",
    metaTitle: "Coquitlam SEO & Digital Marketing",
    metaDescription:
      "Metro Valley Digital's SEO, paid ads, and web design team supports Coquitlam's family service businesses and retail near Coquitlam Centre. Get a free audit.",
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
    h1: "North Vancouver Local SEO for Outdoor & Wellness Brands",
    metaTitle: "North Vancouver SEO & Web Design",
    metaDescription:
      "Metro Valley Digital's SEO, paid ads, and web design team supports North Vancouver's outdoor recreation, tourism, and home trades. Free growth audit today.",
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
    h1: "West Vancouver Web Development for Premium Local Brands",
    metaTitle: "West Vancouver SEO, Ads & Web Design",
    metaDescription:
      "Metro Valley Digital's SEO, paid ads, and web design team supports West Vancouver's luxury real estate and high-end home services. Free growth audit today.",
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
    h1: "New Westminster Local SEO for the Royal City's Businesses",
    metaTitle: "New Westminster SEO & Web Design",
    metaDescription:
      "From local SEO to paid ads and web development, Metro Valley Digital supports small businesses revitalizing the historic in New Westminster. Get a free audit.",
    shortName: "New West",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "15.2 km (approx. 23-minute drive) from our Vancouver headquarters",
    businessMix:
      "small businesses revitalizing the historic downtown core, riverfront restaurants, and a growing base of independent retailers",
    localInsight:
      "New Westminster's compact, walkable downtown means local map visibility and foot-traffic-driven searches (\"near me,\" \"open now\") carry outsized weight compared to broader city-wide SEO plays, making Google Business Profile optimization the highest-leverage first step for most local businesses.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "social-media-marketing",
    landmarks: ["New Westminster Quay", "Columbia Street", "Queen's Park"],
    nearby: ["burnaby", "coquitlam", "surrey"],
  },
  {
    slug: "delta",
    name: "Delta",
    h1: "Delta SEO Services for Agriculture & Logistics Businesses",
    metaTitle: "SEO & Marketing Services in Delta",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web development for logistics and industrial operators near the Tsawwassen in Delta. Get a free audit.",
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
    h1: "Langley Local SEO for Growing Fraser Valley Businesses",
    metaTitle: "Langley SEO & Marketing Services",
    metaDescription:
      "Metro Valley Digital's SEO, paid ads, and web development team supports agriculture and agri-tourism, trades and home services in Langley. Get a free audit.",
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
    h1: "Port Moody Local SEO for Breweries & Local Shops",
    metaTitle: "Port Moody SEO & Digital Marketing",
    metaDescription:
      "Metro Valley Digital's SEO, paid ads, and web development team supports waterfront breweries, family-run cafes in Port Moody. Get a free growth audit today.",
    shortName: "Port Moody",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "23.9 km (approx. 29-minute drive) from our Vancouver headquarters",
    businessMix:
      "waterfront breweries, family-run cafes, and boutique services along Port Moody's compact downtown and Rocky Point waterfront",
    localInsight:
      "Port Moody's small population and tight-knit business community mean local search competition is comparatively low, so businesses that claim and fully optimize their Google Business Profile can often reach the top of Google Maps faster than in larger neighbouring cities.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "social-media-marketing",
    landmarks: ["Rocky Point Park", "Brewers Row", "Port Moody Station Museum"],
    nearby: ["coquitlam", "port-coquitlam", "burnaby"],
  },
  {
    slug: "port-coquitlam",
    name: "Port Coquitlam",
    h1: "Port Coquitlam Local SEO for Trades & Family Businesses",
    metaTitle: "Port Coquitlam SEO, Ads & Web Design",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web development for trades, home services, and family-owned retail in Port Coquitlam. Get a free audit.",
    shortName: "PoCo",
    type: "metro",
    region: "British Columbia, Canada",
    distance: "24.7 km (approx. 30-minute drive) from our Vancouver headquarters",
    businessMix:
      "trades, home services, and family-owned retail serving a growing residential population along the Traboulay PoCo Trail corridor",
    localInsight:
      "Port Coquitlam's population growth has outpaced its digital competition, giving trades and home-service businesses a meaningful window to lock in strong local Google Maps rankings before larger regional and franchise competitors expand into the area.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "website-development",
    landmarks: ["Traboulay PoCo Trail", "Gates Park", "Port Coquitlam Community Centre"],
    nearby: ["coquitlam", "port-moody", "surrey"],
  },

  // ---------------- Extended / Remote Cities ----------------
  {
    slug: "toronto",
    name: "Toronto",
    h1: "Toronto SEO & Search Marketing Services",
    metaTitle: "Toronto SEO & Marketing Services",
    metaDescription:
      "Metro Valley Digital's SEO, paid ads, and web development team supports financial services, national e-commerce brands in Toronto. Get a free growth audit.",
    shortName: "Toronto",
    type: "extended",
    region: "Ontario, Canada",
    distance: "Served remotely from our Vancouver, BC headquarters (3-hour time difference)",
    businessMix:
      "financial services, national e-commerce brands, and a highly competitive professional-services market in Canada's largest city",
    localInsight:
      "Toronto's search market is Canada's most competitive, dominated by national brands and agencies. Our Toronto engagements typically focus on paid advertising and website SEO where budget efficiency and conversion tracking matter more than local map rankings alone, delivered remotely with the same reporting cadence as our Vancouver clients.",
    recommendedService: "seo-services",
    secondaryService: "paid-advertising-ppc",
    landmarks: ["Financial District", "CN Tower", "King Street West"],
    nearby: ["calgary", "ottawa", "mississauga"],
  },
  {
    slug: "calgary",
    name: "Calgary",
    h1: "Calgary Paid Advertising & PPC Management",
    metaTitle: "Calgary SEO & Marketing Services",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web design for Calgary's energy-sector suppliers and growing tech startup community. Get a free audit.",
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
    nearby: ["toronto", "edmonton", "surrey"],
  },
  {
    slug: "victoria",
    name: "Victoria",
    h1: "Victoria SEO & Digital Marketing for BC's Capital",
    metaTitle: "Victoria BC SEO & Marketing Services",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web design for Victoria's tourism operators, government contractors, and Inner Harbour businesses today.",
    shortName: "Victoria",
    type: "extended",
    region: "British Columbia, Canada",
    distance: "A short ferry or flight from our Vancouver, BC headquarters (same time zone)",
    businessMix:
      "tourism and hospitality operators, provincial government contractors, and small professional firms around the Inner Harbour and Oak Bay",
    localInsight:
      "Victoria's economy leans heavily on tourism and government, with seasonal search demand that spikes hard every spring and summer. We prioritize Google Business Profile optimization and review velocity so visitor-facing businesses capture that seasonal search volume before competitors do.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "social-media-marketing",
    landmarks: ["Inner Harbour", "BC Legislature", "Oak Bay"],
    nearby: ["downtown-vancouver", "kelowna", "surrey"],
  },
  {
    slug: "kelowna",
    name: "Kelowna",
    h1: "Kelowna SEO & Marketing for Okanagan Businesses",
    metaTitle: "Kelowna BC SEO & Digital Marketing",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web design for Kelowna's wineries, tourism brands, and the fast-growing Okanagan tech startup scene.",
    shortName: "Kelowna",
    type: "extended",
    region: "British Columbia, Canada",
    distance: "Served remotely from our Vancouver, BC headquarters (same time zone, 4-hour drive)",
    businessMix:
      "wineries and agritourism operators, lake-based tourism brands, and a fast-growing Okanagan tech startup community",
    localInsight:
      "Kelowna's Okanagan Valley economy mixes tourism seasonality with a genuinely growing tech sector. We tailor campaigns differently for each: heavy local SEO and social content for wineries and tourism operators, and SEO or paid ads for the valley's software and startup companies.",
    recommendedService: "social-media-marketing",
    secondaryService: "local-seo-google-business-profile",
    landmarks: ["Okanagan Lake", "Kelowna Wine Trail", "Downtown Kelowna"],
    nearby: ["victoria", "surrey", "burnaby"],
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    h1: "Edmonton SEO & PPC for Alberta's Capital Region",
    metaTitle: "Edmonton SEO & Marketing Services",
    metaDescription:
      "Metro Valley Digital's SEO, paid ads, and web development supports Edmonton's energy, government, and university sector businesses. Get a free growth audit.",
    shortName: "Edmonton",
    type: "extended",
    region: "Alberta, Canada",
    distance: "Served remotely from our Vancouver, BC headquarters (1-hour time difference)",
    businessMix:
      "energy and industrial suppliers, provincial government contractors, and businesses linked to the University of Alberta",
    localInsight:
      "Edmonton's economy runs on energy, government, and a large student population, which creates distinct search behaviour for each segment. We lean on technical SEO and paid search to reach B2B energy and government buyers, remotely managed on the same reporting cadence as our BC accounts.",
    recommendedService: "seo-services",
    secondaryService: "paid-advertising-ppc",
    landmarks: ["West Edmonton Mall", "Legislature Grounds", "Whyte Avenue"],
    nearby: ["calgary", "winnipeg", "surrey"],
  },
  {
    slug: "winnipeg",
    name: "Winnipeg",
    h1: "Winnipeg SEO & Web Development Services",
    metaTitle: "Winnipeg SEO & Digital Marketing",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web development for Winnipeg's manufacturing, agriculture, and retail businesses. Get your free audit.",
    shortName: "Winnipeg",
    type: "extended",
    region: "Manitoba, Canada",
    distance: "Served remotely from our Vancouver, BC headquarters (2-hour time difference)",
    businessMix:
      "manufacturing and agri-business suppliers, retail chains, and professional-services firms around The Forks and downtown Winnipeg",
    localInsight:
      "Winnipeg's diversified economy, spanning manufacturing, agriculture, and aerospace, means search intent varies widely by sector. We focus Winnipeg engagements on website SEO and local search so established regional brands keep their market share as national competitors expand into the Prairies.",
    recommendedService: "website-seo-optimization",
    secondaryService: "local-seo-google-business-profile",
    landmarks: ["The Forks", "Exchange District", "Portage Avenue"],
    nearby: ["edmonton", "saskatoon", "toronto"],
  },
  {
    slug: "saskatoon",
    name: "Saskatoon",
    h1: "Saskatoon SEO & Local Search Marketing",
    metaTitle: "Saskatoon SEO & Marketing Services",
    metaDescription:
      "Metro Valley Digital delivers SEO, paid ads, and web design for Saskatoon's agriculture, potash, and university sector businesses. Get a free growth audit.",
    shortName: "Saskatoon",
    type: "extended",
    region: "Saskatchewan, Canada",
    distance: "Served remotely from our Vancouver, BC headquarters (1-hour time difference)",
    businessMix:
      "agriculture technology firms, potash and mining suppliers, and businesses connected to the University of Saskatchewan",
    localInsight:
      "Saskatoon's agri-tech and resource sectors mean most of our clients here are B2B, selling to other businesses across the Prairies rather than chasing local foot traffic. We prioritize SEO content and search visibility that reaches buyers researching suppliers, not map-pack rankings.",
    recommendedService: "seo-services",
    secondaryService: "website-development",
    landmarks: ["Meewasin Trail", "Broadway Avenue", "University of Saskatchewan"],
    nearby: ["winnipeg", "edmonton", "calgary"],
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    h1: "Ottawa SEO & Government-Sector Marketing",
    metaTitle: "Ottawa ON SEO & Digital Marketing",
    metaDescription:
      "Metro Valley Digital's SEO, paid ads, and web development team supports Ottawa's federal contractors and Kanata tech firms directly. Get a free growth audit.",
    shortName: "Ottawa",
    type: "extended",
    region: "Ontario, Canada",
    distance: "Served remotely from our Vancouver, BC headquarters (3-hour time difference)",
    businessMix:
      "federal government contractors, professional-services firms, and the Kanata tech corridor's software and telecom companies",
    localInsight:
      "As the national capital, Ottawa's search market mixes federal procurement content with a genuinely competitive tech sector in Kanata. We build SEO and website strategies aimed at the long research cycles typical of government and enterprise B2B buyers.",
    recommendedService: "seo-services",
    secondaryService: "website-development",
    landmarks: ["Parliament Hill", "ByWard Market", "Kanata Tech Corridor"],
    nearby: ["mississauga", "montreal", "toronto"],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    h1: "Mississauga SEO & Paid Ads for GTA Businesses",
    metaTitle: "Mississauga SEO & Marketing Services",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web development for Mississauga's logistics, corporate, and retail sectors. Get your free growth audit.",
    shortName: "Mississauga",
    type: "extended",
    region: "Ontario, Canada",
    distance: "Served remotely from our Vancouver, BC headquarters (3-hour time difference)",
    businessMix:
      "logistics and freight operators near Pearson Airport, corporate head offices, and a diverse retail and restaurant scene",
    localInsight:
      "Mississauga's proximity to Pearson Airport makes it a logistics and corporate hub within the Greater Toronto Area, competing for search visibility against both downtown Toronto and other GTA suburbs. We focus on paid ads and local SEO built to stand out within that crowded metro market.",
    recommendedService: "paid-advertising-ppc",
    secondaryService: "local-seo-google-business-profile",
    landmarks: ["Square One", "Pearson Airport", "Port Credit"],
    nearby: ["ottawa", "montreal", "toronto"],
  },
  {
    slug: "montreal",
    name: "Montreal",
    h1: "Montreal SEO & Bilingual Digital Marketing",
    metaTitle: "Montreal SEO & Marketing Services",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web design for Montreal's creative, AI, and e-commerce businesses in both English and French markets.",
    shortName: "Montreal",
    type: "extended",
    region: "Quebec, Canada",
    distance: "Served remotely from our Vancouver, BC headquarters (3-hour time difference)",
    businessMix:
      "creative agencies, AI and tech startups, and e-commerce brands operating in Canada's largest bilingual market",
    localInsight:
      "Montreal's bilingual French-and-English market changes how search campaigns need to be built, since many high-intent searches happen in French. We structure SEO and paid ad accounts with separate French and English targeting rather than treating Montreal as an English-only market.",
    recommendedService: "seo-services",
    secondaryService: "paid-advertising-ppc",
    landmarks: ["Old Montreal", "Mile End", "Downtown Montreal"],
    nearby: ["ottawa", "mississauga", "halifax"],
  },
  {
    slug: "halifax",
    name: "Halifax",
    h1: "Halifax SEO & Digital Marketing Services",
    metaTitle: "Halifax SEO & Marketing Services",
    metaDescription:
      "Metro Valley Digital delivers local SEO, paid ads, and web development for Halifax's port, education, and tourism-linked businesses. Get a free growth audit.",
    shortName: "Halifax",
    type: "extended",
    region: "Nova Scotia, Canada",
    distance: "Served remotely from our Vancouver, BC headquarters (4-hour time difference)",
    businessMix:
      "port and shipping-linked businesses, universities and student services, and a growing Atlantic Canada tech scene",
    localInsight:
      "Halifax anchors Atlantic Canada's economy with its port, universities, and an emerging tech sector drawing talent priced out of Toronto and Vancouver. We support Halifax clients mainly with local SEO and website SEO, timed around the academic calendar that drives much of the city's seasonal demand.",
    recommendedService: "local-seo-google-business-profile",
    secondaryService: "website-seo-optimization",
    landmarks: ["Halifax Waterfront", "Citadel Hill", "Dalhousie University"],
    nearby: ["montreal", "ottawa", "mississauga"],
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
  extended: "Remote Canadian Market",
};

// Short, URL-friendly category tag per recommended service, used to build
// the /{category}-{area} URL pattern (e.g. /local-seo-burnaby, /seo-toronto).
const CATEGORY_SLUG_MAP = {
  "local-seo-google-business-profile": "local-seo",
  "seo-services": "seo",
  "website-seo-optimization": "website-seo",
  "website-development": "web-design",
  "ai-website-building": "ai-web-design",
  "social-media-marketing": "social-media",
  "paid-advertising-ppc": "ppc-ads",
  "shopify-ecommerce-development": "ecommerce",
  "amazon-ebay-product-research": "amazon-ebay",
  "ai-chatbot-integration": "ai-chatbot",
  "mobile-app-development": "app-development",
  "geo-generative-engine-optimization": "geo-ai-seo",
};

export function getAreaCategorySlug(area) {
  return CATEGORY_SLUG_MAP[area.recommendedService] || "digital-marketing";
}

// Builds the canonical URL slug for an area page, e.g. "local-seo-burnaby".
export function getAreaUrlSlug(area) {
  return `${getAreaCategorySlug(area)}-${area.slug}`;
}

export function getAllServiceAreaUrlSlugs() {
  return SERVICE_AREAS.map((a) => getAreaUrlSlug(a));
}

export function getServiceAreaByUrlSlug(urlSlug) {
  return SERVICE_AREAS.find((a) => getAreaUrlSlug(a) === urlSlug) || null;
}

export { COMPANY_INFO };
