"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

export function ChooseRole() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedOption, setSelectedOption] = useState("COMPANY");
  const userId = localStorage.getItem("id");
  const handleClick = async () => {
    try {
      const res = await axios.post(
        `https://job-portal-backend-u1w8.onrender.com/api/auth/update-role/${userId}`,
        {
          role: selectedOption,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res);
      if (axios.isAxiosError(res)) {
        console.log(res?.response?.data?.message);
      }
      if (res.status === 200) {
        toast({
          title: "Role updated successfully",
          description: "You have been updated successfully",
        });
        router.push("/browse");
      }
    } catch (error) {
      console.log(error);
    }
    console.log("handleClick");
  };

  if (!userId) {
    router.push("/register");
  }
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Choose your role
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Select whether you are a company or a candidate.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div
            className={`rounded-lg border p-6 transition-colors hover:bg-accent hover:text-accent-foreground focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
              selectedOption === "COMPANY"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-input bg-background text-foreground"
            }`}
            onClick={() => setSelectedOption("COMPANY")}
          >
            <h3 className="text-lg font-medium">Company</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Hire top talent for your team.
            </p>
            {selectedOption === "COMPANY" && (
              <div className="mt-4 flex justify-end">
                <CheckIcon className="h-6 w-6" />
              </div>
            )}
          </div>
          <div
            className={`rounded-lg border p-6 transition-colors hover:bg-accent hover:text-accent-foreground focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
              selectedOption === "USER"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-input bg-background text-foreground"
            }`}
            onClick={() => setSelectedOption("USER")}
          >
            <h3 className="text-lg font-medium">Candidate</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Find your dream job.
            </p>
            {selectedOption === "USER" && (
              <div className="mt-4 flex justify-end">
                <CheckIcon className="h-6 w-6" />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            onClick={handleClick}
          >
            Continue
          </Button>
        </div>
      </div>
    </main>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
