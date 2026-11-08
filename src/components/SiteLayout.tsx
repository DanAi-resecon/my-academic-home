import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "Bio" },
  { to: "/cv", label: "CV" },
  { to: "/research", label: "Research" },
  { to: "/teaching", label: "Teaching" },
] as const;

export const SITE_NAME = "Dan Ai";

export function SiteLayout({
  title,
  bannerImage,
  bannerPosition = "center 28%",
  children,
}: {
  title?: string;
  bannerImage?: string;
  bannerPosition?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-brand">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-sans text-xl font-medium text-brand-foreground">
            {SITE_NAME}
          </Link>
          <nav className="flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-sans text-[15px] text-brand-foreground/85 transition-colors hover:text-brand-foreground"
                activeProps={{ className: "font-semibold text-brand-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className={`relative overflow-hidden bg-banner ${bannerImage ? "h-[clamp(160px,24vw,320px)]" : ""}`}>
        {bannerImage && (
          <>
            <img
              src={bannerImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: bannerPosition }}
            />
            <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
          </>
        )}
        <div className={bannerImage ? "absolute inset-0 flex items-center justify-center px-6" : "relative mx-auto max-w-6xl px-6 py-14"}>
          <h1 className={`text-center font-serif text-5xl font-bold tracking-tight md:text-6xl ${bannerImage ? "text-white" : "text-foreground"}`}>
            {title ?? SITE_NAME}
          </h1>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-14">{children}</main>

      <footer className="mx-auto max-w-6xl px-6 pb-12 pt-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {SITE_NAME}
        </p>
      </footer>
    </div>
  );
}
