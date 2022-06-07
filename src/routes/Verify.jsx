import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const Verify = () => {
  let { id } = useParams();
  useEffect(() => {
    axios.post("http://localhost:1231/verify", { id: id }).then((res) => {
      console.log("bro", res.data);
      if (res.data && res.data.status === "successful") {
        window.location.href = "/authsuccess";
      } else {
        alert("something went wrong");
      }
    });
  }, []);
  console.log(id);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">Verifying account... please wait</h1>
    </div>
  );
};

export default Verify;
