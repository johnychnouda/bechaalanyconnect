// components/Sidebar.js
export default function Sidebar() {
  return (
    <aside className="w-full md:w-80 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">My Account</h2>
      <ul>
        <li className="mb-2">Dashboard</li>
        <li className="mb-2 text-red-600">Add Credits</li>
        <li className="mb-2">My Payments</li>
        <li className="mb-2">My Orders</li>
        <li className="mb-2">Account Settings</li>
        <li className="mb-2">Logout</li>
      </ul>
    </aside>
  );
}
