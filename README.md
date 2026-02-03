# Highly Available Node.js Backend on AWS with Auto Scaling and RDS
I built a production-style Node.js application deployed on EC2 Auto Scaling Group behind an Application Load Balancer, with MySQL hosted on Amazon RDS, tested end-to-end using Postman.

# Employee Management App

This is a Node.js Express application with MySQL integration, deployed on AWS using:

- **Auto Scaling Group (ASG)** for EC2
- **Application Load Balancer (ALB)**
- **RDS MySQL**

## Features

- POST `/employee` → Add employee
- GET `/employee/:id` → Fetch employee by ID

## Setup

1. Copy `.env.example` to `.env` and update values.
2. Install dependencies:

```bash
npm install

### Start the server
Start the server:

node app.js
# or using pm2
pm2 start app.js --name employee-app

Testing

Use Postman or curl:

POST /employee
GET /employee/:id


Example:

POST /employee
{
  "name": "Joyel",
  "age": 25,
  "place": "India",
  "job": "Cloud Engineer",
  "message": "ALB ASG RDS Project"
}


Response:

{
  "status": "success",
  "employee_id": 1
}
