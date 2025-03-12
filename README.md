# Cylestio Website

This is the official website for Cylestio, built with Next.js and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                # Next.js app directory
│   ├── components/     # React components
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── public/            # Static assets
└── ...config files
```

## Features

- Modern, responsive design
- Built with Next.js 14
- Styled with Tailwind CSS
- TypeScript support
- Optimized for performance

## Deployment

This website can be deployed to any platform that supports Next.js applications. Here are some recommended options:

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Development

- Run `npm run dev` to start the development server
- Run `npm run lint` to check for linting issues
- Run `npm run build` to create a production build

## License

All rights reserved © Cylestio