import React from "react";
import { SocialLink } from "@/types/portfolio";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { DirectLinks } from "@/components/contact/DirectLinks";

interface ContactSectionProps {
  email: string;
  location: string;
  status: string;
  socialLinks: SocialLink[];
  resumeUrl?: string;
}

export function ContactSection({
  email,
  location,
  status,
  socialLinks,
  resumeUrl,
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="07. CONTACT"
          title="Direct Communication & Engineering Inquiry"
          description="Interested in architectural discussions, code intelligence systems, or potential engineering collaborations? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Status */}
          <div className="lg:col-span-5">
            <DirectLinks
              email={email}
              location={location}
              status={status}
              socialLinks={socialLinks}
              resumeUrl={resumeUrl}
            />
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm recipientEmail={email} />
          </div>
        </div>
      </div>
    </section>
  );
}
