import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SignInButton = () => {
  return (
    <Button variant="primary" size="sm">
      <Link href="/sign-in">Login</Link>
    </Button>
  );
};
