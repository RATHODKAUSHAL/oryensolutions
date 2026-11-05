import { prisma } from "@/lib/prisma";

export type CreateLeadInput = {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

export async function createLead(input: CreateLeadInput) {
  return prisma.lead.create({
    data: {
      fullName: input.fullName.trim(),
      companyName: input.companyName?.trim() || null,
      email: input.email.trim(),
      phone: input.phone?.trim() || null,
      subject: input.subject?.trim() || null,
      message: input.message.trim(),
      status: "New",
    },
  });
}

export async function listLeads() {
  return prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getLeadDashboardSummary() {
  const [total, recentLeads, groupedStatuses] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    }),
    prisma.lead.groupBy({
      by: ["status"],
      _count: {
        status: true,
      },
    }),
  ]);

  const statusCounts = groupedStatuses.reduce<Record<string, number>>((acc, item) => {
    acc[item.status] = item._count.status;
    return acc;
  }, {});

  return {
    total,
    recentLeads,
    statusCounts,
  };
}
