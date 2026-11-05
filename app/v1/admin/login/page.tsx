import type { Metadata } from "next";
import { Suspense } from "react";

import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  // AdminLoginForm reads useSearchParams(), which must sit inside a Suspense boundary for static rendering.
  return (
    <Suspense>
      <AdminLoginForm />
    </Suspense>
  );
}
