import GeneralComponent from "@/components/GeneralComponent";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq
`
*[_type == "post"] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
export const revalidate = 60; //revalidate every 60 seconds

export default async function Home() {
  const posts: Post[] = await client.fetch(query); // Fetch all posts
  return (
    <div>
      {/* Enter the component to see more info */}
      <GeneralComponent posts={posts} /> 
    </div>
  );
}