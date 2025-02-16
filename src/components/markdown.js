import ReactMarkdown from 'markdown-to-jsx'

import { Link } from '@/components/link'

export const Markdown = ({ options, ...rest }) => {
  return (
    <ReactMarkdown
      options={{
        ...options,
        overrides: {
          // Extract `className` prop to make Link component work properly
          // eslint-disable-next-line no-unused-vars
          a: ({ className, ...rest }) => <Link {...rest} />,
          img: ({ alt, src }) => (
            <span className="mt-2 flex overflow-hidden rounded-xl">
              <img
                alt={alt}
                src={`https:${src}`}
                width={400}
                height={300}
                loading="lazy"
                className="aspect-auto w-full animate-reveal object-cover"
              />
            </span>
          )
        }
      }}
      {...rest}
    />
  )
}
