# React Movies App

This project is a React application with functions to search for movies using OMDb API and choose your movies for nominations.

## What is the use of this Repo

This Project is a ReactJS application which demonstrates the following

1. Easy search UI for movies
2. Choose your selected movies for nominations
3. Tap on any movie to view its details
4. Use of OMDB api in order to fetch all movie listing and details

## What were the requirements

1. Simple to use interface.
2. The ability search the OMDB API and return a list of movies that show at least the title, release year and a button to nominate them.
3. Search results should only be of movies.
4. Updates to the search terms should update the result list.
5. If a movie has been nominated already, it's button should be disabled within the search results.
6. Nominated movies should move to their own "Nomination List".
7. Movies in the nomination list should be able to be removed.
8. Display a banner when the user has 5 nominations.

## Preview

![localhost_3000_](https://user-images.githubusercontent.com/6601996/188057021-06d5a3ad-383d-4d43-a57b-01015c16fbb4.png)


## Prerequisites

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app

Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

```
git clone https://github.com/Gameonn/react-movies.git
```

Install all the npm packages. Go into the project directory and type the following command

```bash
npm install
```

In order to run the application type the following command

```bash
npm start
```

In order to run the tests type the following command:

```
npm run test
```

The Application Runs on **localhost:3000**

## Application Design

#### Components

1. **Home** Component : This Component displays a list of movies. This Component gets the data from OMDB API with the use of axios.

2. **Nominations** Component : This Component displays the list of nominated movies of the user. A user can choose maximum 5 nominations at a time.

3. **Detail** Component: This component displays the details of the selected movie.

#### HTTP client

**axios** library is used to make HTTP Calls to the [OMDB server](https://www.omdbapi.com/)

#### How to get API Key for OMDB API

Go to http://www.omdbapi.com/apikey.aspx and fill out the form. You should receive an email like this:

![image](https://user-images.githubusercontent.com/6601996/188055906-fb71ba58-5c79-4e79-a0c4-5afbd34f4b5d.png)

Click on the activation link highlighted in the above image and you are good to go.

#### URL

The application has different routes:

1. Main route - links to the Home component
2. Nominations route - links to the Nomination component, listing the selected nominations of the user
3. Details route - This is a dynamic route, which shows the data based on the selected movie

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**OMDB API**: The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
