import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research | Eva Wang" },
      {
        name: "description",
        content:
          "Working papers and research in progress on optimal taxation, corrective subsidies, clean technology adoption, and environmental policy.",
      },
      { property: "og:title", content: "Research | Eva Wang" },
      {
        property: "og:description",
        content: "Job market paper, working papers, and work in progress in public finance.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Research,
});

const JOB_MARKET = {
  title: "Optimal Corrective Taxation with Heterogeneous Consumers",
  abstract:
    "This paper studies how corrective taxes should be designed when consumers differ in both price sensitivity and exposure to the underlying externality. Using administrative purchase records combined with a structural demand model, I show that uniform tax rates leave substantial welfare on the table relative to targeted schedules.",
};

const WORKING_PAPERS = [
  {
    title: "Clean Technology Subsidies and the Timing of Adoption",
    coauthors: "with A. Rivera",
    note: "Revise and resubmit, Journal of Public Economics",
  },
  {
    title: "Energy Prices, Household Substitution, and Distributional Incidence",
    coauthors: "",
    note: "Working paper, 2026",
  },
];

const IN_PROGRESS = [
  "Health-Related Consumption Taxes and Long-Run Behavior",
  "Firm Responses to Environmental Compliance Thresholds",
];

function Research() {
  return (
    <SiteLayout title="Research">
      <div className="max-w-3xl space-y-12">
        <section>
          <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
            Job Market Paper
          </h2>
          <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
            {JOB_MARKET.title}
          </h3>
          <p className="mt-2 leading-relaxed text-foreground/90">{JOB_MARKET.abstract}</p>
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
