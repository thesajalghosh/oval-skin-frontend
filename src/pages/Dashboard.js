import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ReactChart from "../component/ReactChart";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [dashboardData, setDashBoardData] = useState([])
  const [loading, setLoading] = useState(true)

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Moderator" },
  ];

  const getAllDashbaordData = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_API}/oval_skin/dashboard`)
      if (data.success) {
        setDashBoardData(data?.data)
      }

    } catch (error) {
      console.log(error)

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllDashbaordData()

  }, [])
  function isEmpty(value) {
    if (value == null) return true; // null or undefined
    if (typeof value === "string" && value.trim() === "") return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (typeof value === "object" && !Array.isArray(value)) {
      return Object.keys(value).length === 0;
    }
    return false;
  }


  return (
    <>
      {isEmpty(dashboardData) && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <div className="text-lg text-gray-700 font-semibold">Loading...</div>
          </div>
        </div>
      )}

      {!isEmpty(dashboardData) && <div className="min-h-screen flex bg-gray-100">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex flex-col w-64 h-screen p-5">
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
          className={`fixed z-40 md:hidden top-0 left-0 w-64 h-screen bg-white p-5 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                  <StatCard title="Total Users Count" value={dashboardData?.total_user} color="text-blue-600" />
                  <StatCard title="Completion rate" value={`${((dashboardData?.quiz_completed_count / dashboardData?.total_user) * 100).toFixed(2)}%`} color="text-green-600" />
                  <StatCard title="Dropout rate" value={`${(100 - ((dashboardData?.quiz_completed_count / dashboardData?.total_user) * 100).toFixed(2))}%`} color="text-orange-500" />
                  <StatCard title="Average time per question" value={`${(dashboardData?.average_avg_total_time_per_completion).toFixed(2)} sec`} color="text-orange-500" />
                  <StatCard title="Average time per completion" value={`${(dashboardData?.average_avg_time_per_qst).toFixed(2)} sec`} color="text-orange-500" />
                  <StatCard title="Share rate" value={`${(dashboardData?.total_user_share_result / dashboardData?.total_user).toFixed(2)}%`} color="text-orange-500" />
                  <StatCard title="Quiz restart rate" value={`${Number(dashboardData?.quiz_restart_rate)}%`} color="text-orange-500" />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <ReactChart dataObj={dashboardData?.skin_type_result} />
                </div>
              </>
            )}

            {/* Users Section */}
            {activeSection === "users" && (
              <UserDetailsTable />
            )}
          </div>
        </div>
      </div>}
    </>
  );
};

// Navigation Item Component
const NavItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-2 py-2 rounded-md transition text-sm font-medium ${active ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
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
// ...existing code...
const UserDetailsTable = () => {
  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  function isEmpty(value) {
    if (value == null) return true;
    if (typeof value === "string" && value.trim() === "") return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (typeof value === "object" && !Array.isArray(value)) {
      return Object.keys(value).length === 0;
    }
    return false;
  }

  const getAllUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}/oval_skin?page=${page}`
      );
      if (data?.success) {
        setAllUser(data?.data?.questioniars || []);
        setTotalPages(data?.data?.totalPages || 1);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUser();
  }, [page]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">All Users</h3>

      <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-[600px] w-full text-[0.95rem] text-left">
          <thead className="bg-gray-50 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-4 py-3 border">User ID</th>
              <th className="px-4 py-3 border">Skin Type</th>
              <th className="px-4 py-3 border">Email</th>
              <th className="px-4 py-3 border">City</th>
              <th className="px-4 py-3 border text-center">Full Details</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : isEmpty(allUser) ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              allUser.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-4 py-3 border font-medium text-gray-800">
                    {user.unique_id}
                  </td>
                  <td className="px-4 py-3 border">
                    {isEmpty(user.result_type) ? "Drop-off user" : user.result_type}
                  </td>
                  <td className="px-4 py-3 border text-gray-700">
                    {user?.email ?? "-"}
                  </td>
                  <td className="px-4 py-3 border">{user.city}</td>
                  <td className="px-1 py-3 border text-center">
                    {/* <button
                      onClick={() =>
                        navigate(`/dashboard/user-details/${user.unique_id}`)
                      }
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      User details
                    </button> */}
                    <Link
                     to={`/dashboard/user-details/${user.unique_id}`}    
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800  font-medium text-center flex item-center justify-center gap-2"
                      >
                    <span>
                      User details
                      </span> 
                        <FaExternalLinkAlt size={17} className="mt-1"/>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 gap-4 text-sm">
        <button
          className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="text-gray-700 font-medium">
          Page <span className="font-semibold">{page}</span> of{" "}
          <span className="font-semibold">{totalPages}</span>
        </span>
        <button
          className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};


export default Dashboard;
