import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="flex-grow">{children}</div>
    </main>
  );
};

export default DashboardLayout;
