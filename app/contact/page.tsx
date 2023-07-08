import { Metadata } from "next";
import { Brans, PageHeading } from "../aboutUs";
import ScrollButton from "../utils/ScrollButton";
import CustomInqureForm from "./components/CustomInqureForm";
import MakeAppointment from "./components/MakeAppointment";
import Map from "./components/Map";

export const metadata: Metadata = {
  title: "Daffodil University || Contact",
};

export default function About() {
  return (
    <div>
      <PageHeading title="Contact" buttonText="Home | Contact" />
      <ScrollButton />
      <MakeAppointment />
      <Map />
      <CustomInqureForm />
      <Brans />
    </div>
  );
}
