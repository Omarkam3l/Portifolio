"use client";

import React, { useState } from "react";
import { Send, Copy, Check, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  recipientEmail: string;
}

export function ContactForm({ recipientEmail }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const fullSubject = encodeURIComponent(
      subject ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] from ${name || "Visitor"}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${name || "N/A"}\nEmail: ${email || "N/A"}\n\nMessage:\n${message}`
    );

    // Open native email client via mailto
    window.location.href = `mailto:${recipientEmail}?subject=${fullSubject}&body=${bodyContent}`;
  };

  const handleCopy = () => {
    const text = `To: ${recipientEmail}\nFrom: ${name} <${email}>\nSubject: ${subject}\n\n${message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
          <Mail className="w-3.5 h-3.5" />
          Direct Dispatch (mailto)
        </span>
        <span>Recipient: {recipientEmail}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Alex Rivera"
            className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950/80 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
            Your Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@domain.com"
            className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950/80 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Technical Collaboration / AI Engineering"
          className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950/80 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
          Message <span className="text-sky-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your technical inquiry, project opportunity, or architecture discussion..."
          className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950/80 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-y"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Button type="submit" variant="primary" size="md">
          <Send className="w-4 h-4 mr-2" />
          <span>Send via Email Client</span>
          <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />
        </Button>

        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={handleCopy}
          disabled={!message.trim()}
          className="text-xs font-mono"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              <span>Copied Message</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 mr-1.5" />
              <span>Copy Formatted Text</span>
            </>
          )}
        </Button>
      </div>

      <p className="text-[11px] text-slate-500 font-mono text-center pt-2">
        Direct mail client trigger. No 3rd-party servers capture your message.
      </p>
    </form>
  );
}
