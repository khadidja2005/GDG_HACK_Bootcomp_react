import React, { useState, useEffect } from "react";

export default function Useeffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello, React!");

  // 1️⃣ Runs only ONCE when the component mounts
  useEffect(() => {
    console.log("Component Mounted ✅");
  }, []);

  // 2️⃣ Runs when `count` changes
  useEffect(() => {
    console.log(`Count changed: ${count} 🔄`);
  }, [count]);

  // 3️⃣ Runs on EVERY render
  useEffect(() => {
    console.log("Component Rendered 🔃");
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Count: {count}</h1>
      
      <button 
        onClick={() => setCount(count + 1)} 
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
      >
        Increase Count
      </button>

      <button 
        onClick={() => setMessage("Hello, useEffect!")} 
        className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
      >
        Change Message
      </button>

      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
}
