import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchUser = async () => {
  const res = await axios.get(
    `http://localhost:8080/api/auth/${localStorage.getItem("id")}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (res.status === 401) {
    redirect("/login");
  }
  return res.data.user;
};
