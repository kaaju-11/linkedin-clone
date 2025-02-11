# linkedin-clone

This is a LinkedIn Clone application built using modern web development technologies. The app replicates key features of LinkedIn, providing a social platform for professional networking.

# Features

• **` User Authentication `**: Sign up, log in, and log out functionality with secure authentication.

• **` Profile Management `**: Users can create, edit, and view profiles with professional details.

• **` Post Creation `**: Create and share posts to connect with your network.

• **` Feed `**: View posts from your connections in a dynamic feed.

• **` Connections `**: Add, remove, and manage connections.

• **` Real-time Updates `**: Experience real-time interactions with seamless user updates.

• **` Welcome Email `**: Users receive a welcome email upon successful registration.

• **` Connection Requests `**: Send, accept, or decline connection requests.

• **` Comments `**: Comment on any post, including your own.

• **` Notifications `** : Get notified about connection requests, post interactions, and updates in real-time.


## Technologies Used

# Frontend

• **` React Vite `**: Fast and optimized development environment.

• **` Tailwind CSS `**: For designing responsive and modern user interfaces.

• **` Daisy UI `**: Extends Tailwind CSS with pre-designed components to enhance UI/UX.

# Backend

• **` Node.js `**: Server-side JavaScript runtime.

• **` Express `**: Minimal and flexible Node.js web application framework.

• **` MongoDB `**: NoSQL database for storing user data and application content.


# Usage

• Register a new account or log in with existing credentials.

• Update your profile with professional details.

• Create and share posts to interact with your network.

• Add connections to expand your network and view their posts.

• Receive and manage notifications for all updates.

# Setup and Installation

1. **Clone the Repository**
    ```bash
    git clone git@github.com:kaaju-11/linkedin-clone.git
    ```
2. **Go to the project directory**
   ```bash
   cd linkedin-clone
   ```
3. **Install dependencies**
   ```bash
   npm i
   ```

# Configuration
- **`.env`**: Set environment variables

```bash
PORT=5000
MONGO_URI=<your_mongo_uri>

JWT_SECRET=<yourverystrongsecret>

NODE_ENV=development

MAILTRAP_TOKEN=<your_mailtrap_token>
EMAIL_FROM=mailtrap@demomailtrap.com
EMAIL_FROM_NAME=<Your_Name>

CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>

CLIENT_URL=http://localhost:5173
```
# Run this app locally
```bash
npm run build
```
# Start the server
```bash
npm run start
```
  
Open your browser and navigate to `http://localhost:5000` to see the application in action.
