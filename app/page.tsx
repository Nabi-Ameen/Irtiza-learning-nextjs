"use client";
import { Header } from "@/components/Header";
import Model from "@/components/Model";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    Fname: "",
    Lname: "",
  });

  const handleSubmit = () => {
    console.log("form", form);
  };

  return (
    <div className="">
      <div className="p-2 flex justify-center items-center m-20">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="F-name"
            name="firstName"
            value={form?.Fname}
            className="p-4 bg-gray-200 border-0 outline-0 rounded-lg w-96"
            onChange={(e) => setForm({ ...form, Fname: e.target.value })}
          />
          <input
            type="text"
            placeholder="L-name"
            name="lasstName"
            value={form?.Lname}
            className="p-4 bg-gray-200 border-0 outline-0 rounded-lg w-96"
            onChange={(e) => setForm({ ...form, Lname: e.target.value })}
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
