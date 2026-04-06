import { Target, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  onMenuClick?: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="h-14 border-b border-gray-200 bg-white flex items-center px-4 gap-3 flex-shrink-0">
      {/* Mobile hamburger */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"
      >
        <Menu size={18} />
      </button>

      <Link to="/" className="flex items-center gap-2 text-gray-900 hover:opacity-80 transition-opacity">
        <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center">
          <Target size={14} className="text-white" />
        </div>
        <span className="font-semibold text-sm tracking-tight">Pitch Mechanics</span>
      </Link>

      <div className="flex-1" />

      <div className="flex items-center gap-1.5 text-xs text-gray-400">
        <span className="hidden sm:inline">Biomechanics Reference</span>
      </div>
    </header>
  );
}
