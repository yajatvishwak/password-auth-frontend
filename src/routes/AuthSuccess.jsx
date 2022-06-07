import React from "react";

const AuthSuccess = () => {
  return (
    <section className="bg-zinc-200 text-gray-600 flex justify-center items-center flex-col h-screen">
      <div className="mx-auto flex flex-col gap-3 justify-center items-center">
        <h1 className="text-3xl">Auth Success</h1>
        <div className="text-green-500 h-full w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-25 w-25"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AuthSuccess;
