import sycoLogo from "@/assets/syco-logo.png";
import xpadLogo from "@/assets/xpadstudio-logo.svg";
import numeMockup from "@/assets/nume-mockup.svg";
import numeLogo from "@/assets/nume-logo.svg";

export interface DesignPhase {
  title: string;
  description: string;
}

export interface ProjectData {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  client?: string;
  year?: string;
  category?: string;
  challenge?: string;
  solution?: string;
  designPhases?: DesignPhase[];
  mockups?: string[];
  colors?: { name: string; hex: string }[];
}

export const portfolioItems: ProjectData[] = [
  {
    id: 1,
    slug: "xpadstudio",
    image: xpadLogo,
    title: "xPad Studio",
    description: "A bold, geometric 'X' mark constructed from intersecting diagonal strokes — teal energy against charcoal depth — embodying the studio's ethos of precision-driven creativity.",
    client: "xPad Studio",
    year: "2024",
    category: "Brand Identity / Logo Design",
    challenge:
      "xPad Studio needed a logomark that could live across digital screens, printed stationery, and large-format signage while feeling both technical and approachable. The brief called for a symbol that conveyed innovation, precision, and creative energy without relying on literal imagery.",
    solution:
      "The solution distils the studio's identity into a single geometric 'X' constructed from four intersecting parallelogram strokes. Two teal strokes cross with two white strokes, creating a layered depth effect that suggests dimension and forward momentum. The teal (#00C4B4) was chosen for its vibrant digital presence, while the charcoal ground keeps the mark grounded and professional. A horizontal split bar above the mark adds a subtle typographic anchor, reinforcing the duality of creativity and structure.",
    designPhases: [
      {
        title: "Discovery & Research",
        description:
          "Deep-dive into the studio's mission, audience, and competitive landscape. Mood-boarding around themes of precision, energy, and digital craftsmanship.",
      },
      {
        title: "Concept Sketching",
        description:
          "Exploring over 40 rough sketches — from abstract monograms to symbolic icons — before converging on the intersecting-stroke 'X' concept for its immediacy and scalability.",
      },
      {
        title: "Geometric Construction",
        description:
          "Building the mark on a precise grid. Each parallelogram is angled at 55° with uniform stroke width, ensuring optical balance at every size from favicon to billboard.",
      },
      {
        title: "Color & Contrast",
        description:
          "Testing the teal-on-charcoal palette across light and dark backgrounds, screens, and print substrates to guarantee legibility and vibrancy in every context.",
      },
      {
        title: "Refinement & Delivery",
        description:
          "Pixel-hinting for small sizes, preparing vector masters in SVG and AI, and producing a concise brand-guideline document covering clear-space rules, minimum sizes, and co-branding lockups.",
      },
    ],
    mockups: [],
    colors: [
      { name: "Teal Energy", hex: "#00C4B4" },
      { name: "Charcoal Depth", hex: "#333333" },
      { name: "Pure White", hex: "#FFFFFF" },
    ],
  },
  {
    id: 2,
    slug: "nume",
    image: numeLogo,
    title: "Nume",
    description:
      "A refined wordmark where every letterform is sculpted with intentional grace — soft curves meet sharp serifs to evoke a sense of timeless luxury and quiet confidence.",
    client: "Nume",
    year: "2024",
    category: "Brand Identity / Wordmark Design",
    challenge:
      "Nume sought a wordmark that could transcend trends and anchor a luxury lifestyle brand. The identity needed to feel inherently elegant yet contemporary — readable at a glance, yet rewarding on closer inspection. It had to work seamlessly across packaging, editorial layouts, and digital touchpoints.",
    solution:
      "The wordmark was hand-drawn and then refined into precise vector geometry. Each letter carries subtle optical adjustments: the 'N' features a slightly tapered vertical stroke for grace, the 'u' and 'm' share a harmonised bowl radius for rhythm, and the final 'e' acts as a delicate finishing flourish — like the final brushstroke of a calligrapher. The result is a logotype that breathes sophistication without shouting it.",
    designPhases: [
      {
        title: "Brand Immersion",
        description:
          "Understanding Nume's world — its audience, aspirations, and aesthetic language. Studying luxury wordmarks across fashion, fragrance, and hospitality to identify what makes timelessness feel modern.",
      },
      {
        title: "Calligraphic Exploration",
        description:
          "Hand-lettering dozens of variations, experimenting with stroke contrast, serif style, and letter spacing to find the perfect balance between classic elegance and editorial sharpness.",
      },
      {
        title: "Vector Precision",
        description:
          "Translating the chosen sketch into Bézier curves with meticulous control — adjusting stem widths to 1/10th of a point, aligning optical centres, and ensuring the accent sits at the mathematically ideal angle.",
      },
      {
        title: "Typographic Harmony",
        description:
          "Fine-tuning kerning pairs and testing the wordmark across sizes from embossed foil on card stock to 4K digital headers, ensuring every letterform holds its poise at any scale.",
      },
      {
        title: "Final Delivery",
        description:
          "Preparing production-ready files in all formats, alongside a brand-mark guideline covering clear-space rules, minimum reproduction sizes, approved colorways, and co-branding lockup specifications.",
      },
    ],
    mockups: [numeMockup],
    colors: [
      { name: "Obsidian", hex: "#1A1A1A" },
      { name: "Warm Ivory", hex: "#F5F0E8" },
      { name: "Champagne Gold", hex: "#C9A96E" },
    ],
  },
  {
    id: 3,
    slug: "syco",
    image: sycoLogo,
    title: "SYCO — Synergy Combat",
    description:
      "Each trace represents the clan's core philosophy — Synergy Combat, capturing the relentless synergy of competitive esports.",
    client: "SYCO Esports",
    year: "2024",
    category: "Brand Identity / Esports Logo",
    challenge:
      "SYCO needed a clan identity that could hold its own across stream overlays, jerseys, social avatars, and tournament broadcasts. The mark had to feel aggressive and competitive without slipping into generic esports clichés — sharp enough to intimidate opponents, refined enough to anchor a long-term brand.",
    solution:
      "The logomark fuses an angular monogram with kinetic energy lines, encoding the clan's philosophy of Synergy Combat — individual players moving as one weaponised unit. Each stroke is engineered on a strict diagonal grid, creating forward motion and tension. A high-contrast palette of neon accent against deep black gives the mark instant readability on dark stream overlays while staying punchy on light merchandise.",
    designPhases: [
      {
        title: "Clan Discovery",
        description:
          "Workshops with the founding roster to distil SYCO's competitive identity, team values, and the cultural references that shape their playstyle and community voice.",
      },
      {
        title: "Concept Exploration",
        description:
          "Sketching dozens of monogram directions — from sharp tactical glyphs to fluid motion marks — narrowing to the angular construction that best embodied coordinated aggression.",
      },
      {
        title: "Geometric Refinement",
        description:
          "Rebuilding the chosen concept on a diagonal grid system, calibrating stroke weights and negative space so the mark stays legible from a 24px Discord avatar to a 4m tournament backdrop.",
      },
      {
        title: "Color & Application",
        description:
          "Defining a high-contrast palette tuned for dark mode streaming environments, then stress-testing the mark across jerseys, overlays, thumbnails, and social avatars.",
      },
      {
        title: "Brand System Delivery",
        description:
          "Packaging master files, lockup variations, clear-space rules, and a usage guide for content creators, ensuring every appearance of the mark reinforces the clan's identity.",
      },
    ],
    mockups: [],
    colors: [
      { name: "Combat Black", hex: "#0A0A0A" },
      { name: "Synergy Neon", hex: "#C6FF3D" },
      { name: "Steel Grey", hex: "#2A2A2A" },
    ],
  },
];
