import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching | Eva Wang" },
      {
        name: "description",
        content:
          "Courses taught and teaching assistantships in public finance, environmental economics, and econometrics.",
      },
      { property: "og:title", content: "Teaching | Eva Wang" },
      {
        property: "og:description",
        content: "Teaching record: instructor and graduate student instructor experience.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Teaching,
});

const INSTRUCTOR = [
  { course: "Principles of Microeconomics (ECON 101)", meta: "Instructor, Summer 2025" },
];

const ASSISTANT = [
  { course: "Public Economics (ECON 481)", meta: "Graduate Student Instructor, Fall 2024" },
  { course: "Environmental Economics (ECON 370)", meta: "Graduate Student Instructor, Winter 2024" },
  { course: "Introduction to Econometrics (ECON 451)", meta: "Graduate Student Instructor, Fall 2023" },
];

function Teaching() {
  return (
    <SiteLayout title="Teaching">
      <div className="max-w-3xl space-y-12">
        <section>
          <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
            Instructor of Record
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
            Graduate Student Instructor
          </h2>
          <ul className="mt-4 space-y-3">
            {ASSISTANT.map((item) => (
              <li key={item.course}>
                <p className="text-foreground/90">{item.course}</p>
                <p className="text-sm text-muted-foreground">{item.meta}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="border-b border-border pb-2 font-serif text-xl font-semibold text-brand">
            Teaching Statement
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/90">
            I teach economics as a set of tools for reasoning about policy trade-offs. My courses
            emphasize careful identification, transparent data work, and the ability to explain
            quantitative results to non-specialist audiences.
          </p>
        </section>
      </div>
    </SiteLayout>
  );
}
