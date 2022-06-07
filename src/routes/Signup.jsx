import axios from "axios";
import React, { useState } from "react";
import Toastify from "toastify-js";

const Signup = () => {
  const [email, setEmail] = useState("");
  function submit(e) {
    e.preventDefault();
    Toastify({
      text: "Signing you up",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
    }).showToast();
    axios
      .post("http://localhost:1231/signup", {
        email: email,
      })
      .then((res) => {
        if (res.data.status === "success") {
          setTimeout(() => {
            Toastify({
              text: "Successfully signed up",
              duration: 3000,
              close: true,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
            }).showToast();
            window.location.href = "/signin";
          }, 3000);
        } else {
          setTimeout(() => {
            Toastify({
              text: "Something went wrong",
              duration: 3000,
              close: true,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
            }).showToast();
          }, 3000);
        }
      });
  }
  return (
    <section className="bg-zinc-200 text-gray-600 flex justify-center items-center flex-col h-screen">
      <div className="mx-auto flex flex-col gap-3">
        <h1 className="text-3xl">Proof of Concept - Sign up </h1>
        <h1>Single Sign in Option</h1>
        <div className="bg-white shadow-lg rounded-xl max-w-md">
          <div className="p-8">
            <p>
              The user first signs up with the service provider by providing
              their email
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8">
          <form onSubmit={submit} className="w-full flex flex-col gap-4">
            <div>
              <label> Email Address:</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="border mt-2 bg-transparent rounded-lg w-full p-3 border-gray-300"
              />
            </div>
            <button className="w-full hover:bg-purple-600 transition-all justify-center bg-purple-500 flex items-center text-white font-semibold rounded-lg hover: p-5">
              <div>Sign up</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
