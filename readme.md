# Assignment 1 - ReactJS app.

Name: David Lanigan

## Overview.
The App is a mock up of a library book system. When it's finished there will be a database of books that users can check out and return and perform all the usual operations on like add new books, delete books and modify existing books. For the initial part of this assignment, there is no back end and the data is held in a JSON file locally. Eventually this will be ported to MongoDb database and we will develop API's to handle the CRUD operations.  

The reason for the view screen and the add/edit screen looking differently is because I wanted to showcase two different ways of displaying the same information. The view screen is done using the standard react syntax and html and the add/edit screens are done using a custom grid component. The view individual book is just there to demonstrate parameterised routing.

## User Features.

 + View all Books
 + View an individual Book
 + Add Book
 + Delete Book
 + Modify Book
 + Check out/Return book is not available yet but will be available in the next part of the assignment

## Installation requirements.

+ ReactJS v15.3.0
+ Bootstrap 3
+ create-react-app tool
+ react-bootstrap-table
+ lodash 4.7.15
+ react-dom
+ react-router-dom

After cloning the repo, all you have to do to run the app is npm install + npm start

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

I researched and implemented a custom data grid control for the edit and add pages along with its associated functionality.

[image1]: ./homepage.png
[image2]: ./about.png
[image3]: ./addDeletebook.png
[image4]: ./viewbooks.png
[image5]: ./editbook.png
[image6]: ./borrowbook.png
[image7]: ./returnbook.png
[image8]: ./viewonebook.png
[image9]: ./flow.png
