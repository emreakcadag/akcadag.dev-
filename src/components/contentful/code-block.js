'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/ui/button.jsx'
import { CodeHighlighter } from '@/components/contentful/code-highlighter'

export function CodeBlock({ title, code, language }) {
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(code)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border border-gray-200 bg-gray-50 py-1.5 pl-4 pr-2">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-gray-200" />
            <span className="h-4 w-4 rounded-full bg-gray-200" />
            <span className="h-4 w-4 rounded-full bg-gray-200" />
          </span>
          {title && <p className="m-0 text-sm font-medium">{title}</p>}
        </div>
        <Button variant="outline" size="sm" className="rounded-lg" disabled={copied} onClick={onCopy}>
          <AnimatePresence mode="wait">
            <motion.span
              key={copied ? 'copied' : 'copy'}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              className="inline-flex w-16 items-center justify-center gap-0.5"
              // transition={{ duration: 0.3 }}
            >
              {copied ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-0.5"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  Copy
                </>
              )}
            </motion.span>
          </AnimatePresence>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <CodeHighlighter language={language} code={code}></CodeHighlighter>
      </div>
    </>
  )
}
