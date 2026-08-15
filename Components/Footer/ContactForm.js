"use client";

import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { envConfig } from "@/utils/envConfig";
import ContactFallbackModal from "./ContactFallbackModal";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const countWords = (text) => {
  return text.trim().split(/\s+/).filter(Boolean).length;
};

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [desc, setDesc] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot state

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFallbackModal, setShowFallbackModal] = useState(false); // Modal fallback state
  const [emailError, setEmailError] = useState(false);
  const [descError, setDescError] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!EMAIL_REGEX.test(newEmail));
  };

  const handleDescChange = (e) => {
    const newDesc = e.target.value;
    setDesc(newDesc);
    setDescError(countWords(newDesc) < 3);
  };

  const isFormValid =
    Boolean(
      firstName.trim() &&
      lastName.trim() &&
      email.trim() &&
      sub.trim() &&
      desc.trim()
    ) &&
    !emailError &&
    !descError;

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    // Prevent duplicate submission
    if (isSubmitting) return;

    // Honeypot spam check (silently stop processing)
    if (website.trim()) {
      return;
    }

    // Input length validation
    if (sub.trim().length > 150) {
      toast.error("Subject cannot exceed 150 characters.");
      return;
    }
    if (desc.trim().length > 2000) {
      toast.error("Description cannot exceed 2000 characters.");
      return;
    }

    // Description word count validation
    if (countWords(desc) < 3) {
      setDescError(true);
      return;
    }

    setIsSubmitting(true);
    const notify = toast.loading("Submitting...");

    const templateParams = {
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      subject: sub.trim(),
      desc: desc.trim(),
      submitted_at: new Date().toLocaleString("en-IN"),
    };

    emailjs
      .send(
        envConfig.emailjs.serviceId,
        envConfig.emailjs.templateId,
        templateParams,
        envConfig.emailjs.publicKey
      )
      .then(() => {
        toast.success("Submitted!", { id: notify });
        setFirstName("");
        setLastName("");
        setEmail("");
        setSub("");
        setDesc("");
        setWebsite("");
        setEmailError(false);
        setDescError(false);
      })
      .catch((err) => {
        console.error("EmailJS submission failure:", err);
        toast.error("Failed to submit!", { id: notify });
        setShowFallbackModal(true); // Open the alternative contact fallback modal on failure
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }, [firstName, lastName, email, sub, desc, website, isSubmitting]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full"
      >
        {/* Hidden Honeypot Field */}
        <div style={{ display: "none" }} aria-hidden="true">
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* First / Last Name Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full">
          <div className="w-full">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="bg-zinc-950/40 border border-zinc-800/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm w-full"
              required
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="bg-zinc-950/40 border border-zinc-800/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm w-full"
              required
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="w-full">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email Address"
            className={`bg-zinc-950/40 border focus:ring-1 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm w-full ${emailError
              ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
              : "border-zinc-800/80 focus:border-cyan-500/50 focus:ring-cyan-500/50"
              }`}
            required
          />
          {emailError && (
            <p className="text-red-400 mt-1.5 ml-1 text-xs">
              Please enter a valid email address.
            </p>
          )}
        </div>

        {/* Subject Input */}
        <div className="w-full">
          <input
            type="text"
            value={sub}
            onChange={(e) => setSub(e.target.value)}
            placeholder="Subject"
            maxLength={150}
            className="bg-zinc-950/40 border border-zinc-800/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm w-full"
            required
          />
        </div>

        {/* Description Input */}
        <div className="w-full">
          <textarea
            value={desc}
            onChange={handleDescChange}
            placeholder="How can I help you?"
            rows={4}
            maxLength={2000}
            className={`bg-zinc-950/40 border focus:ring-1 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm w-full resize-none ${descError
              ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
              : "border-zinc-800/80 focus:border-cyan-500/50 focus:ring-cyan-500/50"
              }`}
            required
          />
          <div className="text-right text-xs text-zinc-500 mt-1">
            {desc.length}/2000
          </div>
          {descError && (
            <p className="text-red-400 mt-1.5 ml-1 text-xs">
              Description must contain at least 3 words.
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="w-full mt-4 py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold uppercase tracking-wider text-xs shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:from-zinc-800/80 disabled:to-zinc-800/80 disabled:text-zinc-500 disabled:cursor-not-allowed disabled:pointer-events-none transition-all duration-300"
        >
          {isSubmitting ? "Sending..." : "Submit Message"}
        </button>
      </form>

      <ContactFallbackModal
        open={showFallbackModal}
        onClose={() => setShowFallbackModal(false)}
        subject={sub}
        message={desc}
        firstName={firstName}
        lastName={lastName}
        email={email}
      />
    </>
  );
};

export default ContactForm;
