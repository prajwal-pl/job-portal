"use client";
import { fetchUser } from "@/lib/utils";
import clsx from "clsx";
import {
  BriefcaseIcon,
  DollarSignIcon,
  MailIcon,
  Plus,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const [user, setUser] = useState<any>();
  const getUser = async () => {
    const res = await fetchUser();
    if (res && res.role) {
      setUser(res.role);
    } else {
      console.log("User role is undefined");
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="bg-muted/40 border-b p-4 md:w-64 md:border-r md:p-6 md:fixed md:inset-0 md:h-full md:overflow-auto">
      <nav className="flex flex-col gap-4">
        <Link
          href="/browse"
          className={clsx(
            "flex items-center gap-2 text-muted-foreground hover:text-foreground",
            {
              "text-primary": pathname === "/browse",
            }
          )}
          prefetch={false}
        >
          <BriefcaseIcon className="h-5 w-5" />
          <span>Jobs</span>
        </Link>
        {user === "ADMIN" || user === "COMPANY" ? (
          <Link
            href="/new"
            className={clsx(
              "flex items-center gap-2 text-muted-foreground hover:text-foreground",
              {
                "text-primary": pathname === "/new",
              }
            )}
            prefetch={false}
          >
            <Plus className="h-5 w-5" />
            <span>New Job</span>
          </Link>
        ) : null}

        <Link
          href="/application"
          className={clsx(
            "flex items-center gap-2 text-muted-foreground hover:text-foreground",
            {
              "text-primary": pathname === "/application",
            }
          )}
          prefetch={false}
        >
          <BriefcaseIcon className="h-5 w-5" />
          <span>Applications</span>
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <DollarSignIcon className="h-5 w-5" />
          <span>Login</span>
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
  );
};

export default Navbar;
