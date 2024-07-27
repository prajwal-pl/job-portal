import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-10">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <BriefcaseIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Job Portal</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Employers
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Candidates
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
          {/* <Button variant="secondary">Sign In</Button> */}
          <Button variant="secondary">Sign Up</Button>
        </nav>
      </header>
      <main className="flex-1 mt-[50px]">
        <section className="bg-primary py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
                  Find Your Dream Job
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Search through thousands of job listings and find the perfect
                  fit for your skills and experience.
                </p>
                <div className="flex flex-col gap-2  sm:flex-row">
                  <Link href="/browse" className="hover:underline">
                    <Button variant={"secondary"}>Browse Jobs</Button>
                  </Link>
                  <Button variant={"default"}>Learn More</Button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/placeholder.svg"
                  width="500"
                  height="500"
                  alt="Job Search"
                  className="max-w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg"
                  width="500"
                  height="500"
                  alt="AI Job Uploads"
                  className="max-w-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  AI-Powered Job Uploads
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Streamline your hiring process with our AI-powered tools.
                  Automatically generate job descriptions, screen applicants,
                  and manage the entire hiring workflow.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button>Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Candidate Shortlisting
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Conduct voice and video interviews with candidates and
                  shortlist them based on their performance. Our platform makes
                  it easy to manage the entire hiring process.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button>Schedule Interview</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg"
                  width="500"
                  height="500"
                  alt="Candidate Shortlisting"
                  className="max-w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg"
                  width="500"
                  height="500"
                  alt="Job Management"
                  className="max-w-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Comprehensive Job Management
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Manage your job postings, track applicants, and make informed
                  hiring decisions with our powerful job management tools.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button>Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">&copy; 2024 Job Portal</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
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
