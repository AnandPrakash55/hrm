import React from "react";

const Notifications = () => {
  const systemMessages = [
    { id: 1, title: "System Update", message: "System will be down for maintenance at 10 PM tonight." },
    { id: 2, title: "Security Alert", message: "Please reset your password every 90 days." },
  ];

  const hrNotices = [
    { id: 1, title: "Leave Policy Update", message: "Casual leave increased to 12 days per year." },
    { id: 2, title: "Annual Meet", message: "Company Annual Meet scheduled for 15th August." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Notifications</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">System Messages</h2>
          <ul className="space-y-3">
            {systemMessages.map((msg) => (
              <li key={msg.id} className="border p-3 rounded">
                <strong>{msg.title}</strong>
                <p>{msg.message}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">HR Notices</h2>
          <ul className="space-y-3">
            {hrNotices.map((notice) => (
              <li key={notice.id} className="border p-3 rounded">
                <strong>{notice.title}</strong>
                <p>{notice.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
