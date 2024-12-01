import { GoTo } from './go-to'

export function WhereToGo() {
  return (
    <div className="flex-center w-full gap-x-32">
      <GoTo href="/blog" icon="Sun">awake</GoTo>
      <GoTo href="/think" icon="Moon">dream</GoTo>
    </div>
  )
}
