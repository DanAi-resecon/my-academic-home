import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research | Dan Ai" },
      {
        name: "description",
        content:
          "Publications and working papers by Dan Ai on data centers, power outages, mortality, and energy policy.",
      },
      { property: "og:title", content: "Research | Dan Ai" },
      {
        property: "og:description",
        content: "Publications, job market paper, and ongoing research in energy and environmental economics.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Research,
});

const PUBLICATIONS = [
  {
    authors: "Ai, D., Christine L. Crago, and Jamie T. Mullins",
    year: "2026",
    title: "Heat, Power Outages, and Mortality in the United States",
    journal: "Journal of Environmental Economics and Management, 137, 103275",
  },
  {
    authors: "Hsiao, C.Y., D. Ai, X. Wei, and N. Sheng",
    year: "2021",
    title: "The Contagious Effect of China’s Energy Policy on Stock Markets: The Case of Solar PV Industry",
    journal: "Renewable Energy, 164, 74–86",
  },
];

const WORKING_PAPERS = [
  {
    title: "Data Centers and Transmission Constraints",
    coauthors: "",
    note: "Job Market Paper",
  },
  {
    title: "Disparities in Power Outage Experience in the United States",
    coauthors: "with Christine L. Crago, Zeal Shah, and Jay Taneja",
    note: "Best Student Conference Paper, NAREA, 2024",
  },
];

const IN_PROGRESS = [
  "Do Data Centers Warm Their Neighborhoods? Evidence from Satellite Land Surface Temperature",
];

function Research() {
  return (
    <SiteLayout title="Research">
      <div className="max-w-3xl space-y-12">
        <section>
          <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
            Publications
          </h2>
          <ul className="mt-4 space-y-5">
            {PUBLICATIONS.map((publication) => (
              <li key={publication.title}>
                <p className="text-foreground/90">
                  {publication.authors} ({publication.year}). “{publication.title}.”
                </p>
                <p className="text-sm italic text-muted-foreground">{publication.journal}.</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
            Working Papers
          </h2>
          <ul className="mt-4 space-y-5">
            {WORKING_PAPERS.map((paper) => (
              <li key={paper.title}>
                <p className="font-serif text-lg text-foreground">{paper.title}</p>
                {paper.coauthors && (
                  <p className="text-sm text-muted-foreground">{paper.coauthors}</p>
                )}
                <p className="text-sm italic text-muted-foreground">{paper.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
            Work in Progress
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/90">
            {IN_PROGRESS.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </section>
      </div>
    </SiteLayout>
  );
}
