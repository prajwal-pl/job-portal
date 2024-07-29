/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/EoHxAhAMjcX
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Chivo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function AccountSettings() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-muted-foreground">john@example.com</div>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Role:</div>
          <div className="text-sm font-medium">User</div>
        </div>
        <Button variant="destructive" className="w-full" onClick={() => {}}>
          Logout
        </Button>
      </CardContent>
    </Card>
  )
}
