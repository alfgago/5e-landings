import React from "react"

import GradientBackground from "../GradientBackground"

import { Container } from "./PageHeaderStyles"

const PageHeader = ({ title, paragraph, location }: any) => {
  return (
    <Container>
      <GradientBackground />
      <div className={`content header ${location && location}`}>
        <h1 className="h1">{title}</h1>
        <p className="text m">{paragraph}</p>
      </div>
    </Container>
  )
}

export default PageHeader
