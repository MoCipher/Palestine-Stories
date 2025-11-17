# Palestine Stories App

## Overview
The Palestine Stories App is a web application designed to allow users to share their stories, photos, and videos, representing the rich culture and heritage of the Palestinian people. The platform provides a user-friendly interface for signing up, signing in, and posting stories, along with an admin panel for managing content and users.

## Features
- **User Authentication**: Users can sign up and sign in to their accounts.
- **Story Posting**: Users can post stories accompanied by photos and videos.
- **Timeline**: A chronological display of stories shared by users.
- **Admin Dashboard**: An admin interface for managing users and stories, ensuring content moderation and control.

## Project Structure
The project is divided into several key components:
- **Client**: The front-end application built with Next.js, allowing users to interact with the platform.
- **Server**: The back-end application built with Node.js and Express, handling API requests and database interactions.
- **Admin**: A separate application for administrators to manage the platform.
- **Shared**: Common types and interfaces used across client and server applications.
- **Prisma**: Database schema definition for managing data models.
- **Scripts**: Utility scripts for database seeding and other tasks.

## Getting Started
To get started with the Palestine Stories App, follow these steps:

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd palestine-stories-app
   ```

2. **Install Dependencies**:
   For the client:
   ```
   cd client
   npm install
   ```

   For the server:
   ```
   cd ../server
   npm install
   ```

   For the admin panel:
   ```
   cd ../admin
   npm install
   ```

3. **Set Up Environment Variables**:
   Copy the `.env.example` file to `.env` and configure your environment variables.

4. **Run the Applications**:
   Start the server:
   ```
   cd server
   npm run dev
   ```

   Start the client:
   ```
   cd ../client
   npm run dev
   ```

   Start the admin panel:
   ```
   cd ../admin
   npm run dev
   ```

5. **Access the Application**:
   - Client: `http://localhost:3000`
   - Admin: `http://localhost:3001`

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.