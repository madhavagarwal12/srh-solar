export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  headline: string;
  shortDesc: string;
  fullDesc: string[];
  keyFeatures: string[];
  specs: { label: string; value: string }[];
  idealFor: string[];
  image: string;
  schematic?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const COMPANY_DETAILS = {
  brandName: "SRH Solar",
  legalName: "SRH Green Energy Pvt. Ltd.",
  tagline: "Best Solar Services EPC Company",
  subTagline: "A Cleaner Tomorrow Starts Today",
  foundedYear: 2021,
  experienceYears: "5+ Years In-House EPC Expertise",
  phoneNumbers: ["+91 9602609608", "+91 9660450448"],
  phone: "+91 9602609608",
  email: "srhsolar@gmail.com",
  address: "Sector 9, Mansarovar, Jaipur, Rajasthan – 302020, India",
  website: "https://srhsolar.com",
  socials: {
    youtube: "https://www.youtube.com/@SRHGREENENERGY",
    instagram: "https://www.instagram.com/srh_solar/",
    facebook: "https://www.facebook.com/SRHSOLAR.1/about/",
    twitter: "https://twitter.com/solar_srh",
  },
  stats: {
    capacityInstalled: "5+ MW+",
    projectsCompleted: "500+",
    moneySaved: "₹12 Cr+",
    treesOffset: "1M+",
    globalProjects: "50+",
    peopleImpacted: "200K+"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "on-grid",
    slug: "on-grid-solar-system",
    title: "On-Grid Solar System",
    badge: "Most Popular for Rooftops",
    headline: "Grid-Connected Solar with Net Metering & PM Surya Ghar Subsidy",
    shortDesc: "Generate clean solar power during the day, export surplus units to the power grid, and slash electricity bills by 80–90%.",
    fullDesc: [
      "An on-grid solar system works in direct synchronization with your state electricity DISCOM grid (JVVNL, AVVNL, JdVVNL, or other state utilities). Power generated during peak daytime sunshine hours runs your home appliances immediately.",
      "Surplus generation is exported directly to the grid through a bidirectional Net Meter, earning generation credits that offset nighttime or monsoon grid consumption.",
      "Residential rooftop installations are fully eligible for central government subsidies under the PM Surya Ghar Muft Bijli Yojana (up to ₹78,000 for systems up to 3 kW)."
    ],
    keyFeatures: [
      "80% to 90% instant reduction in monthly power bills",
      "Net Metering export credits with automated DISCOM liaisoning",
      "Zero battery maintenance costs & 25-year performance life",
      "Tier-1 Mono PERC / TOPCon high-efficiency PV modules",
      "Wi-Fi & smartphone app real-time generation tracking"
    ],
    specs: [
      { label: "Warranty", value: "25 Years Linear Performance" },
      { label: "Inverter Type", value: "High-Efficiency On-Grid String Inverter" },
      { label: "Payback Period", value: "3.2 to 4.5 Years" },
      { label: "Space Required", value: "~100 sq. ft. shadow-free roof per kW" }
    ],
    idealFor: [
      "Residential homes, independent villas & duplexes",
      "Commercial office buildings & corporate campuses",
      "Schools, colleges, hospitals & institutions",
      "Industrial manufacturing units & warehouses"
    ],
    image: "/assets/images/solar-panel.jpg",
    schematic: "/assets/images/Grid-connected-PV-system.png"
  },
  {
    id: "off-grid",
    slug: "off-grid-solar-system",
    title: "Off-Grid Solar Photovoltaic System",
    badge: "100% Energy Independence",
    headline: "Autonomous Solar Power with Heavy-Duty Battery Storage Backup",
    shortDesc: "Completely independent solar power designed for remote locations, farms, and areas suffering frequent power cuts.",
    fullDesc: [
      "An off-grid PV system operates independently from the utility grid. It pairs high-grade solar modules with charge controllers, specialized off-grid inverters, and high-capacity battery banks (tubular or lithium iron phosphate).",
      "Solar power runs connected loads during the day while simultaneously recharging the battery bank to ensure uninterrupted power supply throughout the night and during extended outages.",
      "Engineered with robust surge handling to start and operate inductive loads like submersible pumps, air conditioners, and cold storage units."
    ],
    keyFeatures: [
      "24/7 continuous uninterrupted electricity with zero grid dependency",
      "Protection against frequent power cuts and erratic voltage spikes",
      "Heavy-duty lithium or solar C10 tubular battery banks",
      "Intelligent MPPT solar charge controllers with 99% tracking efficiency",
      "Rugged weather-proof outdoor enclosures"
    ],
    specs: [
      { label: "Battery Chemistry", value: "LifePO4 Lithium / Tubular C10" },
      { label: "Backup Duration", value: "8 to 18 Hours customizable" },
      { label: "Lifespan", value: "Panels 25 Yrs | Lithium Battery 10 Yrs" },
      { label: "Grid Dependency", value: "0% (Complete Self-Sufficiency)" }
    ],
    idealFor: [
      "Rural farmhouses, eco-resorts & agricultural properties",
      "Remote telecom towers & monitoring stations",
      "Locations with un-electrified terrain or unreliable grid"
    ],
    image: "/assets/images/WhatsApp-Image-2021-02-24-at-9.14.24-AM-1-edited.jpeg",
    schematic: "/assets/images/Off-grid-PV-System-Schematic.png"
  },
  {
    id: "hybrid",
    slug: "hybrid-solar-system",
    title: "Hybrid Solar System",
    badge: "Best of Both Worlds",
    headline: "On-Grid Net Metering Combined with Seamless Battery Storage",
    shortDesc: "Enjoy lower electricity bills via net metering while keeping critical appliances powered during utility blackouts.",
    fullDesc: [
      "Hybrid systems combine the financial savings of net-metered grid connection with the security of battery storage.",
      "During regular operation, the system self-consumes solar energy, charges batteries, and exports excess units to the grid. If the power grid fails, the hybrid inverter switches seamlessly in milliseconds without rebooting computers or sensitive electronics."
    ],
    keyFeatures: [
      "Zero downtime during power cuts with sub-10ms auto-switchover",
      "Both export surplus power and store backup reserve",
      "Smart priority management (Solar > Battery > Grid)",
      "Peak-shaving capability to reduce maximum demand charges"
    ],
    specs: [
      { label: "Switching Time", value: "< 10 milliseconds (UPS Grade)" },
      { label: "Battery Compatibility", value: "High-Voltage / 48V Lithium" },
      { label: "Export Mode", value: "Net Metering Enabled" },
      { label: "Monitoring", value: "Cloud-Based Smart App" }
    ],
    idealFor: [
      "Luxury homes & villas with sensitive smart home automation",
      "Diagnostic centers, pathology labs & clinics",
      "Commercial IT setups requiring zero reboot interruptions"
    ],
    image: "/assets/images/on-grid-solar-system.jpg"
  },
  {
    id: "solar-water-pump",
    slug: "solar-water-pumps",
    title: "Solar Power Water Pump",
    badge: "Agricultural Powerhouse",
    headline: "Zero Diesel Fuel Irrigation Powered by Bright Solar VFD Inverters",
    shortDesc: "High-yield solar agricultural pumping for farm irrigation, tube wells, livestock, and drinking water projects.",
    fullDesc: [
      "SRH Solar water pumping systems pair solar PV arrays with high-efficiency variable frequency drive (VFD) pumping inverters and submersible or monoblock pump sets.",
      "Farmers gain dependable, free daylight pumping without spending thousands of rupees every season on expensive diesel fuel or waiting for erratic midnight rural electrical supply."
    ],
    keyFeatures: [
      "100% diesel-free operation eliminates recurring fuel costs",
      "Dry run protection, reverse polarity, and over-voltage safeguards",
      "Wide MPPT operating voltage range for optimal morning and evening discharge",
      "Compatible with existing submersible and surface pump motors"
    ],
    specs: [
      { label: "Pump Types", value: "Submersible / Surface Monoblock (3HP - 15HP+)" },
      { label: "Controller", value: "Bright Solar VFD Solar Pumping Inverter" },
      { label: "Protection", value: "IP65 Outdoor Ingress Rating" },
      { label: "Fuel Cost", value: "₹0 / Zero Diesel" }
    ],
    idealFor: [
      "Agricultural irrigation & crop farming across Rajasthan",
      "Horticulture, polyhouse & greenhouse watering",
      "Rural drinking water schemes & community ponds"
    ],
    image: "/assets/images/IMG_20190909_125044.jpg",
    schematic: "/assets/images/Solar-Pump-Technologies.png"
  },
  {
    id: "solar-street-lights",
    slug: "solar-street-lighting",
    title: "Solar-Powered Street Lights",
    badge: "Smart Municipal & Campus Lighting",
    headline: "Automated Dusk-to-Dawn High-Lumen LED Illumination",
    shortDesc: "Cable-free, trenchless outdoor illumination powered by integrated solar modules and lithium battery storage.",
    fullDesc: [
      "Our solar street lighting systems incorporate high-lumen Philips/Osram LED chips, micro-crystalline solar panels, integrated long-life LiFePO4 batteries, and smart dusk-to-dawn PIR motion sensors.",
      "Completely standalone, requiring zero underground trenching or electrical wiring, drastically reducing installation labor and maintenance overhead."
    ],
    keyFeatures: [
      "Automated dusk-to-dawn auto ON/OFF with smart dimming",
      "High lumen output (140+ lumens per watt)",
      "Zero trenching, cabling, or utility power connection needed",
      "Rugged IP66 all-weather aluminum die-cast housing"
    ],
    specs: [
      { label: "LED Power", value: "15W to 120W models" },
      { label: "Battery", value: "Built-in Lithium Ferro Phosphate (LiFePO4)" },
      { label: "Autonomy", value: "2 to 3 Rainy/Overcast Days" },
      { label: "Sensor", value: "PIR Motion / Timer Dual Mode" }
    ],
    idealFor: [
      "Gated residential societies & township internal roads",
      "Industrial factory campuses & perimeter boundary lighting",
      "Panchayats, rural roadways & public parks"
    ],
    image: "/assets/images/IMG_20191016_171817.jpg",
    schematic: "/assets/images/streetpixa.png"
  },
  {
    id: "turnkey-epc",
    slug: "commercial-industrial-epc",
    title: "Commercial & Industrial Solar EPC",
    badge: "Turnkey MW Scale Engineering",
    headline: "End-to-End Solar Project Execution with 25-Year O&M Commitment",
    shortDesc: "Custom-engineered rooftop and ground-mounted solar power plants for factories, commercial complexes, and institutions.",
    fullDesc: [
      "SRH Green Energy Pvt. Ltd. provides complete turnkey EPC (Engineering, Procurement, and Construction). We conduct shadow-free 3D drone mapping, structural load validation, procurement of Tier-1 solar modules, high-voltage HT/LT transformer integration, DISCOM liaisoning, and commissioning.",
      "Backed by scheduled operation & maintenance contracts with thermographic drone inspection and dedicated cleaning support."
    ],
    keyFeatures: [
      "Custom 3D shadow analysis and structural stability certification",
      "Fast-track DISCOM approvals, CEIG electrical inspector clearances",
      "Accelerated depreciation tax benefits (Section 32 of IT Act) for businesses",
      "25-year performance monitoring with rapid-response service SLAs"
    ],
    specs: [
      { label: "Scale", value: "10 kW to 2 MW+ Rooftop & Ground Mount" },
      { label: "Structure", value: "Pre-Galvanized / Hot-Dip Galvanized Iron" },
      { label: "Tax Benefit", value: "Accelerated Depreciation (40% Year 1)" },
      { label: "Monitoring", value: "Industrial SCADA & IoT Cloud Gateway" }
    ],
    idealFor: [
      "Cold storages, textile mills & manufacturing plants",
      "Hospitals, private universities & resort hotels",
      "Warehouses, logistics parks & commercial malls"
    ],
    image: "/assets/images/banner-1.jpg"
  }
];

export const BLOGS_DATA: BlogPost[] = [
  {
    slug: "solar-rooftop-benefits-india",
    title: "Solar Rooftop Benefits: Why 2026 is the Best Year to Switch to Solar in India",
    excerpt: "With surging power tariffs and government subsidies up to ₹78,000 under PM Surya Ghar, discover how rooftop solar delivers 25-30% guaranteed annual ROI.",
    category: "Financial Savings",
    readTime: "4 min read",
    date: "October 14, 2026",
    image: "/assets/images/solar-panel.jpg",
    content: [
      "Electricity tariffs in India have risen steadily by 4% to 7% annually. For families and businesses, electricity is one of the highest recurring monthly expenditures. Installing rooftop solar panels changes the dynamic from renting electricity forever to owning your power plant for the next 25 to 30 years.",
      "1. Massive Cost Savings: A standard 3 kW residential solar installation generates roughly 360 to 400 units of electricity each month. In Rajasthan, where average domestic power tariffs range from ₹7.50 to ₹9.50 per unit, this represents immediate monthly savings of ₹3,000 to ₹3,800, slashing power bills by up to 90%.",
      "2. Guaranteed High ROI: Unlike mutual funds or fixed deposits, rooftop solar delivers a tangible, risk-free internal rate of return (IRR) between 25% and 35%. The entire capital investment is typically recouped within 3.5 to 4.5 years.",
      "3. Government Subsidies: Under the PM Surya Ghar Muft Bijli Yojana, residential consumers receive direct DBT subsidies into their bank accounts: ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and above.",
      "4. Environment & Carbon Footprint: A single 5 kW solar plant offsets over 120 metric tons of carbon dioxide over its lifespan, equivalent to planting more than 2,000 mature trees.",
      "5. Built for Indian Climates: High-grade Mono PERC and TOPCon panels installed by SRH Solar are tested for extreme Rajasthan temperatures (up to 48°C) and heavy monsoon winds."
    ]
  },
  {
    slug: "net-metering-guide-rajasthan",
    title: "How Net Metering Works in Rajasthan: A Step-by-Step Guide for Homeowners",
    excerpt: "Understand how bidirectional net meters export solar energy to JVVNL/AVVNL/JdVVNL, calculate your energy credits, and demystify the approval process.",
    category: "Technical Guide",
    readTime: "5 min read",
    date: "September 28, 2026",
    image: "/assets/images/Grid-connected-PV-system.png",
    content: [
      "Net Metering is the backbone of residential and commercial on-grid solar power systems. It is a billing mechanism that credits solar energy system owners for the electricity they export back to the utility grid.",
      "How Does it Work? During peak sunlight hours (10:00 AM to 4:00 PM), your solar panels often generate more electricity than your home consumes. The excess electricity flows outward through a specialized bidirectional net meter into the public power lines.",
      "At night, when solar panels are inactive, your home automatically draws power from the grid as normal. At the end of the monthly billing cycle, your DISCOM bill calculates: Units Consumed minus Units Exported.",
      "If you exported more than you consumed, the surplus credit carries forward to next month's bill, giving you an effective ₹0 or minimum fixed-charge electricity bill.",
      "SRH Solar handles all DISCOM approvals, paperwork, feasibility checks, meter testing, and final commissioning with zero hassle for the homeowner."
    ]
  },
  {
    slug: "on-grid-vs-off-grid-vs-hybrid",
    title: "On-Grid vs Off-Grid vs Hybrid Solar: Which System Fits Your Needs?",
    excerpt: "Compare battery requirements, government subsidy eligibility, power cut protection, and costs between on-grid, off-grid, and hybrid solar systems.",
    category: "System Comparison",
    readTime: "6 min read",
    date: "September 12, 2026",
    image: "/assets/images/Off-grid-PV-System-Schematic.png",
    content: [
      "Choosing the right solar system depends primarily on two factors: your local grid reliability and your primary goal (financial savings vs outage protection).",
      "On-Grid Solar: Best for urban and suburban homes with reliable grid power (less than 1-2 hours of daily cuts). On-grid systems are the most affordable, have zero battery replacement costs, and qualify for maximum government subsidies.",
      "Off-Grid Solar: Best for rural farmhouses, agricultural plots, or remote areas with frequent load shedding. Off-grid systems use tubular or lithium battery storage, making you completely self-sufficient.",
      "Hybrid Solar: The ultimate premium setup. You get the net-metering export benefits of an on-grid system, combined with automatic instant battery backup during power cuts.",
      "SRH Solar provides comprehensive on-site shadow analysis to recommend the most cost-effective architecture for your property."
    ]
  },
  {
    slug: "solar-water-pump-agriculture-guide",
    title: "Solar Water Pumps for Farming: Cut Diesel Costs to Zero with Bright Solar VFD",
    excerpt: "How Rajasthani farmers and agricultural businesses are achieving energy freedom with variable frequency drive solar pumping systems.",
    category: "Agriculture & Pumps",
    readTime: "4 min read",
    date: "August 20, 2026",
    image: "/assets/images/Solar-Pump-Technologies.png",
    content: [
      "In rural and agricultural areas across India, irrigation is dependent either on expensive diesel engines or unreliable nighttime rural electricity.",
      "Solar water pumps solve this challenge completely. Utilizing Bright Solar Variable Frequency Drive (VFD) inverters, solar panels directly drive standard AC submersible and surface motors during the day.",
      "A 5 HP solar water pump typically pays for itself within 2 seasons of diesel fuel savings alone, providing 25 years of dependable, zero-maintenance irrigation water."
    ]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: "General",
    question: "What types of solar systems does SRH Solar install?",
    answer: "We specialize in On-Grid (grid-tied with net-metering), Off-Grid (battery-backed for total independence), Hybrid Solar Systems, Solar Water Pumping for agriculture, and Solar Street Lighting."
  },
  {
    category: "Warranty & Life",
    question: "How long do solar panels last and what warranty is provided?",
    answer: "Our Tier-1 solar panels have an operational lifespan of 25 to 30+ years, supported by standard 25-year linear performance warranties. Inverters carry 5 to 10-year manufacturer warranties."
  },
  {
    category: "Financials",
    question: "How long does it take to recoup my investment (payback period)?",
    answer: "The typical ROI payback period is 3 to 4 years for commercial/industrial setups and 4 to 5 years for residential rooftop systems. After this period, you generate free electricity for 20+ years."
  },
  {
    category: "Technical",
    question: "What happens on cloudy days or during nighttime?",
    answer: "On-grid systems draw power automatically and seamlessly from the utility grid at night. On cloudy days, modern Mono PERC panels still generate 20–40% power from diffused daylight."
  },
  {
    category: "Subsidies",
    question: "How do I claim the PM Surya Ghar government subsidy?",
    answer: "SRH Solar handles the entire subsidy process on the national portal on your behalf: from DISCOM technical feasibility submission to net-meter commissioning, ensuring your DBT subsidy (up to ₹78,000) is credited directly to your bank account."
  },
  {
    category: "Maintenance",
    question: "How much maintenance is required for a rooftop solar plant?",
    answer: "Solar systems have no moving parts and require minimal maintenance—primarily washing the panel glass surface with clean water every 10–15 days to remove dust and maximize generation."
  },
  {
    category: "Installation",
    question: "How much shadow-free roof area do I need?",
    answer: "As a general rule of thumb, each 1 kW of solar capacity requires approximately 80 to 100 square feet of shadow-free rooftop area."
  }
];
