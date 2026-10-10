import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Hero } from "@/components/brand/Hero";
import { SelectedWork } from "@/components/brand/SelectedWork";
import { Expertise } from "@/components/brand/Expertise";
import { BrandStudy } from "@/components/brand/BrandStudy";
import { Studio } from "@/components/brand/Studio";
import { Process } from "@/components/brand/Process";
import { Contact } from "@/components/brand/Contact";
import { Footer } from "@/components/brand/Footer";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brand It — Good brands don’t blend in." },
      {
        name: "description",
        content:
          "Independent thinking. Distinctive design. Brand It brings strategy, identity and digital experiences together to make your brand unmistakable.",
      },
      { property: "og:title", content: "Brand It — Good brands don’t blend in." },
      {
        property: "og:description",
        content:
          "Brand strategy, visual identity and digital experiences with clarity and character. Discover the Brand It creative studio concept.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Expertise />
        <BrandStudy />
        <Studio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
