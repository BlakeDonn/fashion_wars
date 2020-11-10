

## Contributors
  - [Blake Donnelly](https://github.com/BlakeDonn)


## Overview

`Fashion Wars` Is a Guild Wars 2 player-helper application meant to help users find and keep track of what skins they have yet to unlock in the game. The Guild Wars 2 API allows for individualized feedback based on what a user has specificly unlocked. This application provided the user with a user-friendly place to see this data, get more informaton aout the skins they are missing, and add a speicific skin to a todo-list for better tracking.

## Context

`Fashion Wars` is a personal project built as a final project for Mod 3 at the Turing School of Software and Design, it is meant to be be a showcase of a students expertise in `React` `React Router` and `asynchronous JavaScript` through the utilization of an API of their choosing. 

#### Technologies used:

  * React
  * Guild Wars 2 API
  * React Router
  * SCSS
  * Git
  * GitHub

## Challenges

  * Holding on to state through different views
  * Dealing with large data requests and long load times
  * Dealing with keeping a user on track while letting them feel in control
  * Scraping the Guild Wars 2 wiki for picutres of armorsets
  

## Wins

  * Utilizing conditional rendering to avoid re-requesting large amounts of data
  * Using router props to navigate between pages seemelessly and lightweight
  * Scraping the Guild Wars 2 wiki to gather armor set previews for a user to see

## Future Goals

  * Scrape images for weapons and backpieces (currently only armor)
  * Utilizing a databse to have more consistent data
  * Storing user inputs to have todo-list persist
  * Add more configuration options to better sort skins
  * Further style the application

## In Action

#### Homescreen

- When a user gets to the homepage of "Fasion Wars" they are presented with three categories of skins they can choose to filter through.
- When the categories are selected and ultimately the `Find skins!` button is clicked, their choice are passed through router to update the url
- This passing of the selected categories through router is how the filtering process begins

 <img src="https://i.imgur.com/QgJ3NB2.gif" alt="" height=100% width=80%/>
 
 <img src="https://media.giphy.com/media/SQtdFK7vovX9mbK1gV/giphy.gif" alt="" height=100% width=80%/>v

#### Results Page

- Based on the categories the user selected, a filtering process will begin on component mounting that has a few steps
- The first step is to query the Guild Wars 2 API for `allSkins` and `userSkins` determined by a provided API key (these will return an array of thousands of IDS)
- The second step is to run an algorithm to cross reference these Ids to find only the ones the user does not need
- The third step is to again query the Guild Wars 2 API, this time in 200 id increments (the API limit), to get objects that have the detailed skins information
- The fourth step is to make each of these objects into a `PreviewSkin` component for the user to interact with (represented as the skins icon)

  <img src="https://i.imgur.com/g8sfvVA.png" height=auto width=75%/>

#### SkinDetails Page

- As User has the option to click on a `PreviewSkin` component to be brought to a screen with more details about that skin
- There is brief information about the skin type and other unique values, as well as a link to the WIKI for more info, and a button to add to the users todo list
- If a user chooses to add the skin to their todo list, it will do so, and persist through route changes.
- If a user chooses to go to the Wiki page they will be redirected as such

  <img src="https://media.giphy.com/media/SMf3EVgF9iWiLQqcoM/giphy.gif" height=auto width=75%/>

#### Todo Page


- The users selected to-do items will exist on this page, which can be found through a button on the `Results` page
- Currently the todo list does not persist refresh, those it does persist through many other route changes


<img src="https://media.giphy.com/media/KOr3BibCgx8rAS3Isu/giphy.gif" height=auto width=75%/>

### Set up

* On the top right corner of this page, click the **Fork** button.
- Clone the repository to your computer `git clone <URL>`
  - When you run git clone - git clone [remote-address] [what you want to name the repo]
  replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
- `cd` into the repository with the following command `cd <repo-name>`
- Run `npm install`
- Run `npm start`
- Open browser to LocalHost:3000

### Contribute

- Create a new branch with `git checkout -b <new branch name>`
- Open your text editor and add or remove functionalities to the site.
- `git add` and `git commit -m "<your commit meessage>"` to save the changes to your local repository
- `git push` your changes
- Create a new pull request!

### Project Managers
- [Leta](https://github.com/letakeane)
- [Khalid](https://github.com/khalidwilliams)


