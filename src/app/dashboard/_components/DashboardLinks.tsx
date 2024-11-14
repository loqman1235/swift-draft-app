"use client";

import {
  CircleDollarSignIcon,
  LogOutIcon,
  MailIcon,
  SettingsIcon,
  SquareActivityIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dashboardRoutes = [
  { icon: MailIcon, text: "Write Email with AI", href: "/dashboard" },
  { icon: SquareActivityIcon, text: "Activity", href: "/activity" },
  {
    icon: CircleDollarSignIcon,
    text: "Subscription & Billing",
    href: "/subscription",
  },
  { icon: SettingsIcon, text: "Settings", href: "/settings" },
] as const;

const DashboardLinks = () => {
  const pathname = usePathname();
  const activeClass = "!bg-primary/10 !text-primary";

  return (
    <ul className="flex h-[calc(100vh-var(--navbar-height))] flex-col gap-1 px-2.5 py-5">
      {dashboardRoutes.map((route) => (
        <li key={route.href}>
          <Link
            className={`flex items-center gap-5 rounded-lg px-3 py-4 text-text-muted transition hover:bg-primary/10 hover:text-primary ${pathname === route.href && activeClass}`}
            href={route.href}
          >
            <span>{<route.icon className="size-5" />}</span>
            <span className="font-semibold">{route.text}</span>
          </Link>
        </li>
      ))}

      <li className="mt-auto">
        <button className="flex w-full items-center gap-5 rounded-lg px-3 py-4 text-text-muted transition hover:bg-primary/10 hover:text-primary">
          <span>{<LogOutIcon className="size-5" />}</span>
          <span className="font-semibold">Logout</span>
        </button>
      </li>
    </ul>
  );
};

export default DashboardLinks;
