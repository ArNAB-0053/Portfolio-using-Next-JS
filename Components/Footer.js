import Link from 'next/link'
import '../style/footerlink.css'
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes"
import { motion } from "framer-motion";
import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <ThemeProvider attribute="class">
      <section id='contact' className='footer flex items-center justify-between max-[1024px]:justify-center md:max-[1024px]:gap-16 max-[1024px]:flex-col min-h-screen w-screen bg-[#2c2c2c] dark:bg-[#1c1c1c] px-48 max-[1024px]:px-12 py-20 gap-6 relative '>
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}

          transition={{
            duration: .3,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}
          className='flex flex-col items-start justify-center max-[768px]:w-full md:max-[1024px]:w-[30rem]'>
          <h1 className='conatct_heading text-red-500 my-4 flex items-center justify-center gap-4 '>
            <p className='text-5xl uppercase font-black dark:text-[#ff0000] max-[500px]:text-3xl'>Contact </p>
            <p className='font-[DancingScriptMedium] text-5xl font-thin dark:text-[#ff0000]'>Me</p>
          </h1>
          
          <ContactForm/>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}

          transition={{
            duration: .3,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}
          className='bg-[#f3f3f3] w-64 min-h-72 p-4 flex items-center justify-center flex-col rounded-lg max-[768px]:w-full md:max-[1024px]:w-[30rem]'>
          <h1 className=' px-6 py-4 text-center'>
            <h2 className='connect_text text-xl uppercase font-black text-black'>Connect </h2>
            <p className='withme_text text-2xl mt-[-0.8rem] text-black'>with me</p>
          </h1>
          <div className='h-[1px] w-[60%] bg-black mt-[-1rem] mb-6'></div>
          <div className='links grid place-items-end grid-cols-2 grid-rows-2 px-2 py-4 gap-2'>
            <Link className='linksCon p-[1.3rem]' id='link1' href="https://www.facebook.com/arnab.bhattacharyya.520">
              <svg id='linkIcon' className="text-black" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </Link>

            <Link className='linksCon p-[1.3rem]' id='link2' href="https://www.instagram.com/__arnab_bhattacharyya/">
              <svg id='linkIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-black " viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </Link>


            <Link className='linksCon p-[1.3rem]' id='link3' href="https://www.linkedin.com/in/arnab-bhattacharyya-380966291/">
              <svg id='linkIcon' className="text-black" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
              </svg>
            </Link>

            <Link className='linksCon p-[1.3rem]' id='link4' href="https://twitter.com/__Ar_nab__">
              <svg id='linkIcon' className="text-black" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </Link>
          </div>
        </motion.div>
        <motion.h2
          initial={{
            opacity: 0,
            y: -100,
          }}

          transition={{
            duration: .3,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className='absolute bottom-12 text-center font-[Montserrat] text-zinc-400'>Made with ❤️ using Next.js!</motion.h2>
      </section>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

    </ThemeProvider>
  )
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false })
