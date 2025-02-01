'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ApplyFriendLink() {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl font-bold">
        和我交朋友吧
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <form className="flex w-72 flex-col gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">昵称</Label>
            <Input
              type="text"
              id="name"
              placeholder="昵称"
              required
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">网站名称</Label>
            <Input
              type="text"
              id="name"
              placeholder="你的网站名称"
              required
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="avatar">头像链接</Label>
            <Input
              type="url"
              id="avatar"
              placeholder="你的头像链接"
              required
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="link">网站链接</Label>
            <Input
              type="url"
              id="link"
              placeholder="你的网站地址"
              required
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="description">网站描述</Label>
            <Textarea
              id="description"
              placeholder="简单介绍一下你的网站吧"
              className="resize-none"
              required
            />
          </div>

          <div className="flex gap-4">
            <Button type="reset" variant="outline" className="flex-1">
              重置
            </Button>
            <Button type="submit" className="flex-1">
              提交申请
            </Button>
          </div>
        </form>

        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold">
            本站信息
          </p>

          <div className="text-md grid gap-2">
            go
          </div>

        </div>
      </div>

    </div>
  )
}
