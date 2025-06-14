# TravelEase Booking Platform

A modern travel booking website built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, professional design with white-blue color scheme
- 📱 Fully responsive (mobile-first approach)
- ⚡ Fast and optimized performance
- 🔒 Secure booking system
- 📧 Email notifications
- 📊 Google Sheets integration for data management
- 🖼️ Cloudinary for image management

## Tech Stack

- **Frontend**: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes
- **Data Storage**: Google Sheets API
- **Image Management**: Cloudinary
- **Email Service**: Nodemailer
- **Form Validation**: Zod
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Google Cloud Platform account (for Google Sheets API)
- Cloudinary account
- SMTP server for email notifications

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/travelease.git
   cd travelease
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Google Sheets API
   GOOGLE_SHEETS_PRIVATE_KEY=your_private_key
   GOOGLE_SHEETS_CLIENT_EMAIL=your_client_email
   GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Email Service
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_password
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (main)/            # Main application routes
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── forms/            # Form components
│   └── layouts/          # Layout components
├── lib/                  # Utility functions
├── styles/              # Global styles
└── types/               # TypeScript types
```

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add JSDoc comments for complex functions

### Component Development

- Create reusable components in `src/components/ui/`
- Use Tailwind CSS for styling
- Implement proper error handling
- Add loading states for async operations
- Ensure mobile responsiveness

### Testing

- Write unit tests for components
- Test API routes
- Validate form submissions
- Check mobile responsiveness

### Performance

- Optimize images
- Implement proper caching
- Use dynamic imports for large components
- Monitor Core Web Vitals

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@travelease.com or create an issue in the repository.
