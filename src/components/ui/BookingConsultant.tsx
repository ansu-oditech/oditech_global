import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { X, ChevronLeft } from 'lucide-react';

const BOOKING_EXEC_URL =
 "https://script.google.com/macros/s/AKfycbzSjSgGNhSAi5orYWLihQivDaOSxUIHt-v0MgaYW2Ujdf28FNeaL9Q6nmMqmJE4QdVy/exec";

const BookingConsultation = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null,
  });

  const timeSlots = Array.from({ length: 10 }, (_, i) => `${9 + i}:00 AM`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !selectedTime) {
      alert('Please fill all required fields.');
      return;
    }

    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    const submissionData = {
      ...formData,
      date: selectedDate.toLocaleDateString(),
      time: selectedTime,
    };

    try {
      await fetch(BOOKING_EXEC_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ firstName: '', lastName: '', email: '' });
    } catch (error) {
      console.error('Error submitting booking:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'There was an issue submitting your booking. Please try again.',
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50 overflow-y-auto px-3 sm:px-4 pt-10 pb-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 sm:p-8 mx-4 my-auto max-h-[88vh] overflow-y-auto" style={{ marginTop: '60px' }}>
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 transition-colors">
            {step === 1 ? <X size={24} /> : <ChevronLeft size={24} />}
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {step === 1 ? 'Book a Consultation' : 'Enter Your Details'}
          </h2>
          <div className="w-6"></div>
        </div>

        {step === 1 ? (
          <>
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-900">Choose a Date & Time</h3>
            <DatePicker selected={selectedDate} onChange={(date: Date) => setSelectedDate(date)} minDate={new Date()} inline />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
              {timeSlots.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`px-3 py-2 rounded-lg border transition-all ${selectedTime === t ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 hover:border-blue-400'}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => step === 1 && selectedTime && setStep(2)}
                disabled={!selectedTime}
                className={`px-6 py-2.5 rounded-lg text-white font-medium transition ${selectedTime ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}
              >
                Continue
              </button>
            </div>
          </>
        ) : formStatus.isSubmitted ? (
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-700 mb-4">Your consultation has been scheduled successfully. Check your inbox for confirmation.</p>
            <button onClick={onClose} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                placeholder="First Name" className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" required />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                placeholder="Last Name" className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" required />
            </div>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" required />

            {formStatus.error && <p className="text-red-500 text-sm">{formStatus.error}</p>}

            <div className="flex justify-end mt-6">
              <button type="submit" disabled={formStatus.isSubmitting}
                className={`px-6 py-2.5 rounded-lg text-white font-medium transition ${formStatus.isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
                {formStatus.isSubmitting ? 'Submitting...' : 'Confirm Booking'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingConsultation;
