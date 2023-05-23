import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

import NodeCache from "node-cache"
const cache = new NodeCache({ stdTTL: 30, checkperiod: 120 }) // cache for 30 seconds

const queryWp = async (values: any) => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"

  //Use different cache keys depending on parameters
  const cacheKey = `footer`
  const cached = cache.get(cacheKey)
  if (cached) {
    return cached
  }

  const url = `${wpUrl}/wp-json/lw/homepage`
  const res = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })

  const { social_links, published_by } = res.data.homepage.acf

  const data = {
    social_links,
    published_by,
  }

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
