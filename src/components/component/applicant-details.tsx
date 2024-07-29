"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CalendarCheck, CalendarHeart } from "lucide-react";

export function ApplicantDetails({ id }: { id: string }) {
  const [application, setApplication] = useState<any>({});
  const [job, setJob] = useState<any>({});
  const [user, setUser] = useState<any>({});
  const getApplication = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/applications/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(res.data.application);
    setApplication(res.data.application);

    const resJob = await axios.get(
      `http://localhost:8080/api/jobs/${res.data.application.jobId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(resJob.data.job);
    setJob(resJob.data.job);
    const resUser = await axios.get(
      `http://localhost:8080/api/auth/user/${res.data.application.userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(resUser.data.user);
    setUser(resUser.data.user);
  };
  useEffect(() => {
    getApplication();
  }, []);
  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-10 max-h-screen">
      <div className="grid gap-8">
        <div className="flex items-center gap-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h1 className="text-3xl font-bold">{user?.name}</h1>
            <p className="text-lg text-muted-foreground">{user?.email}</p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold">Applied Job Title</h2>
            <p className="my-4 font-medium">{job?.title}</p>
          </div>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold">Applied Job Description</h2>
            <p className="my-4 font-medium line-clamp-4">{job?.description}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href={`${application?.CV}`}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View CV
          </Link>
          <Link
            href={`${application?.resume}`}
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View Resume
          </Link>
        </div>
        <div className="flex gap-2">
          <Button className="flex items-center gap-1">
            <CalendarCheck className="w-5 h-5" />
            <span>Schedule Interview</span>
          </Button>
          <Button variant={"destructive"} className="flex items-center gap-1">
            <CalendarCheck className="w-5 h-5" />
            <span>Reject Application</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
