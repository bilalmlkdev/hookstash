import { ThemeToggle } from "./ThemeToggle";
import type { ReactNode } from "react";
import type { ThemePreference } from "../lib/useTheme";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 2.86-.39c.97 0 1.94.13 2.86.39 2.18-1.48 3.13-1.17 3.13-1.17.63 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

type View = "gallery" | "detail" | "docs" | "playground";

export function TopNav({
  view,
  onGoHome,
  onNavigate,
  themePreference,
  onThemeChange,
}: {
  view: View;
  onGoHome: () => void;
  onNavigate: (view: "docs" | "playground") => void;
  themePreference: ThemePreference;
  onThemeChange: (pref: ThemePreference) => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-3">
        <button onClick={onGoHome} className="flex shrink-0 items-center gap-1">
          {" "}
          <svg
            className="h-6 w-6"
            fill="currentColor"
            aria-hidden="true"
            viewBox="-51.2 -51.2 614.40 614.40"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>{" "}
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>{" "}
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill="currentColor"
                d="M244.188 21.97C347.89 119.18 428.1 216.274 494.717 304.06V191.656c-7.062-6.39-14.155-12.677-21.343-18.844 2.986-3.465 4.813-7.972 4.813-12.906 0-10.927-8.855-19.78-19.782-19.78-6.285 0-11.875 2.96-15.5 7.53-43.25-34.448-88.287-64.956-134-91.312 1.006-2.025 1.594-4.274 1.594-6.688 0-8.35-6.773-15.125-15.125-15.125-5.416 0-10.142 2.848-12.813 7.126-12.764-6.883-25.567-13.452-38.375-19.687zM104.625 40.093c5.11 5.177 10.18 10.36 15.22 15.593-4.225 1.173-7.38 4.29-8.345 9-1.812 8.844 4.727 19.92 14.625 24.72 3.642 1.766 7.237 2.42 10.406 2.124-2.535 4.11-4 8.974-4 14.157 0 14.89 12.05 26.938 26.94 26.938 8.68 0 16.41-4.097 21.343-10.47 88.686 101.2 165.598 208.4 235.156 306.72-7.4 6.047-12.126 15.23-12.126 25.53 0 18.213 14.756 32.97 32.97 32.97 6.274 0 12.13-1.77 17.123-4.813 3.086 4.354 6.193 8.76 9.25 13.063h31.532V381.28c-41.357-69.223-154.77-193.34-184.533-213.31 24.14 33.4 45.1 64.336 64.813 94.03-87.49-95.75-183.443-179.588-270.375-221.906zm-28.22 15.25c-1.868.086-3.736.548-5.53 1.406-7.176 3.433-10.214 12.042-6.78 19.22 3.432 7.175 12.04 10.213 19.218 6.78 7.176-3.433 10.214-12.042 6.78-19.22-2.574-5.38-8.08-8.445-13.687-8.186zm355.75 20.375c-1.454.05-2.858.357-4.155.968-6.918 3.256-8.265 13.625-3 23.156 5.265 9.53 15.144 14.632 22.063 11.375 6.918-3.258 8.264-13.627 3-23.157-4.278-7.744-11.6-12.56-17.907-12.344zm-151.124 35.25c-1.983.123-3.845.72-5.436 1.78-6.366 4.236-6.168 14.688.437 23.344 6.607 8.655 17.104 12.236 23.47 8 6.366-4.236 6.168-14.688-.438-23.344-4.954-6.492-12.078-10.155-18.03-9.78zM25.19 149.28c91.018 100.043 158.696 190.397 212 271.595-8.48-1.364-18.445 4.948-20.25 13.594-6.22 29.777 12.896 53.913 47.593 61.155H390.19c-97.972-139.74-234.782-282.95-365-346.344zm30.03 101.845c-3.807.078-7.195 1.333-9.406 3.844-5.052 5.738-2.15 15.785 6.47 22.436 8.62 6.65 19.697 7.396 24.75 1.656 5.052-5.74 2.182-15.786-6.438-22.437-4.85-3.74-10.48-5.6-15.375-5.5zm47.188 38.125c-14.89 0-26.937 12.048-26.937 26.938 0 14.89 12.047 26.968 26.936 26.968 14.89 0 26.97-12.08 26.97-26.97 0-14.888-12.08-26.936-26.97-26.936zm79.72 103.47c-10.928 0-19.782 8.853-19.782 19.78 0 10.927 8.854 19.78 19.78 19.78 10.928 0 19.782-8.853 19.782-19.78 0-10.927-8.854-19.78-19.78-19.78z"
              ></path>{" "}
            </g>{" "}
          </svg>{" "}
          <span className="hidden font-semibold tracking-tight sm:inline relative top-0.5">
            {" "}
            Hookstash{" "}
          </span>{" "}
        </button>

        <nav className="hidden items-center gap-5 md:flex">
          <NavLink
            active={view === "gallery" || view === "detail"}
            onClick={onGoHome}
          >
            Hooks
          </NavLink>
          <NavLink
            active={view === "playground"}
            onClick={() => onNavigate("playground")}
          >
            Playground
          </NavLink>
          <NavLink active={view === "docs"} onClick={() => onNavigate("docs")}>
            Docs
          </NavLink>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <a
            href="https://github.com/bilalmlkdev/hookstash"
            target="_blank"
            rel="noreferrer"
            aria-label="View on GitHub"
            className="flex h-8 w-8 items-center justify-center rounded border border-border text-ink-soft transition-colors hover:border-border-strong hover:text-ink"
          >
            <GithubMark className="h-4 w-4" />
          </a>
          <ThemeToggle preference={themePreference} onChange={onThemeChange} />
        </div>
      </div>
    </header>
  );
}

function NavLink({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-sm transition-colors ${
        active ? "font-medium text-ink" : "text-ink-faint hover:text-ink-soft"
      }`}
    >
      {children}
    </button>
  );
}
