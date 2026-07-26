import {
  BookOpen,
  Clock3,
  Medal,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type DashboardStat = {
  id: number;
  title: string;
  value: string;
  icon: LucideIcon;
  colorClass: string;
};

const dashboardStats: DashboardStat[] = [
  {
    id: 1,
    title: "Enrolled Courses",
    value: "4",
    icon: BookOpen,
    colorClass: "dashboard-stat-card__icon--blue",
  },
  {
    id: 2,
    title: "Hours Learned",
    value: "26",
    icon: Clock3,
    colorClass: "dashboard-stat-card__icon--purple",
  },
  {
    id: 3,
    title: "Completed",
    value: "2",
    icon: Medal,
    colorClass: "dashboard-stat-card__icon--green",
  },
  {
    id: 4,
    title: "Average Score",
    value: "92%",
    icon: TrendingUp,
    colorClass: "dashboard-stat-card__icon--orange",
  },
];

function DashboardStats() {
  return (
    <div className="dashboard-stats">
      {dashboardStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article className="dashboard-stat-card" key={stat.id}>
            <div className="dashboard-stat-card__content">
              <span>{stat.title}</span>
              <strong>{stat.value}</strong>
            </div>

            <span className={`dashboard-stat-card__icon ${stat.colorClass}`}>
              <Icon size={26} strokeWidth={2} />
            </span>
          </article>
        );
      })}
    </div>
  );
}

export default DashboardStats;
