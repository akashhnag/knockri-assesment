This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Procedures to run the app:

1) First of all clone the repo.
2) Please run the "json server" before running this app.
3) In "config.js" please set the URL and port for the "json server".
4) run "npm install" to install all necessary packages essentials for the app.
5) run "npm start", and we are good to go.
6) In the home page there will be a list of candidate details.
7) You can search a candidate by their name.
8) Click on "Profile" button to take you to their profile.
9) The profile page has select option to choose from a wide range of questions, select any one of them.
10) Below it plays the video related to that particular question.
11) You can write some comments and save it.
12) In case there is no application id assigned to a candidate and you go to his/her profile, appropriate
message is displayed on the screen.

Technologies used:

1) The project uses react's create-react-app to setup an execute the app.
2) It has been done using react's functional component and hooks.
3) I didn't felt the need of external state management tool like redux. So it just uses transfer of data via
props from one component to other. Use of redux would have made this fairly simple project more complicated.
4) The npm packages used are:

i) axios: To make AJAX calls.
ii) bootstrap and react-bootstrap: for looks and styling.
iii) react-router-dom: for react routing.

5) I have used an image to serve as profile avatar of the candidate.

Improvements:

1) There are some logs and warnings regarding react-bootstrap which I would have liked to address.
2) I wish I could test cases and assertions.
3) The project is not the best structured, it could have been more modularized.
4) I was confused about saving the comments to "api.json" file. So, the "save" button downloads a file called
"api.json" with every details asked for.

Some additional features:

1) I have added an additional feature, a search box to filter candidates by their name.
