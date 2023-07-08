import { Metadata } from "next";
import { ContactUs, Scholarship, Testimonial } from "../components";
import ScrollButton from "../utils/ScrollButton";
import {
  Brans,
  CampusTour,
  OurUniversity,
  PageHeading,
  PowerfulAlumni,
} from "./index";

export const metadata: Metadata = {
  title: "Daffodil University || AboutUs",
};

export default function About() {
  return (
    <div>
      <PageHeading title="About Us" buttonText="Home | About" />
      <OurUniversity />
      <ScrollButton />
      <Scholarship />
      <ContactUs />
      <CampusTour />
      <PowerfulAlumni />
      <Testimonial />
      <Brans />
    </div>
  );
}
