import { Testimonial } from "../components";
import {
  Brans,
  CampusTour,
  ContactUs,
  OurUniversity,
  PageHeading,
  PowerfulAlumni,
  Scholarship,
} from "./index";

export default function About() {
  return (
    <div>
      <PageHeading title="About Us" buttonText="Home | About" />
      <OurUniversity />
      <Scholarship />
      <ContactUs />
      <CampusTour />
      <PowerfulAlumni />
      <Testimonial />
      <Brans />
    </div>
  );
}
