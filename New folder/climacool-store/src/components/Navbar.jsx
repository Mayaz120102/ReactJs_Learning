import { useContext, useState } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Footwears", path: "/footwears" },
  ];

  const isActive = (path) => location.pathname === path;

  const { logout, authUser } = useContext(AuthContext);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 font-black text-white transition group-hover:bg-red-700">
            C
          </div>

          <div>
            <p className="text-xl font-black tracking-tight">Climacool</p>
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-gray-500">
              Footwear
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative py-2 text-sm font-medium transition ${
                  isActive(link.path)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}

                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-red-600" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {authUser ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link
              to="/login"
              className="rounded-xl border border-gray-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-gray-500 hover:bg-gray-900"
            >Login</Link>
          )}

          <Link
            to="/footwears"
            className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-gray-700 p-2 text-gray-300 transition hover:bg-gray-900 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-800 bg-black px-6 py-5 md:hidden">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive(link.path)
                      ? "bg-red-600 text-white"
                      : "text-gray-400 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-gray-800 pt-4">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl border border-gray-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              Login
            </Link>

            <Link
              to="/footwears"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block rounded-xl bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
