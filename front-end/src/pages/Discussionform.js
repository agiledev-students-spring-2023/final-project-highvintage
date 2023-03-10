import React, { useState, useEffect } from "react";
import GenericHeader from "../components/GenericHeader";
// import axios from "axios";

export default function DiscussionForm() {
  //state variables for title
  const [title, setTitle] = useState("");
  const [discussionContent, setDiscussionContent] = useState("");
  // const [error, setError] = useState("");

  //Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default browser form submission stuff

    console.log(`Title: ${title}`);
    console.log(`Discussion content: ${discussionContent}`);
    //backend stuff for later goes here
  };
  return (
    <>
      <GenericHeader pageName="Post Discussion" />
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white p-10 rounded-lg " onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4"></h2>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Your title goes here"
              className="w-full border border-gray-400 p-3 rounded-md"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="discussionContent"
              className="block text-gray-700 font-bold mb-2"
            >
              Content
            </label>
            <textarea
              id="discussionContent"
              placeholder="What do you want to discuss today?"
              className="w-full border border-gray-400 p-2 rounded-md"
              rows="10"
              cols="40"
              value={discussionContent}
              onChange={(event) => setDiscussionContent(event.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-auto bg-gray-400 text-white px-10 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
