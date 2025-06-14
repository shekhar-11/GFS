# gfs


## Overview

`gfs` is a real-time hand gesture recognition system that translates gestures captured via a webcam into computer commands. It utilizes a React-based frontend for capturing and processing hand movements, and a Node.js/Express backend to interpret these gestures and execute corresponding actions, such as simulating keyboard inputs.

## Features

*   **Real-time Gesture Detection**: Captures hand movements through the webcam and identifies predefined gestures.
*   **Frontend Interface**: Displays the webcam feed, draws detected hand landmarks, and shows an image representing the currently recognized gesture.
*   **Backend Command Execution**: Receives gesture information from the frontend and triggers desktop actions (e.g., key presses) using `@jitsi/robotjs`.
*   **Supported Gestures**:
    *   Thumbs Up
    *   Victory
    *   Palm 
    *   Palm Right
    *   Palm Left

## Project Structure

The repository is organized into two main directories:

*   **`client/`**: Contains the frontend React application built with Vite.
    *   `src/App.jsx`: The main React component responsible for webcam access, handpose model loading, gesture detection using TensorFlow.js, Handpose, and Fingerpose, and displaying the UI.
    *   `src/allGestures.js`: Defines custom hand gestures using the `fingerpose` library.
    *   `src/connectToBackend.js`: Handles sending the detected gesture data to the backend server.
    *   `src/utilities.js`: Provides a helper function to draw hand landmarks on the HTML canvas.
*   **`server/`**: Contains the backend Node.js server built with Express.
    *   `server.js`: The main Express application file that sets up the server, handles CORS, and defines the `/gesture` endpoint to receive gesture data from the client.
    *   `runGesture.js`: Contains the logic to map recognized gestures to specific keyboard actions and execute them using `@jitsi/robotjs`.

## Technologies Used

*   **Frontend**:
    *   React
    *   Vite
    *   TensorFlow.js (`@tensorflow/tfjs`)
    *   Handpose (`@tensorflow-models/handpose`)
    *   Fingerpose (`fingerpose`)
    *   React Webcam (`react-webcam`)
*   **Backend**:
    *   Node.js
    *   Express.js
*   **Desktop Automation**:
    *   `@jitsi/robotjs`
*   **Communication**:
    *   HTTP (POST requests from client to server)

## Setup and Usage

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm 

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/shekhar-11/gfs.git
    cd gfs
    ```

2.  **Client Setup**:
    *   Navigate to the client directory:
        ```bash
        cd client
        ```
    *   Install dependencies:
        ```bash
        npm install
        ```
    *   Start the development server:
        ```bash
        npm run dev
        ```
    The client application will typically be available at `http://localhost:5173` (or another port specified by Vite).

3.  **Server Setup**:
    *   Open a new terminal window/tab.
    *   Navigate to the server directory from the project root:
        ```bash
        cd server
        ```
    *   Install dependencies:
        ```bash
        npm install
        ```
    *   Start the backend server:
        ```bash
        node server.js
        ```
    The server will start on `http://localhost:5000`.

### Running the Application

1.  Ensure both the client and server applications are running.
2.  Open the client application URL in your web browser.
3.  Allow webcam access when prompted by the browser.
4.  Perform one of the supported hand gestures in front of the webcam. The frontend will display the detected gesture, and the backend server will execute the corresponding command.

## Gesture Mapping

The following gestures are mapped to keyboard actions as defined in `server/runGesture.js`:

*   **`thumbs_up`**: Simulates pressing the "W" key.
*   **`victory`**: Simulates pressing the "W" and "X" keys.
*   **`palm`**: Simulates pressing the "S" key.
*   **`right`**: Simulates pressing the "W" and "ArrowRight" keys.
*   **`left`**: Simulates pressing the "W" and "ArrowLeft" keys.

The system is designed to hold down the key(s) for the current gesture and release them when a new, different gesture is detected or if no gesture is active.
