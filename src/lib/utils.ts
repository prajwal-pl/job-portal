import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchUser = async () => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/auth/${localStorage.getItem("id")}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (axios.isAxiosError(res)) {
      console.log(res?.response?.data?.message);
      return redirect("/login");
    }
    if (!res.data.user) {
      redirect("/login");
    }
    if (res.status === 401) {
      redirect("/login");
    }
    return res.data.user;
  } catch (err) {
    console.log(err);
  }
};
