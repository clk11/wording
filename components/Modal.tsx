import { Dialog, DialogContent } from "@/components/ui/dialog"
import { History, Clock, User, MessageSquare } from "lucide-react"

interface ModalProps {
  message: string
  onClose: () => void
  colorIndex?: number
}

const colorVariants = [
  {
    bg: "bg-indigo-50/50 dark:bg-indigo-900/20",
    border: "border-indigo-200 dark:border-indigo-700",
    icon: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-100 dark:bg-indigo-800",
    text: "text-indigo-900 dark:text-indigo-100",
    textSecondary: "text-indigo-600/70 dark:text-indigo-300/70",
    divider: "border-indigo-100 dark:border-indigo-900/30"
  },
  {
    bg: "bg-violet-50/50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-700",
    icon: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-100 dark:bg-violet-800",
    text: "text-violet-900 dark:text-violet-100",
    textSecondary: "text-violet-600/70 dark:text-violet-300/70",
    divider: "border-violet-100 dark:border-violet-900/30"
  },
  {
    bg: "bg-cyan-50/50 dark:bg-cyan-900/20",
    border: "border-cyan-200 dark:border-cyan-700",
    icon: "text-cyan-600 dark:text-cyan-400",
    iconBg: "bg-cyan-100 dark:bg-cyan-800",
    text: "text-cyan-900 dark:text-cyan-100",
    textSecondary: "text-cyan-600/70 dark:text-cyan-300/70",
    divider: "border-cyan-100 dark:border-cyan-900/30"
  },
  {
    bg: "bg-teal-50/50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
    icon: "text-teal-600 dark:text-teal-400",
    iconBg: "bg-teal-100 dark:bg-teal-800",
    text: "text-teal-900 dark:text-teal-100",
    textSecondary: "text-teal-600/70 dark:text-teal-300/70",
    divider: "border-teal-100 dark:border-teal-900/30"
  }
]

export default function Modal({ message, onClose, colorIndex = 0 }: ModalProps) {
  // This is just for demo - in real app this would come from props
  const username = "User One"
  const timestamp = new Date().toLocaleString()
  const shortDescription = "changed the gravity"

  const colors = colorVariants[colorIndex % colorVariants.length]

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-lg ${colors.bg} border ${colors.border} shadow-2xl`}>
        <div className={`border-b ${colors.divider} pb-4`}>
          <div className="flex items-center space-x-3">
            <div className={`p-2.5 ${colors.iconBg} rounded-full`}>
              <History className={`w-6 h-6 ${colors.icon}`} />
            </div>
            <h2 className={`text-xl font-semibold ${colors.text}`}>
              World Change
            </h2>
          </div>
        </div>

        <div className="space-y-6 py-4">
          {/* Action Info */}
          <div className="flex items-start space-x-3 text-sm">
            <div className={`p-2 ${colors.iconBg} rounded-full`}>
              <MessageSquare className={`w-4 h-4 ${colors.icon}`} />
            </div>
            <div>
              <p className={`font-medium ${colors.text}`}>Action</p>
              <p className={`${colors.textSecondary} mt-1`}>{shortDescription}</p>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-start space-x-3 text-sm">
            <div className={`p-2 ${colors.iconBg} rounded-full`}>
              <User className={`w-4 h-4 ${colors.icon}`} />
            </div>
            <div>
              <p className={`font-medium ${colors.text}`}>Changed By</p>
              <p className={`${colors.textSecondary} mt-1`}>{username}</p>
            </div>
          </div>

          {/* Timestamp */}
          <div className="flex items-start space-x-3 text-sm">
            <div className={`p-2 ${colors.iconBg} rounded-full`}>
              <Clock className={`w-4 h-4 ${colors.icon}`} />
            </div>
            <div>
              <p className={`font-medium ${colors.text}`}>When</p>
              <p className={`${colors.textSecondary} mt-1`}>{timestamp}</p>
            </div>
          </div>

          {/* Details */}
          <div className={`mt-6 ${colors.bg} rounded-lg p-4 text-sm border ${colors.border}`}>
            <p className={`${colors.text} font-medium mb-2`}>Details</p>
            <p className={`${colors.textSecondary} leading-relaxed`}>{message}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

