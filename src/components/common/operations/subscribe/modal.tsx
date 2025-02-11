import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SubscribeForm } from './form'

export function SubscribeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>订阅</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            订阅
          </DialogTitle>
          <DialogDescription>
            关注「yume」的最新内容
          </DialogDescription>
        </DialogHeader>
        <SubscribeForm />
      </DialogContent>
    </Dialog>
  )
}
