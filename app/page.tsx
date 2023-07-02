import {
  About,
  AdmissionAndAid,
  Blogg,
  Brans,
  ContactUs,
  Courses,
  Events,
  Features,
  Hero,
  Scholarship,
  SearchForCourses,
  Testimonial,
  WeAreDifrrent,
} from "./components";
import ScrollButton from "./utils/ScrollButton";

export default function Home() {
  return (
    <div>
      <Hero />
      <ScrollButton />
      <About />
      <Courses />
      <Features />
      <Events />
      <Scholarship />
      <ContactUs />
      <WeAreDifrrent />
      <ScrollButton />
      <Testimonial />
      <SearchForCourses />
      <AdmissionAndAid />
      <Brans />
      <Blogg />
    </div>
  );
}
