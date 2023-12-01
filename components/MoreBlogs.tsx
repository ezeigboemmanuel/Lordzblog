import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
  post: Post;
};

function MoreBlogs({ posts, post }: Props) {
    const filteredPosts = posts.filter(item => item.title !== post.title).slice(0, 3);
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold pb-7 pt-20">Read more blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
        {/* Posts */}
        {filteredPosts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div key={post._id} className="flex rounded-lg pb-7 flex-col group cursor-pointer hover:border-solid hover:border-2 hover:border-sky-600">
              <div className="relative w-full h-80 drop-shadow-xl">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlForImage(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-gray-950 backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    {/* <p className="font-bold">{post.title}</p> */}
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post.categories.map((category) => (
                      <div key={category._id} className="bg-sky-900 text-center text-white px-3 py-1 rounded-full text-sm font-semibold]">
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1 px-3">
                <p className="text-2xl md:text-3xl font-medium">{post.title}</p>
                <p className="line-clamp-3 text-[18px] font-normal leading-8 tracking-wide mt-2 text-[#ecedf1]">{post.description}</p>
              </div>

              <p className="mt-5 font-bold flex items-center group-hover:underline px-3">
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
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default MoreBlogs;