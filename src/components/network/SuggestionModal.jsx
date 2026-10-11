import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';
import { SITE } from '@/config/site';

/**
 * SuggestionModal
 *
 * Minimal, ultra-fast suggestion form:
 * - Home Kitchen: Kitchen Name, City, Contact Number
 * - New Area: Your Location, Food Preference
 * - 1-tap submission directly via WhatsApp
 * - Compact height to guarantee no clipping on any mobile screen
 */
export function SuggestionModal({ isOpen, onClose }) {
  const [type, setType] = useState('kitchen'); // 'kitchen' | 'area'

  // Home Kitchen fields
  const [kitchenName, setKitchenName] = useState('');
  const [city, setCity] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  // New Area fields
  const [location, setLocation] = useState('');
  const [foodPreference, setFoodPreference] = useState('');

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const modalRef = useRef(null);

  // Close on Escape & prevent background scroll
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset form state on open
  useEffect(() => {
    if (isOpen) {
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const validate = () => {
    const nextErrors = {};
    if (type === 'kitchen') {
      if (!kitchenName.trim()) nextErrors.kitchenName = 'Please enter kitchen name';
      if (!city.trim()) nextErrors.city = 'Please enter city';
    } else {
      if (!location.trim()) nextErrors.location = 'Please enter your location';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    let message = '';
    if (type === 'kitchen') {
      message = `Hi DabbaMe Team! Suggesting a Home Kitchen:\n\n` +
        `• Kitchen: ${kitchenName.trim()}\n` +
        `• City: ${city.trim()}\n`;
      if (contactNumber.trim()) {
        message += `• Contact: ${contactNumber.trim()}\n`;
      }
    } else {
      message = `Hi DabbaMe Team! Please launch in my area:\n\n` +
        `• Location: ${location.trim()}\n`;
      if (foodPreference.trim()) {
        message += `• Food Preference: ${foodPreference.trim()}\n`;
      }
    }

    const cleanPhone = SITE.phones?.[0]?.replace('+', '') || '919820060064';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1E1E1E]/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-heading"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-[380px] bg-[#FFFDF9] rounded-2xl sm:rounded-3xl border border-[#ECE7DF] shadow-[0_20px_45px_rgba(0,0,0,0.18)] p-4 sm:p-5 z-10 my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#F2ECE1]">
              <h3 id="modal-heading" className="font-editorial font-medium text-lg sm:text-xl text-[#1E1E1E]">
                Suggest a Location
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="w-7 h-7 rounded-full flex items-center justify-center bg-[#F7F4EE] hover:bg-[#EAE4D8] text-[#55504A] hover:text-[#1E1E1E] transition-colors focus:outline-none cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {isSubmitted ? (
              /* Success View */
              <div className="py-5 flex flex-col items-center text-center gap-2">
                <CheckCircle2 className="w-9 h-9 text-[#22C55E]" />
                <h4 className="font-editorial text-base sm:text-lg font-medium text-[#1E1E1E]">
                  Opened in WhatsApp!
                </h4>
                <p className="text-xs text-[#6B6560] max-w-xs leading-relaxed">
                  Press send in WhatsApp to share your suggestion with our team.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 px-5 py-1.5 rounded-full bg-[#F5B300] hover:bg-[#E0A106] text-[#1E1E1E] font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              /* Minimal, convenient Form */
              <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-2.5 pt-3">
                {/* Mode Selector */}
                <div className="grid grid-cols-2 gap-1 bg-[#F5F2EB] p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => {
                      setType('kitchen');
                      setErrors({});
                    }}
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      type === 'kitchen'
                        ? 'bg-white text-[#1E1E1E] shadow-xs'
                        : 'text-[#6B6560] hover:text-[#1E1E1E]'
                    }`}
                  >
                    Home Kitchen
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setType('area');
                      setErrors({});
                    }}
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      type === 'area'
                        ? 'bg-white text-[#1E1E1E] shadow-xs'
                        : 'text-[#6B6560] hover:text-[#1E1E1E]'
                    }`}
                  >
                    New Area
                  </button>
                </div>

                {type === 'kitchen' ? (
                  /* ── HOME KITCHEN: Kitchen Name, City, Contact Number ── */
                  <>
                    <div>
                      <label htmlFor="k-name" className="block text-[11px] font-semibold text-[#2D2D2D] mb-1">
                        Kitchen Name
                      </label>
                      <input
                        id="k-name"
                        type="text"
                        value={kitchenName}
                        onChange={(e) => {
                          setKitchenName(e.target.value);
                          if (errors.kitchenName) setErrors({ ...errors, kitchenName: null });
                        }}
                        placeholder="e.g. Asha's Kitchen"
                        className={`w-full px-3 py-1.5 rounded-xl border bg-white text-xs sm:text-sm text-[#1E1E1E] focus:outline-none focus:border-[#F5B300] ${
                          errors.kitchenName ? 'border-red-400' : 'border-[#DDD6C8]'
                        }`}
                      />
                      {errors.kitchenName && (
                        <span className="text-[10px] text-red-500 mt-0.5 block">{errors.kitchenName}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="k-city" className="block text-[11px] font-semibold text-[#2D2D2D] mb-1">
                        City
                      </label>
                      <input
                        id="k-city"
                        type="text"
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                          if (errors.city) setErrors({ ...errors, city: null });
                        }}
                        placeholder="e.g. Mumbai, Pune"
                        className={`w-full px-3 py-1.5 rounded-xl border bg-white text-xs sm:text-sm text-[#1E1E1E] focus:outline-none focus:border-[#F5B300] ${
                          errors.city ? 'border-red-400' : 'border-[#DDD6C8]'
                        }`}
                      />
                      {errors.city && (
                        <span className="text-[10px] text-red-500 mt-0.5 block">{errors.city}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="k-contact" className="block text-[11px] font-semibold text-[#2D2D2D] mb-1">
                        Contact Number <span className="text-[#8C867D] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="k-contact"
                        type="tel"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        placeholder="Phone or WhatsApp"
                        className="w-full px-3 py-1.5 rounded-xl border border-[#DDD6C8] bg-white text-xs sm:text-sm text-[#1E1E1E] focus:outline-none focus:border-[#F5B300]"
                      />
                    </div>
                  </>
                ) : (
                  /* ── NEW AREA: Your Location, Preferred Food Preference ── */
                  <>
                    <div>
                      <label htmlFor="a-loc" className="block text-[11px] font-semibold text-[#2D2D2D] mb-1">
                        Your Location
                      </label>
                      <input
                        id="a-loc"
                        type="text"
                        value={location}
                        onChange={(e) => {
                          setLocation(e.target.value);
                          if (errors.location) setErrors({ ...errors, location: null });
                        }}
                        placeholder="e.g. Powai, Mumbai"
                        className={`w-full px-3 py-1.5 rounded-xl border bg-white text-xs sm:text-sm text-[#1E1E1E] focus:outline-none focus:border-[#F5B300] ${
                          errors.location ? 'border-red-400' : 'border-[#DDD6C8]'
                        }`}
                      />
                      {errors.location && (
                        <span className="text-[10px] text-red-500 mt-0.5 block">{errors.location}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="a-pref" className="block text-[11px] font-semibold text-[#2D2D2D] mb-1">
                        Food Preference <span className="text-[#8C867D] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="a-pref"
                        type="text"
                        value={foodPreference}
                        onChange={(e) => setFoodPreference(e.target.value)}
                        placeholder="e.g. Jain, North Indian, Pure Veg"
                        className="w-full px-3 py-1.5 rounded-xl border border-[#DDD6C8] bg-white text-xs sm:text-sm text-[#1E1E1E] focus:outline-none focus:border-[#F5B300]"
                      />
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-full bg-[#F5B300] hover:bg-[#E0A106] text-[#1E1E1E] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-98"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
