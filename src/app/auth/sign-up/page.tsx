import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SignUpForm } from "./_components/sign-up-form";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create a new Dinaro account and start playing!",
};

export default function SignUpPage() {
  return (
    <>
      <div className="h-full container relative flex-col items-center justify-center grid">
        <div className="absolute right-8 top-8 flex items-center gap-2">
          <Link
            href="/auth/login"
            className={cn(buttonVariants({ variant: "ghost" }))}>
            Login
          </Link>
          <ModeToggle />
        </div>
        <div>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and a password below to create your account
              </p>
            </div>
            <SignUpForm />
            {/* <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
