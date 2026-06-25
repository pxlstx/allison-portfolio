import Link from "next/link";
import type { CaseStudyMeta } from "@/lib/case-studies";

type CaseStudyCardProps = {
  study: CaseStudyMeta;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="group">
      <Link href={`/work/${study.slug}`} className="block">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-stone-300 group-hover:shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-4 text-sm text-stone-500">
            <span>{study.year}</span>
            <span>{study.role}</span>
          </div>

          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-stone-900">
            {study.title}
          </h2>

          <p className="mb-5 text-base leading-relaxed text-stone-600">
            {study.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
