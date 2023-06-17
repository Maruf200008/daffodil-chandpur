"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
const AccordionMenu = ({ data }) => {
  console.log(data);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" space-y-6">
        <h2>
          <button
            type="button"
            className="flex border border-slate-700 rounded-md items-center justify-between w-full p-4 font-medium text-left   "
            onClick={() => setOpen(!open)}
          >
            <span className="flex items-center">{data?.title}</span>
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-5  "
            >
              <p className="mb-2 text-gray-500 ">{data?.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default AccordionMenu;
