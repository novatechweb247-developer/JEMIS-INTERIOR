import React, { useState } from 'react';
import { PageId } from '../types';
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: PageId) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Living Room Furniture',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Editable business hours state
  const [businessHours, setBusinessHours] = useState([
    { days: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
    { days: 'Saturday', time: '9:00 AM - 5:00 PM' },
    { days: 'Sunday', time: 'Closed / By Appointment' },
  ]);

  const [isEditingHours, setIsEditingHours] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.message) {
      setError('Please fill in all required fields (Full Name, Phone Number, and Message).');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Jemis Interior,%0A%0A*New Enquiry via Website*%0AName: ${formData.fullName}%0APhone: ${formData.phone}%0AService: ${formData.service}%0ALocation: ${formData.location || 'Jos'}%0AMessage: ${formData.message}`
  );

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#191A18] pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
            Contact JEMIS INTERIOR
          </h1>
          <p className="text-base text-[#8A8176] leading-relaxed">
            We welcome your enquiries regarding furniture curation, fitted kitchens, and interior solutions. Reach out via phone, WhatsApp, or visit us in Jos.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="tel:+2348100549618"
            className="bg-[#191A18] text-[#F7F4EE] hover:bg-[#B99A65] hover:text-[#191A18] p-6 transition-colors flex items-center gap-4 group shadow-sm"
          >
            <div className="p-3 bg-white/10 group-hover:bg-black/10">
              <Phone className="w-6 h-6 text-[#B99A65] group-hover:text-[#191A18]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B99A65] group-hover:text-[#191A18] block">Direct Line</span>
              <span className="font-semibold text-sm">CALL NOW</span>
            </div>
          </a>

          <a
            href="https://wa.me/2348100549618"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#191A18] text-[#F7F4EE] hover:bg-[#B99A65] hover:text-[#191A18] p-6 transition-colors flex items-center gap-4 group shadow-sm"
          >
            <div className="p-3 bg-white/10 group-hover:bg-black/10">
              <MessageSquare className="w-6 h-6 text-[#B99A65] group-hover:text-[#191A18]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B99A65] group-hover:text-[#191A18] block">Instant Chat</span>
              <span className="font-semibold text-sm">WHATSAPP US</span>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=No.+23+Gwarandok,+Jos+930251,+Plateau+State,+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#191A18] text-[#F7F4EE] hover:bg-[#B99A65] hover:text-[#191A18] p-6 transition-colors flex items-center gap-4 group shadow-sm"
          >
            <div className="p-3 bg-white/10 group-hover:bg-black/10">
              <Navigation className="w-6 h-6 text-[#B99A65] group-hover:text-[#191A18]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B99A65] group-hover:text-[#191A18] block">Studio Location</span>
              <span className="font-semibold text-sm">GET DIRECTIONS</span>
            </div>
          </a>

          <a
            href="#consultation-form"
            className="bg-[#191A18] text-[#F7F4EE] hover:bg-[#B99A65] hover:text-[#191A18] p-6 transition-colors flex items-center gap-4 group shadow-sm"
          >
            <div className="p-3 bg-white/10 group-hover:bg-black/10">
              <Clock className="w-6 h-6 text-[#B99A65] group-hover:text-[#191A18]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B99A65] group-hover:text-[#191A18] block">Enquiry Form</span>
              <span className="font-semibold text-sm">CONSULTATION</span>
            </div>
          </a>
        </div>

        {/* Main Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Info */}
          <div className="space-y-8 bg-white p-8 md:p-12 border border-[#D9D0C4] shadow-sm">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
                Studio Details
              </span>
              <h2 className="text-3xl font-serif text-[#191A18]">JEMIS INTERIOR</h2>
            </div>

            <div className="space-y-6 text-sm text-[#8A8176]">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#B99A65] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#191A18] block mb-1">Address</strong>
                  <span>No. 23 Gwarandok, Jos 930251, Plateau State, Nigeria.</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#B99A65] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#191A18] block mb-1">Phone Number</strong>
                  <a href="tel:+2348100549618" className="hover:text-[#B99A65] transition-colors">
                    0810 054 9618
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageSquare className="w-5 h-5 text-[#B99A65] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#191A18] block mb-1">WhatsApp Availability</strong>
                  <a href="https://wa.me/2348100549618" target="_blank" rel="noopener noreferrer" className="hover:text-[#B99A65] transition-colors">
                    Chat with us on WhatsApp (+234 810 054 9618)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#D9D0C4]/40">
                <Clock className="w-5 h-5 text-[#B99A65] shrink-0 mt-1" />
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-[#191A18]">Business Hours</strong>
                    <button
                      onClick={() => setIsEditingHours(!isEditingHours)}
                      className="text-xs text-[#B99A65] underline hover:text-[#191A18]"
                    >
                      {isEditingHours ? 'Done' : 'Edit Hours'}
                    </button>
                  </div>

                  {isEditingHours ? (
                    <div className="space-y-3 pt-2">
                      {businessHours.map((h, i) => (
                        <div key={i} className="flex gap-2">
                          <input
                            type="text"
                            value={h.days}
                            onChange={(e) => {
                              const updated = [...businessHours];
                              updated[i].days = e.target.value;
                              setBusinessHours(updated);
                            }}
                            className="w-1/2 p-1.5 text-xs border border-[#D9D0C4] bg-[#F7F4EE]"
                          />
                          <input
                            type="text"
                            value={h.time}
                            onChange={(e) => {
                              const updated = [...businessHours];
                              updated[i].time = e.target.value;
                              setBusinessHours(updated);
                            }}
                            className="w-1/2 p-1.5 text-xs border border-[#D9D0C4] bg-[#F7F4EE]"
                          />
                        </div>
                      ))}
                      <p className="text-[11px] text-[#8A8176]">Opening starts at 8 AM Monday; remaining schedule is editable above.</p>
                    </div>
                  ) : (
                    <div className="space-y-2 pt-1">
                      {businessHours.map((h, i) => (
                        <div key={i} className="flex justify-between text-xs">
                          <span className="font-medium text-[#191A18]">{h.days}</span>
                          <span>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Consultation Form */}
          <div id="consultation-form" className="bg-[#191A18] text-[#F7F4EE] p-8 md:p-12 shadow-xl">
            <div className="space-y-2 mb-8">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
                Project Enquiry
              </span>
              <h3 className="text-2xl font-serif">Request a Consultation</h3>
              <p className="text-xs text-[#D9D0C4]">
                Fill out the form below or send your request directly via WhatsApp for a prompt response.
              </p>
            </div>

            {submitted ? (
              <div className="space-y-6 py-12 text-center">
                <div className="w-16 h-16 bg-[#B99A65]/20 text-[#B99A65] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif">Enquiry Ready</h4>
                <p className="text-sm text-[#D9D0C4] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. To complete your enquiry instantly with JEMIS INTERIOR, click below to send your details via WhatsApp:
                </p>
                <div className="pt-4">
                  <a
                    href={`https://wa.me/2348100549618?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#B99A65] text-[#191A18] hover:bg-[#a68856] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Enquiry via WhatsApp</span>
                  </a>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#8A8176] underline hover:text-white"
                  >
                    Edit enquiry details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-900/40 border border-red-500 text-red-200 text-xs p-3">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#D9D0C4] block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-[#B99A65]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#D9D0C4] block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 08012345678"
                      className="w-full bg-white/5 border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-[#B99A65]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#D9D0C4] block">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-[#B99A65]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#D9D0C4] block">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#191A18] border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-[#B99A65]"
                    >
                      <option value="Living Room Furniture">Living Room Furniture</option>
                      <option value="Sofas and Seating">Sofas and Seating</option>
                      <option value="Fitted Kitchens">Fitted Kitchens</option>
                      <option value="Bedroom Furniture">Bedroom Furniture</option>
                      <option value="Interior Furnishing">Interior Furnishing</option>
                      <option value="Space Styling">Space Styling</option>
                      <option value="Complete Residential">Complete Residential Solutions</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#D9D0C4] block">
                      Project Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Jos, Plateau State"
                      className="w-full bg-white/5 border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-[#B99A65]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#D9D0C4] block">
                    Message / Project Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your space, furniture preferences, or design ideas..."
                    className="w-full bg-white/5 border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-[#B99A65]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B99A65] text-[#191A18] hover:bg-[#a68856] py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry & Connect</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
