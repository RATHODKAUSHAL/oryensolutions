"use client";

import { useEffect, useMemo, useState } from "react";

import { adminFetch } from "@/components/admin/admin-api";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Lead = {
  id: string;
  fullName: string;
  companyName: string | null;
  email: string;
  subject: string | null;
  status: string;
  createdAt: string;
};

type SummaryResponse = {
  total: number;
  recentLeads: Lead[];
  statusCounts: Record<string, number>;
};

export function AdminDashboardClient() {
  const [summary, setSummary] = useState<SummaryResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    adminFetch<SummaryResponse>("/api/admin/leads/summary")
      .then(setSummary)
      .catch((fetchError: Error) => setError(fetchError.message));
  }, []);

  const stats = useMemo(() => {
    const total = summary?.total ?? 0;
    const newCount = summary?.statusCounts.New ?? 0;
    const contacted = summary?.statusCounts.Contacted ?? 0;
    const converted = summary?.statusCounts.Won ?? 0;

    return [
      { label: "Total Leads", value: total, change: "All submitted inquiries" },
      { label: "New Requests", value: newCount, change: "Waiting for first follow-up" },
      { label: "In Progress", value: contacted, change: "Already contacted" },
      { label: "Converted", value: converted, change: "Marked as won" },
    ];
  }, [summary]);

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-[#0077b6]">Dashboard</p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-950">Admin Overview</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Track incoming leads, active follow-ups, and service interest from one clean workspace.
            </p>
          </div>
          <Badge className="w-fit bg-emerald-100 text-emerald-800">Authenticated API</Badge>
        </div>
      </section>

      {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Card key={item.label} className="rounded-lg border-slate-200 shadow-sm">
            <CardHeader className="p-5 pb-3">
              <CardTitle className="text-sm font-medium text-slate-500">{item.label}</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
              <p className="mt-2 text-sm text-slate-500">{item.change}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="rounded-lg border-slate-200 shadow-sm">
          <CardHeader className="p-5">
            <CardTitle className="text-lg">Recent Leads</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="border-y border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Name</th>
                    <th className="px-5 py-3 font-semibold">Company</th>
                    <th className="px-5 py-3 font-semibold">Subject</th>
                    <th className="px-5 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {(summary?.recentLeads ?? []).map((lead) => (
                    <tr key={lead.id}>
                      <td className="px-5 py-4 font-medium text-slate-950">{lead.fullName}</td>
                      <td className="px-5 py-4 text-slate-600">{lead.companyName || "-"}</td>
                      <td className="px-5 py-4 text-slate-600">{lead.subject || "-"}</td>
                      <td className="px-5 py-4">
                        <Badge className="bg-slate-100 text-slate-700">{lead.status}</Badge>
                      </td>
                    </tr>
                  ))}
                  {summary?.recentLeads.length === 0 && (
                    <tr>
                      <td className="px-5 py-8 text-center text-slate-500" colSpan={4}>
                        No leads submitted yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-lg border-slate-200 shadow-sm">
          <CardHeader className="p-5">
            <CardTitle className="text-lg">Lead Pipeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-5 pt-0">
            {["New", "Contacted", "Proposal", "Won"].map((label) => {
              const value = summary?.statusCounts[label] ?? 0;
              const width = summary?.total ? Math.max(8, Math.round((value / summary.total) * 100)) : 8;

              return (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{label}</span>
                    <span className="text-slate-500">{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-[#0077b6]" style={{ width: `${width}%` }} />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
