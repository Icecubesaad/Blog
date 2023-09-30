# Blog App
This a Blog app made with the MERN(MongoDB, Express, React, Nodejs) stack, which serves the user a friendly interface to interact with blogs published by other people. A scalable application in which a user can make thier own blog, like other blogs.
# Features
-**User Registration and Login**: Users can create an account and log in to access the app's features.<br>
-**Blog Search**: Users can search for Blogs using title.<br>
-**Blog Display**: User can see the description,title, image uploaded by the author and likes.<br>
-**Trending and reletable blogs algorithms**: User will get recommended Trending Blogs and Relatable blogs that are relatable to the blog they are reading.<br>
# Packages Used
## Backend
-**bcryptjs** = for user password protection<br>
-**dotenv** = to access the environment variables. <br>
-**mongoose** = to access mongodb <br>
-**jsonwebtoken** = to fetch the user details and saved recipies<br>
-**express-validator** = for authentication validation<br>
-**uuid** = creating random ids for each blogs. <br>
## Front end 
-**material-icons** = for icons<br>
# Getting Started
## Front End
`cd client`<br>
`cd BlogApp`<br>
`npm i`<br>
`npm install @mui/material @emotion/react @emotion/styled`<br>
`npm install @mui/icons-material`<br>
`npm run dev`<br>
## Back End
`cd server`<br>
`install other packages`<br>
`nodemon ./App.js`<br>
