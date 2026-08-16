"use client";

import LinkNext from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import ContactForm from "./ContactForm";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { dm_sans, space_grotesk } from "@/utils/fonts";
import SectionHeader from "../UI/SectionHeader";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: ReactNode;
  label: string;
}

const Footer = (): JSX.Element => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const socialLinks: SocialLink[] = [
    {
      id: "email",
      name: "Email",
      href: "mailto:dev.arnabbhattacharyya@gmail.com",
      icon: <FaEnvelope size={16} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
      label: "dev.arnabbhattacharyya@gmail.com",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/arnab-bhattacharyya-dev",
      icon: <FaLinkedin size={16} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
      label: "LinkedIn Profile",
    },
    {
      id: "github",
      name: "GitHub",
      href: "https://github.com/ArNAB-0053",
      icon: <FaGithub size={16} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
      label: "GitHub Repositories",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <div className={`w-full relative z-10 border-t border-zinc-900 bg-zinc-950/20 ${dm_sans.className}`}>
      <div className="w-full h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0" />

      <div className="w-full h-full bg-gradient-to-b from-black/20 via-cyan-400/5 to-cyan-400/0 absolute left-0 top-0" />

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col items-center justify-center relative"
      >
        {/* Section Header */}
        <SectionHeader title="Contact" />

        {/* Headline */}
        <div className="text-center mb-16 max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 leading-tight">
            Let's Build Something <span className={cn(space_grotesk.className, "text-cyan-400 underline underline-offset-[8px]")}>Amazing</span> Together
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Have an interesting project, engineering role, or collaboration idea? Let's connect.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-zinc-950/20 border border-zinc-900 rounded-3xl px-6 py-8">
              <h4 className="text-lg font-bold text-white mb-6">Send a Message</h4>
              <ContactForm />
            </div>
          </motion.div>

          {/* Right Column: Connect Info */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 w-full flex flex-col space-y-6 lg:pl-8"
          >
            <h4 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              Connect With Me
            </h4>

            <div className="space-y-4 border-l-2 border-cyan-400/20 pl-2">
              {socialLinks.map((link) => (
                <LinkNext
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group p-2.5 rounded-lg border border-transparent hover:border-zinc-800 hover:bg-zinc-950/30 transition-all duration-300"
                >
                  <div className="p-2 bg-zinc-950/60 rounded-md border border-zinc-900 group-hover:bg-zinc-900 transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      {link.name}
                    </h5>
                    <p className="text-sm font-medium text-zinc-400 group-hover:text-cyan-400 transition-colors duration-300 break-all">
                      {link.label}
                    </p>
                  </div>
                </LinkNext>
              ))}
            </div>

            <p className="text-zinc-500 text-xs leading-relaxed pt-4 border-t border-cyan-400/20">
              Open to backend, full-stack, and AI application engineering opportunities. Let's start the conversation.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Credit */}
        <div className={cn("mt-24 text-zinc-600 text-xs tracking-wider uppercase font-medium", isHomePage && 'mb-10')}>
          &copy; {new Date().getFullYear()} Arnab Bhattacharyya. Built with Next.js & TailwindCSS.
        </div>
      </section>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
