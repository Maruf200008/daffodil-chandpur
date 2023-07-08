import { Metadata } from "next";
import { PageHeading } from "../aboutUs";
import ScrollButton from "../utils/ScrollButton";
import { Courses } from "./index";

export const metadata: Metadata = {
  title: "Daffodil University || Courses",
};

export default function OurCourses() {
  return (
    <div>
      <PageHeading title="Our Courses" buttonText="HomeOur | Courses" />
      <ScrollButton />
      <Courses />
    </div>
  );
}
