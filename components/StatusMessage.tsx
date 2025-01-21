import { History } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

interface StatusMessageProps {
  message: string
  onClick: () => void
  index?: number
}

const colorVariants = [
  {
    bg: "bg-indigo-50/50 dark:bg-indigo-900/20",
    hover: "hover:bg-indigo-100 dark:hover:bg-indigo-900/30",
    border: "border-indigo-200 dark:border-indigo-700",
    icon: "text-indigo-600 dark:text-indigo-300",
    iconBg: "bg-indigo-100 dark:bg-indigo-800",
    text: "text-indigo-900 dark:text-indigo-100",
    textSecondary: "text-indigo-600/70 dark:text-indigo-300/70"
  },
  {
    bg: "bg-violet-50/50 dark:bg-violet-900/20",
    hover: "hover:bg-violet-100 dark:hover:bg-violet-900/30",
    border: "border-violet-200 dark:border-violet-700",
    icon: "text-violet-600 dark:text-violet-300",
    iconBg: "bg-violet-100 dark:bg-violet-800",
    text: "text-violet-900 dark:text-violet-100",
    textSecondary: "text-violet-600/70 dark:text-violet-300/70"
  },
  {
    bg: "bg-cyan-50/50 dark:bg-cyan-900/20",
    hover: "hover:bg-cyan-100 dark:hover:bg-cyan-900/30",
    border: "border-cyan-200 dark:border-cyan-700",
    icon: "text-cyan-600 dark:text-cyan-300",
    iconBg: "bg-cyan-100 dark:bg-cyan-800",
    text: "text-cyan-900 dark:text-cyan-100",
    textSecondary: "text-cyan-600/70 dark:text-cyan-300/70"
  },
  {
    bg: "bg-teal-50/50 dark:bg-teal-900/20",
    hover: "hover:bg-teal-100 dark:hover:bg-teal-900/30",
    border: "border-teal-200 dark:border-teal-700",
    icon: "text-teal-600 dark:text-teal-300",
    iconBg: "bg-teal-100 dark:bg-teal-800",
    text: "text-teal-900 dark:text-teal-100",
    textSecondary: "text-teal-600/70 dark:text-teal-300/70"
  }
]

export default function StatusMessage({ message, onClick, index = 0 }: StatusMessageProps) {
  // This is just for demo - in real app this would come from props
  const username = "User One"
  const shortDescription = "changed the gravity"

  const colors = colorVariants[index % colorVariants.length]

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
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { 
      opacity: 0, 
      x: -24
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    hidden: { 
      opacity: 0,
      rotate: -180,
      scale: 0
    },
    visible: { 
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            onClick={onClick}
            className={`group ${colors.bg} ${colors.hover} p-5 rounded-xl w-full text-left transition-all duration-200 mb-4 flex items-center space-x-4 border ${colors.border} shadow-sm hover:shadow-md`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layout
          >
            <motion.div 
              className="flex-shrink-0"
              variants={iconVariants}
            >
              <div className={`p-3 ${colors.iconBg} rounded-full`}>
                <History className={`w-5 h-5 ${colors.icon} group-hover:opacity-80`} />
              </div>
            </motion.div>
            <div className="flex-1 overflow-hidden">
              <motion.p 
                className={`text-base ${colors.text} font-medium truncate`}
                variants={childVariants}
              >
                <span className="font-semibold">{username}</span> {shortDescription}
              </motion.p>
              <motion.p 
                className={`${colors.textSecondary} text-sm mt-1 truncate`}
                variants={childVariants}
              >
                Click to view change details
              </motion.p>
            </div>
          </motion.button>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm">View detailed changes</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

