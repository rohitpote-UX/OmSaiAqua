"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Home 20L Water Jar Delivery",
    locality: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{
    message: string;
    referenceId?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateClient = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name.";
    }
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.service) {
      errs.service = "Please select a water service.";
    }
    if (!formData.locality.trim() || formData.locality.trim().length < 2) {
      errs.locality = "Please enter your area or society in Vishrantwadi / Dhanori.";
    }
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessResponse(null);

    if (!validateClient()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        setErrorMessage(data.message || "Failed to process inquiry. Please call us directly.");
      } else {
        setSuccessResponse({
          message: data.message,
          referenceId: data.data?.referenceId,
        });
        setFormData({
          name: "",
          phone: "",
          service: "Home 20L Water Jar Delivery",
          locality: "",
          message: "",
        });
        setFieldErrors({});
      }
    } catch {
      setErrorMessage("Network connection error. Please call our phone lines directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F4F8F9] border-t border-[#E2EDF0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Verified Business Information & Phone Numbers */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="badge-pill bg-white text-[#087EAA] border border-[#E2EDF0] mb-4">
              Get In Touch
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182329] tracking-tight leading-[1.15] text-balance mb-6">
              Contact Om Sai Aqua.
            </h2>

            <p className="text-base sm:text-lg text-[#5E6E77] leading-relaxed mb-8">
              Call us directly for prompt water jar delivery or submit your delivery request using the form.
              Owner Deepak Khatave and our local dispatch team are ready to assist.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 w-full mb-8">
              {/* Primary Phone */}
              <a
                href={`tel:${SITE_CONFIG.phonePrimaryRaw}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#E2EDF0] hover:border-[#087EAA] shadow-xs transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E0F4FA] flex items-center justify-center text-[#087EAA] group-hover:bg-[#087EAA] group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5E6E77]">
                    Primary Direct Line (Call / Order)
                  </div>
                  <div className="text-lg font-bold text-[#182329] group-hover:text-[#087EAA] transition-colors">
                    {SITE_CONFIG.phonePrimary}
                  </div>
                </div>
              </a>

              {/* Secondary Phone */}
              <a
                href={`tel:${SITE_CONFIG.phoneSecondaryRaw}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#E2EDF0] hover:border-[#087EAA] shadow-xs transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F4F8F9] flex items-center justify-center text-[#182329] group-hover:bg-[#087EAA] group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5E6E77]">
                    Secondary Support Line
                  </div>
                  <div className="text-lg font-bold text-[#182329] group-hover:text-[#087EAA] transition-colors">
                    {SITE_CONFIG.phoneSecondary}
                  </div>
                </div>
              </a>

              {/* Physical Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E2EDF0] shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#F4F8F9] flex items-center justify-center text-[#182329] shrink-0">
                  <MapPin className="w-5 h-5 text-[#087EAA]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5E6E77]">
                    Facility Address
                  </div>
                  <div className="text-sm font-bold text-[#182329] mt-0.5">
                    {SITE_CONFIG.address.full}
                  </div>
                  <div className="text-xs text-[#5E6E77] mt-1">
                    Proprietor: {SITE_CONFIG.owner}
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#E2EDF0] shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#F4F8F9] flex items-center justify-center text-[#182329] shrink-0">
                  <Clock className="w-5 h-5 text-[#087EAA]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5E6E77]">
                    Delivery Hours
                  </div>
                  <div className="text-sm font-bold text-[#182329] mt-0.5">
                    {SITE_CONFIG.operatingHours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2EDF0] shadow-xl">
              <div className="flex items-center justify-between pb-6 border-b border-[#EBF2F4] mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#182329]">Send a 20L Water Inquiry</h3>
                  <p className="text-xs sm:text-sm text-[#5E6E77] mt-1">
                    Fill in your details and we will call you to confirm timings and jar requirements.
                  </p>
                </div>
                <div className="hidden sm:flex w-10 h-10 rounded-2xl bg-[#E0F4FA] items-center justify-center text-[#087EAA]">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {/* Success Notification */}
              {successResponse && (
                <div className="p-5 rounded-2xl bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] mb-6 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">Delivery Inquiry Received</div>
                    <div className="text-xs sm:text-sm mt-0.5">{successResponse.message}</div>
                    {successResponse.referenceId && (
                      <div className="text-xs font-mono font-bold mt-2">
                        Reference: {successResponse.referenceId}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {errorMessage && (
                <div className="p-5 rounded-2xl bg-[#FFEBEE] border border-[#FFCDD2] text-[#C62828] mb-6 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">{errorMessage}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-bold uppercase tracking-wider text-[#182329] mb-2">
                    Your Full Name *
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      fieldErrors.name ? "border-red-500 bg-red-50/20" : "border-[#E2EDF0] bg-[#F4F8F9]/60"
                    } text-[#182329] text-sm focus:outline-none focus:ring-2 focus:ring-[#087EAA] transition-all`}
                  />
                  {fieldErrors.name && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{fieldErrors.name}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="inquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-[#182329] mb-2">
                    Contact Phone Number (10 Digits) *
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 8390612060"
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      fieldErrors.phone ? "border-red-500 bg-red-50/20" : "border-[#E2EDF0] bg-[#F4F8F9]/60"
                    } text-[#182329] text-sm focus:outline-none focus:ring-2 focus:ring-[#087EAA] transition-all`}
                  />
                  {fieldErrors.phone && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{fieldErrors.phone}</p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="inquiry-service" className="block text-xs font-bold uppercase tracking-wider text-[#182329] mb-2">
                    Required Supply Service *
                  </label>
                  <select
                    id="inquiry-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#E2EDF0] bg-[#F4F8F9]/60 text-[#182329] text-sm focus:outline-none focus:ring-2 focus:ring-[#087EAA] transition-all cursor-pointer"
                  >
                    <option value="Home 20L Water Jar Delivery">Home 20L Water Jar Delivery</option>
                    <option value="Office & Commercial Supply">Office &amp; Commercial Supply</option>
                    <option value="Events & Bulk Supply">Events, Parties &amp; Bulk Supply</option>
                    <option value="Alkaline RO + UV Purification">Alkaline RO + UV Jar Inquiry</option>
                  </select>
                </div>

                {/* Locality / Address */}
                <div>
                  <label htmlFor="inquiry-locality" className="block text-xs font-bold uppercase tracking-wider text-[#182329] mb-2">
                    Area / Society Name (Vishrantwadi / Dhanori) *
                  </label>
                  <input
                    id="inquiry-locality"
                    type="text"
                    required
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                    placeholder="e.g. Anand Park, Near Datta Mandir, Dhanori Rd"
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      fieldErrors.locality ? "border-red-500 bg-red-50/20" : "border-[#E2EDF0] bg-[#F4F8F9]/60"
                    } text-[#182329] text-sm focus:outline-none focus:ring-2 focus:ring-[#087EAA] transition-all`}
                  />
                  {fieldErrors.locality && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{fieldErrors.locality}</p>
                  )}
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="inquiry-message" className="block text-xs font-bold uppercase tracking-wider text-[#182329] mb-2">
                    Additional Details / Number of Cans (Optional)
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Need 2 jars alternate mornings for residential flat..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E2EDF0] bg-[#F4F8F9]/60 text-[#182329] text-sm focus:outline-none focus:ring-2 focus:ring-[#087EAA] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#F07824] hover:bg-[#D96515] disabled:bg-[#F07824]/60 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Delivery Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Delivery Inquiry</span>
                    </>
                  )}
                </button>
              </form>

              {/* Alternative WhatsApp Action */}
              <div className="mt-6 pt-6 border-t border-[#EBF2F4] text-center">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-[#182329] hover:text-[#087EAA] transition-colors"
                >
                  Prefer messaging? Chat directly with us on WhatsApp ({SITE_CONFIG.phoneSecondary}) →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
