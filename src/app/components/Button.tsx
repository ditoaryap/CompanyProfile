import React from "react";

function Button({ value }: any) {
  return (
    <>
      <button className="text-[22px] rounded-[30px] w-[226px] h-[57px] relative overflow-hidden border border-amber-500 bg-white text-amber-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-amber-500 before:transition-all before:duration-500 hover:text-white hover:shadow-amber-500 hover:before:left-0 hover:before:w-full">
        <span className="relative font-montserrat">{value}</span>
      </button>
    </>
  );
}

export default Button;
