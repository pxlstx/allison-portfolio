import type { StructuredCaseStudy } from "@/lib/case-study";

const img = (file: string) => `/images/tomodomo/${file}`;
const tour = (file: string) => `/images/tomodomo/tour/${file}`;

export const tomodomoCaseStudy: StructuredCaseStudy = {
  slug: "tomodomo",
  tag: "Brand · Platform",
  title: "A custom platform built for co-living — and the community behind it.",
  subtitle:
    "Brand identity and a bespoke property management platform for Switzerland's fastest-growing co-living company.",
  heroImage: img("tomodomo-hero.png"),
  heroImageFocus: "top",
  meta: [
    { label: "Client", value: "TomoDomo" },
    { label: "Role", value: "Brand Designer → Lead Product Designer" },
    {
      label: "Scope",
      value: "Brand · Website · Platform",
    },
    { label: "Built on", value: "Bubble" },
    { label: "Industry", value: "Co-living · Real Estate · Switzerland" },
  ],
  blocks: [
    {
      type: "chapter",
      label: "The challenge",
      headline: "Growing fast. Systems struggling to keep up.",
      paragraphs: [
        "TomoDomo grew rapidly from a single Zurich property into Switzerland's largest co-living company — seven properties, 500+ residents, three cities. But the systems behind the scenes couldn't keep up. Applications, bookings, leases, payments, and housekeeping were all managed across a patchwork of disconnected tools.",
        "They looked at Salesforce and established property management software. Too generic, too rigid, too expensive. What they needed was a platform built around the specific processes that made TomoDomo work.",
      ],
    },
    {
      type: "typo",
      before: "Off-the-shelf software is built for landlords. TomoDomo needed something built for ",
      highlight: "community.",
      after: "",
    },
    {
      type: "image",
      src: img("tomodomo-community.png"),
      alt: "TomoDomo residents sharing a meal together outdoors",
      variant: "short",
      fit: "cover",
      width: 1024,
      height: 682,
    },
    {
      type: "chapter",
      label: "Foundation",
      headline: "Before the platform, the brand.",
      paragraphs: [
        "My engagement started with a brand refresh — evolving TomoDomo's visual identity while keeping their existing logo in place. A muted colour palette, a blend of serif and sans-serif typography, rounded shapes, and a consistent photography style brought warmth and coherence to a brand that had outgrown its original look. I also redesigned the corporate website to better reflect the community-first values at the heart of everything TomoDomo does.",
        "That foundation — understanding the brand, the team, and the people who choose to live at TomoDomo — informed everything that came next.",
      ],
    },
    {
      type: "image",
      src: img("tomodomo-website.png"),
      alt: "TomoDomo corporate website design",
      caption: "TomoDomo — brand identity and website",
      variant: "short",
      fit: "contain",
      inset: "plain",
      width: 1024,
      height: 620,
    },
    {
      type: "chapter",
      label: "Approach",
      headline: "Build for the process, not just the category.",
      paragraphs: [
        "I worked closely with the founder to map out exactly how TomoDomo operates — from the moment someone applies, through onboarding, lease management, and moving out. Every flow was designed around their way of working, not a generic template.",
        "Built on Bubble with a development partner, the platform gave TomoDomo the flexibility of custom software without the enterprise price tag.",
      ],
    },
    {
      type: "deliverable",
      label: "Application & booking",
      title: "From discovery to move-in — in one place.",
      titleLayout: "right",
      body: "Prospective residents can browse available rooms across all TomoDomo properties, apply online, and book their chosen room. Once their booking is confirmed, they are guided through the move and check-in process. And as a resident they can fully manage their account online.",
    },
    {
      type: "image",
      src: img("tomodomo-booking-app.png"),
      alt: "TomoDomo resident application and booking flow",
      variant: "short",
      fit: "contain",
      inset: "loose-wide",
      width: 7728,
      height: 3448,
    },
    {
      type: "image",
      src: img("tomodomo-uresident-app.png"),
      alt: "TomoDomo application management and resident back-office",
      caption: "TomoDomo — resident application and booking",
      variant: "short",
      fit: "contain",
      inset: "loose-wide",
      width: 7792,
      height: 3496,
    },
    {
      type: "deliverable",
      label: "Application & resident management",
      title: "The end-to-end resident lifecycle, fully managed.",
      titleLayout: "right",
      body: "The TomoDomo team can review, filter, and manage incoming applications across all their properties from a single dashboard. Approval, rejection, waitlisting, and communication — all handled without switching tools. A comprehensive back-office covers every stage of the resident relationship — onboarding, leases, contracts, payments, room inventory management, and exit process. All properties, all residents, one system. No spreadsheets.",
    },
    {
      type: "slideshow",
      brandline: "TomoDomo — Hospitality Management Platform",
      slides: [
        {
          src: tour("tomodomo-tour-01-overview.jpg"),
          alt: "TomoDomo platform overview",
          label: "Overview",
        },
        {
          src: tour("tomodomo-tour-02-applicants.jpg"),
          alt: "TomoDomo applicants dashboard",
          label: "Applicants",
        },
        {
          src: tour("tomodomo-tour-03-applicant-profile.jpg"),
          alt: "TomoDomo applicant profile",
          label: "Applicant Profile",
        },
        {
          src: tour("tomodomo-tour-04-movers.jpg"),
          alt: "TomoDomo movers view",
          label: "Movers",
        },
        {
          src: tour("tomodomo-tour-05-open-rooms.jpg"),
          alt: "TomoDomo open rooms",
          label: "Open Rooms",
        },
        {
          src: tour("tomodomo-tour-06-room-booking.jpg"),
          alt: "TomoDomo room booking",
          label: "Room Booking",
        },
        {
          src: tour("tomodomo-tour-07-residents.jpg"),
          alt: "TomoDomo residents list",
          label: "Residents",
        },
        {
          src: tour("tomodomo-tour-08-room-inventory.jpg"),
          alt: "TomoDomo room inventory",
          label: "Room Inventory",
        },
        {
          src: tour("tomodomo-tour-09-room-details.jpg"),
          alt: "TomoDomo room details",
          label: "Room Details",
        },
      ],
    },
    {
      type: "testimonial",
      quote:
        "Allison did a fantastic job updating and refining our corporate identity, brand and website. She understood our needs extremely well and was able to deliver high quality results quickly. I highly recommend working with her.",
      attribution: "Johannes Peter — Founder & CEO, TomoDomo",
    },
  ],
  nextProject: {
    title: "Kumi — brand identity and digital experience",
    href: "/work/kumi",
  },
};
