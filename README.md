# Online Attendance System in PHP

An advanced online attendance system designed to help teachers, students, and college administration by automating the entire process. This system is designed with scalability, modular design, and Object-Oriented Programming (OOP) in PHP, making it easy to configure, maintain, and extend.

## Features

- **Teacher Portal**: Add/manage classes, take student attendance, and track records.
- **Student Portal**: Check individual attendance percentage and view detailed logs.
- **Automated Statistics**: Visualize class statistics and identify students with short attendance.
- **Responsive Web UI**: Built using clean CSS, bootstrap components, and standard PHP.

## Tech Stack

- **Backend**: PHP (Object-Oriented Programming, MVC principles)
- **Frontend**: HTML5, CSS3, JavaScript, jQuery, Bootstrap
- **Database**: MySQL

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vijaymahes9080/online-attendance-system-php.git
   cd online-attendance-system-php
   ```

2. **Configure Database**:
   - Create a MySQL database named `attendance_system`.
   - Import the `attendance.sql` file located in the `Attendance-System` directory into your MySQL database.
   - Configure database credentials inside `Attendance-System/class.php`.

3. **Deploy**:
   - Place the project folder in your local server directory (e.g., `htdocs` for XAMPP or `www` for WampServer).
   - Start Apache and MySQL, then navigate to `http://localhost/online-attendance-system-php/Attendance-System/` in your browser.

## Author

- **Vijay Mahes** - [GitHub Profile](https://github.com/vijaymahes9080)
