# Lynklitics - URL Shortener with Analytics

Lynklitics is a cloud-based URL Shortener application that lets users register, shorten URLs, and track click analytics in real-time. Built with a modern tech stack using **Spring Boot** for the backend and **React** for the frontend, it offers an intuitive dashboard and insightful link performance metrics.

To view the deployed application, please visit:
- https://peppy-boba-2789d6.netlify.app/

[NOTE: It takes some time for the backend to be activated on Render as I have shifter to free-tier for this application, please be patient as it wont take more than 5 minutes on your first backend call like register or login. Once active it will run blazing fast!]

## 🚀 Features

- 🔐 **User Authentication**
  - Secure registration and login using JWT.
  - Protected routes using Spring Security's `SecurityFilterChain`.

- 🔗 **Create Shortened URLs**
  - Authenticated users can generate shortened links that map to original URLs.
  - Shortened links use the deployed domain name and handle proper redirection.

- 📊 **Real-Time Analytics Dashboard**
  - Graphical view of total clicks across all links (date-wise).
  - Each link shows individual statistics: total clicks and date-wise breakdown.
  - Real-time updates on link creation using React refetch hooks.

- 📋 **Copy Button**
  - Each shortened link comes with a one-click copy-to-clipboard feature.

- ☁️ **Fully Cloud Hosted**
  - **Frontend**: Hosted on [Netlify](https://www.netlify.com/)
  - **Backend**: Hosted on [Render](https://render.com/)
  - **Database**: Powered by [Neon Serverless Postgres](https://neon.tech/)

---

## 🛠️ Tech Stack

### Backend (Spring Boot)
- Java 17
- Spring Boot
- Spring Security (JWT)
- JPA/Hibernate
- PostgreSQL (via Neon)

### Frontend (React)
- React with Hooks
- React Router
- Tailwind CSS (or other custom styling)
- State management with `react-query` / refetch hooks

---

## 🌐 Application Flow

1. **User Registration/Login**
   - Auth endpoints issue JWTs used for protected API access.

2. **Dashboard Access**
   - Users can view a live dashboard showing:
     - A graph of total clicks across all their links (date-wise).
     - A list of all their shortened links with click stats.

3. **Shortened URL Redirection**
   - When someone clicks a shortened link, they are redirected to the original URL.
   - The system increments the click count and logs the timestamp.

---


## 📦 Getting Started Locally

### Prerequisites
- Java 17
- React
- PostgreSQL (or use Neon connection string)

### Backend Setup
```bash
cd backend
./mvnw spring-boot:run

