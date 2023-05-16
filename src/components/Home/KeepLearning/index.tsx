/* eslint-disable new-cap */
import React from "react"
import { ReactSVG } from "react-svg"

import { KeepLearningStyles } from "./KeepLearningStyles"
import Link from "next/link"
import GradientBackground from "../../GradientBackground"

const KeepLearning = () => {
  return (
    <KeepLearningStyles>
      <GradientBackground />
      <div className="content">
        <div className="title">
          <h2 className="h3">Keep Learning Well</h2>
          <div className="text s">
            Sign up for our newsletter for the latest LearningWell content in
            your inbox.
          </div>
        </div>
        <form className="form">
          <input type="text" placeholder="Your email address here" />
          <button>Subscribe</button>
        </form>
      </div>
    </KeepLearningStyles>
  )
}

export default KeepLearning
