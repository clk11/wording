import { History } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface StatusMessageProps {
  message: string
  onClick: () => void
}

export default function StatusMessage({ message, onClick }: StatusMessageProps) {
  // This is just for demo - in real app this would come from props
  const username = "User One"
  const shortDescription = "changed the gravity"

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className="group bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 p-4 rounded-lg w-full text-left transition-all duration-200 mb-4 flex items-center space-x-4 border border-indigo-200 dark:border-indigo-700 shadow-sm hover:shadow-md"
          >
            <div className="flex-shrink-0">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-800 rounded-full">
                <History className="w-5 h-5 text-indigo-600 dark:text-indigo-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-200" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-indigo-900 dark:text-indigo-100 font-medium">
                <span className="font-semibold">{username}</span> {shortDescription}
              </p>
              <p className="text-indigo-600/70 dark:text-indigo-300/70 text-sm mt-1.5">
                Click to view change details
              </p>
            </div>
          </button>
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

