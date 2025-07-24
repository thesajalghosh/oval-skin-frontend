import React, { useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Moderator" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 h-screen bg-white border-r p-5">
        <div className="mb-10">
          <h1 className="text-[1.2rem] font-bold text-blue-600">OVAL SKIN QUIZ DASHBOARD</h1>
        </div>
        <nav className="flex flex-col gap-4">
          <NavItem
            icon={<FaTachometerAlt />}
            label="Dashboard"
            active={activeSection === "dashboard"}
            onClick={() => setActiveSection("dashboard")}
          />
          <NavItem
            icon={<FaUser />}
            label="Users"
            active={activeSection === "users"}
            onClick={() => setActiveSection("users")}
          />
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-40 md:hidden top-0 left-0 w-64 h-screen bg-white p-5 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-blue-600">Menu</h1>
          <button onClick={() => setSidebarOpen(false)}>
            <IoClose className="text-2xl text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <NavItem
            icon={<FaTachometerAlt />}
            label="Dashboard"
            active={activeSection === "dashboard"}
            onClick={() => {
              setActiveSection("dashboard");
              setSidebarOpen(false);
            }}
          />
          <NavItem
            icon={<FaUser />}
            label="Users"
            active={activeSection === "users"}
            onClick={() => {
              setActiveSection("users");
              setSidebarOpen(false);
            }}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-white border-b px-4 md:px-8 py-4 shadow-sm">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-2xl text-gray-600" onClick={() => setSidebarOpen(true)}>
              <FaBars />
            </button>
            <h2 className="text-xl font-semibold text-gray-800 capitalize">{activeSection}</h2>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="hidden sm:block">Monday, July 22</span>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 md:p-8">
          {/* Dashboard Section */}
          {activeSection === "dashboard" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Users Count" value="1,205" color="text-blue-600" />
                <StatCard title="Completion rate" value="₹85,000" color="text-green-600" />
                <StatCard title="Dropout rate" value="320" color="text-orange-500" />
                <StatCard title="Average time per question" value="320" color="text-orange-500" />
                <StatCard title="Average time per completion" value="320" color="text-orange-500" />
                <StatCard title="Share rate" value="320" color="text-orange-500" />
                <StatCard title="Quiz restart rate" value="320" color="text-orange-500" />
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
                <ul className="text-gray-600 list-disc pl-5 space-y-2 text-sm">
                  <li>User John signed up</li>
                  <li>Order #4532 placed</li>
                  <li>Settings updated by Admin</li>
                  <li>System backup completed</li>
                </ul>
              </div>
            </>
          )}

          {/* Users Section */}
          {activeSection === "users" && (
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">User Management</h3>
              <div className="w-full overflow-x-auto">
                <table className="min-w-[600px] text-sm text-left border">
                  <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                    <tr>
                      <th className="px-4 py-2 border">ID</th>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border">{user.id}</td>
                        <td className="px-4 py-2 border">{user.name}</td>
                        <td className="px-4 py-2 border">{user.email}</td>
                        <td className="px-4 py-2 border">{user.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-2 py-2 rounded-md transition text-sm font-medium ${
      active ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
    }`}
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </button>
);

// Statistic Card Component
const StatCard = ({ title, value, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
    <h4 className="text-sm text-gray-500 mb-1">{title}</h4>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

export default Dashboard;
