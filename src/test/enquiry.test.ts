import { describe, expect, it } from "vitest";
import { enquirySchema, submitEnquiry } from "@/lib/brand-config";

describe("Enquiry demonstration", () => {
  const valid = {
    name: "Alex Example",
    email: "alex@example.com",
    company: "",
    needs: ["Visual identity"],
    description: "An identity concept for a new independent studio.",
  };
  it("explicitly reports that enquiries are not sent", async () => {
    expect(await submitEnquiry(valid)).toEqual({
      sent: false,
      message: "Demo only — your enquiry has not been sent.",
    });
  });
  it("permits an optional company", () => {
    expect(enquirySchema.safeParse({ ...valid, company: "" }).success).toBe(true);
  });
  it("permits selecting several services", () => {
    expect(
      enquirySchema.safeParse({ ...valid, needs: ["Brand strategy", "Visual identity"] }).success,
    ).toBe(true);
  });
  it("rejects an empty service selection", () => {
    expect(enquirySchema.safeParse({ ...valid, needs: [] }).success).toBe(false);
  });
  it("rejects an invalid email", () => {
    expect(enquirySchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
  it("rejects missing required fields", () => {
    expect(
      enquirySchema.safeParse({ ...valid, name: "", needs: [], description: "" }).success,
    ).toBe(false);
  });
});
