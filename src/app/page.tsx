"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignUp from "@/components/SignUp";
import Onboarding from "@/components/Onboarding";
import CreateProject from "@/components/CreateProject";

export default function Home() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);
  const router = useRouter();
  return (
    <div>{!token ? <Onboarding setToken={setToken} /> : <CreateProject />}</div>
  );
}
