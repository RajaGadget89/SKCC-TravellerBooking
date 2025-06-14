# Travel Booking Website

A modern, responsive travel booking platform built with Next.js, featuring a clean white-blue design with smooth animations and professional user experience.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Travel Packages**: Display and detailed view of 7 travel packages
- **Booking System**: Multi-step reservation form with file upload
- **Google Sheets Integration**: Automatic data submission to Google Sheets
- **Email Notifications**: Automated booking confirmations
- **Security First**: Input validation, file security, and OWASP compliance
- **Performance Optimized**: Fast loading with image optimization and caching

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ LTS
- npm 9+ or yarn 1.22+
- Google Cloud Project with Sheets API enabled
- Cloudinary account (for file storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/travel-booking-website.git
   cd travel-booking-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables (see [Environment Variables](#environment-variables))

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
travel-booking-website/
├── public/                     # Static assets
│   ├── images/                 # Travel package images
│   ├── icons/                  # Icon assets
│   └── favicon.ico
├── src/
│   ├── components/             # React components
│   │   ├── ui/                 # Reusable UI components
│   │   ├── forms/              # Form components
│   │   ├── layout/             # Layout components
│   │   └── sections/           # Page sections
│   ├── pages/                  # Next.js pages
│   │   ├── api/                # API routes
│   │   ├── packages/           # Package detail pages
│   │   ├── booking/            # Booking pages
│   │   ├── _app.js             # App wrapper
│   │   └── index.js            # Landing page
│   ├── styles/                 # CSS and styling
│   │   ├── globals.css         # Global styles
│   │   └── components/         # Component styles
│   ├── lib/                    # Utility functions
│   │   ├── validations.js      # Form validations
│   │   ├── google-sheets.js    # Google Sheets API
│   │   ├── email.js            # Email service
│   │   └── utils.js            # General utilities
│   ├── data/                   # Static data
│   │   └── packages.json       # Travel packages data
│   ├── hooks/                  # Custom React hooks
│   └── types/                  # TypeScript definitions
├── docs/                       # Project documentation
├── tests/                      # Test files
├── .github/                    # GitHub workflows
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS config
├── package.json
└── README.md
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Sheets API
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SHEET_ID=your-google-sheet-id

# File Storage (Cloudinary)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email Service
EMAIL_SERVICE_API_KEY=your-email-api-key
EMAIL_FROM=noreply@yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com

# Security
NEXTAUTH_SECRET=your-random-secret-key
CSRF_SECRET=your-csrf-secret

# Development
NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 🏗️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checks

# Testing
npm run test         # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run end-to-end tests

# Code Quality
npm run format       # Format code with Prettier
npm run analyze      # Analyze bundle size
```

### Development Workflow

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

3. **Test your changes**
   ```bash
   npm run test
   npm run lint
   npm run type-check
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**

## 🔐 Security

### Security Measures

- **Input Validation**: All user inputs are validated on both client and server
- **File Upload Security**: File type, size validation, and virus scanning
- **CSRF Protection**: Cross-site request forgery protection enabled
- **Rate Limiting**: API endpoints protected against abuse
- **Data Sanitization**: XSS prevention and input sanitization
- **Secure Headers**: Security headers configured via Helmet.js

### Security Best Practices

- Never commit sensitive data to the repository
- Use environment variables for all secrets
- Regularly update dependencies
- Follow OWASP security guidelines
- Implement proper error handling without exposing system details

## 📊 API Documentation

### Booking API (`/api/booking`)

**POST** - Submit a new booking

```javascript
// Request Body
{
  packageId: string,
  personal: {
    name: string,
    email: string,
    phone: string,
    idNumber: string
  },
  preferences: {
    roomType: "single" | "twin" | "double",
    specialRequests: string
  },
  paymentSlipUrl: string
}

// Response
{
  success: boolean,
  bookingId: string,
  message: string
}
```

### File Upload API (`/api/upload`)

**POST** - Upload payment slip

```javascript
// Request: multipart/form-data
// Field: file (image/jpeg, image/png, application/pdf, max 5MB)

// Response
{
  success: boolean,
  url: string,
  message: string
}
```

## 🎨 Customization

### Design System

The project uses a white-blue color scheme with the following CSS custom properties:

```css
:root {
  --color-primary: #3B82F6;     /* Blue 500 */
  --color-primary-dark: #1E40AF; /* Blue 800 */
  --color-secondary: #F8FAFC;   /* Slate 50 */
  --color-accent: #0EA5E9;      /* Sky 500 */
  --color-text: #1E293B;        /* Slate 800 */
  --color-text-light: #64748B;  /* Slate 500 */
}
```

### Travel Packages

Update package data in `src/data/packages.json`:

```json
[
  {
    "id": "package-1",
    "name": "Tropical Paradise",
    "description": "7 days in tropical paradise with pristine beaches",
    "price": 1299,
    "currency": "USD",
    "duration": "7 days",
    "images": [
      "/images/packages/tropical-1.jpg",
      "/images/packages/tropical-2.jpg"
    ],
    "features": [
      "Beachfront accommodation",
      "Daily breakfast",
      "Airport transfers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival",
        "description": "Airport pickup and hotel check-in"
      }
    ]
  }
]
```

## 📱 Mobile Optimization

The website is built with a mobile-first approach:

- **Responsive Breakpoints**: 320px (mobile), 768px (tablet), 1024px (desktop)
- **Touch-Friendly**: Large tap targets and swipe gestures
- **Performance**: Optimized images and lazy loading
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Link your GitHub repository to Vercel
   - Configure environment variables in Vercel dashboard

2. **Deploy**
   ```bash
   # Automatic deployment on push to main branch
   git push origin main
   ```

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

### Environment Configuration

Make sure to set all environment variables in your deployment platform:
- Google Sheets API credentials
- Cloudinary configuration
- Email service settings
- Security secrets

## 🔍 Monitoring

### Performance Monitoring

- **Core Web Vitals**: Monitored via Vercel Analytics
- **Error Tracking**: Console errors logged and monitored
- **API Performance**: Response times tracked

### Analytics

- **Google Analytics 4**: User behavior tracking
- **Conversion Tracking**: Booking completion rates
- **Performance Metrics**: Page load times and user engagement

## 🐛 Troubleshooting

### Common Issues

1. **Google Sheets API Errors**
   ```
   Solution: Check API credentials and sheet permissions
   ```

2. **File Upload Failures**
   ```
   Solution: Verify Cloudinary configuration and file size limits
   ```

3. **Email Delivery Issues**
   ```
   Solution: Check email service configuration and spam filters
   ```

### Debug Mode

Enable debug logging in development:

```bash
DEBUG=true npm run dev
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Documentation**: Check the `docs/` folder
- **Issues**: Open an issue on GitHub
- **Email**: Contact the development team

## 🔄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes and updates.

---

**Built with ❤️ using Next.js, Tailwind CSS, and modern web technologies.**