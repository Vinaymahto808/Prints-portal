import React, { useState } from "react";
import {
  Users,
  Settings,
  Home,
  Headphones,
  CreditCard,
  User,
  FileText,
  Printer,
  FolderOpen,
  Lock,
  MessageCircle,
  Share,
  Database,
  Menu,
  X,
} from "lucide-react";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static w-64 bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800 text-white h-full z-30 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 bg-opacity-30 bg-black">
          <div className="text-cyan-400 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            TAKE PRINT PORTAL
          </div>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Menu Items */}
        <nav className="px-2 pb-4 overflow-y-auto h-[calc(100vh-140px)]">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center px-4 py-3 text-sm hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-200 group"
              >
                <span className="text-cyan-400 group-hover:text-white transition-colors">
                  {item.icon}
                </span>
                <span className="ml-3 text-gray-200 group-hover:text-white">
                  {item.name}
                </span>
                {item.tag && (
                  <span className="ml-auto bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                    {item.tag}
                  </span>
                )}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <div className="bg-white shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={toggleSidebar} className="lg:hidden text-gray-600">
              <Menu size={24} />
            </button>
            <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-2 flex-grow mx-4">
              <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                100% FREE TOOLS
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                VALID INFORMATION
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                BANK ACCOUNT
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                RESET
              </button>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg shadow hover:shadow-md transition-all">
              PROFILE
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`${card.bgGradient} rounded-xl p-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-white text-opacity-90">
                      {card.title}
                    </div>
                    <div className="text-2xl font-bold text-white mt-1">
                      {card.value.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Card data configuration
const cardData = [
  {
    title: "Total Points",
    value: 997680498357,
    icon: <CreditCard size={24} className="text-white" />,
    bgGradient: "bg-gradient-to-r from-pink-600 to-purple-600",
  },
  {
    title: "Total Admin",
    value: 11,
    icon: <User size={24} className="text-white" />,
    bgGradient: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    title: "Total Master Admin",
    value: 2876,
    icon: <Users size={24} className="text-white" />,
    bgGradient: "bg-gradient-to-r from-green-500 to-teal-500",
  },
  {
    title: "Super Distributor",
    value: 1764,
    icon: <Share size={24} className="text-white" />,
    bgGradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    title: "Total Distributor",
    value: 11343,
    icon: <Share size={24} className="text-white" />,
    bgGradient: "bg-gradient-to-r from-violet-500 to-purple-500",
  },
  {
    title: "Total Retailer",
    value: 72435,
    icon: <Users size={24} className="text-white" />,
    bgGradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
  },
  {
    title: "Total Verify Profile",
    value: 88429,
    icon: <User size={24} className="text-white" />,
    bgGradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  {
    title: "Total User",
    value: 88429,
    icon: <Users size={24} className="text-white" />,
    bgGradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
];

// Menu items configuration
const menuItems = [
  { name: "Dashboard", icon: <Home size={20} /> },
  { name: "SUPPORT(10747)", icon: <Headphones size={20} /> },
  { name: "RECHARGE NOW", icon: <CreditCard size={20} />, tag: "New" },
  { name: "USER PANEL", icon: <User size={20} /> },
  { name: "Birth And Death", icon: <FileText size={20} />, tag: "CSC" },
  { name: "Advance Aadhar Print", icon: <Printer size={20} />, tag: "New" },
  { name: "Auto Aadhar Print", icon: <Printer size={20} />, tag: "CSC" },
  { name: "AADHAAR PRINT", icon: <Printer size={20} /> },
  { name: "Auto Voter Print", icon: <Printer size={20} /> },
  { name: "Mannual Voter Print", icon: <Printer size={20} /> },
  { name: "PAN CARD", icon: <FileText size={20} /> },
  { name: "ALL SERVICE", icon: <FolderOpen size={20} />, tag: "New" },
  { name: "Digital Bank Open", icon: <Database size={20} /> },
  { name: "BIKE RC PRINT", icon: <Printer size={20} /> },
  { name: "DL PRINT", icon: <Printer size={20} /> },
  { name: "RESIZING", icon: <Settings size={20} /> },
  { name: "Create Image 100% Free", icon: <FileText size={20} /> },
  { name: "All in One Print Tools", icon: <Printer size={20} /> },
  { name: "REPORT", icon: <FileText size={20} /> },
  { name: "DRIVER", icon: <Settings size={20} /> },
  { name: "PASSWORD CHANGE", icon: <Lock size={20} /> },
  { name: "POPUP MESSAGE", icon: <MessageCircle size={20} /> },
];

export default AdminDashboard;