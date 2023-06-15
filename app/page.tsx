import {
  About,
  ContactUs,
  Courses,
  Events,
  Features,
  Hero,
  Navbar,
  Scholarship,
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
    </div>
  );
}
