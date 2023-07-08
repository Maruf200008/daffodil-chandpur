import { Metadata } from "next";
import { PageHeading } from "../aboutUs";
import ScrollButton from "../utils/ScrollButton";
import News from "./components/News";

export const metadata: Metadata = {
  title: "Daffodil University || Blog",
};

export default function Blog() {
  return (
    <div>
      <PageHeading title="News" buttonText="Home | News" />
      <ScrollButton />
      <News />
    </div>
  );
}
