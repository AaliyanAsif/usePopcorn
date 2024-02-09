# usePopcorn - Movie Database App

usePopcorn is a movie database app built with React.js and styled with CSS. This documentation will guide you through the features and usage of the application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Introduction

usePopcorn is a movie database app that allows users to search for movies using the Omdb API. The app provides a user-friendly interface to view detailed information about movies, add them to a watched movies list, and manage their watch history.

## Features

1. **Movie Search:**

   - Users can search for movies using a query.
   - Results are displayed with movie posters and basic information.

2. **Movie Details:**

   - Clicking on a movie in the search results opens a sidebar with detailed information.
   - Information includes poster, duration, genres, release date, name, IMDb rating, synopsis, cast, and director.

3. **Rating and Watched List:**

   - Users can rate movies out of 10.
   - They can add movies to a watched list, and the list shows total watch time, average IMDb rating, and average user rating.

4. **Watched List Management:**

   - Removing the search query reveals the user's watched movies list.
   - Users can remove movies from their watched list.

5. **Error Handling:**
   - The app displays a loading state and handles errors gracefully.

## Requirements

- Node.js and npm installed on your machine.
- Internet connection to fetch movie data from the Omdb API.

## Installation

1. Clone the repository: `git clone [repository URL]`
2. Navigate to the project directory: `cd usePopcorn`
3. Install dependencies: `npm install`

## Usage

1. Start the application: `npm start`
2. Open your browser and go to `http://localhost:3000`

Now, you can use the app to search for movies, view details, rate them, and manage your watched movies list.

## Technologies Used

- React.js
- CSS
- Omdb API

## Contributing

If you want to contribute to usePopcorn, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request.
