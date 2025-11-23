import React from "react";
import { ToastContainer } from "react-toastify";

const Toasts = () => {
  return (
    <>
      <ToastContainer
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default Toasts;
