import { useState } from "react";
import NavButton from "./NavButton";
import {
  Menu,
  Home,
  Settings,
  ChartNoAxesCombined,
  ChartPie,
  CirclePlus,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const [isExpanded, isSetExpanded] = useState(true);

  const toggleSidebar = () => {
    isSetExpanded(!isExpanded);
  };

  const handleLogout = () => {
    console.log("logging out...");
  };

  return (
    <div
      className={`h-screen bg-emerald-600 text-white flex transition-all duration-300 ${
        isExpanded ? "w-64" : "w-14"
      }`}
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center p-4">
          <h1
            className={`text-xl font-bold transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
            }`}
          >
            Menu
          </h1>
          <button
            onClick={toggleSidebar}
            className={`cursor-pointer transform transition-tranform duration-300 ${
              isExpanded ? "rotate-90" : "rotate-0"
            }`}
          >
            {<Menu size={24} />}
          </button>
        </div>

        <nav className="flex flex-col p-2 space-y-3 flex-grow">
          <NavButton
            icon={<Home />}
            label="Home"
            isExpanded={isExpanded}
            onNavClick={handleLogout}
          />
          <NavButton
            icon={<ChartPie />}
            label="Dashboard"
            isExpanded={isExpanded}
            onNavClick={handleLogout}
          />
          <NavButton
            icon={<ChartNoAxesCombined />}
            label="Savings"
            isExpanded={isExpanded}
            onNavClick={handleLogout}
          />
          <NavButton
            icon={<CirclePlus />}
            label="New Budget"
            isExpanded={isExpanded}
            onNavClick={handleLogout}
          />
          <NavButton
            icon={<Settings />}
            label="Settings"
            isExpanded={isExpanded}
            onNavClick={handleLogout}
          />
        </nav>

        <div className="flex flex-col p-2">
          <NavButton
            icon={<LogOut />}
            label="Logout"
            isExpanded={isExpanded}
            onNavClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
