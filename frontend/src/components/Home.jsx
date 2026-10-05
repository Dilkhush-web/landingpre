import React, { useRef, useState } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaStar, FaMapMarkerAlt, FaTimes, FaCamera, FaAward, FaHeart, FaChevronDown } from 'react-icons/fa';

export default function Home() {
  const videoRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // Video 58-second auto restart logic
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 58) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917999993120?text=Hi,%20I%20would%20like%20to%20book%20a%20photography%20session.', '_blank');
  };

  const handleCalendly = () => {
    window.open('https://calendly.com', '_blank');
  };

  // Optimized Cloudinary Image URLs for instant lightning-fast loading
  const portfolioImages = [
    "https://res.cloudinary.com/doa6d6cyf/image/upload/q_auto,f_auto,w_1200/v1791139226/4-8mb_dywgm9.jpg",
    "https://res.cloudinary.com/doa6d6cyf/image/upload/q_auto,f_auto,w_1200/v1791139156/5-8mb_iur0gn.jpg",
    "https://res.cloudinary.com/doa6d6cyf/image/upload/q_auto,f_auto,w_1200/v1791139153/8-8mb_cpvcl5.jpg",
    "https://res.cloudinary.com/doa6d6cyf/image/upload/q_auto,f_auto,w_1200/v1791139185/3-8mb_s1bb1v.jpg"
  ];

  const faqs = [
    {
      q: "How many clients and love stories have you captured so far?",
      a: "We have successfully captured over 600+ love stories and wedding celebrations across Ambala, Chandigarh, Mohali, and surrounding regions[cite: 1]."
    },
    {
      q: "Can we schedule a consultation meeting in advance for our dates?",
      a: "Yes, absolutely! You can click the 'Schedule Consultation' button to pick a convenient time slot, or connect with our team directly via WhatsApp."
    },
    {
      q: "Can we talk to you directly?",
      a: "Yes, you can talk to us directly anytime! Feel free to call us at 7999993120 or 9896329393 for immediate assistance and booking inquiries[cite: 1]."
    },
    {
      q: "What regions and locations do your team travel to for shoots?",
      a: "We are primarily based and active across Ambala, Chandigarh, and Mohali[cite: 1], and we also travel to other destinations upon request."
    },
    {
      q: "What is the delivery timeline for final edited photos and cinematic videos?",
      a: "Sneak peeks are shared within a few days of the event, and the complete high-resolution edited album & 4K cinematic video are delivered within 3 to 4 weeks."
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#2C2A29] min-h-screen font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#EFECE6] selection:text-[#1A1817] relative overflow-x-hidden">
      
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .font-luxury { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      {/* ================= FLOATING WHATSAPP BUTTON ================= */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-40 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all transform hover:scale-110 flex items-center justify-center animate-bounce"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </button>

      {/* ================= SECTION 1: HERO SECTION (Fast Video Loading) ================= */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-end justify-start pb-10 sm:pb-12 px-5 sm:px-10 md:px-20">
        {/* Background Video with Auto-Optimization & Preload */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover opacity-75 filter brightness-95 contrast-105"
          >
            <source src="https://res.cloudinary.com/doa6d6cyf/video/upload/q_auto:good,vc_auto/v1784909337/Turning_birthdays_into_fairytales._..Manasvis_1st_birthday_birthdayfun_1stbirthday_hqf4fd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay for Bottom-Left Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-xl md:max-w-3xl text-left flex flex-col items-start text-white">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3 sm:mb-4 text-[#F9F6F0] text-[11px] sm:text-xs tracking-[0.25em] uppercase font-medium shadow-lg">
            <FaMapMarkerAlt className="text-[#E6D5C3]" /> Ambala &bull; Chandigarh &bull; Mohali
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-luxury font-bold tracking-tight text-[#F9F6F0] mb-2 sm:mb-3 drop-shadow-2xl leading-[1.1]">
            Perfect Image Photography
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-white/90 font-light tracking-wide mb-6 sm:mb-8 font-luxury italic drop-shadow-md">
            Capturing <span className="text-[#E6D5C3] font-semibold not-italic">600+ Love Stories</span> with Timeless Elegance
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-3 bg-[#F9F6F0] text-[#1A1817] px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-2xl tracking-wide text-xs sm:text-base border border-[#E6D5C3]"
            >
              <FaWhatsapp className="text-xl text-green-700" /> Connect on WhatsApp
            </button>
            <button
              onClick={handleCalendly}
              className="flex items-center justify-center gap-3 bg-black/40 hover:bg-black/60 border-2 border-white/70 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold transition-all backdrop-blur-md tracking-wide text-xs sm:text-base shadow-xl"
            >
              <FaCalendarAlt className="text-lg text-[#E6D5C3]" /> Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: SELECTED WORK (Optimized Images) ================= */}
      <section className="py-16 sm:py-28 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto bg-[#FDFBF7]">
        <div className="text-center mb-10 sm:mb-20">
          <span className="text-[#8C7A6B] uppercase tracking-[0.3em] text-[10px] sm:text-xs font-semibold block mb-2 sm:mb-3">Our Portfolio</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-luxury font-bold text-[#1A1817] mb-2 sm:mb-3">Selected Masterpieces</h2>
          <p className="text-[#665C54] max-w-xl mx-auto text-xs sm:text-sm md:text-base font-light">Click on any frame to experience the moment in full detail.</p>
        </div>

        {/* Asymmetrical Grid on Desktop, Clean 2-Column Grid on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-6 md:gap-8 items-center">
          
          {/* Image 1 */}
          <div 
            onClick={() => setActiveImage(portfolioImages[0])}
            className="col-span-2 md:col-span-7 h-[260px] sm:h-[350px] md:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden group relative shadow-lg sm:shadow-xl border border-[#EFECE6] cursor-pointer transform transition-all duration-500 hover:-translate-y-1"
          >
            <img 
              src={portfolioImages[0]} 
              alt="Masterpiece 1" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 2 */}
          <div 
            onClick={() => setActiveImage(portfolioImages[1])}
            className="col-span-1 md:col-span-5 h-[220px] sm:h-[300px] md:h-[390px] rounded-xl sm:rounded-2xl overflow-hidden group relative shadow-lg sm:shadow-xl border border-[#EFECE6] cursor-pointer transform transition-all duration-500 hover:-translate-y-1"
          >
            <img 
              src={portfolioImages[1]} 
              alt="Masterpiece 2" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 3 */}
          <div 
            onClick={() => setActiveImage(portfolioImages[2])}
            className="col-span-1 md:col-span-5 h-[220px] sm:h-[300px] md:h-[360px] rounded-xl sm:rounded-2xl overflow-hidden group relative shadow-lg sm:shadow-xl border border-[#EFECE6] cursor-pointer transform transition-all duration-500 hover:-translate-y-1"
          >
            <img 
              src={portfolioImages[2]} 
              alt="Masterpiece 3" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 4 */}
          <div 
            onClick={() => setActiveImage(portfolioImages[3])}
            className="col-span-2 md:col-span-7 h-[260px] sm:h-[350px] md:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden group relative shadow-lg sm:shadow-xl border border-[#EFECE6] cursor-pointer transform transition-all duration-500 hover:-translate-y-1"
          >
            <img 
              src={portfolioImages[3]} 
              alt="Masterpiece 4" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* Lightbox Modal for Full Image View */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4">
          <button 
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 rounded-full transition-all"
          >
            <FaTimes className="text-lg sm:text-xl" />
          </button>
          <img src={activeImage} alt="Expanded View" loading="eager" className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10" />
        </div>
      )}

      {/* ================= SECTION 3: ULTRA-PREMIUM CTA & BOOKING ================= */}
      <section className="py-16 sm:py-28 bg-gradient-to-b from-[#F9F5F0] via-[#F4EFEA] to-[#EFE8E1] border-y border-[#E2D9CE] px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-[#E6D5C3]/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-[#E6D5C3]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-[#7A695B] uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[10px] sm:text-xs font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#EAE3DA] border border-[#D5CBC0] inline-block mb-4 sm:mb-6 shadow-sm">
            Exclusive Booking & Availability
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-luxury font-bold text-[#1A1817] mb-4 sm:mb-6 leading-tight">
            Let's Craft Your Forever Legacy
          </h2>
          <p className="text-[#595048] text-xs sm:text-base md:text-lg mb-8 sm:mb-14 max-w-2xl mx-auto leading-relaxed font-light">
            With over <strong className="text-[#1A1817] font-semibold">600+ milestone celebrations</strong> captured[cite: 1], our calendar fills up months in advance. Secure your preferred dates with our elite photography team today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 text-left">
            <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl border border-[#E8E0D5] shadow-sm flex items-start gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-[#1A1817] text-[#F9F6F0] rounded-xl shrink-0"><FaCamera className="text-base sm:text-xl" /></div>
              <div>
                <h4 className="font-sans font-bold text-sm sm:text-lg text-[#1A1817] tracking-tight">Cinematic Gear</h4>
                <p className="text-[11px] sm:text-xs text-[#665C54] mt-0.5 sm:mt-1 font-sans">4K Ultra-HD cameras & prime cinematic lenses.</p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl border border-[#E8E0D5] shadow-sm flex items-start gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-[#1A1817] text-[#F9F6F0] rounded-xl shrink-0"><FaAward className="text-base sm:text-xl" /></div>
              <div>
                <h4 className="font-sans font-bold text-sm sm:text-lg text-[#1A1817] tracking-tight">Award-Winning Eye</h4>
                <p className="text-[11px] sm:text-xs text-[#665C54] mt-0.5 sm:mt-1 font-sans">Specialized in raw candid emotions & royal portraits.</p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl border border-[#E8E0D5] shadow-sm flex items-start gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-[#1A1817] text-[#F9F6F0] rounded-xl shrink-0"><FaHeart className="text-base sm:text-xl" /></div>
              <div>
                <h4 className="font-sans font-bold text-sm sm:text-lg text-[#1A1817] tracking-tight">600+ Happy Couples</h4>
                <p className="text-[11px] sm:text-xs text-[#665C54] mt-0.5 sm:mt-1 font-sans">Trusted across Ambala, Chandigarh, and Mohali.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2.5 bg-[#1A1817] text-[#FDFBF7] px-7 py-3.5 sm:px-10 sm:py-4 rounded-full font-semibold hover:bg-[#332F2D] transition-all transform hover:-translate-y-1 shadow-2xl text-xs sm:text-base tracking-wide border border-[#332F2D]"
            >
              <FaWhatsapp className="text-xl sm:text-2xl text-green-400" /> Instant WhatsApp Chat
            </button>
            <button
              onClick={handleCalendly}
              className="flex items-center justify-center gap-2.5 bg-white/80 hover:bg-white border-2 border-[#1A1817]/30 text-[#1A1817] px-7 py-3.5 sm:px-10 sm:py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1 shadow-xl text-xs sm:text-base tracking-wide"
            >
              <FaCalendarAlt className="text-base sm:text-xl text-[#7A695B]" /> Book Direct Meeting
            </button>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E2D9CE] text-[11px] sm:text-sm text-[#7A695B] flex flex-wrap items-center justify-center gap-4 sm:gap-8 tracking-wider font-medium">
            <span>📞 Direct Inquiries: 7999993120 / 9896329393</span>
            <span>📍 Serving Ambala, Chandigarh & Mohali</span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: ENGLISH FAQ SECTION ================= */}
      <section className="py-16 sm:py-28 px-4 sm:px-8 md:px-16 max-w-4xl mx-auto bg-[#FDFBF7]">
        <div className="text-center mb-10 sm:mb-20">
          <span className="text-[#8C7A6B] uppercase tracking-[0.3em] text-[10px] sm:text-xs font-semibold block mb-2 sm:mb-3">Got Questions?</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-luxury font-bold text-[#1A1817] mb-2 sm:mb-3">Frequently Asked Questions</h2>
          <p className="text-[#665C54] max-w-lg mx-auto text-xs sm:text-sm md:text-base font-light">Everything you need to know about booking our photography services.</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#F4EFEA] border border-[#E8E2D8] rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-luxury font-bold text-base sm:text-xl text-[#1A1817] focus:outline-none"
              >
                <span>{faq.q}</span>
                <FaChevronDown className={`text-xs sm:text-sm text-[#8C7A6B] transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-[#595048] font-light leading-relaxed border-t border-[#E8E2D8]/50 pt-3 sm:pt-4 font-sans">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 5: REAL CLIENT REVIEWS (2x2 Mobile Grid Layout) ================= */}
      <section className="py-16 sm:py-28 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto bg-[#F9F5F0] border-t border-[#E8E2D8]">
        <div className="text-center mb-10 sm:mb-20">
          <span className="text-[#8C7A6B] uppercase tracking-[0.3em] text-[10px] sm:text-xs font-semibold block mb-2 sm:mb-3">Client Love</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-luxury font-bold text-[#1A1817] mb-2 sm:mb-3">Words From Our Couples</h2>
          <p className="text-[#665C54] max-w-xl mx-auto text-xs sm:text-sm md:text-base font-light">Read how we helped preserve lifetime memories for our wonderful clients.</p>
        </div>

        {/* 2 Cards per row on Mobile/Tablet (2x2 layout) & 4 Cards on Large Screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
          
          {/* Review Card 1 */}
          <div className="bg-[#FDFBF7] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E8E2D8] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all">
            <div>
              <div className="flex text-amber-600 gap-0.5 sm:gap-1 mb-2 sm:mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-[9px] sm:text-xs" />)}
              </div>
              <p className="text-[#4A423D] text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6 italic font-light">
                "Big shout out to Team Perfect Image Photography for the most beautiful wedding photos, album, and film. Amazing mood, creative, professional, and very easy to work with!"
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 border-t border-[#E8E2D8] pt-3 sm:pt-4">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#1A1817] text-[#FDFBF7] flex items-center justify-center font-bold text-[10px] sm:text-xs font-luxury shadow-sm shrink-0">
                BQ
              </div>
              <div>
                <h4 className="font-semibold text-[11px] sm:text-sm text-[#1A1817]">Bakhshinder Qor</h4>
                <span className="text-[9px] sm:text-xs text-[#7A695B] block font-light">Verified Google Review</span>
              </div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="bg-[#FDFBF7] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E8E2D8] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all">
            <div>
              <div className="flex text-amber-600 gap-0.5 sm:gap-1 mb-2 sm:mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-[9px] sm:text-xs" />)}
              </div>
              <p className="text-[#4A423D] text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6 italic font-light">
                "An excellent experience! The service was professional and well-organized. Photographers were patient, punctual, and captured emotions and lighting with great detail. Highly recommended!"
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 border-t border-[#E8E2D8] pt-3 sm:pt-4">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#1A1817] text-[#FDFBF7] flex items-center justify-center font-bold text-[10px] sm:text-xs font-luxury shadow-sm shrink-0">
                SK
              </div>
              <div>
                <h4 className="font-semibold text-[11px] sm:text-sm text-[#1A1817]">Siminpreet Kaur</h4>
                <span className="text-[9px] sm:text-xs text-[#7A695B] block font-light">Verified Google Review</span>
              </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-[#FDFBF7] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E8E2D8] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all">
            <div>
              <div className="flex text-amber-600 gap-0.5 sm:gap-1 mb-2 sm:mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-[9px] sm:text-xs" />)}
              </div>
              <p className="text-[#4A423D] text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6 italic font-light">
                "Name defines the work! Excellent output, we keep looking at the pictures and videos again and again. Just give a big smile, Perfect Image Photography handles the rest!"
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 border-t border-[#E8E2D8] pt-3 sm:pt-4">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#1A1817] text-[#FDFBF7] flex items-center justify-center font-bold text-[10px] sm:text-xs font-luxury shadow-sm shrink-0">
                MS
              </div>
              <div>
                <h4 className="font-semibold text-[11px] sm:text-sm text-[#1A1817]">Maninder Singh</h4>
                <span className="text-[9px] sm:text-xs text-[#7A695B] block font-light">Verified Google Review</span>
              </div>
            </div>
          </div>

          {/* Review Card 4 */}
          <div className="bg-[#FDFBF7] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E8E2D8] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all">
            <div>
              <div className="flex text-amber-600 gap-0.5 sm:gap-1 mb-2 sm:mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-[9px] sm:text-xs" />)}
              </div>
              <p className="text-[#4A423D] text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6 italic font-light">
                "We are absolutely thrilled! The team was damn good — professional, creative, and capturing every moment so beautifully. Highly recommended for top-notch photography."
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 border-t border-[#E8E2D8] pt-3 sm:pt-4">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#1A1817] text-[#FDFBF7] flex items-center justify-center font-bold text-[10px] sm:text-xs font-luxury shadow-sm shrink-0">
                MB
              </div>
              <div>
                <h4 className="font-semibold text-[11px] sm:text-sm text-[#1A1817]">Mansi bhandari</h4>
                <span className="text-[9px] sm:text-xs text-[#7A695B] block font-light">Verified Google Review</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 border-t border-[#E8E2D8] text-center text-xs sm:text-sm text-[#7A695B] bg-[#F4EFEA] tracking-wider">
        <p>&copy; {new Date().getFullYear()} Perfect Image Photography. All Rights Reserved.</p>
      </footer>

    </div>
  );
}