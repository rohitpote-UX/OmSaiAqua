import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = {
  title: "Privacy Policy | Om Sai Aqua",
  description:
    "Privacy policy regarding customer contact information and delivery coordination for Om Sai Aqua in Vishrantwadi, Pune.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-[#F4F8F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#151515] hover:text-[#F07824] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E7E4DF] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF2E8] flex items-center justify-center text-[#F07824]">
                <Lock className="w-5 h-5" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
                Privacy Policy
              </h1>
            </div>

            <p className="text-sm text-[#6B6B6B] mb-8 pb-6 border-b border-[#ECEAE5]">
              Last updated: October 2026 · Om Sai Aqua, Vishrantwadi, Pune 411015
            </p>

            <div className="space-y-8 text-sm sm:text-base text-[#151515]/85 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-[#151515] mb-3">1. Information We Collect</h2>
                <p>
                  When you submit a delivery inquiry or contact Om Sai Aqua via phone or online form, we collect
                  only the necessary information to coordinate your water supply:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1.5 text-[#6B6B6B]">
                  <li>Your name or business name.</li>
                  <li>Your primary contact telephone number.</li>
                  <li>Your delivery locality, society name, or address in Vishrantwadi / Dhanori Road.</li>
                  <li>Your requested water service (Home Delivery, Office Supply, or Bulk Event Supply).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#151515] mb-3">2. How We Use Your Information</h2>
                <p>
                  Information collected is strictly utilized by proprietor Deepak Khatave and the authorized
                  Om Sai Aqua local delivery team solely to:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1.5 text-[#6B6B6B]">
                  <li>Confirm delivery schedules and route feasibility.</li>
                  <li>Dispatch 20-litre water jars to your specified location.</li>
                  <li>Communicate regarding jar returns, timings, or weather-related delays.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#151515] mb-3">3. Data Security and Non-Disclosure</h2>
                <p>
                  We do not sell, rent, monetize, or disclose your contact information to third-party marketing
                  agencies or advertisers. Your phone number is used strictly for legitimate delivery communication.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#151515] mb-3">4. Contacting Us About Your Data</h2>
                <p>
                  If you wish to update or remove your contact information from our local route records,
                  you may contact us directly at:
                </p>
                <div className="mt-4 p-4 rounded-xl bg-[#F6F5F2] border border-[#E7E4DF] text-sm text-[#151515]">
                  <div><strong>Om Sai Aqua</strong></div>
                  <div>Proprietor: {SITE_CONFIG.owner}</div>
                  <div>Phone: {SITE_CONFIG.phonePrimary} / {SITE_CONFIG.phoneSecondary}</div>
                  <div>Address: {SITE_CONFIG.address.full}</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
