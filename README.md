# sample_project
A sample project built with Django and Create React App

## Instructions
Clone this repository and implement these features:
- a `/users/add` api route in the **backend** to add a user to the database
- a form (containing an input field for "Name", an "Add" Button) on the **frontend** to add a user using the `/users/add` route

**PLEASE DO NOT FORK THIS REPOSITORY**

You are encouraged to read the django documentation [here](https://docs.djangoproject.com/en/3.0/intro/) and the react documentation [here](https://reactjs.org/docs/react-api.html) to inform your implementation decisions. However, you are not required to implement a feature if you don't know how.

The features you do implement must use the [git feature branch model](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). 

## Submission

Once the features are implemented, push your cloned repository to **your github page** and email us the link to the github project. 

Please email the project to digitalhealth@uvic.ca with the subject 'Dev Sample Project - Your Name' or email us if you have any additional questions.

Coding Challenge Work
Approach
I read through the code first to understand the existing codebase
For Front-end I read about React Hooks, Async/Await, Fetch API, Authentication, Axios (if needed)
For Back-end I read about Django extensively, focus was primarily on REST_FRAMEWORK, Authentication Error, Serializers
Ran into errors with CSRF Cookies & Serializer but found help on StackOverflow
Front-End - At Branch fe-adduserform
Added a new form to input a new user name to the database using the APi route.
Tested the running code using Chrome Developer Tools to identify errors.
Error: Have to fix 400 code error, mainly needs a fix in the addUser settings for sending data ahead.
Back-End - At Branch be-api_route
Created a new API route "users/add/" to add new users to DB
Used PyCharm to develop the code and debug side by side.
Screenshots can be found in the backend feature branch
