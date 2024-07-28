import { ApplicantDetails } from "@/components/component/applicant-details";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params }: Props) => {
  const { id } = params;
  return <ApplicantDetails id={id} />;
};

export default Page;
