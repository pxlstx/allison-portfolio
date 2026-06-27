@AGENTS.md

# Portfolio Design System Rules

You are working on Allison Sarno's portfolio site (allisonsarno.com).
Built with Next.js and Tailwind CSS.
Design tokens live in `src/lib/design-system/tokens.ts` and `src/app/globals.css`.

Follow these rules on every task. Do not invent new patterns.
If something doesn't map to an existing token, ask before creating a new one.

---

## Fonts

Two fonts. No others.

- **Headlines, subheads, typographic moments:** `font-display` (Neue Haas Grotesk Display), `font-weight: 300`
- **Body copy, labels, captions, UI text:** `font-sans` (Neue Haas Grotesk Text), `font-weight: 400`
- **All-caps labels only:** `font-sans`, `font-weight: 500`
- **Body at light (300):** use `font-display` — Text has no 300 in the Typekit kit

NEVER use font-weight 600, 700, bold, or semibold anywhere.
NEVER use any font other than font-display or font-sans.

---

## Type Scale

Use the CSS custom properties and typography tokens — not Tailwind's default scale.

| Token | Value | Use |
|-------|-------|-----|
| `text-hero` | clamp(48px, 8vw, 106px) | Page titles, home intro |
| `text-display` | clamp(40px, 5.5vw, 72px) | Chapter headlines, typographic moments |
| `text-lead` | 24px | Intro copy, subtitles, next project |
| `text-body` | 16px | All body copy |
| `text-small` | 13px | Captions, meta values, nav meta |
| `text-label` | 11px | All-caps labels |

Prefer `typography.*` from `src/lib/design-system/tokens.ts` over hand-rolled class strings.

NEVER use arbitrary sizes like `text-[17px]`, `text-2xl`, `text-lg`, or any Tailwind default type class.
NEVER add a new size to the scale without checking first.

---

## Colours

All colours come from `globals.css` tokens. Never hardcode hex values in components.

| Token | Use |
|-------|-----|
| `--color-ink` / `bg-ink` | Page background |
| `--color-ink-2` / `bg-ink-2` | Card backgrounds, subtle surfaces |
| `--color-w-100` | Full white — headlines, primary text |
| `--color-w-60` | Body copy, secondary text |
| `--color-w-30` | Tertiary text, placeholders |
| `--color-w-15` | Borders, very subtle text |
| `--color-w-08` | Subtle card borders |
| `--color-accent` | Orange #D4622A — all-caps labels, typographic accent words, rule lines next to labels |
| `--color-bdr` | Default border opacity |
| `--color-bdr-mid` | Card outline borders at rest |
| `--color-bdr-bright` | Card outline borders on hover |

NEVER use Tailwind colour classes like `text-white`, `bg-gray-900`, `border-gray-700`.
ALWAYS use the token equivalents: `text-w-100`, `bg-ink`, `border-bdr`.

---

## Alignment

- Everything is **left aligned** by default
- `text-center` is only permitted on the closing CTA moment on the homepage
- NEVER center text in case studies, work page, about page, or chat page

---

## Spacing & Layout

- Horizontal page padding: `px-page` class only (72px desktop, 28px mobile)
- NEVER use arbitrary padding like `px-[72px]` or `px-18`
- Page container max-width: `max-w-[1440px] mx-auto`
- Prose max-width: `max-w-[720px]`
- Callout / display text max-width: `max-w-[900px]`

---

## Borders & Radius

- Default border radius: `rounded-sm` (2px) — never more
- NEVER use `rounded`, `rounded-md`, `rounded-lg`, `rounded-full` except on pill buttons
- Border default: `border border-bdr`
- Card outline at rest: `border border-bdr-mid`
- Card outline on hover: `hover:border-bdr-bright`

---

## Components

### All-caps labels
Always use the `.label` utility class from globals.css.
```
className="label"
```
This applies: font-sans, font-weight 500, text-label size, tracking-label, uppercase, color-accent.
NEVER recreate this with individual Tailwind classes.

### Cards (work page)
- Border wraps entire card including text area
- 16px padding inside border
- Client name below image, orange all-caps label above title
- Hover: border brightens, image brightens, title transitions to full white

### Case study deliverables
- Two-column grid: left column (label + headline stacked), right column (body copy)
- Left column width: 260px fixed
- Label: `.label` class
- Headline: `font-display font-[300] text-display`
- Body: `font-display font-[300] text-body text-w-60` (Display light — Text has no 300 in kit)

### Full-bleed images
- No max-width, edge to edge
- Always `object-fit: cover` unless showing app screens (use contain + dark background)

---

## What to NEVER do

- ❌ Hardcode any colour hex value in a component
- ❌ Use inline styles (`style={{}}`) — use Tailwind classes or globals.css utilities
- ❌ Use arbitrary Tailwind values `text-[17px]`, `px-[48px]`, `mt-[32px]`
- ❌ Use font-weight 600, 700, or bold
- ❌ Use `text-center` except on the homepage CTA
- ❌ Add new font sizes outside the type scale
- ❌ Use Tailwind default colour classes (`text-white`, `bg-gray-*`, etc.)
- ❌ Create new spacing tokens without asking first
- ❌ Use border-radius larger than 2px except on pill buttons

---

## When in doubt

Ask before inventing. If something doesn't map cleanly to an existing token or pattern,
describe what you're trying to achieve and ask how it should be handled within the system.
Do not approximate — the system exists to prevent drift.
