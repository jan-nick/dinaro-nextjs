"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useDb } from "@/providers/db-provider";

export default function LogoutButton() {
  const { logout } = useDb();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };
  return (
    <Button onClick={handleLogout} variant="outline">
      Logout
    </Button>
  );
}
