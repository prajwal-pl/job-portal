"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export function Login() {
  const { toast } = useToast();
  const router = useRouter();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log(input);
      const res = await axios.post(
        "https://job-portal-backend-u1w8.onrender.com/api/auth/login",
        {
          email: input.email,
          password: input.password,
        }
      );
      const data = res.data;
      localStorage.setItem("token", data.token);
      localStorage.setItem("id", JSON.stringify(data.user.id));
      if (res.status === 200) {
        toast({
          title: "Logged in successfully",
          description: "You can now access your account",
        });
        router.push("/browse");
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Invalid email or password",
      });
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md p-6 space-y-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <p>
              {"Don't"} have an account?{" "}
              <Link className="text-blue-500" href="/register">
                Register
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
