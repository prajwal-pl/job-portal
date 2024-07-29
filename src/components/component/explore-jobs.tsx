"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { fetchUser } from "@/lib/utils";

export function ExploreJobs() {
  const router = useRouter();
  const [jobs, setJobs] = useState<any[]>([]);
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    const res = await axios.get("http://localhost:8080/api/jobs", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (res.status === 401 || res.data.data === undefined) {
      router.push("/login");
    }
    setJobs(res.data.data);
  };
  // Fetch user
  const getUser = async () => {
    setLoading(true);
    const res = await fetchUser();
    if (res && res.role && res.name) {
      setUser(res);
      console.log(user);
    } else {
      console.log("User role is undefined");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
    getUser();
  }, []);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="flex-1 md:ml-64">
        <header className="bg-background border-b p-4 flex items-center gap-4">
          <div className="relative flex-1">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search jobs..."
              className="w-full rounded-lg bg-background pl-8"
            />
          </div>
        </header>
        <main className="mt-0 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{user?.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">{job.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col gap-2 items-center">
                    <span className="text-sm text-muted-foreground">
                      Posted {formatDistanceToNow(new Date(job.createdAt))} ago
                    </span>
                    <div className="flex items-center gap-2 w-full">
                      <Link
                        href={`/application/${job.id}`}
                        className="text-sm "
                      >
                        <Button variant="outline" size="sm">
                          Apply
                        </Button>
                      </Link>
                      {user?.role === "COMPANY" || user?.role === "ADMIN" ? (
                        <>
                          <Button variant="destructive" size="sm">
                            Delete
                          </Button>
                          <Button variant="default" size="sm">
                            Edit
                          </Button>
                        </>
                      ) : null}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
        <div className="flex justify-center mt-6 mb-8">
          {/* <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination> */}
        </div>
      </div>
    </div>
  );
}

function BriefcaseIcon(props: any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
