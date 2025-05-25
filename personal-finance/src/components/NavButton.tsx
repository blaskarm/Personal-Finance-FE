import type { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  isExpanded: boolean;
  onNavClick: () => void;
}

const NavButton = ({ icon, label, isExpanded, onNavClick }: NavItemProps) => {
  return (
    <button
      className="flex items-center w-full p-2 hover:bg-emerald-700 rounded cursor-pointer transition-colors"
      onClick={onNavClick}
    >
      <div className="w-6 h-6 flex-shrink-0 flex items center justify-center mr-3">
        {icon}
      </div>
      {isExpanded && <span className="ml-2 whitespace-nowrap">{label}</span>}
    </button>
  );
};

export default NavButton;
