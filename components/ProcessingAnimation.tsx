import { Brain, Sparkles, Wand2 } from "lucide-react"

export default function ProcessingAnimation() {
  return (
    <div className="bg-indigo-50/50 dark:bg-indigo-900/20 backdrop-blur-sm p-6 rounded-xl mb-4 overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 animate-gradient-shift"></div>
      </div>

      {/* Main content */}
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Processing your request
            </span>
          </div>
          <div className="flex space-x-2">
            <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400 animate-pulse" />
            <Wand2 className="w-4 h-4 text-pink-500 dark:text-pink-400 animate-bounce" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-progress-infinite rounded-full"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-indigo-400/30 dark:bg-indigo-400/40 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-4 right-1/4 w-1.5 h-1.5 bg-purple-400/30 dark:bg-purple-400/40 rounded-full animate-float-slower"></div>
        <div className="absolute top-6 right-1/3 w-1 h-1 bg-pink-400/30 dark:bg-pink-400/40 rounded-full animate-float"></div>
      </div>
    </div>
  )
}

