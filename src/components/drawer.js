'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Drawer } from 'vaul'
import { CommandIcon } from 'lucide-react'

import { MenuContent } from '@/components/menu-content'
import { Button } from '@/components/ui/button.jsx'

export function MobileDrawer() {
  const router = useRouter()

  const resetDrawer = () => {
    setTimeout(() => {
      const wrapper = document.querySelector('[vaul-drawer-wrapper]')
      if (wrapper) {
        wrapper.style.transform = ''
        wrapper.style.borderRadius = ''
      }
    }, 0)
  }

  useEffect(() => {
    resetDrawer()
  }, [router.pathname])

  return (
    <Drawer.Root shouldScaleBackground onClose={resetDrawer}>
      <Button variant="ghost" size="icon" title="Toggle drawer" asChild>
        <Drawer.Trigger>
          <CommandIcon size={16} />
        </Drawer.Trigger>
      </Button>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[80%] flex-col rounded-t-lg bg-gray-100">
          <div className="flex-1 overflow-y-auto rounded-t-[10px] bg-white p-4">
            <div className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-300" />
            <MenuContent />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
