import Image from "next/image";
import Link from "next/link";
import notFoundImg from "./images/notFound.jpg";
const Notfound = () => {
  return (
    <div className="py-10 px-5 sm:px-14 xl:px-28 mb-20 lg:px-[50px]">
      <div className=" flex items-center justify-center flex-col">
        <h1 className="text-[40px]  sm:text-[50px] font-bold r text-secoundary">
          404
        </h1>
        <p className=" text-center">{`Ooops! You weren't Supposed to see this`}</p>
      </div>
      <div className=" flex-col flex items-center justify-center mt-10 space-y-10">
        <Image src={notFoundImg} alt="Not Found" width={600} />
        <div className=" text-center text-gray-400">
          <p>{`The page you're looking for no longer exists.`}</p>
          <p>
            Return to the
            <Link
              href="/"
              className=" cursor-pointer underline hover:text-gray-600 transition"
            >
              {""} home page {""}
            </Link>
            and remember : you havent seen anything.`
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
