import form from '@/assets/form.jpg';
import offscript from '@/assets/offscript.jpg';
import commonGround from '@/assets/common-ground.jpg';
import { z } from 'zod';

export const brand = { name: 'Brand It', logo: null as string | null, email: null, phone: null, social: null };
export const navigation = [{ label: 'Work', id: 'work' }, { label: 'Expertise', id: 'expertise' }, { label: 'Studio', id: 'studio' }];
export type Project = { name: string; discipline: string; image: string; width: number; height: number; brief: string; approach: string; deliverables: string[] };
export const projects: Project[] = [
  { name: 'FORM', discipline: 'Brand identity & packaging', image: form, width: 1200, height: 1008, brief: 'An imagined skincare brand that makes the daily ritual feel refreshingly simple.', approach: 'Confident typography, unexpected colour and a pared-back packaging system bring clarity to a crowded shelf.', deliverables: ['Brand identity', 'Packaging system', 'Art direction'] },
  { name: 'OFFSCRIPT', discipline: 'Campaign art direction', image: offscript, width: 912, height: 1104, brief: 'A fictional cultural platform for independent minds and new creative voices.', approach: 'Oversized type and sculptural chrome create an expressive campaign language built to break the pattern.', deliverables: ['Campaign concept', 'Poster series', 'Social art direction'] },
  { name: 'COMMON GROUND', discipline: 'Website concept', image: commonGround, width: 1200, height: 912, brief: 'An imagined neighbourhood café with a digital experience as welcoming as its space.', approach: 'Editorial storytelling, tactile imagery and a clear information hierarchy make everyday discovery feel considered.', deliverables: ['Website direction', 'Interface design', 'Digital brand system'] },
];
export const services = [
  { name: 'Brand strategy', description: 'Find the idea your brand can own. Then give it a clear direction.', deliverables: ['Positioning & purpose', 'Audience insights', 'Brand voice'] },
  { name: 'Visual identity', description: 'A distinctive visual language, designed to work everywhere you show up.', deliverables: ['Logo & identity systems', 'Typography & colour', 'Brand guidelines'] },
  { name: 'Websites & digital experiences', description: 'Bring your brand to life online with thoughtful design and intuitive experiences.', deliverables: ['Website design', 'User experience', 'Digital design systems'] },
  { name: 'Content & campaigns', description: 'Ideas with character. Communication that gives people a reason to pay attention.', deliverables: ['Creative direction', 'Campaign concepts', 'Content systems'] },
];
export const process = [
  { name: 'Discover', text: 'Understand the business, audience and challenge.' },
  { name: 'Define', text: 'Establish positioning and creative direction.' },
  { name: 'Design', text: 'Develop the identity and digital experience.' },
  { name: 'Deliver', text: 'Prepare the assets and support the handover.' },
];
export const enquirySchema = z.object({ name: z.string().trim().min(1, 'Please enter your name.').max(100), email: z.string().trim().email('Please enter a valid email.').max(255), company: z.string().trim().max(150), need: z.enum(['Brand strategy', 'Visual identity', 'Website & digital', 'Content & campaigns', 'A little of everything'], { errorMap: () => ({ message: 'Please select what you need.' }) }), description: z.string().trim().min(10, 'Please tell us a little more (at least 10 characters).').max(2000) });
export type Enquiry = z.infer<typeof enquirySchema>;
export const demoNotice = 'Demo only — your enquiry has not been sent.';
// Integration seam: replace only this handler with a validated endpoint call.
export async function submitEnquiry(input: Enquiry): Promise<{ sent: false; message: string }> {
  enquirySchema.parse(input);
  return { sent: false, message: demoNotice };
}