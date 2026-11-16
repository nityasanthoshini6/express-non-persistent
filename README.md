# Express.js Non-Persistent CRUD Application

## Project Description

This project is a REST API developed using Node.js and Express.js. It performs CRUD (Create, Read, Update, Delete) operations on products using an in-memory JavaScript array.

Since the application uses an array instead of a database, product data is temporary and will be lost whenever the server restarts.

## Live Demo

**Live Application:** https://express-non-persistent.onrender.com/

## Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- Postman (for API testing)

## CRUD Operations

| HTTP Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create a new product |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a product by ID |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/nityasanthoshini6/express-non-persistent.git
   ```

2. Navigate to the project folder:

   ```bash
   cd express-non-persistent
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Open the application:

   ```text
   http://localhost:4000
   ```

## Example Product JSON

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 50000
}
```

## Important Note

This application uses an in-memory JavaScript array for storing product details. Therefore, all product data will be lost when the server restarts.

## Deployment

The application is deployed using Render.

**Live URL:** https://express-non-persistent.onrender.com/

## Author

**Santhoshini**
