# MERN Blog Application

A full-stack blogging platform built using the MERN stack that allows users to register, authenticate, create blogs with image uploads, edit/delete their own posts, browse posts by category, and manage their profile.

## Live Demo

- **Frontend:** https://aditya-blog-app.netlify.app/
- **Backend API:** https://blog-mern-g9nz.onrender.com

---

## Features

- User Registration & Login
- JWT-based Authentication
- Create, Edit & Delete Blogs
- Image Upload Support
- Browse All Blogs
- Category Filtering
- User Profile Management
- Responsive UI
- RESTful API Architecture

---

## Tech Stack

### Frontend

- React.js
- React Router
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt
- Multer

### Deployment

- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas

---

## Project Structure

```
blog/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.js
│
├── backend/
│   ├── api/
│   ├── models/
│   ├── routes/
│   ├── images/
│   └── index.js
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Aditya77kushwaha/Blog-Mern.git

cd Blog-Mern
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=5000

DB_CONNECTION=your_mongodb_connection_string

```

Start backend

```bash
npm start
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
REACT_APP_API=http://localhost:5000
```

Start frontend

```bash
npm start
```

---

## API Endpoints

### Authentication

```
POST   /api/auth/register
POST   /api/auth/login
```

### Users

```
GET    /api/users/:id
PUT    /api/users/:id
DELETE /api/users/:id
```

### Posts

```
GET    /api/posts
GET    /api/posts/:id
POST   /api/posts
PUT    /api/posts/:id
DELETE /api/posts/:id
```

### Categories

```
GET    /api/categories
POST   /api/categories
```

---

## Future Improvements

- Cloudinary Image Storage
- Rich Text Editor
- Comments System
- Like & Bookmark Blogs
- Search Functionality
- Dark Mode
- Infinite Scrolling
- Pagination
- User Dashboard
- Email Verification
- Password Reset
- Docker Support
- Unit & Integration Tests

---

## Known Limitation

Images are currently stored on the backend filesystem using Multer.

Since the backend is deployed on Render, uploaded images are not persistent across service redeployments. Integrating Cloudinary or AWS S3 will provide permanent image storage.

---

## Author

**Aditya Kushwaha**

- GitHub: https://github.com/Aditya77kushwaha
- LinkedIn: https://www.linkedin.com/in/aditya-kushwaha-9469821b5/

---

## License

This project is licensed under the MIT License.