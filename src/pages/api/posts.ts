import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

import NodeCache from "node-cache"
const cache = new NodeCache({ stdTTL: 30, checkperiod: 120 }) // cache for 30 seconds

const queryWp = async (values: any) => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"

  //Use different cache keys depending on parameters
  const cacheKey = `posts_${Object.keys(values).join("_")}_${Object.values(
    values
  ).join("_")}`
  const cached = cache.get(cacheKey)
  if (cached) {
    //return cached
  }

  const queryParams = new URLSearchParams(values)
  const queryString = queryParams.toString()
  const url = `${wpUrl}/wp-json/wp/v2/posts?_embed=true&${queryString}&per_page=1`
  console.log(cacheKey, url)

  const { data } = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })

  const mappedPosts = data.map((post: any) => {
    const {
      title,
      content,
      excerpt,
      yoast_head,
      author,
      date,
      acf,
      _embedded,
    } = post

    const terms = _embedded["wp:term"]
    // Map the featured_image, categories, and tags with embedded variables
    const featuredImage = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : null

    const categories = terms[0] ? terms[0].map((item: any) => item) : []

    const tags = terms[1] ? terms[1].map((item: any) => item) : []

    return {
      title,
      content,
      excerpt,
      categories,
      tags,
      yoast_head,
      featured_image: featuredImage,
      author,
      publish_date: date,
      acf,
    }
  })

  cache.set(cacheKey, mappedPosts)

  return mappedPosts
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await queryWp(req.query)
    res.status(200).json(data)
  } catch (e: any) {
    res.status(400).send({ e: e, err: e.message })
  }
}
