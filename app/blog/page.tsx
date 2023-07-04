import { PageHeading } from "../aboutUs";
import News from "./components/News";

export default function Blog() {
  return (
    <div>
      <PageHeading title="News" buttonText="Home | News" />
      <News />
    </div>
  );
}
