# To-Do List Application

## Features

- Create Task
- Get All Tasks
- Get Single Task
- Update Task
- Delete Task
- Update Status
- Search Tasks

## Tech Stack

Backend:

- Node.js
- Express.js
- MongoDB

Frontend:

- React
- Axios

## Installation

### Backend

cd backend
npm i express
npm i nodemon
npm i dotenv
npm i cors
npm run dev

### Frontend

cd frontend
npm install
npm run dev

## Environment Variables

PORT=5000

MONGO_URI="mongodb+srv://bdev53143_db_user:4b5d52oheMW7LPGR@cluster0.awbnxhn.mongodb.net/?appName=Cluster0"

# API Endpoints

Base URL:

```http
/api/todos
```

## 1. Get All Todos

```http
GET /api/todos
```

Response:

```json
[
  {
    "_id": "123",
    "title": "Learn Node.js",
    "description": "Complete Express tutorial",
    "status": "pending"
  }
]
```

---

## 2. Get Todo By ID

```http
GET /api/todos/:id
```

Example:

```http
GET /api/todos/64a123456789
```

Response:

```json
{
  "_id": "64a123456789",
  "title": "Learn Node.js",
  "description": "Complete Express tutorial",
  "status": "pending"
}
```

---

## 3. Create Todo

```http
POST /api/todos
```

Request Body:

```json
{
  "title": "Learn MongoDB",
  "description": "Practice CRUD operations"
}
```

Response:

```json
{
  "message": "Todo created successfully",
  "todo": {
    "_id": "64a123456789",
    "title": "Learn MongoDB",
    "description": "Practice CRUD operations",
    "status": "pending"
  }
}
```

---

## 4. Update Todo

```http
PUT /api/todos/:id
```

Request Body:

```json
{
  "title": "Learn Express.js",
  "description": "Build REST APIs"
}
```

Response:

```json
{
  "message": "Todo updated successfully"
}
```

---

## 5. Update Todo Status

```http
PATCH /api/todos/:id/status
```

Request Body:

```json
{
  "status": "completed"
}
```

Response:

```json
{
  "message": "Status updated successfully"
}
```

---

## 6. Delete Todo

```http
DELETE /api/todos/:id
```

Response:

```json
{
  "message": "Todo deleted successfully"
}
```

---

## 7. Search Todos

```http
GET /api/todos/search/:keyword
```

Example:

```http
GET /api/todos/search/node
```

Response:

```json
[
  {
    "_id": "64a123456789",
    "title": "Learn Node.js",
    "description": "Practice Express",
    "status": "pending"
  }
]
```
