import { describe, expect, it } from 'vitest';
import { enquirySchema, submitEnquiry } from '@/lib/brand-config';

describe('Enquiry demonstration', () => {
  const valid = { name: 'Alex Example', email: 'alex@example.com', company: '', need: 'Visual identity' as const, description: 'An identity concept for a new independent studio.' };
  it('explicitly reports that enquiries are not sent', async () => {
    expect(await submitEnquiry(valid)).toEqual({ sent: false, message: 'Demo only — your enquiry has not been sent.' });
  });
  it('permits an optional company', () => {
    expect(enquirySchema.safeParse({ ...valid, company: '' }).success).toBe(true);
  });
  it('rejects an invalid email', () => {
    expect(enquirySchema.safeParse({ ...valid, email: 'not-an-email' }).success).toBe(false);
  });
  it('rejects missing required fields', () => {
    expect(enquirySchema.safeParse({ ...valid, name: '', need: '', description: '' }).success).toBe(false);
  });
});