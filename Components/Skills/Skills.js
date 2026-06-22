'use client'
import React from 'react'
import dynamic from "next/dynamic";
import Skilllogo from './Skilllogo';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionHeader from "../UI/SectionHeader";

const Skills = () => {
  const isMobile = useIsMobile();

  const categories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", logo: "/Images/js.svg", left: true },
        { name: "TypeScript", logo: "/Images/typescript.svg", left: true },
        { name: "Python", logo: "/Images/python.svg", left: true },
        { name: "C", logo: "/Images/c.svg", left: true },
        { name: "Java", logo: "/Images/java.svg", left: true },
      ]
    },
    {
      name: "Frontend Stack",
      skills: [
        { name: "React", logo: "/Images/react.svg", left: true },
        { name: "Next.js", logo: "/Images/next.svg", left: true, style: "invert-[0.8]" },
        { name: "SvelteKit", logo: "/Images/svelte.svg", left: true, style: "invert-[0.8]" },
        { name: "Tailwind CSS", logo: "/Images/tailwind.svg", left: true },
        { name: "ShadCN UI", logo: "/Images/shadcn.png", left: true },
        { name: "Framer Motion", logo: "/Images/framer-motion.svg", left: true },
        { name: "HTML", logo: "/Images/html.svg", left: true },
        { name: "CSS", logo: "/Images/css.svg", left: true },
      ]
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Node.js", logo: "/Images/node.svg", left: false },
        { name: "Express.js", logo: "/Images/express.svg", left: false, style: "invert" },
        { name: "Fastify", logo: "/Images/fastify.svg", left: false, style: "invert-[0.8]" },
        { name: "ASP.NET", logo: "/Images/dotnet.svg", left: false, style: "invert-[0.8]" },
        { name: "REST APIs", logo: "/Images/api.svg", left: false },
        { name: "PostgreSQL", logo: "/Images/postgresql.svg", left: false, style: "invert-[0.8]" },
        { name: "MongoDB", logo: "/Images/mongo.svg", left: false },
        { name: "MySQL", logo: "/Images/mysql.svg", left: false, style: "invert scale-[1.3]" },
        { name: "Firebase", logo: "/Images/firebase.svg", left: false },
        { name: "Flask", logo: "/Images/flask.svg", left: false, style: "invert-[0.8]" },
      ]
    },
    {
      name: "AI & Machine Learning",
      skills: [
        { name: "LangChain", logo: "/Images/langchain.svg", left: false, style: "invert-[0.8]" },
        { name: "RAG", logo: "/Images/rag.svg", left: false },
        { name: "NLP", logo: "/Images/nlp.svg", left: false },
        { name: "Vector Databases", logo: "/Images/vectordb.svg", left: false },
        { name: "Machine Learning", logo: "/Images/ml.svg", left: false },
        { name: "Scikit-Learn", logo: "/Images/scikitlearn.svg", left: false, style: "invert-[0.8]" },
        { name: "OpenCV", logo: "/Images/opencv.svg", left: false },
        { name: "MediaPipe", logo: "/Images/mediapipe_logo.svg", left: false },
      ]
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Docker", logo: "/Images/docker.svg", left: false, style: "invert-[0.8]" },
        { name: "GitHub Actions", logo: "/Images/githubactions.svg", left: false, style: "invert-[0.8]" },
        { name: "Git", logo: "/Images/git.svg", left: false },
        { name: "GitHub", logo: "/Images/github.svg", left: false, style: "invert" },
        { name: "MinIO", logo: "/Images/minio.svg", left: false, style: "invert-[0.8]" },
        { name: "Vercel", logo: "/Images/vercel.svg", left: false, style: "invert-[0.8]" },
        { name: "Render", logo: "/Images/render.svg", left: false, style: "invert-[0.8]" },
        { name: "React-Native", logo: "/Images/react-native.png", left: false },
        { name: "Expo", logo: "https://i.imgur.com/EX5o5jA.png", left: false, style: "invert-[0.8]" },
      ]
    }
  ];

  return (
    <div id='skills' className='h-auto w-full pt-24 pb-8 md:max-[1024px]:pb-0'>
      <SectionHeader title="Engineering Stack" />

      <div className="mt-12 space-y-12 max-w-6xl mx-auto px-4 md:px-12">
        {categories.map((category, index) => (
          <div key={index} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center gap-4">
              <h3 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-cyan-400/80 uppercase">
                {category.name}
              </h3>
              <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-500/20 via-zinc-800/30 to-transparent"></div>
            </div>

            {/* Logo Grid */}
            <div className="w-full grid grid-cols-2 min-[320px]:grid-cols-3 min-[480px]:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-items-center items-center">
              {category.skills.map((skill, sIdx) => (
                <Skilllogo
                  key={sIdx}
                  langLogo={skill.logo}
                  name={skill.name}
                  left={skill.left}
                  isMobile={isMobile}
                  style={skill.style}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Skills), { ssr: false })