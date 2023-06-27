import Image from "next/image";
import Marquee from "react-fast-marquee";
import brandlogo1 from "../../images/b-logo1.png";
import brandlogo2 from "../../images/b-logo2.png";
import brandlogo3 from "../../images/b-logo3.png";
import brandlogo4 from "../../images/b-logo4.png";
import brandlogo5 from "../../images/b-logo5.png";

const Brans = () => {
  return (
    <div className=" bg-secoundary px-5 sm:px-14 py-14 xl:px-32 mb-20">
      <Marquee>
        <div className=" flex items-center justify-center gap-16">
          <div>
            <Image src={brandlogo1} alt="" />
          </div>
          <div>
            <Image src={brandlogo2} alt="" />
          </div>
          <div>
            <Image src={brandlogo3} alt="" />
          </div>
          <div>
            <Image src={brandlogo4} alt="" />
          </div>
          <div>
            <Image src={brandlogo5} alt="" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Brans;
