import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eva Wang | Public Finance Economist" },
      {
        name: "description",
        content:
          "Eva Wang is a public finance economist working on optimal taxation, environmental policy, and empirical analysis of corrective taxes.",
      },
      { property: "og:title", content: "Eva Wang | Public Finance Economist" },
      {
        property: "og:description",
        content:
          "Academic homepage of Eva Wang: research in public finance, energy and environmental economics.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Bio,
});

function Bio() {
  return (
    <SiteLayout>
      <div className="grid gap-12 md:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
        <img
          src={portrait}
          alt="Portrait of Eva Wang"
          width={768}
          height={1024}
          className="w-full max-w-[380px] object-cover"
        />

        <div className="space-y-5">
          <h2 className="font-serif text-2xl font-semibold text-brand">Welcome to my website.</h2>
          <p className="leading-relaxed text-foreground/90">
            I am a Public Finance Economist whose research combines optimal taxation theory and
            empirical analysis. I received my Ph.D. in Economics from the University of Michigan in
            2026.
          </p>
          <p className="leading-relaxed text-foreground/90">
            My research interests lie in Public Finance and Energy and Environmental Economics. My
            work examines the design and consequences of corrective taxes and subsidies, with
            applications to environmental policy, clean technology adoption, and health-related
            consumption.
          </p>
          <p className="leading-relaxed text-foreground/90">
            You can view my{" "}
            <Link to="/cv" className="text-brand underline underline-offset-2">
              CV
            </Link>{" "}
            here.
          </p>
          <p className="leading-relaxed text-foreground/90">
            Contact:{" "}
            <a
              href="mailto:yiyunw@umich.edu"
              className="font-serif text-brand underline underline-offset-2"
            >
              yiyunw@umich.edu
            </a>
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
