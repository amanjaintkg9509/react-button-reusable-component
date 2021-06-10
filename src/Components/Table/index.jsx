import React, { useState } from "react";
export default function Table() {
  // const [count, setCount] = useState(0);
  const [profile, setProfile] = useState({ name: "aman", age: 25 });
  return (
    <>
      <button
        onClick={() => {
          setProfile({ ...profile, age: profile.age + 1 });
        }}
      >
        Increase Count
      </button>
      <p>{profile.name}</p>
      <p>{profile.age}</p>
    </>
  );
}
