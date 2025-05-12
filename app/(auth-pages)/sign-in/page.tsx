// import React from "react";
// import { signInAction } from "@/app/actions";
// import { FormMessage, Message } from "@/components/form-message";
// import { SubmitButton } from "@/components/submit-button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Link from "next/link";

// export default async function Login(props: { searchParams: Promise<Message> }) {
//   const searchParams = await props.searchParams;
//   return (
//     <form className="flex-1 flex flex-col min-w-64">
//       <h1 className="text-2xl font-medium">Sign in</h1>
//       <p className="text-sm text-foreground">
//         {"Don't have an account?"}
//         <Link className="text-foreground font-medium underline" href="/sign-up">
//           Sign up
//         </Link>
//       </p>
//       <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
//         <Label htmlFor="email">Email</Label>
//         <Input name="email" placeholder="you@example.com" required />
//         <div className="flex justify-between items-center">
//           <Label htmlFor="password">Password</Label>
//           <Link
//             className="text-xs text-foreground underline"
//             href="/forgot-password"
//           >
//             Forgot Password?
//           </Link>
//         </div>
//         <Input
//           type="password"
//           name="password"
//           placeholder="Your password"
//           required
//         />
//         <SubmitButton pendingText="Signing In..." formAction={signInAction}>
//           Sign in
//         </SubmitButton>
//         <FormMessage message={searchParams} />
//       </div>
//     </form>
//   );
// }

"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineWavingHand } from "react-icons/md";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative w-full h-screen font-montserrat overflow-hidden">
      {/* Background Image */}
      <Image
        src="/login.png"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Right Form Panel */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 z-10 bg-[#f5f5ffcc] backdrop-blur-sm px-6 py-10 sm:px-12 flex flex-col justify-between">
        <div className="w-full max-w-[570px] mx-auto">
          {/* Welcome Message */}
          <div className="flex items-center space-x-2 mb-6">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-extraboldtext-[#021488]">
              Welcome <span className="text-black">Back</span>
            </h2>
            <MdOutlineWavingHand className="text-[#021488] w-8 h-8" />
          </div>

          {/* Quote */}
          <p className="text-base sm:text-md font-medium text-black leading-[1.6] tracking-wide mb-10">
            The courage to begin is the same courage it takes to succeed. This
            is the courage that usually separates dreamers from achievers.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-base font-normal mb-1">Name:</label>
              <input
                type="text"
                className="w-full px-6 py-4 rounded-[40px] bg-[#EEEEFFB2] border border-[#021488] outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-base font-normal mb-1">
                E-mail address:
              </label>
              <input
                type="email"
                className="w-full px-6 py-4 rounded-[40px] bg-[#EEEEFFB2] border border-[#021488] outline-none"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-base font-normal mb-1">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-6 py-4 rounded-[40px] bg-[#EEEEFFB2] border border-[#021488] outline-none pr-12"
              />
              <span
                className="absolute top-[52px] right-6 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOutline className="w-5 h-5" />
                ) : (
                  <IoEyeOffOutline className="w-5 h-5" />
                )}
              </span>
              <a
                href="/forgot-password"
                className="absolute top-0 right-0 text-[#021488] text-sm font-semibold"
              >
                Forgot your password?
              </a>
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-full text-white text-[20px] font-bold bg-[#021488] border border-[#000000cc] shadow-md"
            >
              Log In
            </button>

            {/* Remember Me */}
            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-[#021488]" />
              <label>Remember me</label>
            </div>

            {/* Sign Up */}
            <p className="text-center text-base font-semibold">
              Don’t have an account?{" "}
              <a href="/sign-up" className="text-[#021488] underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm font-semibold text-black/60 mt-10">
          © 2025 Leximpact. All rights reserved.
        </p>
      </div>

      {/* Logo & Tagline on Left Side */}
      <div className="hidden lg:absolute top-[35%] left-6 sm:left-12 z-10 text-white lg:block">
        <div className="flex items-center space-x-4">
          <Image src="/white-favicon.png" alt="Logo" width={70} height={70} />
          <h1 className="text-4xl sm:text-5xl font-extrabold">Leximpact</h1>
        </div>
        <p className="mt-6 text-2xl sm:text-3xl font-semibold max-w-sm">
          Redefining Education & Innovation
        </p>
      </div>
    </main>
  );
}
