import React, { useState } from "react";

export default function Onsubmit() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <div className="p-6 text-center w-1/3 mx-auto">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="p-2 border rounded-md"
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
}
