"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  console.log(users);

  return (
    <div>
      <p>There Are {users.length} Users</p>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
}
