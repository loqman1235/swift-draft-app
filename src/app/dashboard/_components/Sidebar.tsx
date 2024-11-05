import Brand from "@/components/Brand";
import DashboardLinks from "./DashboardLinks";

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-screen w-[--sidebar-width] bg-foreground">
      <header className="flex h-[var(--navbar-height)] items-center px-5">
        <Brand />
      </header>

      <DashboardLinks />
    </div>
  );
};

export default Sidebar;
