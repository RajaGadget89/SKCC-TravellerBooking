# Cursor AI Assistant Prompt - Travel Booking Website

## 🎯 Project Context

You are an AI coding assistant helping to build a **Travel Booking Website** with the following specifications:

### Project Overview
- **Name**: TravelEase Booking Platform
- **Type**: Responsive travel booking website (desktop + mobile)
- **Tech Stack**: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Google Sheets API, Cloudinary, Email service
- **Theme**: Clean, professional design with white-blue color scheme
- **Goal**: 3-module system for browsing and booking travel packages

### Core Modules
1. **Landing Page**: Hero section + 7 travel packages grid
2. **Package Details**: Detailed package view with booking CTA
3. **Reservation System**: Multi-step booking form with file upload

---

## 📚 Project Documentation

**IMPORTANT**: Always refer to these documentation files before making suggestions or writing code:

- `docs/project-roadmap.md` - Development timeline and milestones
- `docs/tech-stack.md` - Technology specifications and requirements
- `docs/feature-registry.md` - Detailed feature specifications and acceptance criteria
- `docs/current-state.md` - Current project status and progress
- `docs/data-flow.md` - System architecture and data flow
- `docs/file-structure.md` - Complete project organization
- `docs/issues-tracking.md` - Issue management and tracking
- `README.md` - Installation and setup instructions

---

## 🛠️ Development Guidelines

### Code Quality Standards
- **TypeScript**: All code must use TypeScript with proper typing
- **ESLint**: Follow configured linting rules strictly
- **Prettier**: Use consistent code formatting
- **Security**: Follow OWASP guidelines for web security
- **Performance**: Optimize for Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **Accessibility**: Maintain WCAG 2.1 AA compliance

### Component Development
- **Naming**: Use PascalCase for components (e.g., `BookingForm.tsx`)
- **Structure**: Follow the file structure in `docs/file-structure.md`
- **Reusability**: Create reusable components in `src/components/ui/`
- **Testing**: Write tests for all components using Jest + React Testing Library
- **Documentation**: Add JSDoc comments for complex functions

### Styling Guidelines
- **Framework**: Use Tailwind CSS exclusively
- **Responsive**: Mobile-first design approach
- **Colors**: White-blue theme with CSS custom properties
- **Animations**: Use Framer Motion for smooth transitions
- **Consistency**: Follow design system patterns

---

## 🎨 Design System

### Color Palette
```css
:root {
  --color-primary: #3B82F6;     /* Blue 500 */
  --color-primary-dark: #1E40AF; /* Blue 800 */
  --color-secondary: #F8FAFC;   /* Slate 50 */
  --color-accent: #0EA5E9;      /* Sky 500 */
  --color-text: #1E293B;        /* Slate 800 */
  --color-text-light: #64748B;  /* Slate 500 */
  --color-white: #FFFFFF;
  --color-gray-50: #F8FAFC;
  --color-gray-100: #F1F5F9;
  --color-gray-200: #E2E8F0;
}
```

### Typography
- **Headings**: font-bold, text-slate-800
- **Body**: font-normal, text-slate-600
- **CTA**: font-semibold, text-white
- **Caption**: font-medium, text-slate-500

### Component Patterns
- **Cards**: bg-white, rounded-lg, shadow-md
- **Buttons**: Primary (bg-blue-500), Secondary (bg-gray-100)
- **Forms**: Clean inputs with proper validation states
- **Loading**: Skeleton screens and spinners

---

## 🔐 Security Requirements

### Input Validation
- **Client-side**: Use Zod schemas for form validation
- **Server-side**: Validate all API inputs
- **Sanitization**: Sanitize user inputs to prevent XSS
- **File Upload**: Strict file type and size validation

### API Security
- **Rate Limiting**: Implement rate limiting on all endpoints
- **CSRF Protection**: Use CSRF tokens for form submissions
- **Headers**: Set security headers (HSTS, CSP, etc.)
- **Error Handling**: Don't expose sensitive information in errors

### Data Protection
- **Environment Variables**: Store all secrets in environment variables
- **Google Sheets**: Use service account authentication
- **File Storage**: Secure file uploads with virus scanning
- **Email**: Validate email addresses and prevent spam

---

## 📱 Mobile-First Development

### Responsive Breakpoints
```css
/* Mobile First Approach */
/* Base styles: 320px+ (mobile) */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Mobile UX Requirements
- **Touch Targets**: Minimum 44px for interactive elements
- **Navigation**: Hamburger menu for mobile
- **Forms**: Large, easy-to-tap form fields
- **Images**: Optimized for mobile bandwidth
- **Performance**: Prioritize mobile performance

---

## 🔄 Data Flow Implementation

### Form Handling
```typescript
// Multi-step form structure
interface BookingFormData {
  currentStep: number;
  personal: PersonalInfo;
  preferences: TravelPreferences;
  payment: PaymentInfo;
}

// Form validation with Zod
const personalInfoSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().regex(/^\+?[\d\s-()]+$/, "Valid phone required"),
  idNumber: z.string().min(5, "ID number required")
});
```

### API Integration
```typescript
// Google Sheets API structure
interface BookingSubmission {
  packageId: string;
  customerData: PersonalInfo;
  preferences: TravelPreferences;
  paymentSlipUrl: string;
  timestamp: string;
  bookingId: string;
}
```

---

## 🚀 Performance Optimization

### Image Optimization
- **Format**: Use WebP format with JPEG fallback
- **Lazy Loading**: Implement for all images below the fold
- **Sizes**: Provide multiple sizes for responsive images
- **Compression**: Optimize images for web delivery

### Code Optimization
- **Bundle Splitting**: Use dynamic imports for heavy components
- **Tree Shaking**: Ensure unused code is eliminated
- **Caching**: Implement proper caching strategies
- **CDN**: Use CDN for static assets

### Loading States
- **Skeleton Screens**: For initial page loads
- **Spinners**: For form submissions and actions
- **Progressive Loading**: Load content incrementally
- **Error States**: Graceful error handling with retry options

---

## 🧪 Testing Strategy

### Unit Testing
```typescript
// Component testing example
import { render, screen, fireEvent } from '@testing-library/react';
import { BookingForm } from './BookingForm';

describe('BookingForm', () => {
  it('validates required fields', async () => {
    render(<BookingForm />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
  });
});
```

### Integration Testing
- **API Endpoints**: Test all API routes with various inputs
- **Form Flow**: Test complete booking process
- **File Upload**: Test file upload security and validation
- **Email Integration**: Test email sending functionality

---

## 🎯 Feature Implementation Priorities

### Phase 1: Foundation (Week 1-2)
1. Project setup and configuration
2. Basic component structure
3. Navigation and routing
4. Design system implementation

### Phase 2: Landing Page (Week 2-4)
1. Hero section with animations
2. Package data structure
3. Packages grid with hover effects
4. Responsive design implementation

### Phase 3: Package Details (Week 4-6)
1. Dynamic routing for packages
2. Package detail view
3. Image gallery component
4. Navigation between packages

### Phase 4: Booking System (Week 6-8)
1. Multi-step form implementation
2. Form validation and error handling
3. File upload security
4. Progress indicators

### Phase 5: Integration (Week 8-10)
1. Google Sheets API integration
2. Email notification system
3. Error handling and logging
4. Data backup mechanisms

---

## 🔧 Common Implementation Patterns

### Component Structure
```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  // Add specific props
}

export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      className={cn("base-styles", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
```

### API Route Structure
```typescript
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';

const schema = z.object({
  // Define validation schema
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Rate limiting
    await rateLimit(req, res);
    
    // Method validation
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
    
    // Input validation
    const data = schema.parse(req.body);
    
    // Business logic
    const result = await processData(data);
    
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
```

---

## 📋 Development Checklist

### Before Writing Code
- [ ] Check current project status in `docs/current-state.md`
- [ ] Review relevant feature specifications in `docs/feature-registry.md`
- [ ] Understand data flow requirements from `docs/data-flow.md`
- [ ] Follow file structure guidelines from `docs/file-structure.md`
- [ ] Check for related issues in `docs/issues-tracking.md`

### During Development
- [ ] Use TypeScript with proper type definitions
- [ ] Follow security guidelines for all user inputs
- [ ] Implement proper error handling
- [ ] Add loading states and user feedback
- [ ] Ensure mobile responsiveness
- [ ] Write unit tests for components
- [ ] Add JSDoc comments for complex logic

### After Implementation
- [ ] Test on multiple devices and browsers
- [ ] Validate accessibility with screen readers
- [ ] Check performance with Lighthouse
- [ ] Review security with OWASP guidelines
- [ ] Update documentation if needed
- [ ] Add to issue tracking if new issues found

---

## 🎨 Animation Guidelines

### Framer Motion Patterns
```typescript
// Page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Hover effects
const hoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 }
};

// Stagger animations
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

### Animation Performance
- **60fps**: Ensure animations run at 60fps
- **Transform Only**: Use transform and opacity for animations
- **Will-Change**: Use sparingly for performance
- **Reduced Motion**: Respect user preferences for reduced motion

---

## 🚨 Error Handling Patterns

### Client-Side Errors
```typescript
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(false);

const handleSubmit = async (data: FormData) => {
  try {
    setLoading(true);
    setError(null);
    
    const result = await submitBooking(data);
    
    // Success handling
    router.push('/booking/success');
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An error occurred');
  } finally {
    setLoading(false);
  }
};
```

### Server-Side Errors
```typescript
// Structured error responses
interface ApiError {
  error: string;
  message: string;
  code?: string;
  details?: any;
}

// Error handling utility
export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof ValidationError) {
    return {
      error: 'Validation Error',
      message: error.message,
      code: 'VALIDATION_FAILED'
    };
  }
  
  return {
    error: 'Internal Server Error',
    message: 'An unexpected error occurred'
  };
};
```

---

## 💡 AI Assistant Instructions

When helping with this project:

1. **Always Reference Documentation**: Check the relevant documentation files before providing solutions
2. **Follow Established Patterns**: Use the coding patterns and structures already defined
3. **Security First**: Consider security implications for all code suggestions
4. **Mobile-First**: Ensure all solutions work well on mobile devices
5. **Performance Aware**: Suggest optimizations for better performance
6. **Type Safety**: Always use TypeScript with proper typing
7. **Accessibility**: Consider accessibility in all UI suggestions
8. **Testing**: Include testing considerations with code suggestions
9. **Error Handling**: Always include proper error handling
10. **Documentation**: Suggest updating documentation when making significant changes

### When Suggesting Code Changes
- Explain the reasoning behind suggestions
- Point out potential security considerations
- Mention performance implications
- Suggest testing approaches
- Consider mobile usability
- Reference relevant documentation sections

### When Asked About Architecture
- Refer to `docs/data-flow.md` for system architecture
- Check `docs/tech-stack.md` for technology decisions
- Review `docs/feature-registry.md` for feature requirements
- Consider scalability and maintainability

This prompt ensures consistent, high-quality development aligned with project goals and best practices.