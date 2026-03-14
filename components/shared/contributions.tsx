import { JetBrains_Mono } from "next/font/google";

import { IconGitPullRequest, IconTools } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

import { ContributionGraphView } from "./contribution-graph-view";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type GitHubContributionsResponse = {
  total: Record<string, number>;
  contributions: {
    date: string;
    count: number;
    level: number;
  }[];
};

async function getContributions() {
  const url = new URL(
    `/v4/ditinagrawal`,
    "https://github-contributions-api.jogruber.de"
  );

  const response = await fetch(url, {
    next: { revalidate: 60 * 60 },
  });

  if (!response.ok) {
    return { contributions: [], total: 0 };
  }

  const data = (await response.json()) as GitHubContributionsResponse;
  const currentYear = new Date().getFullYear();
  const total = data.total[currentYear] ?? 0;

  const currentYearContributions = data.contributions.filter((c) =>
    c.date.startsWith(String(currentYear))
  );

  return { contributions: currentYearContributions, total };
}

export const Contributions = async () => {
  const { contributions, total } = await getContributions();

  if (contributions.length === 0) {
    return null;
  }

  return (
    <section className="pb-16">
      <div className="space-y-8">
        <div>
          <h4
            className={cn(
              jetBrainsMono.className,
              "flex items-center gap-x-2 text-sm font-medium text-zinc-600"
            )}
          >
            <IconGitPullRequest className="mt-0.5 size-4" /> My Contributions
          </h4>
        </div>
        <ContributionGraphView contributions={contributions} total={total} />
      </div>
    </section>
  );
};
