import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { revalidatePath } from "next/cache";
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

export const deleteJob = async (id: string) => {
  try {
    console.log(id);
    const res = await axios.delete(
      `http://localhost:8080/api/jobs/delete/${id}`,
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
      // toast({
      //   title: "Job deleted successfully",
      //   description: "You have been deleted successfully",
      // });
    }
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
