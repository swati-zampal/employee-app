# Employee Registration App

A simple **Node.js + Express** application with a **MySQL database** to register employees.
It provides a registration form, stores employees in MySQL, and displays employee lists.

---

## 🚀 Features

* Register employees with **name, email, department**
* Store employee details in **MySQL database**
* Frontend form rendered via **EJS** templates
* View registered employees in a table
* Configurable using `.env` file

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS templates + CSS
* **Database:** MySQL
* **Other:** dotenv, mysql2

---

## 📂 Project Structure

```
employee-app/
├─ server.js             # Main entry point
├─ package.json          # Dependencies
├─ .env.example          # Example environment variables
├─ config/
│  └─ db.js              # MySQL database connection
├─ public/
│  └─ style.css          # Stylesheet
├─ views/
│  ├─ index.ejs          # Registration form page
│  └─ employees.ejs      # Employee list page
└─ sql/
   └─ schema.sql         # Database schema
```

---

## ⚙️ Installation & Local Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/employee-app.git
cd employee-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup MySQL Database

Import schema:

```bash
mysql -u root -p < sql/schema.sql
```

### 4. Configure Environment Variables

Copy `.env.example` → `.env` and update with your credentials:

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=employee_db
DB_PORT=3306
```

### 5. Start the App

```bash
npm start
```

or for dev mode with auto-reload:

```bash
npm run dev
```

### 6. Access in Browser

* Registration form 👉 `http://localhost:3000`
* Employee list 👉 `http://localhost:3000/employees`

---

## 📡 API Endpoints

### Register Employee

**POST** `/register`
Form data:

* `name` (string)
* `email` (string)
* `department` (string)

### List Employees

**GET** `/employees`
Returns HTML table with all employees.

---

## 🚀 Deploy on AWS Amazon Linux (EC2)

### 1. Launch EC2

* Select **Amazon Linux 2** AMI
* Open **port 3000** in Security Group (or later reverse proxy with Nginx to port 80)

### 2. Update System & Install Tools

```bash
sudo yum update -y
sudo yum install -y git
```

### 3. Install Node.js & npm

```bash
sudo yum install -y nodejs npm
```

Verify:

```bash
node -v
npm -v
```

### 4. Install MySQL Server

```bash
sudo yum install -y mariadb105-server
sudo systemctl enable mariadb
sudo systemctl start mariadb
```

### Secure MySQL:

```bash
sudo mysql
```
In MySql
```bash

```

### 5. Setup Database

Run schema:

```bash
mysql -u root -p < sql/schema.sql
```

### 6. Clone & Setup App

```bash
git clone https://github.com/your-username/employee-app.git
cd employee-app
npm install
cp .env.example .env   # edit DB creds
nano .env              # update DB_USER, DB_PASSWORD, etc.
```

### 7. Run App

```bash
npm start
```

### 8. Keep App Running (PM2 recommended)

```bash
sudo npm install -g pm2
pm2 start server.js --name employee-app
pm2 startup systemd
pm2 save
```

### 9. Access in Browser

Use EC2 public IP:

```
http://<EC2-PUBLIC-IP>:3000
```

---

## ✅ Next Improvements

* Add employee update & delete features
* Use Nginx reverse proxy on port 80 with domain + SSL
* Implement authentication for secure access

---
✍️ Author: *Swati Zampal*

---

