import { auth } from "@/auth";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { EmailProvider } from "./_context/EmailProvider";

const DashboardLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await auth();

  if (!session || !session.user) redirect("/signin");

  if (!session.user.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  return (
    <EmailProvider userId={session.user.id}>
      <main className="flex">
        <Sidebar />
        <div className="w-full md:w-[calc(100%-var(--sidebar-width))]">
          <Navbar />
          <div className="p-5">{children}</div>
        </div>
        <Toaster duration={2000} />
      </main>
    </EmailProvider>
  );
};

export default DashboardLayout;
