# BlogVista - A Blog Application

BlogVista is a powerful blog application that allows users to create, publish, and share their thoughts with the world. With a user-friendly interface BlogVista makes it easy for both novice and experienced writers to express themselves through blogging.

## Features

- User Registration: Users can register themselves to start writing and publishing blogs.
- Create and Publish Blogs: Users can create new blog posts and publish them for others to read.
- Commenting: Engage with other users by leaving comments on their blog posts.
- Responsive Design: Built using React and Tailwind CSS, BlogVista provides a seamless experience across all devices.

Technologies Used
- Node.js: Backend development
- MongoDB: Database management
- React: Frontend development
- Tailwind CSS: Styling and design

## Getting Started

### Prerequisites

- Node.js installed on your machine

- MongoDB database should be configured

### Installation

1. Clone the SnapURL repository to your local machine:

```bash
git clone https://github.com/RohanVolety/BlogVista.git
```
2. Install dependencies for both frontend and backend:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install
```
3. Set up your environment variables:
Create a `.env` file in the root directory of the project and define the following variables:
```bash
PORT="5000"
MONGODB_URL=your_mongodb_connection_string
SECERT="YOUR_SECRET"
```
### Usage

 1. Start the backend server
```bash
# Navigate to the backend directory
cd backend

# Start the server
nodemon index.js
```
 2. Start the frontend server
```bash
# Navigate to the frontend directory
cd frontend

# Start the server
npm run dev
```
3. Access BlogVista at http://localhost:5173.

4. Register for an account, create blogs, and start publishing your content.
