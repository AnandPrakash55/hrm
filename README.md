💼 HRMS - Human Resource Management System
A modern web-based HR management solution built with React.js, tailored to meet the needs of organizations by streamlining tasks like employee attendance, leave requests, timesheet tracking, and more.

🚀 Features
👨‍💼 Employee Module
✅ Mark Attendance (Check-in/Check-out)

📄 Apply for Leave & View Leave History

📋 Fill Weekly Timesheet

👤 View/Edit Personal Profile

📅 View Holidays

📊 View Project Status

🛠️ Admin Module
👥 Manage Employees (HRs, Managers, Admins)

✍️ Approve Leaves & Requests

🏆 Add Employee Rewards

🕒 View Attendance Reports

📈 View Timesheets & Project Status

📆 Manage Holiday Calendar

📢 Publish Announcements

📁 Project Structure
pgsql
Copy
Edit
├── components/
│   └── Layout.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── DashBoard.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── SplashScreen.jsx
│   ├── Profile.jsx
│   ├── Notifications.jsx
│   └── Settings.jsx
├── admin/
│   ├── AdminDashboard.jsx
│   ├── AttendanceViewer.jsx
│   ├── LeaveManagement.jsx
│   ├── ManageEmployees.jsx
│   ├── AddReward.jsx
│   ├── AddHoliday.jsx
│   ├── Announcements.jsx
│   ├── HolidayCalendar.jsx
│   ├── TimesheetAdmin.jsx
│   └── AdminAnalytics.jsx
├── App.jsx
├── main.jsx
└── index.css
🧑‍💻 Tech Stack
Frontend: React.js, Tailwind CSS

Routing: React Router

State Management: React Context API

Icons: Font Awesome, React Icons

Authentication: Custom Auth Context (can be extended with Firebase/Auth0/JWT)

🛠️ Setup Instructions
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/hrms.git
cd hrms
Install dependencies

bash
Copy
Edit
npm install
Start development server

bash
Copy
Edit
npm run dev
Visit http://localhost:5173 in your browser.

📝 To-Do / Coming Soon
 Backend Integration (Node.js / Express / Firebase)

 Role-based Dashboard Views

 Export Reports (PDF/Excel)

 Notifications Panel

 Dark Mode

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙋‍♂️ Author
Anand Prakash
📧 Email
🔗 LinkedIn
💻 GitHub
