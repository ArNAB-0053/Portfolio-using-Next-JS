import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

interface ContactFallbackModalProps {
  open: boolean;
  onClose: () => void;
  subject?: string;
  message?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

const ContactFallbackModal = ({
  open,
  onClose,
  subject = "",
  message = "",
  firstName = "",
  lastName = "",
  email = "",
}: ContactFallbackModalProps): JSX.Element | null => {
  const emailAddress = "dev.arnabbhattacharyya@gmail.com";
  const name = [firstName, lastName].filter(Boolean).join(" ");
  const bodyContent = `Name: ${name || "N/A"}\nEmail: ${email || "N/A"}\n\nMessage:\n${message}`;
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

  const handleCopy = (): void => {
    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        toast.success("Email copied to clipboard!");
      })
      .catch((err: unknown) => {
        console.error("Failed to copy email:", err);
        toast.error("Failed to copy email.");
      });
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop with fade-in animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container with entrance animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl z-10 text-white font-[Montserrat] relative"
          >
            {/* Header / Title */}
            <h3 className="text-lg font-bold text-center text-red-400 mb-2">
              Unable to Send Message
            </h3>

            {/* Description */}
            <p className="text-sm text-zinc-400 text-center mb-5 leading-relaxed">
              Something went wrong while sending your message. You can still reach me directly using the options below.
            </p>

            {/* Highlighted Box */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 mb-5 flex flex-col items-center gap-1 text-center">
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Direct Email
              </span>
              <a
                href={mailtoUrl}
                className="text-sm font-semibold text-white hover:text-cyan-300 underline underline-offset-4 transition-colors duration-200 break-all"
              >
                {emailAddress}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 py-3 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 active:scale-[0.98]"
                >
                  Copy Email
                </button>
                <a
                  href={mailtoUrl}
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center transition-all duration-200 active:scale-[0.98]"
                >
                  Open Email App
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactFallbackModal;
