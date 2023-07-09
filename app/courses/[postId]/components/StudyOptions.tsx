const StudyOptions = ({
  data,
}: {
  data?: {
    courceTitle3: string;
    tableTitle1: string;
    tableTitle2: string;
    tableTitle3: string;
    tableData1: string;
    tableData2: string;
    tableData3: string;
    tableData4: string;
    tableData5: string;
    tableData6: string;
  };
}) => {
  return (
    <>
      <div className=" space-y-5">
        <h2 className=" text-[25px] font-bold text-slate-800">
          {data?.courceTitle3}
        </h2>
        <div>
          <div className="relative overflow-x-auto border">
            <table className="w-full text-sm text-left  ">
              <thead className="  uppercase bg-secoundary text-white ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    {data?.tableTitle1}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {data?.tableTitle2}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {data?.tableTitle3}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-200 border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                  >
                    {data?.tableData1}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                  >
                    {data?.tableData2}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                  >
                    {data?.tableData3}
                  </th>
                </tr>
                <tr className=" bg-slate-100 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                  >
                    {data?.tableData4}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                  >
                    {data?.tableData5}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                  >
                    {data?.tableData6}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyOptions;
