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
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

export function ExploreJobs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="bg-muted/40 border-b p-4 md:w-64 md:border-r md:p-6 md:fixed md:inset-0 md:h-full md:overflow-auto">
        <nav className="flex flex-col gap-4">
          <Link
            href="#"
            className="flex items-center gap-2 text-primary"
            prefetch={false}
          >
            <BriefcaseIcon className="h-5 w-5" />
            <span className="font-semibold">Jobs</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <UsersIcon className="h-5 w-5" />
            <span>Candidates</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <BriefcaseIcon className="h-5 w-5" />
            <span>Employers</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <DollarSignIcon className="h-5 w-5" />
            <span>Pricing</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <MailIcon className="h-5 w-5" />
            <span>Contact</span>
          </Link>
        </nav>
      </div>
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
            <Card>
              <CardHeader>
                <CardTitle>Software Engineer</CardTitle>
                <CardDescription>Acme Inc.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We are looking for an experienced software engineer to join
                  our team. You will be responsible for developing and
                  maintaining our web application.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-sm text-muted-foreground">
                    Posted 2 days ago
                  </span>
                  <div className="flex items-center gap-2 w-full">
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Marketing Manager</CardTitle>
                <CardDescription>Globex Corporation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We are seeking a talented marketing manager to lead our
                  digital marketing efforts. You will be responsible for
                  developing and executing our marketing strategy.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Posted 1 week ago
                  </span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="ml-auto">
                      Apply
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Product Designer</CardTitle>
                <CardDescription>Stark Industries</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We are looking for a creative and experienced product designer
                  to join our team. You will be responsible for designing the
                  user interface and user experience of our products.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Posted 3 days ago
                  </span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="ml-auto">
                      Apply
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data Analyst</CardTitle>
                <CardDescription>Stark Industries</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We are seeking a data analyst to join our team. You will be
                  responsible for analyzing and interpreting data to help drive
                  business decisions.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Posted 1 month ago
                  </span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="ml-auto">
                      Apply
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sales Representative</CardTitle>
                <CardDescription>Globex Corporation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We are looking for an experienced sales representative to join
                  our team. You will be responsible for generating new leads and
                  closing sales.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Posted 2 weeks ago
                  </span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="ml-auto">
                      Apply
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Content Writer</CardTitle>
                <CardDescription>Acme Inc.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We are seeking a talented content writer to join our team. You
                  will be responsible for creating engaging and informative
                  content for our website and social media channels.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Posted 5 days ago
                  </span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="ml-auto">
                      Apply
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </main>
        <div className="flex justify-center mt-6 mb-8">
          <Pagination>
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
          </Pagination>
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