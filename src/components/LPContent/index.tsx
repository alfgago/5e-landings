/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react"

import { LPContentStyles } from "./LPContentStyles"

const LPContent = ({
  text1,
  text2,
  pride = "But seriously, we take",
  prideBig = "pride in our work",
  textSide,
}: any) => {
  return (
    <LPContentStyles>
      <div className="content">
        <div className="flex">
          <div className="side">
            <div className="boxes">
              <div className="boxes-cont">
                <div className="sq sq1" />
                <div className="sq sq2" />
                <div className="sq sq3" />
                <div className="sq sq4" />
                <div className="sq sq5" />
              </div>
            </div>
            <span dangerouslySetInnerHTML={{ __html: textSide }} />
          </div>
          <div className="copy1" dangerouslySetInnerHTML={{ __html: text1 }} />
          <div className="pride">
            <span dangerouslySetInnerHTML={{ __html: pride }} />
            <span> </span>
            <span className="h2">{prideBig}</span>
          </div>
          <div className="copy2" dangerouslySetInnerHTML={{ __html: text2 }} />
        </div>
      </div>
    </LPContentStyles>
  )
}

export default LPContent
