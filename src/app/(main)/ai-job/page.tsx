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

import { Message, useChat } from "ai/react";

type Props = {};

const Page = (props: Props) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/generate-description",
  });
  return (
    <div className="flex justify-center w-full items-center py-24 h-screen bg-background max-h-[100vh]">
      <Card className="w-full max-w-5xl p-6 sm:p-8 md:p-10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Add Job with AI</CardTitle>
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
                  //   value={job.title}
                  onChange={handleInputChange}
                  id="title"
                  placeholder="Enter job title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Salary</Label>
                <Input
                  //   value={job.salary}
                  //   onChange={(e) => setJob({ ...job, salary: e.target.value })}
                  id="salary"
                  type="number"
                  placeholder="Enter salary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  //   value={job.location}
                  //   onChange={(e) => setJob({ ...job, location: e.target.value })}
                  id="location"
                  placeholder="Enter job location"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  value={messages.map((m) => m.content).join("\n")}
                  //   onChange={(e) =>
                  //     setJob({ ...job, description: e.target.value })
                  //   }
                  id="description"
                  rows={10}
                ></Textarea>
              </div>
            </div>
            <Button type="submit">Add</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
