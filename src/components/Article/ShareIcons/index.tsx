import React from "react"
import Image from "next/image"
import Link from "next/link"
import moment from "moment"

import { ShareContainer } from "./ShareStyles"

const ShareIconsArticle = ({ article }: any) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "https://learningwell.org"

  const handleClick = (slug: string) => {
    navigator.clipboard.writeText(`${domain}/article/${slug}`)
  }

  return (
    <ShareContainer className="content">
      <div className="share-icons">
        <span className="date monument">
          {moment(article.publish_date).format("MMM D, YYYY")}
        </span>

        <div className="icons-container">
          <span>Share the article</span>
          <div className="icons">
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${domain}/article/${article.slug}`}
              target="_blank"
              title="share with facebook"
            >
              <Image
                src="/assets/facebook-black.svg"
                alt="facebook icon"
                width={6}
                height={12}
              />
            </Link>

            <Link
              href={`https://twitter.com/share?url=${domain}/article/${article.slug}`}
              target="_blank"
              title="share with twitter"
            >
              <Image
                src="/assets/twitter-black.svg"
                alt="twitter icon"
                width={12}
                height={12}
              />
            </Link>

            <Link
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${domain}/article/${article.slug}`}
              target="_blank"
              title="share with linkedin"
            >
              <Image
                src="/assets/linkedin-black.svg"
                alt="linkedin icon"
                width={12}
                height={12}
              />
            </Link>

            <Image
              onClick={() => handleClick(article.slug)}
              src="/assets/copy-link-black.svg"
              alt="copy link icon"
              title="copy clipboard"
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>
    </ShareContainer>
  )
}

export default ShareIconsArticle
