import { extendTailwindMerge } from "tailwind-merge";

/** Custom @theme font sizes — must be registered so they aren't dropped vs text-* colors. */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "hero",
            "display",
            "title",
            "lead",
            "body",
            "body-md",
            "small",
            "caption",
            "micro",
            "label",
          ],
        },
      ],
    },
  },
});

export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}
