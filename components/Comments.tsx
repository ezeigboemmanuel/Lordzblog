"use client";
import { client } from "@/sanity/lib/client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

function Comments({ post }: any) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    client
      .create({
        _type: "comment",
        post: {
          _type: "reference",
          _ref: data._id,
        },
        name: data.name,
        email: data.email,
        comment: data.comment,
      })
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        setSubmitted(false);
      });
  };
  return (
    <div>
      {submitted ? (
        <div className="flex flex-col p-10 my-10 bg-blue-500 text-white max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold">
            Thank you for submitting your comment!
          </h3>
          <p>Once it has been approved, it will appear below!</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 my-10 max-w-2xl mx-auto mb-10"
        >
          <h3 className="text-base text-sky-500">Enjoyed this article?</h3>
          <h3 className="text-3xl font-bold">Leave a comment</h3>
          <hr className="py-3 mt-2" />
          <input
            {...register("_id")}
            type="hidden"
            name="_id"
            value={post._id}
          />
          <label className="block mb-5">
            <span>Name</span>
            <input
              {...register("name", { required: true })}
              className="shadow border border-b-gray-200 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
              placeholder="John Doe"
              type="text"
            />
          </label>
          <label className="block mb-5">
            <span>Email</span>
            <input
              {...register("email", { required: true })}
              className="shadow border border-b-gray-200 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
              placeholder="johndoe@gmail.com"
              type="email"
            />
          </label>
          <label className="block mb-5">
            <span>Comment</span>
            <textarea
              {...register("comment", { required: true })}
              className="shadow border border-b-gray-200 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
              placeholder="Your comment..."
              rows={8}
            />
          </label>

          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">The name field is required!</span>
            )}
            {errors.email && (
              <span className="text-red-500">The email field is required!</span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                The comment field is required!
              </span>
            )}
          </div>

          <input
            type="submit"
            className="shadow bg-sky-700 hover:bg-sky-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          />
        </form>
      )}

      {/* Comments */}
      <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-blue-500 shadow space-y-2">
        <h1 className="text-4xl">Comments</h1>
        <hr className="pb-2" />
        {post.comments.length < 1 ? (
          <p>Be the first to comment </p>
        ) : (
          <div>
            {post.comments.map((comment: any) => (
              <div key={comment._id}>
                <p className="">
                  <span className="text-sky-300 text-base font-bold">
                    {comment.name}:
                  </span>{" "}
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comments;