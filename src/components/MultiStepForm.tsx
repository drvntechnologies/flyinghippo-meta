import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Calendar, Phone, Mail, User, Building, DollarSign } from 'lucide-react';

interface FormData {
  hasHomeBusiness: boolean | null;
  businessName: string;
  name: string;
  phone: string;
  email: string;
  revenue: string;
  canSpend: boolean | null;
}

interface MultiStepFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    hasHomeBusiness: null,
    businessName: '',
    name: '',
    phone: '',
    email: '',
    revenue: '',
    canSpend: null
  });

  const totalSteps = 8;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setFormData({
      hasHomeBusiness: null,
      businessName: '',
      name: '',
      phone: '',
      email: '',
      revenue: '',
      canSpend: null
    });
    onClose();
  };

  const handleReject = () => {
    alert("Unfortunately, our service is specifically designed for home service businesses. We appreciate your interest!");
    handleClose();
  };

  const revenueOptions = [
    '$0-$99k',
    '$100k-$199k',
    '$200k-$499k',
    '$500k-$999k',
    '$1M-$3M',
    '$3M-$5M',
    '$5M+'
  ];

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.hasHomeBusiness !== null;
      case 2:
        return formData.businessName.trim() !== '';
      case 3:
        return formData.name.trim() !== '';
      case 4:
        return formData.phone.trim() !== '';
      case 5:
        return formData.email.trim() !== '' && formData.email.includes('@');
      case 6:
        return formData.revenue !== '';
      case 7:
        return formData.canSpend !== null;
      default:
        return true;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">
              Step {currentStep} of {totalSteps}
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-xs">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-8 min-h-[400px] flex flex-col justify-center">
          {/* Step 1: Home Service Business */}
          {currentStep === 1 && (
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Building className="w-16 h-16 text-blue-600 mx-auto" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Do you currently operate a home service based business?
                </h2>
                <p className="text-gray-600">
                  Our service is specifically designed for home service businesses like plumbing, HVAC, roofing, etc.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setFormData({ ...formData, hasHomeBusiness: true });
                    handleNext();
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  YES
                </button>
                <button
                  onClick={handleReject}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  NO (you will be rejected)
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Business Name */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <Building className="w-16 h-16 text-blue-600 mx-auto" />
                <h2 className="text-3xl font-bold text-gray-900">
                  What's your business name?
                </h2>
              </div>
              <div>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="Enter your business name"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* Step 3: Name */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <User className="w-16 h-16 text-blue-600 mx-auto" />
                <h2 className="text-3xl font-bold text-gray-900">
                  What's your name?
                </h2>
              </div>
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* Step 4: Phone */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <Phone className="w-16 h-16 text-blue-600 mx-auto" />
                <h2 className="text-3xl font-bold text-gray-900">
                  What's your phone number?
                </h2>
              </div>
              <div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* Step 5: Email */}
          {currentStep === 5 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <Mail className="w-16 h-16 text-blue-600 mx-auto" />
                <h2 className="text-3xl font-bold text-gray-900">
                  What's your email address?
                </h2>
              </div>
              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* Step 6: Revenue */}
          {currentStep === 6 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <DollarSign className="w-16 h-16 text-blue-600 mx-auto" />
                <h2 className="text-3xl font-bold text-gray-900">
                  What's your current annual revenue?
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {revenueOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setFormData({ ...formData, revenue: option });
                      setTimeout(handleNext, 300);
                    }}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      formData.revenue === option
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Can Spend */}
          {currentStep === 7 && (
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <DollarSign className="w-16 h-16 text-blue-600 mx-auto" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Are you able to spend $2,000 to grow your business?
                </h2>
                <p className="text-gray-600">
                  This investment covers our proven Google Maps ranking system
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setFormData({ ...formData, canSpend: true });
                    handleNext();
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  YES
                </button>
                <button
                  onClick={() => {
                    setFormData({ ...formData, canSpend: false });
                    handleNext();
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  NO
                </button>
              </div>
            </div>
          )}

          {/* Step 8: Calendar Booking */}
          {currentStep === 8 && (
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Calendar className="w-16 h-16 text-blue-600 mx-auto" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Perfect! Let's schedule your free consultation
                </h2>
                <p className="text-gray-600">
                  Choose a time that works best for you. We'll discuss your specific needs and create a custom strategy.
                </p>
              </div>
              
              {/* Mock Calendar */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 mb-2">Tomorrow</div>
                    <div className="space-y-2">
                      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        10:00 AM
                      </button>
                      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        2:00 PM
                      </button>
                      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        4:00 PM
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 mb-2">Day After</div>
                    <div className="space-y-2">
                      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        9:00 AM
                      </button>
                      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        11:00 AM
                      </button>
                      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        3:00 PM
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    alert(`Thank you ${formData.name}! Your consultation has been scheduled. We'll call you at ${formData.phone} to confirm the details.`);
                    handleClose();
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {currentStep > 1 && currentStep < 8 && (
          <div className="flex items-center justify-between p-6 border-t border-gray-200">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isStepValid()
                  ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;