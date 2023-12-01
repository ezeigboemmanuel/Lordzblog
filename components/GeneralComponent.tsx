// This component is used to wrap all othe components

"use client";
import React, { useState } from "react";
import Banner from "./Banner";
import BlogList from "./BlogList";

type Props = {
  posts: Post[];
};

function GenComp({ posts }: Props) {
  const [filteredData, setFilteredData] = useState(posts);
  const [show, setShow] = useState(true);
  const handleFilter = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord: string = target.value.toLowerCase();
    const newFilter:Post[] = posts.filter(({ title }): boolean =>
      title.toLowerCase().includes(searchWord)
    );
    setShow(false);
    setFilteredData(newFilter);
    console.log(searchWord.length);
    if (searchWord.length === 0) {
      setShow(true);
    }
  };
  return (
    <div className="">
      <div className="flex flex-col items-center mx-5">
        <div className="relative flex items-center max-w-4xl px-5 mx-auto w-full h-12 rounded-lg focus-within:shadow-lg bg-gray-700 overflow-hidden mb-4">
          <div className="grid place-items-center h-full w-12 text-gray-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full bg-gray-700 outline-none text-sm text-white pr-2 placeholder-gray-400"
            type="text"
            id="search"
            placeholder="Search something.."
            onChange={handleFilter}
          />
        </div>
      </div>
      {show && <Banner posts={posts} />}
      <BlogList posts={filteredData} />
      {filteredData.length <= 0 && (
        <h2 className="mx-5 text-center">No post available, try another search term.</h2>
      )}
    </div>
  );
}

export default GenComp;