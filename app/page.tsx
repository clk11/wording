"use client"

import { useState, useEffect, useRef } from "react"
import InputSection from "@/components/InputSection"
import ProcessingAnimation from "@/components/ProcessingAnimation"
import StatusMessage from "@/components/StatusMessage"
import Modal from "@/components/Modal"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

interface StatusItem {
  id: number
  message: string
  colorIndex: number
}

const MESSAGES_PER_PAGE = 5

export default function Home() {
  const [message, setMessage] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [statusMessages, setStatusMessages] = useState<StatusItem[]>([])
  const [showModal, setShowModal] = useState<StatusItem | null>(null)
  const [visibleMessages, setVisibleMessages] = useState(MESSAGES_PER_PAGE)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isProcessing) {
      const timer = setTimeout(() => {
        setIsProcessing(false)
        setStatusMessages(prev => [...prev, {
          id: Date.now(),
          message,
          colorIndex: prev.length % 4
        }])
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isProcessing, message])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [statusMessages.length])

  const handleSubmit = (submittedMessage: string) => {
    setMessage(submittedMessage)
    setIsProcessing(true)
  }

  const handleLoadMore = () => {
    setIsLoadingMore(true)
    // Simulate loading delay
    setTimeout(() => {
      setVisibleMessages(prev => prev + MESSAGES_PER_PAGE)
      setIsLoadingMore(false)
    }, 500)
  }

  const visibleStatusMessages = statusMessages.slice(-visibleMessages)
  const hasMoreMessages = statusMessages.length > visibleMessages

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-200">
      <ThemeToggle />
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden transition-all duration-200">
          <div className="flex flex-col h-[90vh]">
            <div className="flex-1 p-10 overflow-y-auto">
              <div className="space-y-4">
                {hasMoreMessages && (
                  <div className="flex justify-center py-4">
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                      {isLoadingMore ? (
                        <span className="animate-pulse">Loading...</span>
                      ) : (
                        <span className="flex items-center space-x-2">
                          <ChevronUp className="w-4 h-4" />
                          <span>Load More</span>
                        </span>
                      )}
                    </Button>
                  </div>
                )}
                {visibleStatusMessages.map((status, index) => (
                  <StatusMessage 
                    key={status.id}
                    message={status.message}
                    onClick={() => setShowModal(status)}
                    index={status.colorIndex}
                  />
                ))}
                {isProcessing && <ProcessingAnimation />}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="border-t border-gray-200/10 dark:border-gray-700/30">
              <InputSection onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal 
          message={showModal.message} 
          onClose={() => setShowModal(null)} 
          colorIndex={showModal.colorIndex}
        />
      )}
    </main>
  )
}

