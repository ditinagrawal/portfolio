"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/ui/contribution-graph";
import { cn } from "@/lib/utils";

type Activity = {
  date: string;
  count: number;
  level: number;
};

export function ContributionGraphView({
  contributions,
  total,
}: {
  contributions: Activity[];
  total: number;
}) {
  return (
    <ContributionGraph data={contributions} totalCount={total} blockSize={8}>
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <ContributionGraphBlock
            activity={activity}
            className={cn(
              "cursor-pointer",
              'data-[level="0"]:fill-[#ebedf0]',
              'data-[level="1"]:fill-[#9be9a8]',
              'data-[level="2"]:fill-[#40c463]',
              'data-[level="3"]:fill-[#30a14e]',
              'data-[level="4"]:fill-[#216e39]'
            )}
            dayIndex={dayIndex}
            weekIndex={weekIndex}
          />
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground flex items-center gap-1 text-sm">
                Year {year}:
                <span className="font-semibold">
                  {totalCount.toLocaleString()} contributions
                </span>
              </span>
            </div>
          )}
        </ContributionGraphTotalCount>
        <ContributionGraphLegend>
          {({ level }) => (
            <div
              className="group relative flex h-3 w-3 items-center justify-center"
              data-level={level}
            >
              <div
                className={`h-full w-full rounded-sm border ${level === 0 ? "bg-muted" : ""} ${level === 1 ? "bg-emerald-200" : ""} ${level === 2 ? "bg-emerald-400" : ""} ${level === 3 ? "bg-emerald-600" : ""} ${level === 4 ? "bg-emerald-800" : ""} `}
              />
              <span className="bg-popover text-popover-foreground absolute -top-8 hidden rounded px-2 py-1 text-xs shadow-md group-hover:block">
                Level {level}
              </span>
            </div>
          )}
        </ContributionGraphLegend>
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}
