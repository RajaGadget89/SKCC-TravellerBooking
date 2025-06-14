# File Structure Guide - Travel Booking Website

## 📁 Complete Project Structure

```
travel-booking-website/
├── 📁 .github/                          # GitHub specific files
│   ├── 📁 workflows/                    # GitHub Actions CI/CD
│   │   ├── 📄 ci.yml                   # Continuous Integration
│   │   ├── 📄 deploy.yml               # Deployment workflow
│   │   └── 📄 security.yml             # Security scanning
│   ├── 📄 ISSUE_TEMPLATE.md            # Issue template
│   ├── 📄 PULL_REQUEST_TEMPLATE.md     # PR template
│   └── 📄 CONTRIBUTING.md              # Contribution guidelines
│
├── 📁 docs/                             # Project documentation
│   ├── 📄 project-roadmap.md           # Development roadmap
│   ├── 📄 tech-stack.md                # Technology documentation
│   ├── 📄 feature-registry.md          # Feature specifications
│   ├── 📄 current-state.md             # Project status
│   ├── 📄 data-flow.md                 # System architecture
│   ├── 📄 file-structure.md            # This file
│   ├── 📄 issues-tracking.md           # Issue management
│   ├── 📄 cursor-prompt.md             # AI assistant instructions
│   ├── 📄 api-documentation.md         # API specifications
│   ├── 📄 deployment-guide.md          # Deployment instructions
│   └── 📄 security-guidelines.md       # Security best practices
│
├── 📁 public/                           # Static assets (served directly)
│   ├── 📁 images/                       # Image assets
│   │   ├── 📁 packages/                 # Travel package images
│   │   │   ├── 🖼️ package-1-hero.jpg   # Main package images
│   │   │   ├── 🖼️ package-1-gallery-1.jpg
│   │   │   ├── 🖼️ package-1-gallery-2.jpg
│   │   │   └── 🖼️ ... (for all 7 packages)
│   │   ├── 📁 hero/                     # Hero section images
│   │   │   ├── 🖼️ hero-bg.jpg          # Main hero background
│   │   │   └── 🖼️ hero-mobile.jpg      # Mobile hero image
│   │   ├── 📁 icons/                    # Icon assets
│   │   │   ├── 🖼️ plane.svg            # Travel icons
│   │   │   ├── 🖼️ hotel.svg
│   │   │   ├── 🖼️ food.svg
│   │   │   └── 🖼️ activity.svg
│   │   └── 📁 ui/                       # UI specific images
│   │       ├── 🖼️ loader.gif           # Loading animations
│   │       └── 🖼️ placeholder.svg      # Image placeholders
│   ├── 📁 icons/                        # Favicon and app icons
│   │   ├── 🖼️ favicon.ico
│   │   ├── 🖼️ icon-192.png
│   │   ├── 🖼️ icon-512.png
│   │   └── 🖼️ apple-touch-icon.png
│   ├── 📄 robots.txt                    # Search engine instructions
│   ├── 📄 sitemap.xml                   # Site structure for SEO
│   └── 📄 manifest.json                 # PWA manifest
│
├── 📁 src/                              # Source code
│   ├── 📁 components/                   # React components
│   │   ├── 📁 ui/                       # Reusable UI components
│   │   │   ├── 📄 Button.tsx            # Button component
│   │   │   ├── 📄 Input.tsx             # Input field component
│   │   │   ├── 📄 Card.tsx              # Card component
│   │   │   ├── 📄 Modal.tsx             # Modal dialog
│   │   │   ├── 📄 LoadingSpinner.tsx    # Loading indicators
│   │   │   ├── 📄 FileUpload.tsx        # File upload component
│   │   │   ├── 📄 ProgressBar.tsx       # Progress indicators
│   │   │   ├── 📄 Breadcrumb.tsx        # Navigation breadcrumbs
│   │   │   ├── 📄 Tooltip.tsx           # Tooltip component
│   │   │   └── 📄 index.ts              # Component exports
│   │   ├── 📁 layout/                   # Layout components
│   │   │   ├── 📄 Header.tsx            # Site header/navigation
│   │   │   ├── 📄 Footer.tsx            # Site footer
│   │   │   ├── 📄 Layout.tsx            # Main layout wrapper
│   │   │   ├── 📄 Navigation.tsx        # Navigation menu
│   │   │   ├── 📄 MobileMenu.tsx        # Mobile navigation
│   │   │   └── 📄 Sidebar.tsx           # Sidebar component
│   │   ├── 📁 sections/                 # Page sections
│   │   │   ├── 📄 HeroSection.tsx       # Landing page hero
│   │   │   ├── 📄 PackagesGrid.tsx      # Packages display grid
│   │   │   ├── 📄 PackageCard.tsx       # Individual package card
│   │   │   ├── 📄 TestimonialsSection.tsx # Customer testimonials
│   │   │   ├── 📄 AboutSection.tsx      # About us section
│   │   │   └── 📄 ContactSection.tsx    # Contact information
│   │   ├── 📁 forms/                    # Form components
│   │   │   ├── 📄 BookingForm.tsx       # Main booking form
│   │   │   ├── 📄 PersonalInfoStep.tsx  # Step 1: Personal info
│   │   │   ├── 📄 PreferencesStep.tsx   # Step 2: Preferences
│   │   │   ├── 📄 PaymentStep.tsx       # Step 3: Payment upload
│   │   │   ├── 📄 ConfirmationStep.tsx  # Step 4: Confirmation
│   │   │   ├── 📄 FormValidation.tsx    # Validation components
│   │   │   └── 📄 FormProgress.tsx      # Multi-step progress
│   │   ├── 📁 package/                  # Package-related components
│   │   │   ├── 📄 PackageDetail.tsx     # Package detail view
│   │   │   ├── 📄 PackageGallery.tsx    # Image gallery
│   │   │   ├── 📄 PackageInfo.tsx       # Package information
│   │   │   ├── 📄 PackageItinerary.tsx  # Itinerary display
│   │   │   ├── 📄 PackageFeatures.tsx   # Features list
│   │   │   └── 📄 PackageActions.tsx    # Action buttons
│   │   └── 📁 common/                   # Common shared components
│   │       ├── 📄 ErrorBoundary.tsx     # Error handling
│   │       ├── 📄 SEOHead.tsx           # SEO meta tags
│   │       ├── 📄 LoadingPage.tsx       # Full page loading
│   │       ├── 📄 NotFound.tsx          # 404 error page
│   │       └── 📄 ScrollToTop.tsx       # Scroll to top button
│   │
│   ├── 📁 pages/                        # Next.js pages (routing)
│   │   ├── 📁 api/                      # API routes (backend)
│   │   │   ├── 📄 booking.ts            # Booking submission API
│   │   │   ├── 📄 upload.ts             # File upload API
│   │   │   ├── 📄 packages.ts           # Package data API
│   │   │   ├── 📄 health.ts             # Health check endpoint
│   │   │   └── 📁 admin/                # Admin API routes
│   │   │       ├── 📄 bookings.ts       # Admin booking management
│   │   │       └── 📄 stats.ts          # Admin statistics
│   │   ├── 📁 packages/                 # Package detail pages
│   │   │   ├── 📄 [id].tsx              # Dynamic package page
│   │   │   └── 📄 index.tsx             # Packages listing
│   │   ├── 📁 booking/                  # Booking process pages
│   │   │   ├── 📄 [packageId].tsx       # Package-specific booking
│   │   │   ├── 📄 confirmation.tsx      # Booking confirmation
│   │   │   └── 📄 success.tsx           # Success page
│   │   ├── 📄 index.tsx                 # Landing page (home)
│   │   ├── 📄 about.tsx                 # About us page
│   │   ├── 📄 contact.tsx               # Contact page
│   │   ├── 📄 privacy.tsx               # Privacy policy
│   │   ├── 📄 terms.tsx                 # Terms of service
│   │   ├── 📄 _app.tsx                  # App wrapper (global setup)
│   │   ├── 📄 _document.tsx             # HTML document structure
│   │   ├── 📄 _error.tsx                # Custom error page
│   │   └── 📄 404.tsx                   # Custom 404 page
│   │
│   ├── 📁 styles/                       # Styling files
│   │   ├── 📄 globals.css               # Global CSS styles
│   │   ├── 📄 tailwind.css              # Tailwind CSS imports
│   │   ├── 📁 components/               # Component-specific styles
│   │   │   ├── 📄 forms.css             # Form styling
│   │   │   ├── 📄 buttons.css           # Button variants
│   │   │   ├── 📄 cards.css             # Card components
│   │   │   └── 📄 animations.css        # Custom animations
│   │   └── 📁 utils/                    # Utility CSS classes
│   │       ├── 📄 typography.css        # Text utilities
│   │       ├── 📄 spacing.css           # Spacing utilities
│   │       └── 📄 responsive.css        # Responsive utilities
│   │
│   ├── 📁 lib/                          # Utility functions and configurations
│   │   ├── 📄 google-sheets.ts          # Google Sheets API integration
│   │   ├── 📄 email.ts                  # Email service functions
│   │   ├── 📄 file-upload.ts            # File upload utilities
│   │   ├── 📄 validations.ts            # Form validation schemas
│   │   ├── 📄 utils.ts                  # General utility functions
│   │   ├── 📄 constants.ts              # App constants
│   │   ├── 📄 config.ts                 # Configuration settings
│   │   ├── 📄 auth.ts                   # Authentication utilities
│   │   ├── 📄 security.ts               # Security helper functions
│   │   ├── 📄 analytics.ts              # Analytics integration
│   │   ├── 📄 seo.ts                    # SEO helper functions
│   │   └── 📄 api-client.ts             # API client configuration
│   │
│   ├── 📁 data/                         # Static data and content
│   │   ├── 📄 packages.json             # Travel packages data
│   │   ├── 📄 testimonials.json         # Customer testimonials
│   │   ├── 📄 faqs.json                 # Frequently asked questions
│   │   ├── 📄 site-config.json          # Site configuration
│   │   ├── 📄 navigation.json           # Navigation structure
│   │   └── 📄 contact-info.json         # Contact information
│   │
│   ├── 📁 hooks/                        # Custom React hooks
│   │   ├── 📄 useBookingForm.ts         # Booking form logic
│   │   ├── 📄 useFileUpload.ts          # File upload hook
│   │   ├── 📄 useLocalStorage.ts        # Local storage hook
│   │   ├── 📄 useDebounce.ts            # Debounce hook
│   │   ├── 📄 useIntersectionObserver.ts # Scroll animations
│   │   ├── 📄 useMediaQuery.ts          # Responsive breakpoints
│   │   ├── 📄 useFormValidation.ts      # Form validation hook
│   │   └── 📄 useAnalytics.ts           # Analytics tracking
│   │
│   ├── 📁 context/                      # React Context providers
│   │   ├── 📄 BookingContext.tsx        # Booking state management
│   │   ├── 📄 UIContext.tsx             # UI state (modals, etc.)
│   │   ├── 📄 ThemeContext.tsx          # Theme management
│   │   └── 📄 AnalyticsContext.tsx      # Analytics context
│   │
│   ├── 📁 types/                        # TypeScript type definitions
│   │   ├── 📄 package.ts                # Package data types
│   │   ├── 📄 booking.ts                # Booking form types
│   │   ├── 📄 api.ts                    # API response types
│   │   ├── 📄 ui.ts                     # UI component types
│   │   ├── 📄 form.ts                   # Form-related types
│   │   ├── 📄 global.ts                 # Global type definitions
│   │   └── 📄 index.ts                  # Type exports
│   │
│   ├── 📁 middleware/                   # Next.js middleware
│   │   ├── 📄 auth.ts                   # Authentication middleware
│   │   ├── 📄 rate-limit.ts             # Rate limiting
│   │   ├── 📄 security.ts               # Security headers
│   │   ├── 📄 cors.ts                   # CORS configuration
│   │   └── 📄 logging.ts                # Request logging
│   │
│   └── 📁 utils/                        # Utility functions
│       ├── 📄 format.ts                 # Data formatting utilities
│       ├── 📄 validation.ts             # Input validation helpers
│       ├── 📄 date.ts                   # Date manipulation
│       ├── 📄 currency.ts               # Currency formatting
│       ├── 📄 image.ts                  # Image processing utilities
│       ├── 📄 string.ts                 # String manipulation
│       ├── 📄 array.ts                  # Array utilities
│       └── 📄 error.ts                  # Error handling utilities
│
├── 📁 tests/                            # Test files
│   ├── 📁 __mocks__/                    # Test mocks
│   │   ├── 📄 google-sheets.ts          # Google Sheets API mock
│   │   ├── 📄 file-upload.ts            # File upload mock
│   │   └── 📄 email.ts                  # Email service mock
│   ├── 📁 components/                   # Component tests
│   │   ├── 📄 BookingForm.test.tsx      # Booking form tests
│   │   ├── 📄 PackageCard.test.tsx      # Package card tests
│   │   ├── 📄 FileUpload.test.tsx       # File upload tests
│   │   └── 📄 Navigation.test.tsx       # Navigation tests
│   ├── 📁 pages/                        # Page tests
│   │   ├── 📄 index.test.tsx            # Landing page tests
│   │   ├── 📄 package-detail.test.tsx   # Package detail tests
│   │   └── 📄 booking.test.tsx          # Booking page tests
│   ├── 📁 api/                          # API tests
│   │   ├── 📄 booking.test.ts           # Booking API tests
│   │   ├── 📄 upload.test.ts            # Upload API tests
│   │   └── 📄 packages.test.ts          # Packages API tests
│   ├── 📁 e2e/                          # End-to-end tests
│   │   ├── 📄 booking-flow.spec.ts      # Complete booking flow
│   │   ├── 📄 navigation.spec.ts        # Site navigation
│   │   ├── 📄 responsive.spec.ts        # Mobile responsiveness
│   │   └── 📄 performance.spec.ts       # Performance tests
│   ├── 📁 utils/                        # Test utilities
│   │   ├── 📄 test-utils.tsx            # Testing library setup
│   │   ├── 📄 mock-data.ts              # Mock data generators
│   │   └── 📄 test-helpers.ts           # Test helper functions
│   ├── 📄 setup.ts                      # Test setup configuration
│   └── 📄 jest.config.js                # Jest configuration
│
├── 📁 cypress/                          # Cypress E2E tests
│   ├── 📁 fixtures/                     # Test data
│   │   ├── 📄 packages.json             # Sample package data
│   │   ├── 📄 booking-data.json         # Sample booking data
│   │   └── 📄 test-files/               # Test upload files
│   ├── 📁 integration/                  # Integration tests
│   │   ├── 📄 booking-flow.spec.js      # Booking process tests
│   │   ├── 📄 package-navigation.spec.js # Package browsing tests
│   │   └── 📄 form-validation.spec.js   # Form validation tests
│   ├── 📁 support/                      # Support files
│   │   ├── 📄 commands.js               # Custom commands
│   │   ├── 📄 index.js                  # Support file imports
│   │   └── 📄 utils.js                  # Test utilities
│   └── 📄 cypress.json                  # Cypress configuration
│
├── 📁 scripts/                          # Build and deployment scripts
│   ├── 📄 build.js                      # Custom build script
│   ├── 📄 deploy.js                     # Deployment script
│   ├── 📄 seed-data.js                  # Data seeding script
│   ├── 📄 optimize-images.js            # Image optimization
│   ├── 📄 generate-sitemap.js           # Sitemap generation
│   └── 📄 backup-data.js                # Data backup script
│
├── 📁 .vscode/                          # VS Code configuration
│   ├── 📄 settings.json                 # Workspace settings
│   ├── 📄 extensions.json               # Recommended extensions
│   ├── 📄 launch.json                   # Debug configuration
│   └── 📄 tasks.json                    # Task definitions
│
├── 📁 .husky/                           # Git hooks
│   ├── 📄 pre-commit                    # Pre-commit hooks
│   ├── 📄 pre-push                      # Pre-push hooks
│   └── 📄 commit-msg                    # Commit message validation
│
├── 📄 .env.example                      # Environment variables template
├── 📄 .env.local                        # Local environment (gitignored)
├── 📄 .gitignore                        # Git ignore rules
├── 📄 .eslintrc.json                    # ESLint configuration
├── 📄 .prettierrc                       # Prettier configuration
├── 📄 .prettierignore                   # Prettier ignore rules
├── 📄 tsconfig.json                     # TypeScript configuration
├── 📄 next.config.js                    # Next.js configuration
├── 📄 tailwind.config.js                # Tailwind CSS configuration
├── 📄 postcss.config.js                 # PostCSS configuration
├── 📄 jest.config.js                    # Jest testing configuration
├── 📄 package.json                      # Project dependencies
├── 📄 package-lock.json                 # Dependency lock file
├── 📄 README.md                         # Project documentation
├── 📄 CHANGELOG.md                      # Version history
├── 📄 LICENSE                           # Project license
└── 📄 SECURITY.md                       # Security policy

```

## 📋 File Naming Conventions

### Component Files
- **React Components**: PascalCase with `.tsx` extension
  - Example: `BookingForm.tsx`, `PackageCard.tsx`
- **Component Tests**: Component name + `.test.tsx`
  - Example: `BookingForm.test.tsx`
- **Component Styles**: Component name + `.module.css` (if using CSS modules)
  - Example: `BookingForm.module.css`

### Page Files
- **Next.js Pages**: kebab-case with `.tsx` extension
  - Example: `package-detail.tsx`, `booking-confirmation.tsx`
- **Dynamic Routes**: Square brackets for parameters
  - Example: `[id].tsx`, `[packageId].tsx`

### Utility Files
- **Utility Functions**: kebab-case with `.ts` extension
  - Example: `google-sheets.ts`, `file-upload.ts`
- **Type Definitions**: kebab-case with `.ts` extension
  - Example: `booking-types.ts`, `api-types.ts`

### Asset Files
- **Images**: kebab-case with descriptive names
  - Example: `hero-background.jpg`, `package-1-gallery-1.jpg`
- **Icons**: kebab-case with `.svg` extension
  - Example: `chevron-right.svg`, `upload-icon.svg`

## 📂 Directory Purpose and Organization

### `/src/components/`
**Purpose**: Reusable React components organized by category
- `ui/`: Generic UI components (buttons, inputs, cards)
- `layout/`: Site-wide layout components (header, footer)
- `sections/`: Page-specific sections (hero, packages grid)
- `forms/`: Form-related components and steps
- `package/`: Package-specific display components
- `common/`: Shared utility components

### `/src/pages/`
**Purpose**: Next.js file-based routing system
- Root files: Main site pages
- `api/`: Backend API endpoints
- `packages/`: Package-related pages
- `booking/`: Booking process pages
- Special files: `_app.tsx`, `_document.tsx`, `404.tsx`

### `/src/lib/`
**Purpose**: Core business logic and external integrations
- Third-party service integrations
- Configuration and constants
- Utility functions and helpers
- Authentication and security

### `/src/data/`
**Purpose**: Static data and content management
- JSON files for packages, testimonials, FAQs
- Configuration data
- Content that might be moved to CMS later

### `/src/hooks/`
**Purpose**: Custom React hooks for reusable logic
- Form handling logic
- API interactions
- UI state management
- Performance optimizations

### `/public/`
**Purpose**: Static assets served directly by the web server
- Images, icons, and media files
- SEO files (robots.txt, sitemap.xml)
- PWA manifest and service worker

### `/docs/`
**Purpose**: Comprehensive project documentation
- Technical specifications
- Development guides
- API documentation
- Deployment instructions

### `/tests/`
**Purpose**: All testing files and configurations
- Unit tests for components and functions
- Integration tests for features
- End-to-end tests for user flows
- Test utilities and mocks

## 🔧 Configuration Files

### Development Configuration
- **`.eslintrc.json`**: Code linting rules and standards
- **`.prettierrc`**: Code formatting configuration
- **`tsconfig.json`**: TypeScript compiler options
- **`jest.config.js`**: Unit testing configuration
- **`cypress.json`**: E2E testing configuration

### Build Configuration
- **`next.config.js`**: Next.js build and runtime configuration
- **`tailwind.config.js`**: Tailwind CSS customization
- **`postcss.config.js`**: CSS processing configuration

### Deployment Configuration
- **`package.json`**: Dependencies and scripts
- **`.env.example`**: Environment variables template
- **`vercel.json`**: Vercel deployment configuration (if used)

## 📊 File Size Guidelines

### Performance Considerations
- **Component Files**: Keep under 300 lines when possible
- **Page Files**: Split large pages into smaller components
- **Image Files**: Optimize for web (WebP format, appropriate sizes)
- **JSON Data Files**: Consider pagination for large datasets

### Bundle Size Optimization
- **Dynamic Imports**: Use for heavy components
- **Code Splitting**: Implement at page and component level
- **Tree Shaking**: Ensure unused code is eliminated
- **Image Optimization**: Use Next.js Image component

## 🔒 Security Considerations

### File Access and Permissions
- **Environment Files**: Never commit `.env.local` to repository
- **API Keys**: Store only in environment variables
- **File Uploads**: Validate and scan before processing
- **Static Assets**: Ensure no sensitive data in public folder

### Code Security
- **Input Validation**: Validate all user inputs
- **File Upload Security**: Implement proper file type checking
- **API Security**: Rate limiting and authentication
- **Dependencies**: Regular security audits

## 📱 Mobile-First Organization

### Responsive Design Files
- **Mobile Styles**: Default styles target mobile first
- **Breakpoint Utilities**: Organized in `/styles/utils/responsive.css`
- **Component Variants**: Mobile and desktop versions when needed
- **Image Assets**: Multiple sizes for different screen densities

## 🚀 Scalability Considerations

### Future Growth Planning
- **Modular Architecture**: Easy to add new features
- **Component Reusability**: Consistent design system
- **API Abstraction**: Easy to change backend services
- **Content Management**: Prepared for CMS integration

### Performance Optimization
- **Code Splitting**: Automatic and manual optimization
- **Caching Strategy**: Static and dynamic content caching
- **CDN Ready**: Assets optimized for CDN delivery
- **Progressive Loading**: Lazy loading and skeleton screens

This file structure provides a solid foundation for building a scalable, maintainable travel booking website while following modern web development best practices.