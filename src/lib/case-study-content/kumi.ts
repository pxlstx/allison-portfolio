import type { StructuredCaseStudy } from "@/lib/case-study";

const img = (file: string) => `/images/kumi/${file}`;

export const kumiCaseStudy: StructuredCaseStudy = {
  slug: "kumi",
  tag: "Brand Identity · Offline · Digital Experience",
  title: "A cross-channel luxury brand experience.",
  subtitle:
    "End-to-end brand design for a South African luxury property and travel company.",
  heroImage: img("kumi-mindful-luxury.jpg"),
  meta: [
    { label: "Client", value: "Kumi Collection" },
    { label: "Role", value: "Creative Director / Designer" },
    { label: "Scope", value: "Naming · Identity · Digital · Offline" },
    { label: "Location", value: "Cape Town, South Africa" },
    { label: "Industry", value: "Luxury Travel · Real Estate" },
  ],
  blocks: [
    {
      type: "chapter",
      label: "The challenge",
      headline: "Luxury with a conscience.",
      paragraphs: [
        "After years managing luxury properties in Cape Town, my client was expanding — moving beyond property management into bespoke travel experiences and consultancy for overseas buyers seeking second homes in South Africa. Kumi Collection offers carefully tailored, personalized moments: whether exploring local culture, embarking on outdoor adventures, or simply enjoying a Cape Town home. Every experience is designed to honour the environment and support local communities.",
        "They needed a brand that matched the calibre and values of what they offered — unmistakably premium, deeply personal, and responsible in how it engaged with where it came from. A brand confident enough to work on a business card, a car wrap, a shopfront window, and a website, without losing its warmth or its integrity.",
      ],
    },
    {
      type: "typo",
      before: "Not just luxury — ",
      highlight: "mindful",
      after:
        " luxury. Bespoke, responsible, and deeply rooted in the culture and landscape of Cape Town.",
    },
    {
      type: "image",
      src: img("kumi-hero.png"),
      alt: "Kumi Collection luxury villa terrace at sunset",
      fit: "cover",
      focus: "low",
      width: 1024,
      height: 683,
    },
    {
      type: "chapter",
      label: "Approach",
      headline: "Start with the concept. The name follows.",
      paragraphs: [
        'Before any design work, we focused on defining the brand direction — landing on "Mindful Luxury" as the guiding concept. Personalized, high-touch experiences that honour the local environment and culture. Luxury that doesn\'t exploit the places it inhabits or leave a mess behind.',
        "With the concept established, I collaborated with writer Sheri Kaufmann to find the right name. We landed on Kumi Collection — simple, distinctive, and rooted in South African culture. Once both were locked, everything visual followed naturally.",
      ],
    },
    {
      type: "image",
      src: img("kumi-brand-direction.jpg"),
      alt: "Kumi Collection logo and brand direction",
      caption: "Kumi Collection — logo and brand direction",
      variant: "short",
      fit: "cover",
      width: 1600,
      height: 692,
    },
    {
      type: "deliverable",
      label: "Identity",
      title: "Understated warmth. Ownable at every scale.",
      titleLayout: "right",
      body: "I designed a sleek typographic logo that felt premium yet restrained — equally at home on a uniform or a website. The colour palette was drawn directly from the South African landscape: the teal of the Atlantic, warm ochres of the Karoo, muted sage greens of the fynbos. The organic patterns — swirling, flowing forms inspired by the ocean currents, waves, and coastal foliage of the Western Cape — became a defining brand element, applied across everything from the website and car wraps to custom scents and water bottles. Complementary serif and sans-serif fonts and a clear photography direction completed the system.",
    },
    {
      type: "image",
      src: img("kumi-photography-1.jpg"),
      alt: "Kumi Collection photography direction",
      fit: "cover",
      width: 1600,
      height: 738,
    },
    {
      type: "image",
      src: img("kumi-photography-2.jpg"),
      alt: "Kumi Collection lifestyle photography",
      caption: "Kumi Collection — photography direction",
      fit: "cover",
      width: 1600,
      height: 863,
    },
    {
      type: "deliverable",
      label: "Offline",
      title: "Every touchpoint, considered.",
      titleLayout: "right",
      body: "A full suite of branded materials: business cards, letterhead, deck templates, storefront signage, car wraps, and uniforms. The organic patterns appeared everywhere — window graphics, custom scents, water bottles. A property showcase video played on the storefront window, drawing in passersby. Every element was designed to feel part of the same considered system.",
    },
    {
      type: "image",
      src: img("kumi-offline-1.jpg"),
      alt: "Kumi Collection offline brand materials",
      fit: "cover",
      width: 1600,
      height: 701,
    },
    {
      type: "image",
      src: img("kumi-offline-2.jpg"),
      alt: "Kumi Collection storefront and signage",
      caption: "Kumi Collection — offline brand materials",
      fit: "cover",
      width: 1600,
      height: 770,
    },
    {
      type: "deliverable",
      label: "Digital",
      title: "A website as considered as the brand.",
      titleLayout: "right",
      body: "The website needed to speak to multiple audiences — prospective homebuyers, property owners, and luxury travellers — while feeling cohesive and premium. I designed the site to showcase their properties and bespoke service offering, blending editorial aesthetics with clear pathways to booking and consultation.",
    },
    {
      type: "image",
      src: img("kumi-website-screenshots.png"),
      alt: "Kumi Collection website design",
      caption: "Kumi Collection — website design",
      fit: "contain",
      inset: "loose-wide",
      width: 4428,
      height: 6658,
    },
    {
      type: "testimonial",
      quote:
        "Working with Allison has been a great pleasure from project to project. She has an extraordinary ability to capture the very essence of Kumi, skillfully translating our ideas into inspiring designs. The visual identity she created perfectly aligns with our vision of mindful luxury — and her intuitive understanding of our audience always results in designs that not only capture attention but deeply resonate.",
      attribution: "Karin Juffinger — Founder & CEO, Kumi Collection",
    },
  ],
  nextProject: {
    title: "TomoDomo — booking and client management",
    href: "/work/tomodomo",
  },
};
