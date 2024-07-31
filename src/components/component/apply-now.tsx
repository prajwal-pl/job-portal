"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export function ApplyNow({ job, user }: { job: any; user: any }) {
  const router = useRouter();
  const { toast } = useToast();
  const [files, setFiles] = useState({
    cv: "",
    resume: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(
      `https://job-portal-backend-u1w8.onrender.com/api/applications/new/${job?.id}`,
      {
        CV: files.cv,
        resume: files.resume,
        jobId: job?.id,
        userId: user?.id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    // if (!(res.status === 201)) {
    //   toast({
    //     title: "Application already submitted",
    //     description: "Please try again",
    //     variant: "destructive",
    //   });
    // }
    if (res.status === 201) {
      toast({
        title: "Application submitted successfully",
        description: "You can now view your application",
      });
      router.push("/browse");
    }
    console.log(res);
    console.log("Files: ", files);
  };

  return (
    <div className="container mb-12 mx-auto max-h-[100dvh] max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {job?.title}
          </h1>
          <p className="mt-2 text-muted-foreground">{user?.name}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Job Description
          </h2>
          <p className="text-muted-foreground">{job?.description}</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Salary Range
          </h2>
          <p className="text-muted-foreground">${job?.salary}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Apply Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label
                htmlFor="cv"
                className="block text-sm font-medium text-foreground"
              >
                Upload CV
              </Label>
              <div className="mt-1">
                <UploadButton
                  appearance={{
                    container: "w-full",
                    button: "w-full bg-primary text-background",
                    allowedContent: "hidden",
                  }}
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    setFiles({ ...files, cv: res[0].url });
                    toast({
                      title: "CV uploaded successfully",
                      description: "You can now upload your resume",
                    });
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="resume"
                className="block text-sm font-medium text-foreground"
              >
                Upload Resume
              </Label>
              <div className="mt-1">
                <UploadButton
                  appearance={{
                    container: "w-full",
                    button: "w-full bg-primary text-background",
                    allowedContent: "hidden",
                  }}
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    setFiles({ ...files, resume: res[0].url });
                    toast({
                      title: "Resume uploaded successfully",
                      description: "You can now submit your application",
                    });
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
