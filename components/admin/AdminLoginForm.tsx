"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);

    const data = (await response.json()) as { access_token?: string; error?: string };

    if (!response.ok || !data.access_token) {
      setError(data.error ?? "Unable to generate access_token.");
      return;
    }

    window.localStorage.setItem("admin_access_token", data.access_token);
    const nextPath = searchParams.get("next") || "/v1/admin";
    router.replace(nextPath);
    router.refresh();
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-slate-100 px-4 py-10">
      <section className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0077b6] text-base font-bold text-white">
            OS
          </span>
          <p className="mt-5 text-sm font-medium text-[#0077b6]">Admin Login</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-950">Sign in to admin panel</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Login with your seeded admin user to generate an access token for protected data.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email Address"
            required
            className="h-11 rounded-lg"
          />
          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
            className="h-11 rounded-lg"
          />
          <Button type="submit" disabled={loading} className="h-11 w-full rounded-lg">
            {loading ? "Signing in..." : "Login"}
          </Button>
          {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
        </form>
      </section>
    </main>
  );
}
