import axios from "axios";
import React, { useState } from "react";
import Toastify from "toastify-js";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
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
      .post("http://localhost:1231/signin", {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "success") {
          setTimeout(() => {
            Toastify({
              text: "Please check your email",
              duration: 3000,
              close: true,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
            }).showToast();
          }, 3000);
          setLink(res.data.id);
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
        <h1 className="text-3xl">Proof of Concept - Sign in</h1>
        <h1>Single Sign in Option</h1>
        <div className="bg-white shadow-lg rounded-xl max-w-md">
          <div className="p-8">
            <p>
              The user then signs in with the email id that was provided in the
              signup process. This email will recieve a link which will
              authenticate the user
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8">
          <form onSubmit={submit} className="w-full flex flex-col gap-4">
            <div>
              <label>Email Address:</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="border mt-2 bg-transparent rounded-lg w-full p-3 border-gray-300"
              />
            </div>
            <button className="w-full hover:bg-purple-600 transition-all justify-center bg-purple-500 flex items-center text-white font-semibold rounded-lg hover: p-5">
              <div>Send Mail </div>
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
            {/* {link && (
              <div
                onClick={() => {
                  axios
                    .post("http://localhost:1231/verify", { id: link })
                    .then((res) => {
                      console.log("bro", res.data);
                      if (res.data && res.data.status === "successful") {
                        window.location.href = "/authsuccess";
                      } else {
                        alert("something went wrong");
                      }
                    });
                }}
                className="flex justify-center items-center  p-8 rounded-xl shadow-lg"
              >
                Verify Auth
              </div>
            )} */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;
