import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="flex-grow">
        <Navbar />
        <div className="p-5">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
