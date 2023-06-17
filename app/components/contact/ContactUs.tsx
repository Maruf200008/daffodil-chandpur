"use client";
import AccordionMenu from "./AccordionMenu";
const ContactUs = () => {
  const accordionData = [
    {
      title: "01 Cras turpis felis, elementum sed mi at arcu ?",
      desc: "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    },
    {
      title: "02 Vestibulum nibh risus, in neque eleifendulputate sem ?",
      desc: "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    },
    {
      title: "03 Donec maximus, sapien id auctor ornare ?",
      desc: "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    },
    {
      title: "04 Vestibulum nibh risus, in neque eleifendulputate sem ?",
      desc: "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    },
    {
      title: "05 Donec maximus, sapien id auctor ornare ?",
      desc: "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    },
  ];
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
            {accordionData.map((data, index) => (
              <AccordionMenu key={index} data={data} />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUs;
