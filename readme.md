# Assignment 1 - ReactJS app.

Name: David Lanigan

## Overview.
The App is a mock up of a library book system. It is basically a database of books where users can view books, add new books, delete books and modify existing books. In the next phase of the assignment the users will be able to check out and return books also.

For the initial part of this assignment, there is no back end and the data is held in a JSON file locally. The Add/Delete/Edit functionality works by making REST calls to the JSON file instead of a database .Eventually this will be ported to MongoDb database and we will change the API's to handle the CRUD operations.

The reason for the View screen and the Add/Edit screen looking differently is because I wanted to showcase two different ways of displaying the same information. The view component is done using the standard react syntax with HTML and the Add/Edit components are done using a custom grid component. The view individual book component is just there to demonstrate parameterised routing. Note that the Add and Edit components are seperate due to a limitation with the control. It doesn't seem to like editing and row selection in the same grid so I just made two.

## User Features.

 + View all Books
 + View an individual Book
 + Add Book
 + Delete Book
 + Modify Book
 + Check out/Return book is not available yet but will be available in the next part of the assignment.

## Installation requirements.

+ ReactJS v15.3.0
+ Bootstrap 3
+ create-react-app tool
+ react-bootstrap-table
+ lodash 4.7.15
+ react-dom
+ react-router-dom
+ json-server 0.12.1

After cloning the repo, You have to do the following to run the app:

1) npm install

2) npm dev-server

3) npm start

## Data Model Design.

There are 3 tables in the data model. In this version of the application they are stored in /tst/db.json.
The first table is the books table. It contains the list of books. The ID is the unique identifier. This is currently text but it will become an object id when the system is ported to MongoDB.

The statusTypes table is a lookup table of status types.
The genreTypes table is a lookup table of genre types.

### Status types
"statusTypes" : ["available","unavailable"],

### Genre types
"genreTypes" :  ["Crime","Childrens","Military History","Fiction"]

### Books
{
    "id":2,
    "title": "Stalingrad",
    "author": "Antony Beevor",
    "genre": "Military History",
    "summary": "Stalingrad is a narrative history written by Antony Beevor of the battle fought in and around the city of Stalingrad during World War II",
    "status": "available"
},

## App Component Design.

![Component design][image9]

## UI Design.

The following images show the various views throughout the system.
### Home Page
![home page][image1]
### About Page
![about page][image2]
### Add Delete Book
![add delete book][image3]
### View All Books
![view books][image4]
### View Particular Book
![view one book][image8]
### Edit Book
![edit book][image5]
### Borrow Book
![borrow book][image6]
### Return Book
![return book][image7]

## Routing.
+ /about/ - displays the about page
+ /viewbooks/ - lists all books
+ /viewbooks/:id - detail view of a particular book
+ /editbooks/ - displays a grid of books for editing
+ /checkoutbook/ - redirects to a placeholder page for now. The functionality will be implemented in the next phase.
+ /checkinbook/ - redirects to a placeholder page for now. The functionality will be implemented in the next phase.
+ /books/ - displays a grid of books for adding/deleting
+ / - displays the home page

## Extra features

Just the standard viewing and CRUD operations in this version of the app. Data is not yet persistent as there is no back end.

## Independent learning.

I researched and implemented the custom data grid control for the edit and add pages along with its associated functionality.
I also had to learn how to implement and run json-server from package.json and I had to learn how to formulate the REST API calls to perform the CRUD operations.

[image1]: ./homepage.png
[image2]: ./about.png
[image3]: ./addDeletebook.png
[image4]: ./viewbooks.png
[image5]: ./editbook.png
[image6]: ./borrowbook.png
[image7]: ./returnbook.png
[image8]: ./viewonebook.png
[image9]: ./flow.png
