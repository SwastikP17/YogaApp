# Yoga Class Admission Form Project

This project implements a simple Yoga Class Admission Form using React for the frontend and a mock backend for form submissions.

## Overview

The project involves creating a form to enroll participants in yoga classes with the following features:
- Participants can enter their name, age, and select a preferred batch.
- Upon form submission, data is sent to a mock backend API using Axios.
- Upon successful enrollment, a pop-up message is displayed.
- The form data resets after the pop-up is closed.

## Technologies Used

- React: Frontend library for building user interfaces.
- Axios: Used to make HTTP requests to the mock backend.
- CSS: Styling for components and pop-up.

## Project Structure

- `src/components/YogaClassForm.js`: Contains the main form component.
- `src/image/yogaimage.png`: Image file used in the form.
- `src/yogaClassForm.css`: CSS file for styling components.
- `package.json`: Includes project dependencies and scripts.

## Setup and Running the Project

1. Clone the repository:git clone https://github.com/SwastikP17/YogaApp
2. Install dependencies:
cd client
npm install

3. Run the project:npm start

The app should be running on `https://yoga-registration-app.netlify.app/`.

## Backend Integration

The project utilizes a actual backend. The form submission simulates sending data to an API endpoint (`https://yogaapp-v25a.onrender.com/enroll`).

## Possible Improvements

- Enhance form validation and error handling.
- Improve UI/UX with additional features like user authentication, user dashboard, etc.
- We can also integrate the payment gateway for the registration of the user for the yoga class.

## ER-Diagram
<img width="436" alt="image" src="https://github.com/SwastikP17/YogaApp/assets/77966361/d9e7fdf4-170f-470f-947d-987b532175a9">


## Author

Swastik Pandey
swastikpandey17@gmail.com

Feel free to contribute, report issues, or suggest improvements!



