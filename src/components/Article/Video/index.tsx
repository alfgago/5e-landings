import React, { useState } from "react"

import { VideoBlockStyles } from "./VideoBlockStyles"

const VideoBlock = ({ block }: any) => {
  const { attrs } = block

  function getYouTubeVideoID(url: string) {
    const urlObj = new URL(url)
    const videoID = urlObj.searchParams.get("v")
    return videoID
  }

  return (
    <VideoBlockStyles className="content">
      <div className="videoContainer">
        <div className="iframeContainer">
          <iframe
            src={
              attrs.providerNameSlug == "youtube"
                ? `https://www.youtube.com/embed/${getYouTubeVideoID(
                    attrs.url
                  )}`
                : attrs.url
            }
          />
        </div>
        <div
          className="caption monument"
          dangerouslySetInnerHTML={{
            __html: block.innerHTML,
          }}
        />
      </div>
    </VideoBlockStyles>
  )
}

export default VideoBlock
