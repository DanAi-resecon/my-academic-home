import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dan Ai | Resource Economics" },
      {
        name: "description",
        content:
          "Dan Ai is a Ph.D. candidate in Resource Economics at the University of Massachusetts Amherst, affiliated with the NSF-funded ELEVATE program.",
      },
      { property: "og:title", content: "Dan Ai | Resource Economics" },
      {
        property: "og:description",
        content:
          "Academic homepage of Dan Ai: Ph.D. candidate in Resource Economics at UMass Amherst, working on the energy transition.",
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
          alt="Portrait of Dan Ai"
          width={768}
          height={1024}
          className="w-full max-w-[380px] object-cover"
        />

        <div className="space-y-5">
          <h2 className="font-serif text-2xl font-semibold text-brand">Welcome to my website.</h2>
          <p className="leading-relaxed text-foreground/90">
            I am a Ph.D. candidate in Resource Economics at the University of Massachusetts Amherst.
            I'm also affiliated with ELEVATE, an NSF funded research program focused on the technical,
            social, and climate challenges of the energy transition. My interdisciplinary background
            includes a bachelor's degree in Computer Science and a master's degree in Applied Economics
            from China before joining UMass Amherst.
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
              href="mailto:dai@umass.edu"
              className="font-serif text-brand underline underline-offset-2"
            >
              dai@umass.edu
            </a>
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
