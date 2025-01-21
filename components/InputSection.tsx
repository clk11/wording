import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

interface InputSectionProps {
  onSubmit: (message: string) => void
}

export default function InputSection({ onSubmit }: InputSectionProps) {
  const [inputMessage, setInputMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      onSubmit(inputMessage)
      setInputMessage("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 p-6 bg-transparent relative">
      <div className="flex-1 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/40 to-purple-400/40 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
        <div className="absolute inset-[1px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl" />
        <Input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 text-xl h-14 px-6 bg-transparent border-0 relative placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 focus:ring-0 focus:outline-none"
        />
      </div>
      <Button 
        type="submit" 
        className="relative group h-14 px-8 text-xl rounded-xl bg-gradient-to-r from-indigo-500/90 to-purple-500/90 hover:scale-[1.02] transition-all duration-200"
      >
        <div className="relative flex items-center space-x-3 text-white">
          <span>Send</span>
          <Send className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
        </div>
      </Button>
    </form>
  )
}

