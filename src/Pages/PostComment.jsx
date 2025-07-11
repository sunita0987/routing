import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const PostComment = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handlePost = () => {
    if (input.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          text: input,
          avatar: `https://i.pravatar.cc/150?img=${
            Math.floor(Math.random() * 70) + 1
          }`,
        },
      ]);
      setInput("");
    }
  };

  const removeComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md mt-20 ">
      <div className="flex items-start gap-2 mb-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        <textarea
          placeholder="Write your comment here..."
          className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          rows="2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handlePost}
          className="bg-[#2C49FE]  hover:bg-blue-900 text-[#ffffff] px-4 py-1 rounded-full text-sm cursor-pointer font-regular transition"
        >
          Post Comment
        </button>
      </div>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-start gap-3 bg-gray-100 p-4 rounded-lg"
          >
            <img
              src={comment.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <h4 className="font-semibold">Username</h4>
              <p className="text-sm text-gray-700">{comment.text}</p>
              <button
                onClick={() => removeComment(comment.id)}
                className="mt-2 text-sm text-gray-600 flex items-center gap-1 hover:text-red-500"
              >
                <FaTrash className="inline-block" /> Remove Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostComment;
