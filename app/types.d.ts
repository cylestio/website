/// <reference types="react" />
/// <reference types="next" />

declare module 'framer-motion' {
  export const motion: {
    div: React.FC<any>;
    h1: React.FC<any>;
    p: React.FC<any>;
    // Add other motion components as needed
  };
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

// Global types
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: any
    ) => void;
    dataLayer: any[];
  }
}

// Blog post types
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string;
  image?: string;
}

interface BlogMetadata {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  image?: string;
}

export type { BlogPost, BlogMetadata }; 