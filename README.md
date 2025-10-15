# Resume Builder

A secure, full-stack resume builder application built with Next.js, TypeScript, and PostgreSQL.

## 🚀 Features

- **Secure Authentication**: NextAuth.js with Google OAuth
- **Type-Safe**: Strict TypeScript with no `any` types
- **Security-First**: Input validation, sanitization, and rate limiting
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **PDF Export**: Generate professional PDF resumes
- **Real-time Preview**: Live preview as you build
- **Multiple Templates**: Professional resume templates
- **Database**: PostgreSQL with Drizzle ORM

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: NextAuth.js
- **PDF Generation**: @react-pdf/renderer
- **Validation**: Zod
- **State Management**: Zustand
- **Deployment**: Vercel

## 📋 Prerequisites

Before you begin, ensure you have:

1. **Node.js** (v18 or higher)
2. **npm** or **bun** package manager
3. **PostgreSQL database** (Neon, Supabase, or local)
4. **Google OAuth credentials**

## 🔧 Environment Setup

### 1. Clone and Install

```bash
git clone <repository-url>
cd resume-builder
npm install
```

### 2. Environment Variables

Copy the environment template and fill in your values:

```bash
cp env.template .env.local
```

**Required Environment Variables:**

```env
# Database
DATABASE_URL=postgresql://username:password@host:port/database

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 3. Database Setup

Choose one of these database providers:

#### Option A: Neon (Recommended)
1. Sign up at [Neon](https://neon.tech)
2. Create a new project
3. Copy the connection string to `DATABASE_URL`

#### Option B: Supabase
1. Sign up at [Supabase](https://supabase.com)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string to `DATABASE_URL`

#### Option C: Local PostgreSQL
1. Install PostgreSQL locally
2. Create a database
3. Set `DATABASE_URL=postgresql://username:password@localhost:5432/database_name`

### 4. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Set authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Secret to your `.env.local`

### 5. Database Migration

```bash
# Generate migration files
npm run db:generate

# Apply migrations
npm run db:push
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Type checking
npm run type-check

# Database studio (optional)
npm run db:studio
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── (auth)/           # Auth pages
│   ├── dashboard/        # User dashboard
│   └── builder/          # Resume builder
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── resume/          # Resume-specific components
│   ├── forms/           # Form components
│   └── templates/       # Resume templates
├── lib/                  # Business logic
│   ├── db/              # Database layer
│   │   ├── repositories/ # Data access
│   │   └── schema/      # Database schema
│   ├── services/        # Business logic
│   ├── validations/     # Zod schemas
│   ├── security/        # Security utilities
│   └── auth/           # Authentication
├── types/               # TypeScript types
└── hooks/               # Custom React hooks
```

## 🔒 Security Features

- **Input Validation**: All inputs validated with Zod schemas
- **Input Sanitization**: XSS protection with DOMPurify
- **Rate Limiting**: API rate limiting to prevent abuse
- **Authentication**: Secure session handling with NextAuth.js
- **Authorization**: User-based access control
- **Security Headers**: CSP, HSTS, and other security headers
- **SQL Injection Protection**: Parameterized queries with Drizzle

## 🐳 Docker Development

```bash
# Start with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🚀 Deployment

### Vercel Deployment

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Environment Variables**: Add all environment variables in Vercel dashboard
3. **Database**: Ensure your database is accessible from Vercel
4. **Deploy**: Vercel will automatically deploy on push to main

### Environment Variables for Production

```env
DATABASE_URL=your_production_database_url
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your_production_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 📝 API Endpoints

### Authentication
- `GET /api/auth/signin` - Sign in page
- `POST /api/auth/signin/google` - Google OAuth
- `POST /api/auth/signout` - Sign out

### Resumes
- `GET /api/resumes` - Get user's resumes
- `POST /api/resumes` - Create new resume
- `GET /api/resumes/[id]` - Get specific resume
- `PUT /api/resumes/[id]` - Update resume
- `DELETE /api/resumes/[id]` - Delete resume

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run type checking and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify `DATABASE_URL` is correct
   - Ensure database is running and accessible
   - Check firewall settings

2. **Authentication Issues**
   - Verify Google OAuth credentials
   - Check `NEXTAUTH_URL` matches your domain
   - Ensure redirect URI is correct

3. **TypeScript Errors**
   - Run `npm run type-check` to see all errors
   - Ensure all environment variables are typed correctly
   - Check for missing dependencies

4. **Build Errors**
   - Clear `.next` folder and rebuild
   - Check for missing environment variables
   - Verify all imports are correct

## 📞 Support

For support, please open an issue on GitHub or contact the development team.