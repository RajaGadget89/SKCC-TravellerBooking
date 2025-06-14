# Data Flow Architecture - Travel Website

## System Architecture Overview

```
User Browser ↔ Next.js Frontend ↔ API Routes ↔ External Services
                     ↓
              File Storage (Cloudinary)
                     ↓
              Google Sheets API ↔ Google Sheets
                     ↓
              Email Service (EmailJS/SMTP)
```

---

## Frontend Data Flow

### 1. Landing Page Data Flow
```
Static Package Data → React Components → User Interface
      ↓
Package Selection → Navigation State → Route to Package Details
```

**Data Sources:**
- Static JSON file with package information
- Environment variables for configuration
- Image assets from CDN/file storage

**State Management:**
- React state for UI interactions
- No persistent storage required
- Navigation state for active package

---

### 2. Package Details Data Flow
```
URL Parameters → Package ID → Package Data Lookup → Display Components
      ↓
User Action (Reserve) → Form Navigation → Booking Form
```

**Data Flow Steps:**
1. Extract package ID from URL parameters
2. Lookup package data from static data source
3. Render package details components
4. Handle user interactions (reserve, navigate)

---

### 3. Booking Form Data Flow
```
User Input → Form Validation → State Management → File Upload → Data Submission
     ↓              ↓              ↓              ↓              ↓
Form Fields → Client Validation → React State → File Storage → API Routes
```

**Multi-Step Form Flow:**
1. **Step 1: Personal Information**
   - Input: Name, Email, Phone, ID Number
   - Validation: Required fields, format validation
   - Storage: React state (temporary)

2. **Step 2: Travel Preferences**
   - Input: Room type, special requests
   - Validation: Selection validation
   - Storage: React state (temporary)

3. **Step 3: Payment Upload**
   - Input: Payment slip file
   - Validation: File type, size, security scan
   - Storage: Temporary upload to file service

4. **Step 4: Confirmation**
   - Review: All collected data
   - Action: Final submission
   - Result: Confirmation or error handling

---

## Backend Data Flow

### API Routes Data Flow

#### 1. Form Submission Endpoint (`/api/booking`)
```
POST Request → Request Validation → Data Processing → External API Calls → Response
     ↓               ↓                    ↓                ↓                ↓
Form Data → Server Validation → Data Sanitization → Google Sheets → Success/Error
                                        ↓
                              Email Notification → Email Service
```

**Processing Steps:**
1. **Request Validation**
   - CSRF token verification
   - Rate limiting check
   - Input sanitization
   - Data type validation

2. **Data Processing**
   - Structure data for Google Sheets
   - Generate booking reference ID
   - Prepare email templates
   - File URL processing

3. **External API Calls**
   - Submit to Google Sheets API
   - Send confirmation emails
   - Update booking status

4. **Response Handling**
   - Success confirmation
   - Error handling and logging
   - User feedback messages

---

#### 2. File Upload Endpoint (`/api/upload`)
```
Multipart Form Data → File Validation → Virus Scan → Cloud Storage → File URL
        ↓                   ↓              ↓              ↓            ↓
File Buffer → Security Check → Malware Scan → Cloudinary → Public URL
```

**Security Flow:**
1. **File Reception**
   - Multipart form parsing
   - File size validation (max 5MB)
   - File type validation (JPEG, PNG, PDF only)

2. **Security Validation**
   - File header verification
   - Virus/malware scanning
   - Content validation

3. **Storage Processing**
   - File optimization and compression
   - Upload to Cloudinary/file storage
   - Generate secure public URL
   - Cleanup temporary files

---

## Google Sheets Integration

### Data Structure in Google Sheets
```
Sheet: "Bookings"
Columns: A-J (Timestamp to Status)

A: Timestamp (auto-generated)
B: Package Name
C: Customer Name  
D: Email Address
E: Phone Number
F: ID Card Number
G: Room Preference
H: Special Requests
I: Payment Slip URL
J: Booking Status
```

### Google Sheets API Flow
```
Booking Data → API Authentication → Sheet Selection → Row Append → Confirmation
     ↓               ↓                   ↓              ↓            ↓
JSON Object → Service Account → Spreadsheet ID → New Row → Success Response
```

**API Integration Steps:**
1. **Authentication**
   - Service account key authentication
   - OAuth 2.0 token generation
   - API permissions verification

2. **Data Preparation**
   - Format data according to sheet structure
   - Add timestamp and booking ID
   - Validate required fields

3. **Sheet Operations**
   - Connect to specific Google Sheet
   - Append row to "Bookings" sheet
   - Handle API rate limits and errors

4. **Error Handling**
   - Retry mechanism for failed requests
   - Fallback to local storage if API fails
   - Error logging and notification

---

## Email Notification Flow

### Email Service Integration
```
Booking Success → Email Templates → Email Service → Delivery Confirmation
       ↓               ↓              ↓               ↓
Customer Data → HTML Template → SMTP/EmailJS → Email Sent
       ↓               ↓              ↓               ↓
Admin Data → Admin Template → Email Service → Admin Notification
```

### Email Types and Templates

#### 1. Customer Confirmation Email
**Template Variables:**
- `{customerName}` - Customer's full name
- `{packageName}` - Selected travel package
- `{bookingId}` - Unique booking reference
- `{roomType}` - Selected room preference
- `{submissionDate}` - Booking submission date

**Email Content:**
- Booking confirmation details
- Package summary
- Next steps information
- Contact information for queries

#### 2. Admin Notification Email
**Template Variables:**
- `{customerName}` - Customer details
- `{packageName}` - Package information
- `{contactInfo}` - Customer contact details
- `{paymentSlipUrl}` - Link to payment slip
- `{specialRequests}` - Any special requests

**Email Content:**
- New booking notification
- Customer details summary
- Payment slip attachment/link
- Action required notifications

---

## File Storage and Management

### File Upload Data Flow
```
User File Selection → Client Validation → Upload Progress → Server Processing → Storage
        ↓                   ↓                ↓                 ↓               ↓
File Object → Size/Type Check → Progress Bar → Security Scan → Cloudinary URL
```

### File Storage Strategy
**Storage Structure:**
```
/travel-bookings/
  ├── /payment-slips/
  │   ├── /2024/
  │   │   ├── /01/ (January)
  │   │   │   ├── booking-001-payment.jpg
  │   │   │   └── booking-002-payment.pdf
  │   │   └── /02/ (February)
  │   └── /2025/
  └── /temp/ (temporary uploads)
```

**File Naming Convention:**
- Format: `booking-{bookingId}-payment.{extension}`
- Example: `booking-TRV20240115001-payment.jpg`

---

## State Management Architecture

### Frontend State Management
```
Component State (React useState)
     ↓
Form State (React Hook Form)
     ↓
Navigation State (Next.js Router)
     ↓
Global State (React Context - if needed)
```

### State Structure
```javascript
// Form State
{
  currentStep: number,
  formData: {
    personal: {
      name: string,
      email: string,
      phone: string,
      idNumber: string
    },
    preferences: {
      roomType: string,
      specialRequests: string
    },
    payment: {
      file: File | null,
      uploadUrl: string | null
    }
  },
  validation: {
    errors: object,
    isValid: boolean
  },
  submission: {
    isSubmitting: boolean,
    isComplete: boolean,
    bookingId: string | null
  }
}
```

---

## Error Handling and Logging

### Error Flow Architecture
```
Error Occurrence → Error Catching → Error Logging → User Notification → Recovery Action
       ↓               ↓              ↓               ↓                ↓
Exception → Try/Catch → Console/File → Error Message → Retry/Fallback
```

### Error Types and Handling

#### 1. Frontend Errors
- **Validation Errors**: Display inline form errors
- **Network Errors**: Show retry options
- **File Upload Errors**: Clear upload state and show message
- **Navigation Errors**: Redirect to safe page

#### 2. Backend Errors
- **API Errors**: Return structured error responses
- **Database Errors**: Log and return generic error
- **File Upload Errors**: Clean up temporary files
- **External Service Errors**: Implement retry logic

#### 3. Integration Errors
- **Google Sheets API**: Fallback to local storage
- **Email Service**: Queue for retry
- **File Storage**: Use alternative storage

---

## Performance Optimization Data Flow

### Caching Strategy
```
User Request → Cache Check → Cache Hit/Miss → Response/Data Fetch → Cache Update
     ↓             ↓            ↓               ↓                   ↓
Browser → Service Worker → Cached Data → Fast Response → Update Cache
     ↓             ↓            ↓               ↓                   ↓
     └─────────────┴────────────┴───────────────┴───────────────────┘
                            CDN Cache → Server Response
```

### Optimization Techniques
1. **Image Optimization**
   - Next.js Image component with lazy loading
   - WebP format conversion
   - Responsive image sizes

2. **Code Splitting**
   - Dynamic imports for heavy components
   - Route-based code splitting
   - Library code splitting

3. **API Optimization**
   - Response caching
   - Request debouncing
   - Batch operations

---

## Security Data Flow

### Security Layers
```
User Input → Input Validation → Sanitization → Authentication → Authorization → Data Processing
     ↓             ↓              ↓               ↓               ↓                ↓
Raw Data → Client Check → XSS Prevention → CSRF Token → Rate Limit → Safe Processing
```

### Security Measures

#### 1. Input Security
- Client-side validation (UX)
- Server-side validation (security)
- Data sanitization and escaping
- SQL injection prevention (N/A for this project)

#### 2. File Upload Security
- File type validation
- File size restrictions
- Virus scanning
- Secure file storage

#### 3. API Security
- Rate limiting per IP
- CSRF protection
- Request size limits
- Authentication for sensitive operations

---

## Monitoring and Analytics

### Data Collection Flow
```
User Interactions → Analytics Events → Data Processing → Dashboard/Reports
       ↓                  ↓               ↓                ↓
Page Views → Google Analytics → Data Analysis → Performance Metrics
       ↓                  ↓               ↓                ↓
Form Submissions → Custom Events → Conversion Tracking → Business Insights
```

### Metrics Collection
- **Performance Metrics**: Page load times, Core Web Vitals
- **User Behavior**: Page views, form completion rates
- **Error Tracking**: JavaScript errors, API failures
- **Business Metrics**: Booking conversions, popular packages

---

## Backup and Recovery

### Data Backup Strategy
```
Primary Data (Google Sheets) → Backup Data → Recovery Process
       ↓                         ↓              ↓
Live Bookings → Local JSON → Restore Process
       ↓                         ↓              ↓
File Storage → Cloud Backup → File Recovery
```

### Recovery Procedures
1. **Google Sheets Backup**
   - Daily export to JSON
   - Store in secure cloud storage
   - Automated backup verification

2. **File Storage Backup**
   - Cloud provider automatic backup
   - Cross-region replication
   - Regular backup integrity checks

3. **Application Recovery**
   - Git repository as source backup
   - Infrastructure as code
   - Automated deployment procedures