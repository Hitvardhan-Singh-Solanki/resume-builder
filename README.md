# 📄 Resume Builder

A modern, full-stack resume builder application built with Next.js, TypeScript, and a professional design system. Create, customize, and export professional resumes with ease.

![Resume Builder](https://img.shields.io/badge/Next.js-15.5.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Collapsible Sidebar Navigation** with smooth animations
- **Professional Design System** with 4-point spacing and typography
- **Dark/Light Theme** with system preference detection
- **Responsive Layout** that works on all devices
- **Interactive Tooltips** using shadcn/ui components

### 🔐 **Authentication & Security**
- **Google OAuth Integration** with NextAuth.js
- **Secure Session Management** with HTTP-only cookies
- **Input Validation** using Zod schemas
- **HTML Sanitization** with DOMPurify
- **Rate Limiting** for API endpoints
- **CSRF Protection** and security headers

### 🗄️ **Database & Backend**
- **PostgreSQL Database** with Supabase
- **Drizzle ORM** for type-safe database operations
- **Repository Pattern** for clean data access
- **Service Layer** for business logic
- **RESTful API** with proper error handling

### 🛠️ **Developer Experience**
- **TypeScript** with strict type checking
- **ESLint & Prettier** for code quality
- **Docker Support** for consistent development
- **Hot Reload** with Next.js development server
- **Comprehensive Error Handling**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (or Supabase account)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hitvardhan-Singh-Solanki/resume-builder.git
   cd resume-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.template .env.local
   ```
   
   Fill in your environment variables:
   ```env
   DATABASE_URL="your_postgresql_connection_string"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your_nextauth_secret"
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   ```

4. **Set up the database**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev:stable
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
resume-builder/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   └── dashboard/         # Dashboard pages
│   ├── components/            # React components
│   │   ├── layout/            # Layout components
│   │   ├── ui/                # shadcn/ui components
│   │   └── templates/         # Resume templates
│   ├── design-system/         # Design system tokens
│   │   ├── tokens/            # Design tokens
│   │   └── components/        # Design system components
│   ├── lib/                   # Utility libraries
│   │   ├── auth/              # Authentication config
│   │   ├── db/                # Database layer
│   │   ├── security/          # Security utilities
│   │   └── services/          # Business logic
│   ├── hooks/                 # Custom React hooks
│   └── types/                 # TypeScript type definitions
├── drizzle/                   # Database migrations
├── public/                    # Static assets
└── docs/                      # Documentation
```

## 🎨 Design System

### Typography
- **Font Family**: Inter (professional, clean)
- **Font Sizes**: 2 sizes (16px, 18px) for minimalism
- **Font Weights**: 4 weights (400, 500, 600, 700)
- **Line Heights**: Optimized for readability

### Color Palette
- **Primary**: Professional green (#22c55e)
- **Neutral**: Clean grays for text and backgrounds
- **Semantic**: Success, warning, error, info colors
- **Theme Support**: Light and dark mode variants

### Spacing System
- **4-Point Grid**: Consistent 4px base unit
- **Component Spacing**: xs, sm, md, lg, xl, 2xl
- **Layout Spacing**: Responsive spacing for different screen sizes

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start with Turbopack (experimental)
npm run dev:stable       # Start with stable Next.js dev server
npm run build            # Build for production
npm run start            # Start production server

# Database
npm run db:generate      # Generate database migrations
npm run db:migrate       # Run database migrations
npm run db:push          # Push schema to database
npm run db:studio        # Open Drizzle Studio

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript type checking
npm run clean            # Clean build cache
```

## 🐳 Docker Support

### Development with Docker
```bash
# Start development environment
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Production Build
```bash
# Build Docker image
docker build -t resume-builder .

# Run container
docker run -p 3000:3000 resume-builder
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `NEXTAUTH_URL` | Application URL | ✅ |
| `NEXTAUTH_SECRET` | NextAuth.js secret | ✅ |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | ✅ |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | ✅ |
| `OPENAI_API_KEY` | OpenAI API key (optional) | ❌ |

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🛡️ Security Features

- **Input Validation**: Zod schemas for all user inputs
- **HTML Sanitization**: DOMPurify for XSS prevention
- **Rate Limiting**: API endpoint protection
- **CSRF Protection**: Cross-site request forgery prevention
- **Security Headers**: Comprehensive HTTP security headers
- **Session Security**: HTTP-only cookies and secure sessions

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Test database connection
curl http://localhost:3000/api/test-db
```

## 📚 API Documentation

### Authentication
- `GET /api/auth/[...nextauth]` - NextAuth.js endpoints
- `POST /api/auth/signin` - Sign in with Google

### Resumes
- `GET /api/resumes` - Get user's resumes
- `POST /api/resumes` - Create new resume
- `GET /api/resumes/[id]` - Get specific resume
- `PUT /api/resumes/[id]` - Update resume
- `DELETE /api/resumes/[id]` - Delete resume

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Supabase](https://supabase.com/) - Database hosting

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Review the code examples

---

**Built with ❤️ by [Hitvardhan Singh Solanki](https://github.com/Hitvardhan-Singh-Solanki)**