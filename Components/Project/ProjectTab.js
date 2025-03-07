import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const ProjectTab = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex flex-wrap justify-center sm:justify-start mb-4 ml-4 sm:ml-6 md:ml-8 ${montserrat.className}`}
    >
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1 bg-black/20 backdrop-blur-sm rounded-lg border border-gray-800 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative min-w-[100px] px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 
              ${
                activeTab === tab
                  ? "text-white bg-gray-800/40"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/30"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="tab-indicator"
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="absolute inset-0 rounded-md bg-gradient-to-b from-gray-800/50 to-gray-900/60 -z-10 shadow-inner"
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectTab;
