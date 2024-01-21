"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export function Newsletter({ category, title }) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const submitEmail = () => {
    if (!email.endsWith("@gmail.com")) {
      setError("Please enter a valid email address");
      return;
    }
    sendEmail(email, setMessage, setError);
  };

  useEffect(() => {
    if (email.length <= 35) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  }, [email, handleChange]);
  return (
    <div className="w-full h-[28rem] mt-12 ">
      <div className="w-[80%] h-full m-auto bg-[#fffbef] rounded-2xl py-8 flex items-ceter flex-col justify-center gap-y-6 relative">
        <div className="absolute left-[-1.5rem] top-[-1.5rem]">
          <Image
            src={"/newsletter-img.svg"}
            width={150}
            height={150}
            priority={true}
            alt=""
          />
        </div>
        <div className="m-auto h-auto w-full flex flex-col gap-y-6 items-center">
          <span className="text-[13px] text-[#F85E9F] font-bold uppercase">
            {category}
          </span>
          <h1 className="text-4xl px-[12.5rem] font-bold text-center">
            {title}
          </h1>
          <div className="w-full h-auto py-3 flex items-center justify-center flex-wrap gap-5">
            <div className="relative w-auto h-auto flex items-center">
              <div className="absolute left-2">
                <Image
                  src={"/message-icon.svg"}
                  width={25}
                  height={25}
                  priority={true}
                  alt=""
                />
              </div>

              <input
                className={`rounded-xl h-14 w-[30rem] pl-10 ${
                  isValidEmail ? "" : "outline-2 outline-solid outline-red-600"
                }`}
                type="text"
                placeholder="Your email"
                onChange={handleChange}
              />
            </div>
            <button
              onClick={submitEmail}
              disabled={!isValidEmail}
              className="px-6 py-3 font-semibold bg-[#5D50C6] text-white rounded-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Subscribe
            </button>
          </div>
          <div>
            {!isValidEmail && (
              <p className="text-red-700">
                Please provide a valid email address
              </p>
            )}
            {message && <p className="text-green-700">{message}</p>}
            {error && <p className="text-red-700">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

const sendEmail = async (email, setMessage, setError) => {
  try {
    const response = await fetch("/api/auth/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await response.json();
    if (data.status === 200) {
      setError("");
      setMessage(data.message);
    } else {
      setError(data.message);
    }
    setTimeout(() => {
      setMessage("");
      setError("");
    }, 3000);
  } catch (error) {
    setError(error.message);
  }
};
