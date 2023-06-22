import {
  About,
  ContactUs,
  Courses,
  Events,
  Features,
  Hero,
  Navbar,
  Scholarship,
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
    </div>
  );
}
