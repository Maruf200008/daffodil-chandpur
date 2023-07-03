const PageHeading = ({
  title,
  buttonText,
}: {
  title: string;
  buttonText: string;
}) => {
  return (
    <div className="bg-[url('https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/bdrc-bg.png')] bg-cover lg:bg-center   py-[150px]  lg:py-[210px] relative">
      <div className=" flex items-center justify-center">
        <h2 className=" text-[30px] md:text-[40px] xl:text-[60px] font-bold text-white">
          {title}
        </h2>
      </div>
      <div className=" hidden md:flex items-center justify-center">
        <div className=" bg-secoundary absolute bottom-1 -mb-7 flex z-40  text-center py-4 px-10 rounded-full text-white">
          <p>{buttonText}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
