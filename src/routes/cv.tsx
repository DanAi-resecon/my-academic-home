import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV | Eva Wang" },
      {
        name: "description",
        content:
          "Curriculum vitae of Eva Wang: education, academic appointments, awards, and professional service in economics.",
      },
      { property: "og:title", content: "CV | Eva Wang" },
      {
        property: "og:description",
        content: "Education, appointments, grants, and service record of economist Eva Wang.",
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
      { primary: "Ph.D. in Economics, University of Michigan", meta: "2026" },
      { primary: "M.A. in Economics, University of Michigan", meta: "2022" },
      { primary: "B.A. in Economics, Peking University", meta: "2020" },
    ],
  },
  {
    heading: "Fields of Interest",
    items: [
      { primary: "Public Finance", meta: "" },
      { primary: "Energy and Environmental Economics", meta: "" },
      { primary: "Applied Microeconomics", meta: "" },
    ],
  },
  {
    heading: "Awards and Fellowships",
    items: [
      { primary: "Rackham Predoctoral Fellowship", meta: "2025" },
      { primary: "Department of Economics Summer Research Grant", meta: "2023" },
    ],
  },
  {
    heading: "Professional Service",
    items: [
      { primary: "Referee, Journal of Public Economics", meta: "2024–" },
      { primary: "Organizer, Public Finance Student Seminar", meta: "2023–2025" },
    ],
  },
];

function CV() {
  return (
    <SiteLayout title="CV">
      <div className="max-w-3xl space-y-12">
        <p className="text-foreground/90">
          A full PDF version of my curriculum vitae is available{" "}
          <a href="#" className="text-brand underline underline-offset-2">
            here
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
