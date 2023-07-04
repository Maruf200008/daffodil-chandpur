const Categories = () => {
  interface Categories {
    title: string;
    number: string;
  }
  const categoriesData: Categories[] = [
    {
      title: "Branding",
      number: "(3)",
    },
    {
      title: "Branding",
      number: "(3)",
    },
    {
      title: "Economics",
      number: "(3)",
    },
    {
      title: "Finance",
      number: "(4)",
    },
    {
      title: "High School",
      number: "(6)",
    },
    {
      title: "kids blog",
      number: "(3)",
    },
    {
      title: "Kids Event",
      number: "(4)",
    },
    {
      title: "Media",
      number: "(1)",
    },
    {
      title: "Public",
      number: "(1)",
    },
    {
      title: "School Event",
      number: "(3)",
    },
    {
      title: "Sciences",
      number: "(1)",
    },
    {
      title: "Team",
      number: "(4)",
    },
    {
      title: "Team Two",
      number: "(4)",
    },
    {
      title: "Uncategorized",
      number: "(13)",
    },
  ];
  return (
    <div className=" space-y-5">
      <h2 className=" text-[18px]">Categories</h2>
      <div className=" h-[1px] bg-slate-200 mt-4 relative">
        <div className=" w-[80px] h-[1px] bg-secoundary" />
      </div>
      {categoriesData.map((data, index) => (
        <div key={index} className=" ">
          <div className="flex items-center justify-between text-[15px] text-gray-500 hover:text-secoundary cursor-pointer hover:pl-7 duration-300 ease-in-out">
            <p className="">{data?.title}</p>
            <p>{data?.number}</p>
          </div>
          <div className=" h-[1px] bg-slate-200 mt-4" />
        </div>
      ))}
    </div>
  );
};

export default Categories;
