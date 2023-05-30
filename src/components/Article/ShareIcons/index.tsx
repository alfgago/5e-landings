import React from "react"
import moment from "moment"

import { ShareContainer } from "./ShareStyles"

const ShareIconsArticle = ({ article }: any) => {
  const handleClick = (link: string) => {
    navigator.clipboard.writeText(link)
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
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${article.link}`}
              target="_blank"
              title="share with facebook"
            >
              <img src="/assets/facebook-black.svg" alt="facebook icon" />
            </a>

            <a
              href={`https://twitter.com/share?url=${article.link}`}
              target="_blank"
              title="share with twitter"
            >
              <img src="/assets/twitter-black.svg" alt="twitter icon" />
            </a>

            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${article.link}`}
              target="_blank"
              title="share with linkedin"
            >
              <img src="/assets/linkedin-black.svg" alt="linkedin icon" />
            </a>

            <img
              onClick={() => handleClick(article.link)}
              src="/assets/copy-link-black.svg"
              alt="copy link icon"
              title="copy clipboard"
            />
          </div>
        </div>
      </div>
    </ShareContainer>
  )
}

export default ShareIconsArticle
