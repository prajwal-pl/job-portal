"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchUser } from "@/lib/utils";
import clsx from "clsx";
import { Briefcase, Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AccountSettings } from "./account-settings";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import axios from "axios";
import { useToast } from "../ui/use-toast";

export function Sidebar() {
  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<any>();
  const getUser = async () => {
    const res = await fetchUser();
    if (res && res.role) {
      setUser(res);
    } else {
      console.log("User role is undefined");
    }
  };

  const handleClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/logout",
        {},
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
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        toast({
          title: "Logged out successfully",
          description: "You have been logged out successfully",
          variant: "destructive",
        });
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="flex h-screen w-full md:w-52 bg-background">
      <nav className="hidden h-full border-r md:flex flex-col items-start gap-4 px-4 py-12">
        <Link
          href="/"
          className={clsx(
            "flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground",
            {
              "text-primary": pathname === "/",
            }
          )}
          // prefetch={false}
        >
          <HomeIcon className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/browse"
          className={clsx(
            "flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground",
            {
              "text-primary": pathname === "/browse",
            }
          )}
          prefetch={false}
        >
          <SearchIcon className="w-5 h-5" />
          <span>Jobs</span>
        </Link>
        {user?.role === "ADMIN" || user?.role === "COMPANY" ? (
          <>
            <Link
              href="/new"
              className={clsx(
                "flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground",
                {
                  "text-primary": pathname === "/new",
                }
              )}
              prefetch={false}
            >
              <Plus className="w-5 h-5" />
              <span>Add Job</span>
            </Link>
            <Link
              href="/application"
              className={clsx(
                "flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground",
                {
                  "text-primary": pathname === "/application",
                }
              )}
              prefetch={false}
            >
              <Briefcase className="w-5 h-5" />
              <span>Applications</span>
            </Link>
          </>
        ) : null}

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={"ghost"}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <SettingsIcon className="w-5 h-5" />
              <span>Account</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[250px]">
            <DialogHeader>
              <DialogTitle>Account</DialogTitle>
            </DialogHeader>
            <DialogContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-medium">{user?.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {user?.email}
                  </div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Role:</div>
                <div className="text-sm font-medium">{user?.role}</div>
              </div>
              <Button
                variant="destructive"
                className="w-full"
                onClick={handleClick}
              >
                Logout
              </Button>
            </DialogContent>
          </DialogContent>
        </Dialog>

        {/* <Link
          href="/account"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <SettingsIcon className="w-5 h-5" />
          <span>Account</span>
        </Link> */}
      </nav>
      <div className="flex h-full w-full mt-4 mb-16 flex-col md:hidden">
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background px-4">
          <Link href="/" className="flex items-center gap-3" prefetch={false}>
            <HomeIcon className="w-6 h-6" />
            <span className="sr-only">Home</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MenuIcon className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link
                  href="/browse"
                  className={clsx("flex items-center gap-3", {
                    "text-primary": pathname === "/browse",
                  })}
                  prefetch={false}
                >
                  <SearchIcon className="w-5 h-5" />
                  <span>Jobs</span>
                </Link>
              </DropdownMenuItem>
              {user?.role === "ADMIN" || user?.role === "COMPANY" ? (
                <>
                  <DropdownMenuItem>
                    <Link
                      href="/new"
                      className={clsx("flex items-center gap-3", {
                        "text-primary": pathname === "/new",
                      })}
                      prefetch={false}
                    >
                      <Plus className="w-5 h-5" />
                      <span>Add Job</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/application"
                      className={clsx("flex items-center gap-3", {
                        "text-primary": pathname === "/application",
                      })}
                      prefetch={false}
                    >
                      <Briefcase className="w-5 h-5" />
                      <span>Applications</span>
                    </Link>
                  </DropdownMenuItem>
                </>
              ) : null}
              <DropdownMenuItem>
                <Link
                  href="#"
                  className={clsx("flex items-center gap-3", {
                    "text-primary": pathname === "/account",
                  })}
                  prefetch={false}
                >
                  <SettingsIcon className="w-5 h-5" />
                  <span>Account</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {/* <main className="flex-1 overflow-auto" /> */}
      </div>
    </div>
  );
}

function CalendarIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InboxIcon(props: any) {
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
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
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
