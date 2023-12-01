// Generates your sitemap 
// Can be accessed by entering https://yourURL.com/sitemap.xml

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";


export default async function sitemap(){
    const allPosts = groq`
    *[_type == "post"] {
      ...,
      author->,
      categories[]
    } | order(_createdAt desc)
    `;

      const baseUrl = "https://yourURL.com"
      const posts: Post[] = await client.fetch(allPosts);
      const postUrls = posts.map((post) => {
          return {
              url: `${baseUrl}/post/${post.slug.current}`,
              lastModified: new Date()
          }
      }) ?? []
    return [
        {
            url: baseUrl,
            lastModified: new Date()
        },
        {
          url: baseUrl,
          lastModified: new Date()
      },
        ...postUrls
    ]
}