import { About, Courses, Hero, Navbar } from "./components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Courses />
    </div>
  );
}
