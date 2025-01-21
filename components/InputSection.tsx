import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 p-4 bg-white">
      <Input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type your message here..."
        className="flex-1 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6">
        Send
      </Button>
    </form>
  )
}

