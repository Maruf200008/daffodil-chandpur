"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
interface Accordion {
  title: string;
  desc: string;
}
const AccordionMenu = ({ data }: { data: Accordion }) => {
  const { title, desc } = data || {};
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="space-y-6">
        <h2>
          <button
            type="button"
            className="flex gap-4 border w-full border-slate-700 rounded-md items-center justify-between p-4 font-medium text-left"
            onClick={() => setOpen(!open)}
          >
            <span className="flex items-center">{title}</span>
            <div className=" border p-1 border-slate-700 rounded-md">
              {!open ? (
                <IoIosArrowBack size={30} />
              ) : (
                <IoIosArrowDown size={30} />
              )}
            </div>
          </button>
        </h2>
        <div>
          {open && (
            <div className="p-5">
              <p className="mb-2 text-gray-500">{desc}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AccordionMenu;
