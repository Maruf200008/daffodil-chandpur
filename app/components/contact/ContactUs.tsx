"use client";
import { useState } from "react";
import AccordionMenu from "./AccordionMenu";
const ContactUs = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="py-10 md:px-32 px-10 mb-20">
      <div className=" flex gap-x-10">
        <div className=" space-y-5 w-[800px] ">
          <h2 className=" text-[40px] font-bold">
            Get every single answer here.
          </h2>
          <p className=" text-[20px] text-gray-500">
            A business or organization established to provide a particular
            service, typically one that involves a organizing transactions.
          </p>
          <div className="">
            <AccordionMenu />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUs;
