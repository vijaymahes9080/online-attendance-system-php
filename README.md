# 📊 Online Attendance System in PHP & HTML5

<p align="center">
  <img src="img/attendance_hero.png" width="600" alt="Online Attendance System Dashboard Hero Banner" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);"/>
</p>

An advanced, automated attendance tracking system designed to streamline attendance management for teachers, students, and administration. Features a clean responsive user interface, automated short-attendance list calculation, and interactive statistical chart reports.

---

## 🚀 Portals Overview

### 👨‍🏫 Faculty Portal
<p align="left">
  <img src="img/faculty_icon.png" width="120" align="right" alt="Faculty Dashboard Illustration" style="margin-left: 20px; border-radius: 8px;"/>
</p>

Allows instructors to add courses/classes, specify roll number ranges, track records, mark presence/absence with a simple clicker, and delete student entries.

- **Class Dashboard**: Manage multiple courses and sections.
- **Attendance Toggling**: Simple click markers for A/P.
- **Auto-Calculated Statistics**: Column charts summarizing presence frequencies and average attendance rates.

<br clear="right"/>

### 👨‍🎓 Student Portal
<p align="left">
  <img src="img/student_banner.png" width="220" align="right" alt="Student lookup dashboard Illustration" style="margin-left: 20px; border-radius: 8px;"/>
</p>

Empowers students to verify their presence record dynamically without requiring faculty assistance.

- **Fast Lookups**: Retrieve attendance report via subject code and roll number.
- **Attendance Timeline**: Visual graph mapping dates and presence records.
- **Interactive Gauges**: Gauge knob illustrating overall attendance percentage.

<br clear="right"/>

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Backend** | PHP (OOP Principles, MVC architecture style) |
| **Frontend** | HTML5, CSS3, Javascript, jQuery, Bootstrap, Highcharts, Knob.js |
| **Database** | MySQL |

---

## ⚙️ Setup & Installation Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/vijaymahes9080/online-attendance-system-php.git
cd online-attendance-system-php
```

### 2. Configure Local Database
- Open your MySQL server (via XAMPP/WAMP or console).
- Create a new database: `attendance_system`.
- Import the database schema from the root file: [attendance.sql](file:///d:/BACKUP/projects/PHP%20project/online-attendance-system-in-php/attendance.sql).
- Adjust your DB credentials inside [class.php](file:///d:/BACKUP/projects/PHP%20project/online-attendance-system-in-php/class.php).

### 3. Start Apache Server
- Move the directory into your local HTTP server folder (e.g. `htdocs` or `www`).
- Access the PHP backend:
  `http://localhost/online-attendance-system-php/index.php`
- Or run the static HTML Pages preview:
  `http://localhost/online-attendance-system-php/index.html`

---

## 👤 Author

- **Vijay Mahes** - [GitHub Profile](https://github.com/vijaymahes9080)
