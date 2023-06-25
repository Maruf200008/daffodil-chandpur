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
    <div className="py-10 px-5 md:px-28 mb-20">
      <div className=" grid md:grid-cols-2 gap-x-20">
        <div className=" space-y-5">
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
        <div className=" ">
          <div className="bg-[#032e3f] md:px-16 py-10 rounded-md mx-10">
            <h2 className="text-[30px] text-white font-bold">
              Make An Contact
            </h2>
            <form action="" className=" mt-10 text-[14px] space-y-8">
              <input
                type="text"
                className="rounded-md  py-3 px-3 focus:outline-none"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="rounded-md  py-3 px-3 focus:outline-none"
                placeholder="Your Email"
              />
              <input
                type="phone"
                className="rounded-md py-3 px-3 focus:outline-none"
                placeholder="Your Phone"
              />
              <textarea
                name="message"
                rows="7"
                className=" focus:outline-none  rounded-md px-3 py-2 resize-none"
                placeholder="Message"
              />
              <button className=" bg-secoundary px-7 py-4 transition text-white hover:bg-primary rounded-md">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
