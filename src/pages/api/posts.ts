/* eslint-disable camelcase */
import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import NodeCache from "node-cache"
const cache = new NodeCache({ stdTTL: 30, checkperiod: 120 }) // cache for 30 seconds

const queryWp = async (values: any) => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"

  // Use different cache keys depending on parameters
  const cacheKey = `posts_${Object.keys(values).join("_")}_${Object.values(
    values
  ).join("_")}`
  const cached = cache.get(cacheKey)
  if (cached) {
    // return cached
  }

  const queryParams = new URLSearchParams(values)
  const queryString = queryParams.toString()
  const url = `${wpUrl}/wp-json/wp/v2/posts?_embed=true&${queryString}&per_page=20`

  const { data } = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })

  console.log("data", data)

  const mappedPosts = data.map((post: any) => {
    const {
      id,
      title,
      slug,
      link,
      content,
      excerpt,
      yoast_head,
      date,
      acf,
      _embedded,
    } = post

    const terms = _embedded["wp:term"]

    /* 
    Map the featured_image, author, categories, and 
    tags with embedded variables
    */
    const featuredImage = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0]
      : null

    const author = _embedded["author"] ? _embedded["author"][0] : null

    const categories = terms[0]
      ? terms[0].map((item: any) => {
          const { acf, ...rest } = item
          return { ...rest, ...acf }
        })
      : []

    const tags = terms[0]
      ? terms[0].map((item: any) => {
          const { acf, ...rest } = item
          return { ...rest, ...acf }
        })
      : []

    return {
      id,
      slug,
      title,
      link,
      content,
      excerpt,
      categories,
      tags,
      yoast_head,
      featured_media: featuredImage,
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
