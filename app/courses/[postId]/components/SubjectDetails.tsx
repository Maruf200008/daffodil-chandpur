const SubjectDetails = ({
  data,
}: {
  data?: { desc1: string; desc2: string };
}) => {
  return (
    <>
      <div className=" space-y-5">
        <h1 className=" text-[30px] font-bold text-slate-800">
          Course Overview
        </h1>
        <div className=" text-[14px] text-gray-500 space-y-5">
          <p>{data?.desc1}</p>
          <p>{data?.desc2}</p>
        </div>
      </div>
    </>
  );
};

export default SubjectDetails;
