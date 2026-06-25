import Link from "next/link";
import type { ReactNode } from "react";

type WithChildren = {
  children?: ReactNode;
};

type AnchorProps = WithChildren & {
  href?: string;
};

export const mdxComponents = {
  h2: ({ children }: WithChildren) => (
    <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-stone-900 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }: WithChildren) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-stone-900">
      {children}
    </h3>
  ),
  p: ({ children }: WithChildren) => (
    <p className="mb-5 text-lg leading-relaxed text-stone-600">{children}</p>
  ),
  ul: ({ children }: WithChildren) => (
    <ul className="mb-6 list-disc space-y-2 pl-6 text-lg text-stone-600">
      {children}
    </ul>
  ),
  ol: ({ children }: WithChildren) => (
    <ol className="mb-6 list-decimal space-y-2 pl-6 text-lg text-stone-600">
      {children}
    </ol>
  ),
  li: ({ children }: WithChildren) => (
    <li className="leading-relaxed">{children}</li>
  ),
  a: ({ href, children }: AnchorProps) => (
    <Link
      href={href ?? "#"}
      className="font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-stone-900"
    >
      {children}
    </Link>
  ),
  blockquote: ({ children }: WithChildren) => (
    <blockquote className="my-8 border-l-2 border-stone-300 pl-6 text-lg italic text-stone-500">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-stone-200" />,
  strong: ({ children }: WithChildren) => (
    <strong className="font-semibold text-stone-800">{children}</strong>
  ),
};
