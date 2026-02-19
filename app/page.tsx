"use client";
import { cityList } from "@/assets/data";
import { Header } from "@/components/Header";
import Model from "@/components/Model";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    Fname: "",
    Lname: "",
    city: "",
    gender: "",
    tours: {
      cityTour: false,
      museumTour: false,
      foodTour: false,
    },
    profile: null,
  });

  const handleSubmit = () => {
    console.log("form", form);
  };

  const handleCheckbox = (e: any) => {
    const { name, checked } = e.target;

    setForm({
      ...form,
      tours: {
        ...form.tours,
        [name]: checked,
      },
    });
  };

  const handleFile = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setForm({
        ...form,
        profile: file,
      });
    }
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

          <select
            name="city"
            id="city"
            className="p-4 bg-gray-200 border-0 outline-0 rounded-lg w-96"
            value={form?.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          >
            <option value="">Please select city</option>
            {cityList?.map((city, id) => {
              return (
                <option key={id} value={city?.id}>
                  {city?.name}
                </option>
              );
            })}
          </select>

          <div>
            <label htmlFor="Male">
              <input
                type="radio"
                id="Male"
                name="gender"
                value="Male"
                checked={form?.gender === "Male"}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              />
              Male
            </label>

            <label className="ml-2" htmlFor="Female">
              <input
                type="radio"
                id="Female"
                className="ml-10"
                name="gender"
                value="Female"
                checked={form?.gender === "Female"}
                onChange={(e) => {
                  setForm({ ...form, gender: e.target.value });
                }}
              />
              Female
            </label>
          </div>

          <div>
            <label className="ml-2" htmlFor="Female">
              <input
                type="checkbox"
                name="cityTour"
                className="mx-3 mt-1"
                checked={form?.tours.cityTour}
                onChange={handleCheckbox}
              />
              cityTour
            </label>

            <label className="ml-2" htmlFor="Female">
              <input
                type="checkbox"
                name="museumTour"
                className="mx-3 mt-1"
                checked={form?.tours.museumTour}
                onChange={handleCheckbox}
              />
              museumTour
            </label>

            <label className="ml-2" htmlFor="Female">
              <input
                type="checkbox"
                name="foodTour"
                className="mx-3 mt-1"
                checked={form?.tours.foodTour}
                onChange={handleCheckbox}
              />
              foodTour
            </label>
          </div>

          <input type="file" onChange={handleFile} className="border" />

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
