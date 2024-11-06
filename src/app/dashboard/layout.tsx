import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
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
