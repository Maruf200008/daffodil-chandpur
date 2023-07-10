"use client";
import { PageHeading } from "@/app/aboutUs";
import Hero from "./components/Hero";

import dynamicData from "../../utils/data";
type Params = {
  postId: string;
};
const DynamicPage = ({ params }: { params?: { postId: string } }) => {
  const { postId } = params || {};

  return (
    <>
      {dynamicData
        .filter((data) => data.id == postId)
        .map((data) => {
          return (
            <div key={data.id}>
              <PageHeading
                title={data.title}
                buttonText={`Home | ${data.title}`}
              />
              <Hero data={data} />
            </div>
          );
        })}
    </>
  );
};

export default DynamicPage;
