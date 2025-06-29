# GPU Store - Modern E-commerce Platform

A modern e-commerce website for GPU products built with Node.js, Express.js, and React.js.

## Prerequisites

- Node.js (LTS version)
- MongoDB (for database)
- npm (Node Package Manager)

## Installation

1. Install Node.js from: https://nodejs.org/
2. Install MongoDB from: https://www.mongodb.com/try/download/community

3. Clone the repository:
```bash
git clone [repository-url]
cd gpu-store
```

4. Install server dependencies:
```bash
npm install
```

5. Create a .env file in the root directory with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gpu-store
```

6. Install client dependencies:
```bash
cd client
npm install
```

## Running the Application

1. Start the server:
```bash
npm run dev
```

2. In a new terminal, start the client:
```bash
cd client
npm start
```

3. Alternatively, run both simultaneously:
```bash
npm run dev:full
```

## Features

- Modern, responsive UI
- Product catalog with categories
- Shopping cart functionality
- User authentication
- Order management
- Admin dashboard

## Tech Stack

- Backend: Node.js, Express.js
- Frontend: React.js
- Database: MongoDB
- Authentication: JWT
- Payment: Stripe Integration
- Styling: CSS Modules, Material-UI
