import { BookingForm } from '@/components/forms/BookingForm';
import type { BookingFormData } from '@/types/package';

// Temporary mock data - will be replaced with API call
const mockPackage = {
  id: '1',
  title: 'Bali Adventure',
  price: 1299,
};

export default function BookingPage({ params }: { params: { id: string } }) {
  const handleSubmit = async (data: BookingFormData) => {
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      const result = await response.json();
      // TODO: Handle successful booking (e.g., redirect to success page)
      console.log('Booking successful:', result);
    } catch (error) {
      console.error('Error submitting booking:', error);
      throw error;
    }
  };

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Book Your Adventure</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{mockPackage.title}</h2>
            <p className="text-text-light">
              Please fill out the form below to complete your booking.
            </p>
          </div>
          <BookingForm
            packageId={params.id}
            packagePrice={mockPackage.price}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
} 