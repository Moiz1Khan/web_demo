import {
  TrendingUp,
  Users,
  FileText,
  DollarSign,
} from "lucide-react";

const stats = [
  { label: "Total Leads", value: "—", icon: Users },
  { label: "Applications", value: "—", icon: FileText },
  { label: "Approvals", value: "—", icon: TrendingUp },
  { label: "Revenue", value: "—", icon: DollarSign },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
        <p className="text-muted-foreground">
          Here&apos;s an overview of your dashboard. Add your content and features as needed.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
                <Icon className="size-5 text-muted-foreground" />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Content placeholder */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <p className="text-sm text-muted-foreground">
            No recent activity. This section will display leads, applications,
            or other events when connected to your data.
          </p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <p className="text-sm text-muted-foreground">
            Add buttons or shortcuts here for common admin tasks.
          </p>
        </div>
      </div>
    </div>
  );
}
