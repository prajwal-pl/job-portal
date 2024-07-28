/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Nb3pxY7D0KH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ApplyNow({ job, user }: { job: any; user: any }) {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Software Engineer
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
          <form className="space-y-4">
            <div>
              <Label
                htmlFor="cv"
                className="block text-sm font-medium text-foreground"
              >
                Upload CV
              </Label>
              <div className="mt-1">
                <Input
                  id="cv"
                  type="file"
                  className="block w-full rounded-md border-input bg-background text-foreground shadow-sm focus:border-primary focus:ring-primary"
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
                <Input
                  id="resume"
                  type="file"
                  className="block w-full rounded-md border-input bg-background text-foreground shadow-sm focus:border-primary focus:ring-primary"
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
