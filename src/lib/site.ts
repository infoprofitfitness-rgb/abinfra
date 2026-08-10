export const site = {
  name: "A B Infrasolutions Pvt Ltd",
  shortName: "A B INFRASOLUTIONS",
  tagline: "Powering Infrastructure. Delivering Excellence.",
  description:
    "A B Infrasolutions Pvt Ltd specializes in infrastructure, power, telecom, and turnkey EPC projects, delivering high-quality solutions with a commitment to excellence, safety, and timely execution.",
  address: {
    lines: [
      "21/80, MLA Quarters,",
      "Kaveri Path, Mansarovar,",
      "Jaipur – 302020, Rajasthan, India",
    ],
    single:
      "21/80, MLA Quarters, Kaveri Path, Mansarovar, Jaipur – 302020, Rajasthan, India",
  },
  emails: ["powerprojects@abinfragroup.com", "manjuchoudhary@abinfragroup.com"],
  phones: ["+91 141 2392581", "+91 9602753023"],
  hrEmail: "hr@abinfragroup.com",
  hours: {
    weekdays: "Mon – Sat: 9:30 AM – 6:30 PM",
    sunday: "Sunday: Closed",
  },
  logo: "/images/Untitled_design__6_-removebg-preview.png",
  developer: {
    name: "Flowrush Technologies",
    url: "https://flowrushtech.com/",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/transmission-services", label: "Transmission Services" },
  { href: "/project", label: "Projects" },
  { href: "/career-2", label: "Careers" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/transmission-services", label: "Transmission Services" },
  { href: "/project", label: "Projects" },
  { href: "/career-2", label: "Career" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/disclaimer", label: "Disclaimer" },
] as const;

export const clientLogos = [
  "acme@2x.webp",
  "adani-power@2x.webp",
  "adani-renewables@2x.webp",
  "gaik@2x.webp",
  "idea@2x.webp",
  "indus-towers@2x.webp",
  "jindal-renewables@2x.webp",
  "lanco@2x.webp",
  "rajasthan-transco@2x.webp",
  "reliance-jio-@2x.webp",
  "ruidp@2x.webp",
  "sadbhav@2x.webp",
  "sterling-wilson@2x.webp",
  "suzlon@2x.webp",
  "wind-world@2x.webp",
] as const;

export const certificates = [
  "certificate-1.jpg",
  "certificate-2.jpg",
  "certificate-3.jpg",
] as const;

export const coreServices = [
  {
    title: "Infrastructure Development",
    description:
      "We undertake large-scale civil and infrastructure projects including roads, structural works, and site development with precision and durability.",
    image: "/images/image1-1200x750.webp",
  },
  {
    title: "Power & Electrical Projects",
    description:
      "Execution of electrical infrastructure projects including installation, maintenance, and power-related works for industrial and commercial sectors.",
    image: "/images/electricity-electrical-maintenance-service-engineer-hand-holding-ac-voltmeter-checking-electric-current-voltage-circuit-breaker-terminal-cable-wiring-main-power-distribution-board_101448-4286.webp",
  },
  {
    title: "Telecom & Fiber Infrastructure",
    description:
      "Complete turnkey solutions for telecom networks including optical fiber laying, tower erection, and connectivity infrastructure.",
    image: "/images/image2-1200x750.webp",
  },
  {
    title: "EPC & Turnkey Projects",
    description:
      "End-to-end project execution covering engineering, procurement, construction, and commissioning for seamless delivery.",
    image: "/images/image4-1200x750.webp",
  },
  {
    title: "Government Liaisoning & Approvals",
    description:
      "Efficient handling of approvals, compliance, and coordination with government authorities for smooth project execution.",
    image: "/images/img_services_Home01-3XDABZG-1024x664.webp",
  },
] as const;
