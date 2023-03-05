# Angular and Firebase Image Gallery

This is an Angular project with Firebase backend that allows users to upload images with a title and description and display them on the page.

## Getting Started
To run the project locally, you need to have the following software installed on your computer:
* Node.js
* Angular CLI
* Firebase CLI
## Firebase Setup
* Create a new Firebase project on the Firebase Console
* Enable the Authentication and Storage services in your project
* Go to the Authentication tab and enable the Google sign-in method
* Create a new Cloud Firestore database in your project
* Create a new Storage bucket in your project
## Project Setup
1. Clone the project repository to your local machine
2. Open a terminal in the project root directory and run npm install to install the project dependencies
3. Run firebase login to log in to your Firebase account in the CLI
4. Run firebase use --add to select the Firebase project you created earlier
5. Rename the src/environments/environment.sample.ts file to src/environments/environment.ts and fill in your Firebase project configuration
6. Run ng serve to start the development server
7. Open your web browser and go to http://localhost:4200/ to see the app running
## Features
* Google Sign-In: Users can sign in with their Google account to access the app
* Image Upload: Users can upload images with a title and description
* Image Gallery: Uploaded images are displayed on the main page with their titles and descriptions
* User-specific Gallery: Each user can only see their own uploaded images
* Responsive Design: The app is responsive and adapts to different screen sizes
## Built With
* Angular - The web framework used
* Firebase - The backend services used
* Bootstrap - The CSS framework used

















