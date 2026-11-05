"use client";

import { useEffect, useMemo, useState } from "react";

import { adminFetch } from "@/components/admin/admin-api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Lead = {
  id: string;
  fullName: string;
  companyName: string | null;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  status: string;
  createdAt: string;
};

const statusClassName: Record<string, string> = {
  New: "bg-sky-100 text-sky-800",
  Contacted: "bg-amber-100 text-amber-800",
  Proposal: "bg-violet-100 text-violet-800",
  Won: "bg-emerald-100 text-emerald-800",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function AdminLeadsClient() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    adminFetch<{ leads: Lead[] }>("/api/admin/leads")
      .then((data) => setLeads(data.leads))
      .catch((fetchError: Error) => setError(fetchError.message));
  }, []);

  const filteredLeads = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return leads;

    return leads.filter((lead) =>
      [lead.fullName, lead.companyName, lead.email, lead.phone, lead.subject, lead.message]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(normalizedQuery)),
    );
  }, [leads, query]);

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between md:p-6">
        <div>
          <p className="text-sm font-medium text-[#0077b6]">Leads</p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-950">Lead Management</h2>
          <p className="mt-2 text-sm text-slate-600">Review contact enquiries submitted from the website.</p>
        </div>
        <Button className="w-full rounded-lg md:w-auto">Add Lead</Button>
      </section>

      {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      <Card className="rounded-lg border-slate-200 shadow-sm">
        <CardHeader className="flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
          <CardTitle className="text-lg">All Leads</CardTitle>
          <div className="w-full md:w-80">
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search leads..."
              className="h-10 rounded-lg"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1080px] text-left text-sm">
              <thead className="border-y border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Full Name</th>
                  <th className="px-5 py-3 font-semibold">Company</th>
                  <th className="px-5 py-3 font-semibold">Email Address</th>
                  <th className="px-5 py-3 font-semibold">Phone Number</th>
                  <th className="px-5 py-3 font-semibold">Subject</th>
                  <th className="px-5 py-3 font-semibold">Project Details</th>
                  <th className="px-5 py-3 font-semibold">Date</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/80">
                    <td className="px-5 py-4 font-medium text-slate-950">{lead.fullName}</td>
                    <td className="px-5 py-4 text-slate-600">{lead.companyName || "-"}</td>
                    <td className="px-5 py-4 text-slate-600">{lead.email}</td>
                    <td className="px-5 py-4 text-slate-600">{lead.phone || "-"}</td>
                    <td className="px-5 py-4 text-slate-600">{lead.subject || "-"}</td>
                    <td className="max-w-80 px-5 py-4 text-slate-600">
                      <span className="line-clamp-2">{lead.message}</span>
                    </td>
                    <td className="px-5 py-4 text-slate-600">{formatDate(lead.createdAt)}</td>
                    <td className="px-5 py-4">
                      <Badge className={statusClassName[lead.status] ?? "bg-slate-100 text-slate-700"}>
                        {lead.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
                {filteredLeads.length === 0 && (
                  <tr>
                    <td className="px-5 py-8 text-center text-slate-500" colSpan={8}>
                      No leads found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
