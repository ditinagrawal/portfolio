"use client";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  tagCounts?: Record<string, number>;
}

export function TagFilter({ tags, selectedTag, tagCounts }: TagFilterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams();
    if (tag !== "All") {
      params.set("tag", tag);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const DesktopTagFilter = () => (
    <div className="hidden flex-wrap gap-2 md:flex">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`flex h-8 cursor-pointer items-center rounded-lg border px-1 pl-3 text-sm transition-colors ${
            selectedTag === tag
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border hover:bg-muted"
          }`}
        >
          <span>{tag}</span>
          {tagCounts?.[tag] && (
            <span
              className={`ml-2 flex h-6 min-w-6 items-center justify-center rounded-md border text-xs font-medium ${
                selectedTag === tag
                  ? "border-border/40 dark:border-primary-foreground bg-background text-primary"
                  : "border-border dark:border-border"
              }`}
            >
              {tagCounts[tag]}
            </span>
          )}
        </button>
      ))}
    </div>
  );

  const MobileTagFilter = () => (
    <Drawer>
      <DrawerTrigger className="border-border hover:bg-muted flex w-full items-center justify-between rounded-lg border px-4 py-2 transition-colors md:hidden">
        <span className="text-sm font-medium capitalize">{selectedTag}</span>
        <ChevronDown className="h-4 w-4" />
      </DrawerTrigger>

      <DrawerContent className="md:hidden">
        <DrawerHeader>
          <h3 className="text-sm font-semibold">Select Category</h3>
        </DrawerHeader>

        <DrawerBody>
          <div className="space-y-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="flex w-full cursor-pointer items-center justify-between text-sm font-medium transition-colors"
              >
                <span
                  className={`flex w-full cursor-pointer items-center justify-between text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? "text-primary underline underline-offset-4"
                      : "text-muted-foreground"
                  }`}
                >
                  {tag}
                </span>
                {tagCounts?.[tag] && (
                  <span className="border-border ml-2 flex h-6 min-w-6 flex-shrink-0 items-center justify-center rounded-md border">
                    {tagCounts[tag]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <>
      <DesktopTagFilter />
      <MobileTagFilter />
    </>
  );
}
