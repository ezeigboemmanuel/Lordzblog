// The Dynamic page of all posts

import Coffee from "@/components/Coffee";
import Comments from "@/components/Comments";
import MoreBlogs from "@/components/MoreBlogs";
import { RichTextComponents } from "@/components/RichTextComponents";
import SharePost from "@/components/SharePost";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  // A groq query to bring the post and their required properties
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
          ...,
          author->,
          categories[]->,
          'comments': *[
            _type == 'comment' &&
            post._ref == ^._id &&
            approved == true],
      }`;

  const post: Post = await client.fetch(query, { slug }); // Fetch the post matching the query

  return {
    metadataBase: new URL("https://yourURL.com"), // Input your URL here
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://yourURL.com/post/${post.slug.current}`, // Also input your URL here
      siteName: "Lordzblog",
      images: [
        {
          url: urlForImage(post.mainImage).url(),
        },
      ],
    },
  };
}

export const revalidate = 60; // revalidate every 60 seconds

// This function is used to generate our slug
export async function generateStaticParams() {
  const query = groq`
  *[_type == "post"]
  {
    slug
  }
  `;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug, // slug: slug
  }));
}

async function Post({ params: { slug } }: Props) {
  // A groq query to bring the post and their required properties
  const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->,
        'comments': *[
          _type == 'comment' &&
          post._ref == ^._id &&
          approved == true],
    }`;

  // A groq query to bring out all posts and their required properties
  const allPosts = groq`
    *[_type == "post"] {
      ...,
      author->,
      categories[]
    } | order(_createdAt desc)
    `;

  const post: Post = await client.fetch(query, { slug }); // Fetch the post matching the query
  const posts = await client.fetch(allPosts); // Fetch all posts

  return (
    <article className="px-5 pb-28">
      <section className="space-y-2 border border-sky-700 text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlForImage(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="p-5 bg-sky-700 w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold my-4">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-lg"
                  src={urlForImage(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* Author's BIO */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10 text-[18px] font-normal leading-8 tracking-wide">
                {post.description}
              </h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* PortableText renders our post in richtext format */}

      <PortableText value={post.body} components={RichTextComponents} />

      {/* Coffee Component */}

      <Coffee />

      {/* Share component */}

      <SharePost post={post} />

      {/* Related posts */}
      <MoreBlogs posts={posts} post={post} />

      {/* Comments */}

      <Comments post={post} />
    </article>
  );
}

export default Post;