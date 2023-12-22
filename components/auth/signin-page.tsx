"use client";

import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const SignIn = () => {
  const onClick = () => {
    signIn("google");
  };

  return (
    <div className="p-4 bg-muted rounded-xl">
      <Button onClick={onClick}>
        <FcGoogle classNam="h-4 w-4 mr-2" />
        Sign in with Google
      </Button>
    </div>
  );
};
