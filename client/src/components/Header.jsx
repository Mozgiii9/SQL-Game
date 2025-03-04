// src/components/Header.jsx
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="fixed top-0 w-full bg-primary-bg shadow-sm z-10 flex justify-between items-center px-6 py-3">
      <Link to="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl text-text-primary">SQL Quest</span>
      </Link>

      <nav className="flex space-x-4">
        {/* <Link
          to="/quests"
          className="text-text-primary hover:text-accent transition-colors"
        >
        </Link> */}
      </nav>

      <div className="ml-4">
        <Link
          to="/profile"
          className="relative w-8 h-8 rounded-full flex items-center justify-center text-accent hover:bg-accent-hover hover:text-black transition-colors"
        >
          <UserIcon className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
