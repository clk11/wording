import { X } from "lucide-react"
import { StatusItem } from "@/app/page"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  message: StatusItem | null
  colorIndex?: number
}

const colorVariants = [
  {
    bg: "bg-violet-50/90 dark:bg-gray-900/90",
    border: "border-violet-200 dark:border-violet-500/20",
    text: "text-violet-900 dark:text-violet-100",
    secondaryText: "text-violet-600 dark:text-violet-300",
    icon: "text-violet-600 dark:text-violet-400 hover:text-violet-900 dark:hover:text-violet-200"
  },
  {
    bg: "bg-cyan-50/90 dark:bg-gray-900/90",
    border: "border-cyan-200 dark:border-cyan-500/20",
    text: "text-cyan-900 dark:text-cyan-100",
    secondaryText: "text-cyan-600 dark:text-cyan-300",
    icon: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-900 dark:hover:text-cyan-200"
  },
  {
    bg: "bg-teal-50/90 dark:bg-gray-900/90",
    border: "border-teal-200 dark:border-teal-500/20",
    text: "text-teal-900 dark:text-teal-100",
    secondaryText: "text-teal-600 dark:text-teal-300",
    icon: "text-teal-600 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-200"
  }
]

export default function Modal({ isOpen, onClose, message, colorIndex = 0 }: ModalProps) {
  if (!isOpen || !message) return null

  const variant = colorVariants[colorIndex % colorVariants.length]

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full max-w-2xl p-8 rounded-2xl border ${variant.bg} ${variant.border} backdrop-blur-md shadow-xl`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${variant.icon}`}
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="space-y-4">
          <h2 className={`text-2xl font-medium ${variant.text}`}>
            World Change
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className={`text-lg font-medium ${variant.text}`}>Action</h3>
              <p className={variant.secondaryText}>{message.message}</p>
            </div>
            
            <div className="space-y-2">
              <h3 className={`text-lg font-medium ${variant.text}`}>Changed By</h3>
              <p className={variant.secondaryText}>User One</p>
            </div>
            
            <div className="space-y-2">
              <h3 className={`text-lg font-medium ${variant.text}`}>When</h3>
              <p className={variant.secondaryText}>1/21/2025, 3:44:28 PM</p>
            </div>

            <div className="space-y-2">
              <h3 className={`text-lg font-medium ${variant.text}`}>Details</h3>
              <p className={variant.secondaryText}>and another one</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

