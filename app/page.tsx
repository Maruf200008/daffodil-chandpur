import {
  About,
  AdmissionAndAid,
  Blogg,
  Brans,
  ContactUs,
  Courses,
  Events,
  Features,
  Footer,
  Hero,
  Navbar,
  Scholarship,
  SearchForCourses,
  Testimonial,
  WeAreDifrrent,
} from "./components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Features />
      <Events />
      <Scholarship />
      <ContactUs />
      <WeAreDifrrent />
      <Testimonial />
      <SearchForCourses />
      <AdmissionAndAid />
      <Brans />
      <Blogg />
      <Footer />
    </div>
  );
}
