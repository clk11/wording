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
    <form onSubmit={handleSubmit} className="flex items-center space-x-3 p-4 bg-transparent">
      <Input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type your message here..."
        className="flex-1 bg-gray-50/50 dark:bg-gray-900/50 border-gray-200/50 dark:border-gray-700/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
      />
      <Button 
        type="submit" 
        className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 h-10 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
      >
        <span>Send</span>
        <Send className="w-4 h-4" />
      </Button>
    </form>
  )
}

