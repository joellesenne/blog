import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="mastodon" href={siteMetadata.mastodon} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© 2023-${new Date().getFullYear()} • All rights reserved`}</div>
          <div>{` • `}</div>
          <Link
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            href={siteMetadata.sitePrincipal}
          >
            {siteMetadata.title}
          </Link>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            href={siteMetadata.siteRepo}
          >
            Code source
          </Link>
          <div>{` • `}</div>
          <Link
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
          >
            Blogging starter template
          </Link>
        </div>
      </div>
    </footer>
  )
}
