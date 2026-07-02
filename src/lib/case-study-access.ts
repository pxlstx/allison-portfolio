/**
 * Client-side "soft" password gate for NDA case studies.
 *
 * Note: this is a lightweight gate for a portfolio, not real security — the
 * password ships in the client bundle and statically generated pages still
 * contain their markup. It keeps casual visitors out, nothing more.
 */
export const caseStudyPasswords: Record<string, string> = {
  unique: "uniquedesign!",
};

export function getCaseStudyPassword(slug: string): string | undefined {
  return caseStudyPasswords[slug];
}

const storageKey = (slug: string) => `cs-unlock:${slug}`;

export function isCaseStudyUnlocked(slug: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(storageKey(slug)) === "1";
  } catch {
    return false;
  }
}

export function unlockCaseStudy(slug: string): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(storageKey(slug), "1");
  } catch {
    /* ignore storage failures */
  }
}

export function slugFromHref(href?: string): string | null {
  if (!href) return null;
  const match = href.match(/\/work\/([^/?#]+)/);
  return match ? match[1] : null;
}
