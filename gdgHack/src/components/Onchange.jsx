import React, { useState } from "react";

export default function Onchange() {
  const [text, setText] = useState("");

  return (
    <div className="p-6 text-center">
      <input
        type="text"
        value={text}
        onChange={(e) =>{ setText(e.target.value)
          console.log(e.target.value)
         console.log('Text changed')}
        }
        placeholder="Type something..."
        className="p-2 border rounded-md"
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
}
