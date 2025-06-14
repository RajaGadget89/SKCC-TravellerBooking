import { NextResponse } from 'next/server';
import type { BookingFormData } from '@/types/package';
import { z } from 'zod';

// Validation schema for booking data
const bookingSchema = z.object({
  packageId: z.string(),
  personalInfo: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    address: z.string().min(5, 'Address must be at least 5 characters'),
  }),
  travelInfo: z.object({
    startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
    numberOfPeople: z.number().min(1, 'At least 1 person required'),
    specialRequirements: z.string().optional(),
  }),
  paymentInfo: z.object({
    amount: z.number().positive('Amount must be positive'),
    paymentMethod: z.enum(['Bank Transfer', 'Credit Card']),
    paymentSlipUrl: z.string().url('Invalid URL').optional(),
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = bookingSchema.parse(body);
    
    // TODO: Implement Google Sheets integration for storing bookings
    // TODO: Implement email notification
    
    return NextResponse.json({
      success: true,
      message: 'Booking received successfully',
      bookingId: `BK${Date.now()}`,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
} 