import { auth } from "@/auth";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
import { redirect } from "next/navigation";

const DashboardLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await auth();

  if (!session || !session.user) redirect("/signin");

  return (
    <main className="flex">
      <Sidebar />
      <div className="w-full md:w-[calc(100%-var(--sidebar-width))]">
        <Navbar />
        <div className="p-5">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
