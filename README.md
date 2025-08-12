# Caprae Capitals - Frontend Assignment

A modern Next.js 15 project built with TypeScript, Tailwind CSS, and Shadcn/UI.

## 🚀 Features

- **Next.js 15** - Latest version with App Router
- **TypeScript** - Full type safety and IntelliSense
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Beautiful and accessible component library
- **Modern Architecture** - Clean folder structure and best practices

## 📁 Project Structure

```
caprae-capitals/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/             # Reusable UI components
│   └── ui/                # Shadcn/UI components
│       └── button.tsx     # Button component
├── lib/                    # Utility functions
│   └── utils.ts           # Common utilities (cn function)
├── types/                  # TypeScript type definitions
│   └── index.ts           # Common interfaces and types
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Components**: Shadcn/UI
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

The project uses Tailwind CSS with a custom design system:

- **CSS Variables**: HSL color system for easy theming
- **Dark Mode**: Built-in dark mode support
- **Components**: Pre-built Shadcn/UI components
- **Utilities**: Custom utility classes and animations

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*`)
- Next.js types included

### Tailwind CSS
- Custom color palette
- Responsive design utilities
- Animation support
- Component variants

### Shadcn/UI
- Radix UI primitives
- Accessible components
- Customizable variants
- Type-safe props

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_NAME=Caprae Capitals
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🚀 Deployment

The project is ready for deployment on Vercel, Netlify, or any other hosting platform that supports Next.js.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is part of the Caprae Capitals Frontend Assignment.
