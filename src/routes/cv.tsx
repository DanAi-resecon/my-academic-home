import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import cvAsset from "@/assets/dan-ai-cv.pdf.asset.json";

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

const SECTIONS = [
  {
    heading: "Education",
    items: [
      { primary: "Ph.D. Candidate in Resource Economics, University of Massachusetts Amherst", meta: "Amherst, USA" },
      { primary: "M.S. in Applied Economics, Macau University of Science and Technology", meta: "Macau, China" },
      { primary: "B.S. in Computer Science and Technology, Langfang Normal University", meta: "Langfang, China" },
    ],
  },
  {
    heading: "Fields of Interest",
    items: [
      { primary: "Energy and Environmental Economics", meta: "" },
      { primary: "Applied Microeconomics", meta: "" },
      { primary: "Applied Econometrics", meta: "" },
    ],
  },
  {
    heading: "Awards and Fellowships",
    items: [
      { primary: "Graduate Fellows Travel Grant, UMass Amherst Graduate School", meta: "2025" },
      { primary: "Best Student Conference Paper, NAREA", meta: "2024" },
      { primary: "Graduate Fellows Travel Grant, UMass Amherst Graduate School", meta: "2024" },
      { primary: "Research Enhancement and Leadership (REAL) Fellow, UMass Amherst Graduate School", meta: "2021–2025" },
    ],
  },
  {
    heading: "Selected Presentations",
    items: [
      { primary: "NAREA Annual Meeting; AERE Summer Conference; UMass Energy Transition Symposium", meta: "2025" },
      { primary: "NAREA Annual Meeting; Sloan/Haas Summer School in Environmental and Energy Economics", meta: "2024" },
      { primary: "UMass Energy Transition Symposium", meta: "2023" },
    ],
  },
  {
    heading: "Affiliation",
    items: [
      { primary: "Elevating Equity Values in the Transition of the Energy System (ELEVATE), U.S. National Science Foundation", meta: "" },
    ],
  },
  {
    heading: "Skills",
    items: [
      { primary: "Java, MATLAB, Python, R, Stata, ArcGIS, LaTeX, Google Earth Engine", meta: "" },
    ],
  },
];

function CV() {
  return (
    <SiteLayout title="CV">
      <div className="max-w-3xl space-y-12">
        <p className="text-foreground/90">
          Download the full version of my{" "}
          <a
            href={cvAsset.url}
            target="_blank"
            rel="noreferrer"
            className="text-brand underline underline-offset-2"
          >
            curriculum vitae (PDF)
          </a>
          .
        </p>

        {SECTIONS.map((section) => (
          <section key={section.heading}>
            <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
              {section.heading}
            </h2>
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => (
                <li key={item.primary} className="flex justify-between gap-6">
                  <span className="text-foreground/90">{item.primary}</span>
                  <span className="shrink-0 text-sm text-muted-foreground">{item.meta}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
