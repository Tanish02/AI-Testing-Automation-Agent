# 🚀 AI Testing Automation Agent

An AI-powered platform that automatically analyzes GitHub repositories and generates intelligent test cases using Gemini AI.

The goal of this project is to reduce manual testing effort by automatically understanding source code and creating meaningful test scenarios for developers and QA teams.

---

## ✨ Features

### 🔐 Authentication

- Secure user authentication using Clerk
- Protected workspace routes
- User-specific repositories and test cases

### 🔗 GitHub Integration

- Connect GitHub account
- Fetch repositories using GitHub OAuth
- Select repositories directly from GitHub

### 🤖 AI Test Case Generation

- Analyze repository source code
- Generate intelligent test cases using Gemini AI
- Store generated test cases for future reference

### 🗄️ Database Management

- PostgreSQL database using Neon
- Drizzle ORM for type-safe database operations
- Repository and test case persistence

### 💳 Subscription & Payments

- Stripe Checkout integration
- Secure payment processing
- Webhook handling for subscription events

---

## 🏗️ Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Radix UI
- Lucide React

### Backend

- Next.js API Routes
- Node.js
- TypeScript

### Database

- Neon PostgreSQL
- Drizzle ORM

### Authentication

- Clerk

### AI

- Google Gemini AI

### Payments

- Stripe

### External APIs

- GitHub REST API

---

## 📸 Screenshots

### Dashboard

![Dashboard](./snapshots/dashboard.png)

### Repository Selection

![Repository Selection](./snapshots/repository-selection.png)

### Generated Test Cases

![Generated Test Cases](./snapshots/test-cases.png)

---

## ⚙️ Environment Variables

Create a `.env.local` file and add:

```env
DATABASE_URL=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_REDIRECT_URI=

GEMINI_API_KEY=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🗄️ Database Commands

Generate schema:

```bash
npm run db:generate
```

Push schema:

```bash
npm run db:push
```

Open Drizzle Studio:

```bash
npm run db:studio
```

---

## 🔄 Application Workflow

1. User signs in using Clerk
2. Connects GitHub account
3. Selects a repository
4. Repository files are analyzed
5. Gemini AI generates test cases
6. Generated test cases are stored in PostgreSQL
7. User can review and execute generated test scenarios

---

## 🎯 Future Improvements

- Automated test execution
- Support for multiple AI providers
- Test case export (PDF/Excel)
- CI/CD integration
- Test coverage analysis
- Team collaboration features
- Repository scanning optimization

---

## 👨‍💻 Author

Tanish Sharma

Built to explore the intersection of AI, software testing, and developer productivity.
