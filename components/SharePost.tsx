"use client";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

type Props = {
  post: Post;
};

function SharePost({ post }: Props) {
  return (
    <div>
      <div className=" flex mb-3 gap-x-3">
        <p className="">Share post</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex gap-x-3">
        <div className="">
          <FacebookShareButton
            url={`https://yourlink.com/post/${post.slug.current}`}
            className=""
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>

        <div>
          <TwitterShareButton
            url={`https://yourlink.com/post/${post.slug.current}`}
            title={`${post.title}`}
            className=""
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>

        <div>
          <TelegramShareButton
            url={`https://yourlink.com/post/${post.slug.current}`}
            title={`${post.title}`}
            className=""
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>

        <div>
          <WhatsappShareButton
            url={`https://yourlink.com/post/${post.slug.current}`}
            className=""
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
}

export default SharePost;