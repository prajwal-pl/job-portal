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
import { useState } from "react";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Register() {
  const { toast } = useToast();
  const router = useRouter();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    const res = await axios.post("http://localhost:8080/api/auth/register", {
      name: input.name,
      email: input.email,
      password: input.password,
    });
    if (res.status === 201) {
      toast({
        title: "Registered successfully",
        description: "You can now login",
      });
      router.push("/login");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md p-6 space-y-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Register</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter a password"
                required
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
            <p>
              Already have an account?{" "}
              <Link className="text-blue-500" href="/login">
                Login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
