"use client";

import ShikiHighlighter from "react-shiki";

export const Code = ({ children, ...props }: { children: string }) => {
  const language = (props as { className?: string }).className?.split("-")[1];
  return (
    <ShikiHighlighter
      language={language}
      theme="one-light"
      showLineNumbers
      style={{
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
      }}
    >
      {children.trim()}
    </ShikiHighlighter>
  );
};
