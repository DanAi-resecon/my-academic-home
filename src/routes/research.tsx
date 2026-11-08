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

type Paper = {
  title: string;
  coauthors?: string;
  label?: string;
  note?: string;
  abstract?: string;
};

const JOB_MARKET_PAPER: Paper = {
  title: "Data Centers and Transmission Constraints",
  coauthors: "With Christine L. Crago and Matt Woerman",
  label: "Job Market Paper",
  abstract:
    "The rapid growth of artificial intelligence (AI) and cloud computing has made data centers one of the fastest-growing sources of electricity demand in the United States. We construct a spatial dataset linking data centers and electricity generator nodes through the transmission network and estimate the effect of data center expansion on electricity grid congestion from 2018 to 2025. Leveraging variation in generator nodes’ exposure to data center capacity and an instrumental variable strategy, we find that data center expansion affects congestion at both nearby nodes and more distant nodes. A 100 MW data center connected near a generator node increases the node’s congestion cost by $6.5/MWh, and the effect declines with distance.",
};

const WORKING_PAPERS: Paper[] = [
  {
    title: "Disparities in Power Outage Experience in the United States",
    coauthors: "With Christine L. Crago, Zeal Shah, and Jay Taneja",
    note: "(Best Student Conference Paper, Northeastern Agricultural and Resource Economics Association (NAREA), 2024)",
    abstract:
      "Climate change has increased the frequency and severity of extreme weather events, thereby posing a challenge to electrical grids. Here, we study the distribution of power outages in the United States (US) and employ a two-way fixed effects model to examine the relationship between power outages and indicators of social vulnerability, including poverty, the share of racial minorities, and English deficiency. We employ a dataset of power outages from 2017 to 2021 at the county level and classify them into weather-related and non-weather-related outages. Our main finding identifies disparities in the reliability of power supply. A percentage point increase in the proportion of racial minorities in a county is associated with a 6.37% increase in the average duration of the power outage per customer. Notably, our findings highlight the pronounced disparities associated with weather-related power outages. For weather-related outages, the same percentage point increase in the racial minority share is associated with a 37.93% increase in the average duration of the power outage per customer, controlling for environmental and other factors affecting outages. Our study proposes effective policies to address inequities in the reliability of electricity supply, particularly in the face of increasing impacts of climate change.",
  },
];

const IN_PROGRESS: Paper[] = [
  {
    title: "Data Centers and Water Temperatures",
    coauthors: "With Yingyi Jin, Christine L. Crago, David Keiser, and Tihitina Andarge",
  },
  {
    title: "Do Data Centers Warm Their Neighborhoods?",
    coauthors: "With Wenxiu Teng",
  },
  {
    title: "Private Arbitrage and System Efficiency: Battery Storage in Electricity Markets",
  },
];

function PaperDetails({ paper }: { paper: Paper }) {
  return (
    <div>
      <h3 className="font-serif text-lg font-semibold text-foreground">
        {paper.title}
        {paper.label && <span className="font-normal italic"> [{paper.label}]</span>}
      </h3>
      {paper.coauthors && <p className="mt-1 text-foreground/90">{paper.coauthors}</p>}
      {paper.note && <p className="mt-1 italic text-muted-foreground">{paper.note}</p>}
      {paper.abstract && (
        <p className="mt-3 leading-relaxed text-foreground/90">
          <span className="italic">Abstract:</span> {paper.abstract}
        </p>
      )}
    </div>
  );
}

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
            Job Market Paper
          </h2>
          <div className="mt-4">
            <PaperDetails paper={JOB_MARKET_PAPER} />
          </div>
        </section>

        <section>
          <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
            Working Papers
          </h2>
          <ul className="mt-4 space-y-5">
            {WORKING_PAPERS.map((paper) => (
              <li key={paper.title}>
                <PaperDetails paper={paper} />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
            Work in Progress
          </h2>
          <ul className="mt-4 space-y-5">
            {IN_PROGRESS.map((paper) => (
              <li key={paper.title}>
                <PaperDetails paper={paper} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SiteLayout>
  );
}
