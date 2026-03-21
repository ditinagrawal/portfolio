type FrontMatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
};

type ProjectFrontMatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  liveDemo?: string;
  sourceCode?: string;
  techStack: string[];
  featured?: boolean;
};
