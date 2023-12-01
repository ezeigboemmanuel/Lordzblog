import React from "react";
import ClientSideRoute from "./ClientSideRoute";
import Image from "next/image";
import  {urlForImage}  from '@/sanity/lib/image'
type Props = {
  posts: Post[];
};

function Banner({ posts }: Props) {
  const filteredPost = posts.filter((post) => post.title === "The Boy"); // Use the Exact title of the post you want to feature
  return (
    <div className="mb-10 mx-5 mt-5">
      {filteredPost.map((post) => (
        // Component created to wrap all posts
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
          <div className="bg-gray-800 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-6 p-5 md:p-10 group ">
            <div>
              <h2 className="text-lg font-medium">Featured article</h2>
              <p className="text-3xl md:text-4xl mt-12 leading-tight">{post.title}</p>
              <p className="mt-6 text-xl font-medium text-[#ecedf1]">
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="line-clamp-3 text-[18px] font-normal leading-8 tracking-wide mt-2 text-[#e3e4eb]">
                {post.description}
              </p>
              <p className="mt-5 mb-5 font-bold flex items-center group-hover:underline">
                Read Post
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </p>
            </div>

            <div className="w-full h-80 drop-shadow-xl">
              <Image
                className="object-cover object-left lg:object-center rounded-lg"
                src={urlForImage(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>
          </div>
        </ClientSideRoute>
      ))}
    </div>
  );
}

export default Banner;