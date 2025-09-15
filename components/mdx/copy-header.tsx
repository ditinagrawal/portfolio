"use client";

import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import React from "react";

interface CopyHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: number;
  children: React.ReactNode;
}

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

export function CopyHeader({
  level,
  children,
  className,
  ...props
}: CopyHeaderProps) {
  const text = typeof children === "string" ? children : "";
  const id = generateSlug(text);

  const HeadingTag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  const copyToClipboard = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;

    window.history.pushState({}, "", `#${id}`);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error(err);
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
  };

  const showCopyFunctionality = level === 1 || level === 2;

  if (showCopyFunctionality) {
    return (
      <HeadingTag
        id={id}
        className={cn(
          "group hover:text-muted-foreground relative flex cursor-pointer scroll-mt-20 items-center gap-2 transition-colors duration-200",
          className,
        )}
        onClick={copyToClipboard}
        title="Click to copy link to this section"
        {...props}
      >
        {children}
        <Link className="h-4 w-4 flex-shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      </HeadingTag>
    );
  }

  return (
    <HeadingTag id={id} className={cn("scroll-mt-20", className)} {...props}>
      {children}
    </HeadingTag>
  );
}
