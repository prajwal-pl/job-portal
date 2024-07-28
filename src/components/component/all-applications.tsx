"use client";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

export function AllApplications() {
  const [applications, setApplications] = useState<any[]>([]);
  const getApplications = async () => {
    const res = await axios.get("http://localhost:8080/api/applications", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(res.data.applications);

    setApplications(res.data.applications);
  };
  useEffect(() => {
    getApplications();
  }, []);
  return (
    <section className="w-full bg-background md:ml-64 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Job Applications
          </h2>
        </div>
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Application ID</TableHead>
                <TableHead>Application Date</TableHead>
                <TableHead className="text-right pr-8 md:pr-14">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">
                    {application.id}
                  </TableCell>
                  <TableCell>
                    {formatDistanceToNow(new Date(application.createdAt))}
                  </TableCell>
                  <TableCell className="text-right">
                    <Link
                      href={`/details/${application.id}`}
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Details
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
