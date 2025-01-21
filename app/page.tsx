"use client"

import { useState, useEffect } from "react"
import InputSection from "@/components/InputSection"
import ProcessingAnimation from "@/components/ProcessingAnimation"
import StatusMessage from "@/components/StatusMessage"
import Modal from "@/components/Modal"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
  const [message, setMessage] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (isProcessing) {
      const timer = setTimeout(() => {
        setIsProcessing(false)
        setIsComplete(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isProcessing])

  const handleSubmit = (submittedMessage: string) => {
    setMessage(submittedMessage)
    setIsProcessing(true)
    setIsComplete(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-200">
      <ThemeToggle />
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden transition-all duration-200">
          <div className="flex flex-col h-[80vh]">
            <div className="flex-1 p-6 overflow-y-auto flex flex-col justify-end">
              <div className="space-y-6">
                {isProcessing && <ProcessingAnimation />}
                {isComplete && <StatusMessage message={message} onClick={() => setShowModal(true)} />}
              </div>
            </div>
            <div className="border-t border-gray-200/10 dark:border-gray-700/30">
              <InputSection onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal message={message} onClose={() => setShowModal(false)} />}
    </main>
  )
}

