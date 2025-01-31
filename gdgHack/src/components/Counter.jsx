import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      
      <div className="flex space-x-4">
        <button 
          onClick={() => { setCount(count + 1)
          console.log('Count increased')}
          } 
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
        >
          Increase
        </button>

        <button 
          onClick={() => setCount(count - 1)} 
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
