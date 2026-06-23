"use client";

import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { envConfig } from "@/utils/envConfig";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [desc, setDesc] = useState("");

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
    const wordCount = newDesc.split(/\s+/).filter((word) => word !== "").length;
    setDescError(wordCount < 3);
  };

  const isFormValid = firstName && lastName && email && sub && desc && !emailError && !descError;

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (desc.trim().split(" ").length < 3) {
      setDescError(true);
      return;
    }

    const templateParams = {
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      subject: sub.trim(),
      desc: desc.trim(),
    };

    const notify = toast.loading("Submitting...");

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
        setEmailError(false);
        setDescError(false);
      })
      .catch(() => {
        toast.error("Failed to submit!", { id: notify });
      });
  }, [firstName, lastName, email, sub, desc]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full"
    >
      {/* First / Last Name Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full">
        <div className="w-full">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="bg-zinc-950/40 border border-zinc-800/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm transition-all duration-300 w-full"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="bg-zinc-950/40 border border-zinc-800/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm transition-all duration-300 w-full"
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
          className={`bg-zinc-950/40 border focus:ring-1 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm transition-all duration-300 w-full ${emailError
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
          className="bg-zinc-950/40 border border-zinc-800/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm transition-all duration-300 w-full"
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
          className={`bg-zinc-950/40 border focus:ring-1 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm transition-all duration-300 w-full resize-none ${descError
            ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
            : "border-zinc-800/80 focus:border-cyan-500/50 focus:ring-cyan-500/50"
            }`}
          required
        />
        {descError && (
          <p className="text-red-400 mt-1.5 ml-1 text-xs">
            Description must contain at least 3 words.
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isFormValid}
        className="w-full mt-4 py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold uppercase tracking-wider text-xs shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:from-zinc-800/80 disabled:to-zinc-800/80 disabled:text-zinc-500 disabled:cursor-not-allowed disabled:pointer-events-none transition-all duration-300"
      >
        Submit Message
      </button>
    </form>
  );
};

export default ContactForm;
