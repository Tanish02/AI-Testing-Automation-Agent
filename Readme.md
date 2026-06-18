# AI-Testing-Automation-Agent

## Snapshots 📸


![Workspace screenshot 1](snapshots/a25f1fb3-982a-430c-8882-145c1b88a1c9.png)

![Workspace screenshot 2](snapshots/Screenshot%202026-06-19%20014412.png)

![Workspace screenshot 3](snapshots/Screenshot%202026-06-19%20014440.png)


## Technologies & Libraries

- Language: TypeScript
- Runtime: Node.js
- Framework: Next.js (App Router)
- UI: React, Tailwind CSS, Radix UI (`@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `@radix-ui/react-checkbox`), `lucide-react`
- Authentication: Clerk (`@clerk/nextjs`)
- Database / ORM: Drizzle ORM, Neon Serverless PostgreSQL
- API / AI: GitHub REST API, Google GenAI Gemini
- Payments: Stripe (`stripe`, `@stripe/stripe-js`)
- HTTP client: `axios`
- Tooling: `eslint`, `drizzle-kit`, TypeScript, Tailwind CSS

## Project Overview

This repository contains a TypeScript-based Next.js application that combines user authentication, GitHub repository integration, AI-generated test case generation, and Stripe payment handling. The code includes UI components, API route handlers, a database schema, and service integrations.

## Repository Structure

- `app/`
  - `api/` — server route handlers for GitHub OAuth, repository fetching, test case generation, Stripe checkout, and webhooks
  - `sign-in/`, `sign-up/` — Clerk sign-in and sign-up pages
  - `workspace/` — protected workspace layout and page
  - `provider.tsx` — client-side provider creating a user session and calling `/api/users`
  - `layout.tsx` — global application layout with `ClerkProvider`
  - `page.tsx` — home page rendering a Clerk `UserButton`
- `components/custom/` — workspace-specific UI components including repo selection, repo list, test case list, and workspace body
- `components/ui/` — reusable UI primitives (`accordion`, `badge`, `button`, `card`, `checkbox`, `dialog`, `input`)
- `context/` — React context for user details
- `db/`
  - `index.ts` — Neon database connection and Drizzle ORM setup
  - `schema.ts` — PostgreSQL table schema definitions for `users`, `repositories`, and `test_cases`
- `lib/` — `stripe.ts` Stripe client wrapper
- `public/` — static assets
- `snapshots/` — saved project snapshots and screenshots
- `drizzle.config.ts` — Drizzle CLI configuration
- `package.json`, `tsconfig.json`, `next.config.ts` — project and build configuration

## Snapshots

The `snapshots/` folder contains saved screenshots and snapshots of the application state.

## Features / Implementations

- Clerk-based authentication and protected workspace routes
- GitHub OAuth flow and callback handling
- GitHub repository listing via authenticated GitHub API requests
- Saving selected GitHub repositories to a PostgreSQL database
- Generating AI test cases from GitHub repository file content using Google Gemini
- Persisting generated test cases in the database
- Querying stored test cases by repository ID
- Stripe checkout session creation endpoint
- Stripe webhook endpoint for handling checkout events
- Drizzle ORM schema definitions for users, repositories, and test cases
- Workspace UI allowing repo selection, repo listing, and AI test case generation

## Setup & Requirements

- Node.js
- npm
- Environment variables expected by the code:
  - `DATABASE_URL`
  - `GITHUB_CLIENT_ID`
  - `GITHUB_CLIENT_SECRET`
  - `GITHUB_REDIRECT_URI`
  - `GEMINI_API_KEY`
  - `STRIPE_SECRET_KEY`
  - `STRIPE_WEBHOOK_SECRET`
  - `NEXT_PUBLIC_APP_URL`

## Usage

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set required environment variables.

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Start the production server:

   ```bash
   npm start
   ```

6. Database commands:
   - Generate migration or schema files:
     ```bash
     npm run db:generate
     ```
   - Push schema changes:
     ```bash
     npm run db:push
     ```
   - Open Drizzle Studio:
     ```bash
     npm run db:studio
     ```

## Scope & Intent

This repository is an application under development. It is structured as a working app with authentication, GitHub integration, AI test generation, and payment endpoints rather than a purely learning or demonstration project.

## Limitations

- No license is specified in the repository.
- No automated tests are present in the visible files.
- Client code references `/api/users`, but a corresponding route is not present.
- Several features require external service credentials and environment configuration.
- The implementation appears incomplete in places and depends on configured external services.

## Contributing

Contributions can be made by opening issues or pull requests. Review existing code before proposing changes.

## License

No license is specified in this repository.
