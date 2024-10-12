# ChatChat

![Home Screenshot](/frontend/public/homess.png)
![Sign Up Screenshot](/frontend/public/signupss.png)


# What is ChatChat?
ChatChat is a chat-based web app where users may send and receive real-time-updating messages.

Try it out for yourself [HERE!](https://chatchat-k4gf.onrender.com/) (This deployment may take a couple of minutes to load, due to limitations of the free-tier offered by Render. Apologies, and thank you for your understanding!)

### Login
Users are greeted by a functioning Login page where they are prompted to enter a username and password. If an account has not yet been created, users may navigate to a Sign Up page by following the "Don't have an account?" link located just above the "Login" button. 

### Sign Up
Upon entering the Sign Up page, users are prompted to enter their full name, chosen username, password + confirmation of password, and gender (checkboxes used to generate appropriate profile pictures). Once signed up, users are automatically logged in and navigate to the Home page. If users already have an account, they may navigate back to the Login page by following the "Already have an account?" link located just above the "Sign Up" button.

### Home
The Home page features a sidebar showcasing all users who have currently signed up excluding the current user, a functional search bar, and a welcoming screen which yields the chat interface once a chat is selected. 

# Technologies Used:
- MERN (MongoDB, Express.js, React.js, Node.js)
- Socket.io
- Tailwind CSS
- Daisy UI
- Zustand
- Render

# Notable Features:
- 🌟 Authentication + Authorization - JWT
- 💎 Real-time messaging - Socket.io
- ✅ Online status of users - React Context and Socket.io
- 🌐 Global state management - Zustand
- 💢 Error handling on both client and server sides
- 🚀 Deployment - Render

# Build Yourself:

### Setup .env file

```js
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
NODE_ENV=...
```

### Build app

```shell
npm run build
```

### Start app

```shell
npm start
```