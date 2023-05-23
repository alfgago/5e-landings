/* eslint-disable new-cap */
import React from "react"

import { WordPressContentStyles } from "./WordPressContentStyles"

const WordPressContent = ({ content }: any) => {
  return (
    <WordPressContentStyles>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </WordPressContentStyles>
  )
}

export default WordPressContent
