import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching | Dan Ai" },
      {
        name: "description",
        content:
          "Teaching experience of Dan Ai as Instructor of Record, Guest Lecturer, and Teaching Assistant at the University of Massachusetts Amherst.",
      },
      { property: "og:title", content: "Teaching | Dan Ai" },
      {
        property: "og:description",
        content: "Instructor of Record, Guest Lecturer, and Teaching Assistant experience in economics, statistics, and financial analysis.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Teaching,
});

const TEACHING = [
  {
    role: "Instructor of Record",
    institution: "University of Massachusetts Amherst",
    courses: [
      { course: "Price Theory", term: "Fall 2025" },
    ],
  },
  {
    role: "Guest Lecturer",
    institution: "University of Massachusetts Amherst",
    courses: [
      { course: "Cost Benefit Analysis", term: "Fall 2025" },
      { course: "Intermediate Statistics for Business and Economics", term: "Fall 2026" },
    ],
  },
  {
    role: "Teaching Assistant",
    institution: "University of Massachusetts Amherst",
    courses: [
      { course: "Cost Benefit Analysis", term: "Spring 2026" },
      { course: "Financial Analysis for Consumers and Firms", term: "Spring 2026" },
      { course: "Managerial Economics", term: "Fall 2024" },
      { course: "Intermediate Statistics for Business and Economics", term: "Fall 2022, Spring 2023, Fall 2026" },
      { course: "Introductory Statistics for the Social Sciences", term: "Fall 2021, Spring 2022, Fall 2024, Spring 2025" },
    ],
  },
];

function Teaching() {
  return (
    <SiteLayout title="Teaching" bannerImage="/teaching-banner.png" bannerPosition="center 65%">
      <div className="max-w-3xl space-y-12">
        {TEACHING.map((section) => (
          <section key={section.role}>
            <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
              {section.role}
            </h2>
            <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
              {section.institution}
            </h3>
            <ul className="mt-3 space-y-3 text-foreground/90">
              {section.courses.map((item) => (
                <li key={item.course} className="space-y-1 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0">
                  <span>{item.course}</span>
                  <span className="block text-sm text-muted-foreground sm:text-right">{item.term}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
