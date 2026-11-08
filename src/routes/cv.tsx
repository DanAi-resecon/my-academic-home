import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV | Dan Ai" },
      {
        name: "description",
        content:
          "Curriculum vitae of Dan Ai: education, research, teaching, awards, affiliations, and technical skills in resource economics.",
      },
      { property: "og:title", content: "CV | Dan Ai" },
      {
        property: "og:description",
        content: "Education, research, teaching, awards, and skills of resource economist Dan Ai.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CV,
});

function CV() {
  return (
    <SiteLayout title="CV" bannerImage="/cv-banner.jpg" bannerPosition="center 60%" bannerTitleAlign="left">
      <div className="max-w-3xl">
        <p className="text-foreground/90">
          Download the full version of my{" "}
          <a
            href="/dan-ai-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-brand underline underline-offset-2"
          >
            curriculum vitae (PDF)
          </a>
          .
        </p>
      </div>
    </SiteLayout>
  );
}
