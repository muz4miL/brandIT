import form from "@/assets/form.jpg";
import offscript from "@/assets/offscript.jpg";
import commonGround from "@/assets/common-ground.jpg";
import wordmark from "@/assets/brandit-wordmark.svg";
import { z } from "zod";

export const brand = {
  name: "Brand It",
  // The actual supplied identity asset from public/wordmark.png ("the brandit.")
  logo: "/wordmark.png",
  email: null,
  phone: null,
  social: null,
};

export const navigation = [
  { label: "Work", id: "work" },
  { label: "Expertise", id: "expertise" },
  { label: "Studio", id: "studio" },
];

export type Project = {
  id: string;
  name: string;
  discipline: string;
  image: string;
  width: number;
  height: number;
  brief: string;
  challenge: string;
  approach: string;
  intent: string;
  deliverables: string[];
};

export const projects: Project[] = [
  {
    id: "form",
    name: "FORM",
    discipline: "Brand identity & packaging",
    image: form,
    width: 1200,
    height: 1008,
    brief:
      "A skincare identity built around clear typography, warm colour and packaging consistency across the range.",
    challenge:
      "Skincare shelves are crowded with quiet, clinical design. The concept asks how a daily ritual brand can feel warm and unmistakable while staying legible at a glance.",
    approach:
      "A single condensed wordmark, warm butter-yellow cartons and one coral hero bottle keep the range coherent. Consistent type hierarchy does the shelf talking.",
    intent: "Clear typography and warm colour make a daily ritual feel considered, not clinical.",
    deliverables: ["Brand identity", "Packaging system", "Art direction"],
  },
  {
    id: "offscript",
    name: "OFFSCRIPT",
    discipline: "Campaign art direction",
    image: offscript,
    width: 912,
    height: 1104,
    brief:
      "An expressive campaign system using oversized type, high contrast and bold composition.",
    challenge:
      "A fictional cultural platform for independent voices needs a campaign language loud enough for posters and streets, yet systematic enough to repeat.",
    approach:
      "Oversized yellow type on signal red, interrupted by sculptural chrome, creates a repeatable poster system where every issue reuses the same grid and shocks differently.",
    intent: "Oversized type and unapologetic contrast give independent voices a stage.",
    deliverables: ["Campaign concept", "Poster series", "Social art direction"],
  },
  {
    id: "common-ground",
    name: "COMMON GROUND",
    discipline: "Website concept",
    image: commonGround,
    width: 1200,
    height: 912,
    brief:
      "A welcoming café website concept built around atmosphere, readable menus and clear navigation.",
    challenge:
      "A neighbourhood café's warmth has to survive the move to a screen — without sacrificing a readable menu or a clear way to visit.",
    approach:
      "Editorial storytelling, tactile imagery and a strict information hierarchy make discovery feel like reading a well-set page: story first, menu always one click away.",
    intent: "Atmosphere and clarity, so the website feels as welcoming as the room.",
    deliverables: ["Website direction", "Interface design", "Digital brand system"],
  },
];

export type Service = {
  name: string;
  short: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    name: "Brand strategy",
    short: "Strategy",
    description:
      "Find the idea your brand can own. We map audience, positioning and voice until the direction is obvious — then we write it down.",
    deliverables: ["Positioning & purpose", "Audience insights", "Brand voice"],
  },
  {
    name: "Visual identity",
    short: "Identity",
    description:
      "A distinctive visual language, designed to work everywhere you show up — from a favicon to a forty-metre facade.",
    deliverables: ["Logo & identity systems", "Typography & colour", "Brand guidelines"],
  },
  {
    name: "Websites & digital experiences",
    short: "Digital",
    description:
      "Bring your brand to life online with thoughtful design, intuitive journeys and interfaces people actually enjoy using.",
    deliverables: ["Website design", "User experience", "Digital design systems"],
  },
  {
    name: "Content & campaigns",
    short: "Campaigns",
    description:
      "Ideas with character. Campaigns that give people a reason to stop, look and remember — then come back.",
    deliverables: ["Creative direction", "Campaign concepts", "Content systems"],
  },
];

export const process = [
  {
    name: "Discover",
    text: "Understand the business, the audience and the challenge worth solving.",
    output: "A focused brief",
  },
  {
    name: "Define",
    text: "Establish positioning and agree the creative direction before pixels.",
    output: "An agreed creative direction",
  },
  {
    name: "Design",
    text: "Develop the identity and its applications across every touchpoint.",
    output: "An identity and its applications",
  },
  {
    name: "Deliver",
    text: "Prepare organised assets and support a clean handover.",
    output: "Organised assets and handover",
  },
];

export type ArtDirection = {
  id: string;
  label: string;
  panel: string;
  ink: string;
  accent: string;
  muted: string;
  typeface: string;
  weight: number;
  transform: string;
  radius: string;
};

export const artDirections: ArtDirection[] = [
  {
    id: "bold",
    label: "Bold",
    panel: "#16150f",
    ink: "#f2eee2",
    accent: "#c9f24e",
    muted: "#8f8b7d",
    typeface: "'Archivo Black', 'Arial Black', sans-serif",
    weight: 400,
    transform: "uppercase",
    radius: "2px",
  },
  {
    id: "refined",
    label: "Refined",
    panel: "#f2eee2",
    ink: "#16150f",
    accent: "#c9f24e",
    muted: "#8f8b7d",
    typeface: "'Instrument Serif', Georgia, serif",
    weight: 400,
    transform: "none",
    radius: "2px",
  },
  {
    id: "playful",
    label: "Playful",
    panel: "#efe66a",
    ink: "#16150f",
    accent: "#ee5a36",
    muted: "#7a7434",
    typeface: "'Space Grotesk', 'Trebuchet MS', sans-serif",
    weight: 700,
    transform: "none",
    radius: "22px",
  },
];

export const studyApplications = [
  {
    key: "poster",
    name: "Poster",
    format: "A2 street poster",
    note: "Identity at maximum scale",
  },
  {
    key: "label",
    name: "Packaging label",
    format: "250 g retail label",
    note: "Identity at product scale",
  },
  {
    key: "screen",
    name: "Mobile screen",
    format: "Shop app screen",
    note: "Identity at interface scale",
  },
];

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  company: z.string().trim().max(150),
  needs: z.array(z.string()).min(1, "Please select at least one service."),
  description: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(2000),
});

export type Enquiry = z.infer<typeof enquirySchema>;

export const demoNotice = "Demo only — your enquiry has not been sent.";

// Integration seam: replace only this handler with a validated endpoint call.
export async function submitEnquiry(input: Enquiry): Promise<{ sent: false; message: string }> {
  enquirySchema.parse(input);
  return { sent: false, message: demoNotice };
}
