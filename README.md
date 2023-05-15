# all-purpose-organiser

<div>

<h5 align="center">
<a href='https://github.com/tbuller/all-purpose-organiser/blob/main/README.md#Demo'> Demo </a> <span> · </span>  
<a href='https://github.com/tbuller/all-purpose-organiser/blob/main/README.md#Tech'> Tech </a> <span> · </span>
<a href='https://github.com/tbuller/all-purpose-organiser/blob/main/README.md#Spec'> Spec </a> <span> · </span>
<a href='https://github.com/tbuller/all-purpose-organiser/blob/main/README.md#Installation'> Installation </a><span> · </span>
<a href='https://github.com/tbuller/all-purpose-organiser/blob/main/README.md#Features'> Features </a>
<h5>
</div>

# Demo

Click on the image below for a quick demo (please excuse the bad quality from YouTube)
  
[![Demo link](https://img.youtube.com/vi/0dx6pYJfVpk/0.jpg)](https://www.youtube.com/watch?v=0dx6pYJfVpk)  

# Tech

![Image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Image](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge)
![Image](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Image](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

# Spec

Once users have created an account, they will have access to a calendar, with which they can create events, and invite others. Users can also create notes in the notes section and keep a shopping basket.

# Installation

[Clone this repo](https://github.com/tbuller/all-purpose-organiser.git)

In terminal (Mac), run:

```
cd api
npm install
npm start
```
Open another terminal in the same codebase:
```
cd src
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.
  
# Features
  
<div>

<h5 align="center">
<a href='https://github.com/tbuller/all-purpose-organiser/blob/main/README.md#Calendar'> Calendar </a> <span> · </span>  
<a href='https://github.com/tbuller/all-purpose-organiser/blob/main/README.md#Shopping-basket'> Shopping-basket </a> <span> · </span>
<a href='https://github.com/tbuller/all-purpose-organiser/blob/main/README.md#Notes'> Notes </a>
<h5>
</div>  
  
## Calendar
  
The home page welcomes users with a calendar displaying the current month, while offering the option to navigate to different months using the arrow buttons located at the top-left of the screen. Events created by the user are shown for each day, arranged by chronological order. Each event can be deleted by clicking on the cross. Additionally, the current day's date is indicated with a red background. 
  
![Image](https://github.com/tbuller/all-purpose-organiser/blob/main/src/public/README_images/all-purpose-organiser-calendar-month-screenshot.png)
  
Users can alternatively toggle to a week view, which largely has the same features as the month view, such as navigation to different weeks.  
  
![Image](https://github.com/tbuller/all-purpose-organiser/blob/main/src/public/README_images/all-purpose-organiser-calendar-week-screenshot.png)
  
The user can click on any day on the calendar, and they will be taken to the selected day component. Here they will see their events for the given in more detail. A form can be opened by clicking on "Add event", which users can use to create a new event, associated with the selected day. The type of the event determines the background colour.  
  
![Image](https://github.com/tbuller/all-purpose-organiser/blob/main/src/public/README_images/all-purpose-organiser-selected-day-screenshot.png)  
  
## Shopping-basket
  
With the shopping functionality, users can add items along with their quantity. Each item will have an image associated with it, that it gets from a call to a web API, using the item's name in the request. As such, no images are stored in the database. When the quantity for a given item goes down to zero, this will trigger it's deletion in the database, which is then reflected in the component with Redux.
  
![Image](https://github.com/tbuller/all-purpose-organiser/blob/main/src/public/README_images/all-purpose-organiser-shopping-basket-screenshot.png)  
  
## Notes  
  
Finally, there is small notes feature. Users can create their own notes dynamically, and view them by clicking on the note's header.  
  
![Image](https://github.com/tbuller/all-purpose-organiser/blob/main/src/public/README_images/all-purpose-organiser-notes-screenshot.png)  
