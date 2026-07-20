"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/dashboard");
  };
  return (
    
    <main className="min-h-screen bg-[#FFDDB0] flex items-center justify-center px-36 py-8">
      <div className="flex w-full max-w-7xl min-h-[550px] overflow-hidden rounded-3xl bg-white shadow-xl">

        <section className="flex w-1/2 items-center justify-center bg-[#FFFCE1]">
        <div className="flex h-full w-full max-w-md flex-col justify-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#181818] px-25 pt-8">
            Welcome Back
          </h2> 
          <p className="mt-3 text-[16px] font-semibold leading-7 text-[#303030] px-23 ">
            Login to your Second account    
          </p>
        </div>

        <form onSubmit = { handleSubmit }className="mt-9 space-y-4.5">
            <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#181818] ">
                    Email
                </label>

                <input id="email" type="email" value = {email} onChange ={(e)=>setEmail(e.target.value)}placeholder="xyz@example.com" className="w-full rounded-xl border border-[#D8D1C7] bg-white px-2 py-2 outline-none transition-all duration-200 focus:border-[#181818]"/>
            </div>

            <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#181818]">
                Password
                </label>

                <input id="password" type="password" value = {password} onChange ={(e)=>setPassword(e.target.value)}placeholder="••••••••"className="w-full rounded-xl border border-[#D8D1C7] bg-white px-2 py-2 outline-none transition-all duration-200 focus:border-[#181818]"/>
            </div>

            <div className="mt-8">
                <button type="submit" className="w-full rounded-xl bg-[#1B1B1B] py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#2D2D2D] active:scale-[0.98]">
                  Login 
                </button>
            </div>
        </form>
        <p className="mt-4 px-23 text-[16px] leading-7 text-[#303030]">
          Dont have an account?{" "}
          <Link href="/signup" className="font-semibold text-[#1B1B1B] underline">
            Sign up
          </Link>
        </p>
        </div>
        </section>

        <section className="w-1/2">
        <video
          className="h-full w-full object-cover" autoPlay loop muted playsInline>
        <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
        </section>

      </div>
    </main>
  );
}