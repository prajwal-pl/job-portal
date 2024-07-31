"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUser, updateJob } from "@/lib/utils";
import axios from "axios";
import { Loader } from "lucide-react";
type Props = {
  params: {
    id: string;
  };
};

const getJob = async ({ id }: any) => {
  try {
    const res = await axios.get(
      `https://job-portal-backend-u1w8.onrender.com/api/jobs/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (axios.isAxiosError(res)) {
      console.log(res?.response?.data?.message);
      return;
    }
    console.log(res.data.job);
    return res.data.job;
  } catch (error) {
    console.log(error);
  }
};

const Page = ({ params }: Props) => {
  const { id } = params;

  const [job, setJob] = useState<any>({
    title: "",
    type: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const getJobData = async () => {
      const res = await getJob({ id });
      if (res) {
        console.log(res);
        setJob(res);
      }
    };
    getJobData();
  }, [id]);

  return (
    <div className="flex justify-center w-full items-center py-24 h-screen bg-background max-h-[100vh]">
      <Card className="w-full max-w-5xl p-6 sm:p-8 md:p-10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Update Job</CardTitle>
          <CardDescription>
            Fill out the details below to post a new job.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateJob(job.id, job);
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input
                  value={job.title}
                  onChange={(e) => setJob({ ...job, title: e.target.value })}
                  id="title"
                  placeholder="Enter job title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Type</Label>
                <Input
                  value={job.type}
                  onChange={(e) => setJob({ ...job, type: e.target.value })}
                  id="salary"
                  type="number"
                  placeholder="Enter Onsite or Remote"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  value={job.location}
                  onChange={(e) => setJob({ ...job, location: e.target.value })}
                  id="location"
                  placeholder="Enter job location"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  value={job.description}
                  onChange={(e) =>
                    setJob({ ...job, description: e.target.value })
                  }
                  id="description"
                  rows={10}
                ></Textarea>
              </div>
            </div>
            <Button type="submit">Update</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
};

export default Page;
