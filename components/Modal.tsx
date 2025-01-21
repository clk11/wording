import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { History } from "lucide-react"

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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <History className="w-5 h-5 text-indigo-600" />
            <span>World Change Details</span>
          </DialogTitle>
          <DialogDescription>
            Change made by <span className="font-medium text-foreground">{username}</span> at {timestamp}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-1">Change Summary</h4>
            <p className="text-sm text-muted-foreground">{shortDescription}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Detailed Description</h4>
            <div className="bg-muted/50 rounded-lg p-3 text-sm">
              <p>{message}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

