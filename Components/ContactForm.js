'use client'
import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        const notify = toast.loading("Submitting...");
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
        toast.error("Failed to submit!");
      });
  }, [firstName, lastName, email, sub, desc]);

  return (
    <form
      onSubmit={handleSubmit}
      className="contact_form flex flex-col items-start justify-start gap-4 w-[35vw] max-[768px]:w-full md:max-[1024px]:w-[30rem]"
    >
      <div className="flex items-center justify-center gap-x-6 w-full">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="bg-transparent p-2 w-full"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="bg-transparent p-2 w-full"
          required
        />
      </div>

      <div className="w-full">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className={`bg-transparent p-2 w-[25vw] max-[1024px]:w-full ${emailError ? "border-red-500" : ""}`}
          required
        />
        {emailError && (
          <p className="text-red-500 dark:text-[#ff0000] text-sm">
            Please enter a valid email address.
          </p>
        )}
      </div>

      <input
        type="text"
        value={sub}
        onChange={(e) => setSub(e.target.value)}
        placeholder="Subject"
        className="bg-transparent p-2 w-full"
        required
      />

      <div className="w-full">
        <input
          type="text"
          value={desc}
          onChange={handleDescChange}
          placeholder="Description"
          className={`bg-transparent p-2 w-full ${descError ? "border-red-500" : ""}`}
          required
        />
        {descError && (
          <p className="text-red-500 dark:text-[#ff0000] text-sm">
            Description must contain at least 3 words.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className="relative z-40 w-[10vw] mt-10 py-3 rounded-md
        bg-red-500 dark:bg-[#ff0000] font-bold uppercase text-white hover:bg-[#ff0000] hover:shadow-contact-shadow active:bg-red-600 
        max-[1024px]:w-full disabled:bg-black/30 disabled:text-zinc-500/50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:z-0"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
