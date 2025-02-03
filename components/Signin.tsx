import React from "react";

export default function SigninComponent() {
  return (
    <div className="h-screen flex justify-center flex-col items-center ">
      <div className="mb-6">
        <div className="text-4xl font-extrabold mb-1">Sign in</div>
        <div className="font-light text-slate- ">
          Already have an account? Login
        </div>
      </div>
      <div className=" w-2/3">
        <LabelledInput
          label="Name"
          placeholder="Enter your name"
          // onChange={(e) => {}}
        />

        <LabelledInput
          label="Email"
          placeholder="Enter your email"
          // onChange={(e) => {}}
        />
        <LabelledInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          onChange={(e) => {}}
        />
        <button
          type="button"
          className="w-full text-white bg-black hover:bg-gray-900 focus:outline-none 
            focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
            me-2 mb-2 "
        >
          SignIn
        </button>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
function LabelledInput({
  label,
  placeholder,
  // onChange,
  //
  type,
}: LabelledInputType) {
  return (
    <div>
      <div className="mb-6 ">
        <label className="block mb-2 text-sm font-bold text-black">
          {label}
        </label>
        <input
          type={type ?? "text"}
          id="first_name"
          // onChange={onChange}
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
              block  p-2.5 "
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
