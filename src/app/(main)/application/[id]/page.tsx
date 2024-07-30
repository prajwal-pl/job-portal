"use client";
import { ApplyNow } from "@/components/component/apply-now";
import axios from "axios";
import React, { use, useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

function Page({ params }: Props) {
  const { id } = params;
  const [job, setJob] = useState<any>();
  const [user, setUser] = useState<any>();
  const jobs = async () => {
    const res = await axios.get(`http://localhost:8080/api/jobs/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setJob(res.data.job);
    console.log(res.data.job);

    console.log(res.data.job.userId);

    const userResponse = await axios.get(
      `http://localhost:8080/api/auth/user/${res.data.job.userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(userResponse);
    setUser(userResponse.data.user);
  };

  useEffect(() => {
    jobs();
  }, []);
  return <ApplyNow user={user} job={job} />;
}

export default Page;
