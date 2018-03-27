# Assignment 1 - ReactJS app.

Name: David Lanigan

## Overview.
The App is a mock up of a library book system. When it's finished there will be a database of books that users can check out and return and perform all the usual operations on like add new books, delete books and modify existing books. For the initial part of this assignment, there is no back end and the data is held in a JSON file locally. Eventually this will be ported to MongoDb database and we will develop API's to handle the CRUD operations.  


 . . . . . List of user features (excluding user registration and authentication) . . . .

 + View Books
 + Add Book
 + Delete Book
 + Modify Book
 + Check out/Return book is not available yet but will be available in the next part of the assignment

## Installation requirements.
. . . .  List of software used to develop the app . . . . . . .
+ ReactJS v15.3.0
+ Bootstrap 3
+ create-react-app tool
+ react-bootstrap-table
+ lodash 4.7.15
+ react-dom
+ react-router-dom

After cloning the repo, all you have to do to run the app is npm install + npm start

## Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

Use meaningful sample data. Briefly explain any non-trivial issues.

## App Component Design.

A diagram showing the app's hierarchical component design (see example below).

## UI Design.

The following images show the various views throughout the system.
### Home Page
![home page][image1]
### About Page
![about page][image2]
### Add Delete Book
![add delete book][image3]
### Borrow Book
![borrow book][image4]
### Edit Book
![edit book][image5]
### Return Book
![return book][image6]
### View Book
![view book][image7]


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

I researched and implemented a custom data grid control for the edit and add pages.



[image1]: ./homepage.png
[image2]: ./about.png
[image3]: ./addDeletebook.png
[image7]: ./viewbooks.png
[image5]: ./editbook.png
[image4]: ./borrowbook.png
[image6]: ./returnbook.png
