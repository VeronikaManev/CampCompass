# CampCompass

CampCompass is a web application for discovering and sharing campgrounds around the world. Users can search for, view, and add new campgrounds, as well as leave reviews and like campgrounds.

## Educational Project

This project is an educational assignment developed with React. It adheres to specific requirements and is intended to demonstrate practical use of React and related technologies.

## Design Specifications

- **Screen Resolution**: The application is designed to be viewed on screens with a resolution of 1920 x 1080 pixels.
- **Responsive Design**: Note that the application is not currently designed to be responsive. It is optimized for the specified screen resolution and may not display correctly on devices with different screen sizes or resolutions.

## Features

- View a list of campsites
- View details of each campsite, including location, amenities, and description
- Create new campsites (Only logged-in users can add new campsites)
- Edit existing campsites (Only the author of a campsite can edit it)
- Delete campsites (Only the author of a campsite can delete it)
- Leave comments on campsites (Only logged-in users can leave comments)
- Like campsites (Only logged-in users can like a campsite)
- Real-time like count update for each campsite

## Technologies

- **Frontend**: React, React Router
- **Backend**: SoftUni Practice Server
- **Styling**: CSS, FontAwesome

## Installation

- Clone the repository:
    git clone https://github.com/VeronikaManev/CampCompass

- Navigate to the server directory to start the SoftUni Practice server:
    ```bash
    node server.js
    ```

- Navigate to the client directory and install dependencies:
    ```bash
    npm install
    ```

-  Start the client:
    ```bash
    npm run dev
    ```

## Usage

- Visit `http://localhost:5173` in your browser.
- Register or log in with your account.
- Browse and add campgrounds.
- Leave reviews for campgrounds.


## Test Users

For testing purposes, you can use the following credentials:

- **User 1:**
  - Email: peter@abv.bg
  - Password: 123456

- **User 2:**
  - Email: george@abv.bg
  - Password: 123456

- **Admin:**
  - Email: admin@abv.bg
  - Password: admin

## Test Campsites

For testing purposes, the catalog already contains several campsites added by the following users:

   - peter@abv.bg
   - george@abv.bg

These test campsites can be used to explore the application's features, such as creating, editing, and deleting campsites.

## Contact

If you have any questions or need assistance, you can reach me at: veronicadoychinova@gmail.com

