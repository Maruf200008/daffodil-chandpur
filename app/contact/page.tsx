import { Brans, PageHeading } from "../aboutUs";
import CustomInqureForm from "./components/CustomInqureForm";
import MakeAppointment from "./components/MakeAppointment";
import Map from "./components/Map";

export default function About() {
  return (
    <div>
      <PageHeading title="Contact" buttonText="Home | Contact" />
      <MakeAppointment />
      <Map />
      <CustomInqureForm />
      <Brans />
    </div>
  );
}
