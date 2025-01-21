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
            className="group bg-indigo-50 hover:bg-indigo-100 p-4 rounded-lg w-full text-left transition-all duration-200 mb-4 flex items-center space-x-4 border border-indigo-200"
          >
            <div className="flex-shrink-0">
              <History className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700" />
            </div>
            <div className="flex-1">
              <p className="text-indigo-900 font-medium">
                <span className="font-semibold">{username}</span> {shortDescription}
              </p>
              <p className="text-indigo-600/70 text-sm mt-0.5">Click to view change details</p>
            </div>
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-sm">
          <p className="text-sm">View detailed changes</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

