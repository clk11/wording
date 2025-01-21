import { Brain, Sparkles, Wand2 } from "lucide-react"
import { motion } from "framer-motion"

export default function ProcessingAnimation() {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 24,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.15
      }
    }
  }

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 12
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      className="bg-indigo-50/50 dark:bg-indigo-900/20 backdrop-blur-sm p-6 rounded-xl mb-4 overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      layout
    >
      {/* Background effects */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -inset-[8px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 animate-gradient-shift"></div>
      </motion.div>

      {/* Main content */}
      <motion.div className="relative" variants={contentVariants}>
        <div className="flex items-center justify-between mb-4">
          <motion.div 
            className="flex items-center space-x-3"
            variants={contentVariants}
          >
            <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Processing your request
            </span>
          </motion.div>
          <motion.div 
            className="flex space-x-2"
            variants={contentVariants}
          >
            <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400 animate-pulse" />
            <Wand2 className="w-4 h-4 text-pink-500 dark:text-pink-400 animate-bounce" />
          </motion.div>
        </div>

        {/* Progress bar */}
        <motion.div 
          className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
          variants={contentVariants}
        >
          <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-progress-infinite rounded-full"></div>
        </motion.div>

        {/* Floating particles */}
        <motion.div 
          className="absolute top-0 left-1/4 w-2 h-2 bg-indigo-400/30 dark:bg-indigo-400/40 rounded-full animate-float-slow"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-4 right-1/4 w-1.5 h-1.5 bg-purple-400/30 dark:bg-purple-400/40 rounded-full animate-float-slower"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        />
        <motion.div 
          className="absolute top-6 right-1/3 w-1 h-1 bg-pink-400/30 dark:bg-pink-400/40 rounded-full animate-float"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

