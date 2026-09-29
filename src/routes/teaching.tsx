import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching | Dan Ai" },
      {
        name: "description",
        content:
          "Teaching experience of Dan Ai at the University of Massachusetts Amherst and Macau University of Science and Technology.",
      },
      { property: "og:title", content: "Teaching | Dan Ai" },
      {
        property: "og:description",
        content: "Course instructor and teaching assistant experience in economics, statistics, and financial analysis.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Teaching,
});

const INSTRUCTOR = [
  { course: "Price Theory", meta: "University of Massachusetts Amherst" },
];

const UMASS_ASSISTANT = [
  "Cost Benefit Analysis",
  "Financial Analysis for Consumers and Firms",
  "Managerial Economics",
  "Intermediate Statistics for Business and Economics",
  "Introductory Statistics for the Social Sciences",
];

const MUST_ASSISTANT = [
  "Microeconomics",
  "Macroeconomics",
];

function Teaching() {
  return (
    <SiteLayout title="Teaching">
      <div className="max-w-3xl space-y-12">
        <section>
          <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
            Course Instructor
          </h2>
          <ul className="mt-4 space-y-3">
            {INSTRUCTOR.map((item) => (
              <li key={item.course}>
                <p className="text-foreground/90">{item.course}</p>
                <p className="text-sm text-muted-foreground">{item.meta}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
            Teaching Assistant
          </h2>
          <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
            University of Massachusetts Amherst
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/90">
            {UMASS_ASSISTANT.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
          <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">
            Macau University of Science and Technology
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/90">
            {MUST_ASSISTANT.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </section>
      </div>
    </SiteLayout>
  );
}
