# Brand It — creative studio concept

## Run locally

`bun install`, then `bun run dev`. Run tests with `bun run test`. React + TypeScript, TanStack Start, Tailwind v4.

## Content and design

- `src/lib/brand-config.ts`: typed brand content, navigation, projects, services, process and enquiry validation.
- `src/components/brand/`: clean individual presentation components for each section.
- `src/styles.css`: semantic OKLCH colour tokens, fonts, spacing, artwork compositions and breakpoints. Font loading lives in the root route head.

## Replace concept imagery

The three generated fictional project images live in `src/assets/`; replace imports in the configuration with approved work. Maintain fixed aspect ratios and explicit concept labels until real commissioned work is supplied. The studio guideline spread is editable CSS-based artwork.

Only the reference screenshot arrived; the actual Brand It logo attachment is missing. The current plain Brand It text label is not a recreation of the logo. Add the original image and set `brand.logo` to its URL. The logo slot preserves proportions on ivory. Derive a favicon from that actual asset at the same time. No Instagram interface is embedded.

## Integrate enquiries

`submitEnquiry` in `src/lib/brand-config.ts` is the isolated integration seam. It validates input but sends and stores nothing. Replace it with a real endpoint, repeat schema validation server-side, and only report success after confirmed delivery. Keep the demo disclosure until live integration is complete.

## Client confirmation

Confirm provisional services, deliverables, brand positioning and final wording. Obtain the original logo and approved portfolio with usage rights. No real clients, performance results, testimonials, team, company history or office locations are claimed. Email, phone and social configuration are null and not rendered. This frontend requires no backend, database or authentication.
