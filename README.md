# Grocery Webapp

A full-stack grocery shopping web app built with React, Node.js, HTML, CSS, MongoDB, and Mongoose. Integrated with Razorpay for secure payments, it provides a seamless shopping experience for users to browse and purchase groceries.

## Features

- **User Authentication**: Secure registration and login.
- **Product Catalog**: Browse and search grocery items.
- **Cart Management**: Add, update, or remove items.
- **Payment Integration**: Razorpay for secure transactions.

## Tech Stack

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express, Mongoose
- **Images storage**: Cloudinary
- **Database**: MongoDB
- **Payment Gateway**: Razorpay

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zukachin/Grocery-webapp.git
   ```
2. Install dependencies:
   ```bash
   cd Grocery-webapp
    npm install
   ```
3. Configure environment variables for MongoDB and Razorpay in .env.
    ```bash
    DBURI="*********"
    CLOUDINARY_CLOUD_NAME="*********"
    CLOUDINARY_API_KEY="*********"
    CLOUDINARY_API_SECRET="*********"
    SECRET="*********"
    KEY_ID="*********"
    KEY_SECRET="*********"
   ```
4. Start the server:
   Frontend:
    ```bash
   cd frontend
   npm run dev
   ```
   Backend:
     ```bash
   cd backend
   npm start
   ```
