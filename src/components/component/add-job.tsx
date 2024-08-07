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
import { fetchUser } from "@/lib/utils";
import axios from "axios";
import { Loader } from "lucide-react";
import Link from "next/link";

export function AddJob() {
  const [user, setUser] = useState<any>();
  const [job, setJob] = useState<any>({
    title: "",
    type: "",
    location: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const getUser = async () => {
    const res = await fetchUser();
    if (res) {
      setUser(res);
      console.log(res);
    } else {
      console.log("User role is undefined");
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post(
      "https://job-portal-backend-u1w8.onrender.com/api/jobs/new",
      {
        title: job.title,
        type: job.type,
        location: job.location,
        description: job.description,
        userId: user.id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (res.status === 201) {
      router.push("/browse");
    } else {
      console.log("Error");
    }
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="flex justify-center w-full items-center py-24 h-screen bg-background max-h-[100vh]">
      <Card className="w-full max-w-5xl p-6 sm:p-8 md:p-10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Add New Job</CardTitle>
          <CardDescription>
            Fill out the details below to post a new job.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
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
                  type="text"
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
            <Button type="submit">
              {loading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Job"
              )}
            </Button>
            <Link href="/ai-job">
              <Button variant="outline">Use AI</Button>
            </Link>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
}
