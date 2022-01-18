import NextLink from 'next/link'

// --- Others
import { isExternalLink } from 'lib/helper'

const className = 'underline-under hover:underline -mb-px pb-px self-start text-[#0433ff]'

const Link = (props) => {
  const { href = '#', ...rest } = props

  if (!isExternalLink(href)) {
    return (
      <NextLink href={href}>
        <a className={className} {...rest} />
      </NextLink>
    )
  }

  console.log(`href`, href)

  return <a target="_blank" href={`${href}?ref=onur.dev`} rel="noopener noreferrer" className={className} {...rest} />
}

export default Link
