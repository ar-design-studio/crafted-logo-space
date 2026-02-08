import logo1 from "@/assets/logo-1.jpg";
import logo2 from "@/assets/logo-2.jpg";
import logo3 from "@/assets/logo-3.jpg";
import sycoLogo from "@/assets/syco-logo.png";
import logo5 from "@/assets/logo-5.jpg";
import logo6 from "@/assets/logo-6.jpg";
import xpadLogo from "@/assets/xpadstudio-logo.svg";
import numeMockup from "@/assets/nume-mockup.svg";

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
    image: logo1,
    title: "Numé",
    description:
      "A refined wordmark where every letterform is sculpted with intentional grace — soft curves meet sharp serifs to evoke a sense of timeless luxury and quiet confidence.",
    client: "Numé",
    year: "2024",
    category: "Brand Identity / Wordmark Design",
    challenge:
      "Numé sought a wordmark that could transcend trends and anchor a luxury lifestyle brand. The identity needed to feel inherently elegant yet contemporary — readable at a glance, yet rewarding on closer inspection. It had to work seamlessly across packaging, editorial layouts, and digital touchpoints.",
    solution:
      "The wordmark was hand-drawn and then refined into precise vector geometry. Each letter carries subtle optical adjustments: the 'N' features a slightly tapered vertical stroke for grace, the 'u' and 'm' share a harmonised bowl radius for rhythm, and the accent on the 'é' acts as a delicate finishing flourish — like the final brushstroke of a calligrapher. The result is a logotype that breathes sophistication without shouting it.",
    designPhases: [
      {
        title: "Brand Immersion",
        description:
          "Understanding Numé's world — its audience, aspirations, and aesthetic language. Studying luxury wordmarks across fashion, fragrance, and hospitality to identify what makes timelessness feel modern.",
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
  { id: 3, slug: "organic-flow", image: logo2, title: "Organic Flow", description: "" },
  { id: 4, slug: "geometric-precision", image: logo3, title: "Geometric Precision", description: "" },
  {
    id: 5,
    slug: "syco",
    image: sycoLogo,
    title: "SYCO — Synergy Combat",
    description:
      "Each trace represents the clan's core philosophy — Synergy Combat, capturing the relentless synergy of competitive esports.",
  },
  { id: 6, slug: "circular-harmony", image: logo5, title: "Circular Harmony", description: "" },
  { id: 7, slug: "connected-systems", image: logo6, title: "Connected Systems", description: "" },
];
