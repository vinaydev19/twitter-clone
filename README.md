# 🐦 vinaydev19 Twitter Clone

A full-stack Twitter clone web application built using the **MERN Stack** (MongoDB, Express, React, Node.js) with Redux and TailwindCSS.

---

## 📁 Project Structure

```
vinaydev19-twitter-clone/
├── backend/         # Node.js/Express REST API
│   ├── config/      # Auth & DB configuration
│   ├── controllers/ # Controllers for user and tweet routes
│   ├── models/      # Mongoose schemas for User and Tweet
│   └── routes/      # Express route definitions
└── frontend/        # React + Vite SPA
    ├── components/  # Reusable React components
    ├── hooks/       # Custom hooks
    ├── redux/       # Redux store and slices
    └── utils/       # API endpoints and constants
```

---

## 🚀 Features

### 🔐 Authentication
- Register & Login with email and password
- JWT-based authentication using cookies

### 🐦 Tweets
- Post tweets
- Like / Unlike tweets
- Bookmark tweets
- View tweets from followed users
- Delete own tweets

### 👥 User System
- Follow / Unfollow users
- View your profile and others'
- Bookmark tweets

### 🧰 Tools & Tech
- **Frontend**: React.js, Redux Toolkit, React Router, Tailwind CSS, Axios, Toast Notifications
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, BcryptJS, Cookie Parser, CORS

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/vinaydev19/twitter-clone.git
cd twitter-clone
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017
ACCESS_TOKEN_SECRET=your_jwt_secret
```

Run backend:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🌐 API Routes

| Feature       | Endpoint                        |
|---------------|----------------------------------|
| Register      | POST `/api/v1/user/register`     |
| Login         | POST `/api/v1/user/login`        |
| Logout        | GET `/api/v1/user/logout`        |
| Profile       | GET `/api/v1/user/profile/:id`   |
| Tweets        | GET `/api/v1/tweet/alltweets/:id`|
| Create Tweet  | POST `/api/v1/tweet/create`      |
| Like/Dislike  | PUT `/api/v1/tweet/like/:id`     |
| Delete Tweet  | DELETE `/api/v1/tweet/delete/:id`|
| Bookmark Tweet| PUT `/api/v1/user/bookmark/:id`  |
| Follow User   | POST `/api/v1/user/follow/:id`   |
| Unfollow User | POST `/api/v1/user/unfollow/:id` |
| Other Users   | GET `/api/v1/user/otheruser/:id` |

---

## 🖼️ UI Preview

- Login / Signup
- Home Feed (For You / Following)
- Create Tweet
- Like, Comment, Bookmark
- Follow Suggestions
- User Profile

---

## 📄 License

This project is licensed under the **ISC License**.
