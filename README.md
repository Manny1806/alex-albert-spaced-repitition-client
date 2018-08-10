## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [How to Use](#how-to-use)
- [App Structure](#app-structure)
  - [Landing Page](#landing-page)
  - [Registration Page](#registration-page)
  - [Dashboard](#dashboard)
- [Spaced Repetition Algorithm](#spaced-repetition-algorithm)
- [Upcoming Changes](#upcoming-changes)

## Introduction

Welcome to [Pokémon Quiz App](https://pokemon-thinkful-client.herokuapp.com/)! An app designed for users to learn the names of a few creatures from the popular video game series Pokémon!

## Tech Stack

Pokémon Quiz App is built using the following:
* HTML5
* Cascading Style Sheet
* JavaScript (client-side) and Node (server-side)
* MongoDB

Client-Side Frameworks/Libraries:
* React
* React-Redux
* Redux-Form
* Redux-Thunk
* JWT-Decode

Server-Side Frameworks/Libraries:
* Express
* Mongoose
* Morgan
* Passport
* JSONWebToken
* bcryptjs

Server Github: https://github.com/thinkful-ei21/alex-albert-spaced-repitition-server

## How to Use

To start, simply visit the home page and create a user account.

Once logged in, a Pokémon will appear in the left-hand window. On the right, a brief description of the Pokémon will be shown, along with an input box. Simply type in your guess and the app will respond whether or not the guess is correct.

User progress are tracked. Upon logout, a user can come back anytime to resume the quiz, pickup from whichever was the last Pokémon.

## App Structure

Pokémon Quiz App is comprised of three major components.

## Landing Page

![Landing Page](https://raw.githubusercontent.com/thinkful-ei21/alex-albert-spaced-repitition-client/master/src/screenshots/login-page.png)

All users will be greeted with this page upon visit the home page at `/`. This is rendered by the `LandingPage` component. It uses semantic HTML tags and is responsive to any input failing to meet the required format of an input field. There's also a link to register.

## Registration Page

![Registration Page](https://raw.githubusercontent.com/thinkful-ei21/alex-albert-spaced-repitition-client/master/src/screenshots/register-page.png)

A page for new users to sign on. Rendered by the `RegistrationPage` component, this component is found in path `/register`. It also has a semantic input form, and is responsive to registration failures such as errors from Username being already in use.

## Dashboard

![Dashboard](https://raw.githubusercontent.com/thinkful-ei21/alex-albert-spaced-repitition-client/master/src/screenshots/quiz-page.png)

The actual quiz. Picture of a Pokémon is displayed on the left, while its description and input box is on the right. Upon submission, the app will respond with a feedback on whether or not the guess is right, along with the number of attempts and passes for this particular Pokémon.

The background changes color based on the Pokémon's type. For example, fire types are in red, while water types are in blue.

![Mobile-first](https://raw.githubusercontent.com/thinkful-ei21/alex-albert-spaced-repitition-client/master/src/screenshots/mobile-view.png)

This app also supports mobile display. In mobile view, Pokémon picture comes on top, while input and response follow at the bottom.

## Spaced Repetition Algorithm

Pokémon Quiz App uses an algorithm to shuffle the orders in which Pokémon appears as a question. If a user correctly guesses a Pokémon's name, that Pokémon will not appear again until later in the list. Otherwise, it will come back after just one question as to reinforce the user's memory.

## Upcoming Changes

* Add an additional page to review select Pokémons

* Add a `Hint` system to jog user's memory. For example, if given Jigglypuff, the hint would be "It's jiggly and puffy."

* Add a `Skip` button to let user further shuffle the list.

* Add an easter egg character to the end of the array for a surprise.
