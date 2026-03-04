"use client";

import { useEffect, useState } from "react";

const page = () => {
  const [userData, setUserData] = useState<any>([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching users:", error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {userData.map((user: any) => (
        <div key={user.id} className="p-4 m-4 border rounded-lg">
          <h2 className="text-xl font-bold">{user.title}</h2>
          <p>{user.body}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
