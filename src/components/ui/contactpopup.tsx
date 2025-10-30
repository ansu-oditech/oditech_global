import { useState } from 'react';
import { X, Mail, Upload, Calendar, Check } from 'lucide-react';
import BookingConsultation from '../ui/BookingConsultant';

const POPUP_EXEC_URL = "https://script.google.com/macros/s/AKfycbzuKRVh9qMdPQ0AxjW7bD_uCB5OxUaFkAiXf1Ta2Vlhrbgtkbqn7ZpioYHfMXLLWoAU/exec";

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', file: null });
  const [showBooking, setShowBooking] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleFileChange = (e) => setFormData((p) => ({ ...p, file: e.target.files[0] }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      fileName: formData.file ? formData.file.name : "",
    };

    try {
      await fetch(POPUP_EXEC_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); onClose(); }, 2000);
    } catch (err) {
      console.error("Popup submit failed:", err);
      setIsSubmitting(false);
      alert("Failed to send. Try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50 overflow-y-auto px-3 sm:px-4 pt-10 pb-6">
        <div className="bg-blue-950 rounded-2xl shadow-2xl w-full max-w-3xl text-white p-5 sm:p-6 md:p-8 mx-4 my-auto max-h-[88vh] overflow-y-auto" style={{ marginTop: '60px' }}>
          <div className="border-b border-blue-800 pb-4 flex justify-between items-center sticky top-0 bg-blue-950 z-10">
            <h2 className="text-2xl sm:text-3xl font-bold">ODITECH GLOBAL</h2>
            <button onClick={onClose} className="text-blue-300 hover:text-white p-2 rounded-full hover:bg-blue-800 transition-colors">
              <X size={24} />
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-green-400 mb-3">Message Sent!</h3>
              <p className="text-blue-200">We’ll get back to you shortly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div>
                <div className="flex items-center text-white mb-6 flex-wrap">
                  <Mail size={20} className="mr-2" />
                  <span className="text-sm sm:text-base">
                    Email us: <span className="font-semibold">oditechofficial@gmail.com</span>
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Full Name<span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-600"
                      placeholder="John Smith" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Email Address<span className="text-red-500">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-600"
                      placeholder="name@company.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Message<span className="text-red-500">*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                      className="w-full px-4 py-2.5 bg-white border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-600"
                      placeholder="Describe your idea" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Choose File</label>
                    <label className="cursor-pointer w-full flex items-center gap-3 px-4 py-3 bg-white border-2 border-dashed border-blue-700 rounded-lg">
                      <Upload size={18} className="text-black" />
                      <span className="text-sm text-gray-600 truncate">
                        {formData.file ? formData.file.name : 'No file chosen'}
                      </span>
                      <input type="file" onChange={handleFileChange} className="hidden" />
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button type="submit" disabled={isSubmitting}
                      className="w-full sm:w-40 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                      {isSubmitting ? "Sending..." : "Send"}
                    </button>
                    <button type="button" onClick={() => setShowBooking(true)}
                      className="w-full sm:w-52 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center">
                      <Calendar className="mr-2" size={18} />
                      Book Consultation
                    </button>
                  </div>
                </form>
              </div>

              <div className="space-y-6 mt-6 lg:mt-0">
                <div className="bg-blue-800/30 border border-blue-700 rounded-xl p-5 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-white">Premium Services</h3>
                  <ul className="space-y-2">
                    {['Fast response time', 'Expert consultation', 'Professional outcomes'].map((item) => (
                      <li key={item} className="flex items-center">
                        <Check size={18} className="text-green-400 mr-2" />
                        <span className="text-blue-100 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-800/30 border border-blue-700 rounded-xl p-5">
                  <h3 className="text-base font-semibold text-white mb-2">Security and Confidentiality</h3>
                  <p className="text-blue-100 text-sm">We are committed to protecting and respecting your privacy.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showBooking && <BookingConsultation onClose={() => setShowBooking(false)} />}
    </>
  );
};

export default ContactPopup;
