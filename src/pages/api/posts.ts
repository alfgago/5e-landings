import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

import NodeCache from "node-cache"
const cache = new NodeCache({ stdTTL: 30 }) // cache for 30 seconds

const queryWp = async (values: any) => {
  const wpUrl =
    process.env.WORDPRESS_URL ?? "https://dev-learningwell-wp.pantheonsite.io"

  //Use different cache keys depending on parameters
  const cacheKey = `categories_${Object.values(values).join("_")}`
  const cached = cache.get(cacheKey)
  if (cached) {
    return cached
  }

  const queryParams = new URLSearchParams(values)
  const queryString = queryParams.toString()
  const url = `${wpUrl}/wp-json/wp/v2/posts?_embed=true&${queryString}`

  const { data } = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  cache.set(cacheKey, data)

  return data
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
