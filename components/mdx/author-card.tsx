/* eslint-disable @next/next/no-img-element */
import { type Author } from "@/lib/authors";
import { cn } from "@/lib/utils";

interface AuthorCardProps {
  author: Author;
  className?: string;
}

export function AuthorCard({ author, className }: AuthorCardProps) {
  return (
    <div className={cn("flex items-start gap-2", className)}>
      <img
        src={author.avatar}
        alt={author.name}
        className="border-border h-8 w-8 rounded-full border object-cover"
      />
      <div className="flex-1">
        <h3 className="text-sm font-semibold tracking-tight text-balance">
          {author.name}
        </h3>
        <p className="text-muted-foreground text-xs text-balance">
          {author.position}
        </p>
      </div>
    </div>
  );
}
