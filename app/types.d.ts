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