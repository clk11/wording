"use client"

import { useState, useEffect } from "react"
import InputSection from "@/components/InputSection"
import ProcessingAnimation from "@/components/ProcessingAnimation"
import StatusMessage from "@/components/StatusMessage"
import Modal from "@/components/Modal"

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
    <main className="h-screen flex flex-col">
      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="flex-1 h-screen p-4 md:p-6">
          <div className="h-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-end">
              <div className="space-y-4">
                {isProcessing && <ProcessingAnimation />}
                {isComplete && <StatusMessage message={message} onClick={() => setShowModal(true)} />}
              </div>
            </div>
            <div className="border-t mt-auto">
              <InputSection onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal message={message} onClose={() => setShowModal(false)} />}
    </main>
  )
}

