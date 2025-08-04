import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Home,
  MapPin,
  History,
  Wallet,
  HelpCircle,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/VRSLogo.png";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  let navigate = useNavigate();
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Live Tracking", href: "/tracking", icon: MapPin },
    { name: "Ride History", href: "/history", icon: History },
    { name: "Wallet", href: "/wallet", icon: Wallet },
    { name: "Support", href: "/support", icon: HelpCircle },
  ];

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-16 md:pb-0">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                style={{ objectFit: "contain", height: "90px" }}
                src={logo}
              ></img>
              {/* <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1B73C2]">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-[#1B73C2]">
                VR Shuttle
              </span> */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* User Profile & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop User Menu */}
              <div className="hidden md:flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1B73C2] flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {user?.name}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile User Info */}
              <div className="pt-2">
                <div className="flex items-center space-x-3 px-3 py-2">
                  <div className="w-8 h-8 rounded-full bg-[#1B73C2] flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 px-3 py-2 w-full text-left text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="text-base font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-5 h-16">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                  isActive
                    ? "text-[#1B73C2] bg-blue-50"
                    : "text-gray-600 hover:text-[#1B73C2] hover:bg-blue-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">
                  {item.name.split(" ")[0]}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Layout;
