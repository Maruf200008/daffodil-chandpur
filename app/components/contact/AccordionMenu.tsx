"use client";

import { Accordion } from "flowbite-react";

const AccordionMenu = () => {
  return (
    <Accordion className="outline-none focus:outline-none hover:bg-slate-300">
      <Accordion.Panel className="  ">
        <Accordion.Title className="   dark:text-gray-700 dark:bg-white focus:outline-none dark:hover:bg-white dark:hover:text-gray-900 dark:focus:ring-0  ">
          What is Flowbite?
        </Accordion.Title>
        <Accordion.Content className="dark:bg-white dark:border-white">
          <p className="mb-2 text-gray-500  ">
            <p>
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            <p>Check out this guide to learn how to </p>
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="https://flowbite.com/docs/getting-started/introduction/"
            >
              <p>get started</p>
            </a>
            <p>
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AccordionMenu;
