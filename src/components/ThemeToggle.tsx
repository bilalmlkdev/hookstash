import { useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import type { ThemePreference } from "../lib/useTheme";

const OPTIONS: { value: ThemePreference; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

export function ThemeToggle({
  preference,
  onChange,
}: {
  preference: ThemePreference;
  onChange: (pref: ThemePreference) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));
  const current = OPTIONS.find((o) => o.value === preference) ?? OPTIONS[2];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change theme"
        className="flex h-8 px-4 items-center justify-center rounded border border-border text-ink-soft transition-colors hover:border-border-strong hover:text-ink"
      >
        {/* Text-only trigger */}
        <span className="text-xs font-medium">{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-40 w-36 overflow-hidden rounded-lg border border-border bg-surface py-1 shadow-lg">
          {OPTIONS.map((opt) => {
            const active = opt.value === preference;
            return (
              <button
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center px-3 py-2 text-left text-sm transition-colors ${
                  active ? "text-ink" : "text-ink-soft hover:bg-canvas"
                }`}
              >
                <span className="flex-1">{opt.label}</span>
                {active && (
                  <span className="text-accent">•</span> // or a check mark without icon
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
