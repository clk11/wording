import { Dialog, DialogContent } from "@/components/ui/dialog"
import { History, Clock, User, MessageSquare } from "lucide-react"

interface ModalProps {
  message: string
  onClose: () => void
}

export default function Modal({ message, onClose }: ModalProps) {
  // This is just for demo - in real app this would come from props
  const username = "User One"
  const timestamp = new Date().toLocaleString()
  const shortDescription = "changed the gravity"

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl">
        <div className="border-b border-indigo-100 dark:border-indigo-900/30 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
              <History className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100">
              World Change
            </h2>
          </div>
        </div>

        <div className="space-y-6 py-4">
          {/* Action Info */}
          <div className="flex items-start space-x-3 text-sm">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full">
              <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <p className="font-medium text-indigo-900 dark:text-indigo-100">Action</p>
              <p className="text-indigo-600/80 dark:text-indigo-300/80 mt-1">{shortDescription}</p>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-start space-x-3 text-sm">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full">
              <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <p className="font-medium text-indigo-900 dark:text-indigo-100">Changed By</p>
              <p className="text-indigo-600/80 dark:text-indigo-300/80 mt-1">{username}</p>
            </div>
          </div>

          {/* Timestamp */}
          <div className="flex items-start space-x-3 text-sm">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full">
              <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <p className="font-medium text-indigo-900 dark:text-indigo-100">When</p>
              <p className="text-indigo-600/80 dark:text-indigo-300/80 mt-1">{timestamp}</p>
            </div>
          </div>

          {/* Details */}
          <div className="mt-6 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-lg p-4 text-sm border border-indigo-100 dark:border-indigo-800/30">
            <p className="text-indigo-900 dark:text-indigo-100 font-medium mb-2">Details</p>
            <p className="text-indigo-700 dark:text-indigo-300 leading-relaxed">{message}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

