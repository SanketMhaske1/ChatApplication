import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

function RegisterPage() {
  const [data, setata] = useState({
    name: "",
    password: "",
    password: "",
    profile_pic: "",
  });

  const [uploadPhoto, setuploadPhoto] = useState("");

  const handlerOnChange = (event) => {
    const { name, value } = event.target;

    setata((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handelUploadPhoto = (event) => {
    const file = event.target.files[0];
    setuploadPhoto(file);
  };

  console.log("upload", uploadPhoto);

  return (
    <>
      <div className="mt-8 ">
        <div className="bg-white w-full max-w-sm mx-2 rounded  overflow-hidden p-4">
          <h2>Welcome To Chat app!</h2>
          <form className="grid gap-4 mt-4">
            <div className="flex flex-col gap-2;">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="bg-slate-100 px-2 py-1 focus: outline-blue-300"
                value={data.name}
                onChange={handlerOnChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2;">
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="bg-slate-100 px-2 py-1 focus: outline-blue-300"
                value={data.email}
                onChange={handlerOnChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2;">
              <label htmlFor="password">Password :</label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="bg-slate-100 px-2 py-1 focus: outline-blue-300"
                value={data.password}
                onChange={handlerOnChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2;">
              <label htmlFor="profile_pic">
                Photo :
                <div className=" h-14 bg-slate-200 flex justify-center items-center hover:border border-blue-300 roundedd cursor-pointer">
                  <p className="text-sm max-w-[300px] text-ellipsis line-clamp-1">
                    {uploadPhoto ? uploadPhoto.name : "Upload profile photo"}
                  </p>
                  <button className="text-lg ml-2 hover:text-red-600">
                    <IoCloseOutline />
                  </button>
                </div>
              </label>

              <input
                type="file"
                id="profile_pic"
                name="profile_pic"
                className="bg-slate-100 px-2 py-1 focus: outline-blue-300 hidden"
                onChange={handelUploadPhoto}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
