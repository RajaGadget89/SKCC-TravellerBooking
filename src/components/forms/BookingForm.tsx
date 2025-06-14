import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import type { BookingFormData } from '@/types/package';

interface BookingFormProps {
  packageId: string;
  packagePrice: number;
  onSubmit: (data: BookingFormData) => Promise<void>;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  packageId,
  packagePrice,
  onSubmit,
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    packageId,
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    travelInfo: {
      startDate: '',
      numberOfPeople: 1,
      specialRequirements: '',
    },
    paymentInfo: {
      amount: packagePrice,
      paymentMethod: 'Bank Transfer',
    },
  });

  const handleInputChange = (
    section: keyof BookingFormData,
    field: string,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Error submitting booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.name}
                  onChange={(e) =>
                    handleInputChange('personalInfo', 'name', e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) =>
                    handleInputChange('personalInfo', 'email', e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.personalInfo.phone}
                  onChange={(e) =>
                    handleInputChange('personalInfo', 'phone', e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">
                  Address
                </label>
                <textarea
                  value={formData.personalInfo.address}
                  onChange={(e) =>
                    handleInputChange('personalInfo', 'address', e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  rows={3}
                  required
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Travel Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={formData.travelInfo.startDate}
                  onChange={(e) =>
                    handleInputChange('travelInfo', 'startDate', e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">
                  Number of People
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.travelInfo.numberOfPeople}
                  onChange={(e) =>
                    handleInputChange(
                      'travelInfo',
                      'numberOfPeople',
                      parseInt(e.target.value)
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">
                  Special Requirements
                </label>
                <textarea
                  value={formData.travelInfo.specialRequirements}
                  onChange={(e) =>
                    handleInputChange(
                      'travelInfo',
                      'specialRequirements',
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  rows={3}
                />
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-1">
                  Total Amount
                </label>
                <p className="text-2xl font-bold text-primary">
                  ${formData.paymentInfo.amount * formData.travelInfo.numberOfPeople}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">
                  Payment Method
                </label>
                <select
                  value={formData.paymentInfo.paymentMethod}
                  onChange={(e) =>
                    handleInputChange(
                      'paymentInfo',
                      'paymentMethod',
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Credit Card">Credit Card</option>
                </select>
              </div>
              {formData.paymentInfo.paymentMethod === 'Bank Transfer' && (
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Payment Slip
                  </label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => {
                      // TODO: Implement file upload
                      console.log('File upload:', e.target.files?.[0]);
                    }}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              )}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((stepNumber) => (
            <React.Fragment key={stepNumber}>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= stepNumber
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`flex-1 h-1 ${
                    step > stepNumber ? 'bg-primary' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep((prev) => prev - 1)}
          >
            Previous
          </Button>
        )}
        {step < 3 ? (
          <Button
            type="button"
            onClick={() => setStep((prev) => prev + 1)}
            className="ml-auto"
          >
            Next
          </Button>
        ) : (
          <Button
            type="submit"
            isLoading={isSubmitting}
            className="ml-auto"
          >
            Complete Booking
          </Button>
        )}
      </div>
    </form>
  );
}; 