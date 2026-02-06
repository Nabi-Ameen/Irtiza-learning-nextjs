"use client";
import { Header } from "@/components/Header";
import Model from "@/components/Model";
import { useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lasstName, setLasttName] = useState("");

  const handleSubmit = () => {
    const body = {
      f_name: firstName,
      l_name: lasstName,
    };
    console.log("body", body);
    setFirstName("");
    setLasttName("");
  };

  return (
    <div className="">
      <div className="p-2 flex justify-center items-center m-20">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="F-name"
            name="firstName"
            value={firstName}
            className="p-4 bg-gray-200 border-0 outline-0 rounded-lg w-96"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="L-name"
            name="lasstName"
            value={lasstName}
            className="p-4 bg-gray-200 border-0 outline-0 rounded-lg w-96"
            onChange={(e) => setLasttName(e.target.value)}
          />

          <button
            className="bg-blue-800 text-white rounded-lg p-4"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
