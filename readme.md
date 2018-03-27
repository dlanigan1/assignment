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

![][image1]

Use meaningful sample data. Briefly explain any non-trivial issues.

## App Component Design.

A diagram showing the app's hierarchical component design (see example below).


## UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (user regeneration and login views, if implemented, can be omitted) . . . . . . .

![][image1]
![][image2]
![][image3]
![][image4]
![][image5]
![][image6]
![][image7]


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
[image2]: ./about.jpg
[image3]: ./addDeleteBook.png
[image4]: ./borrowBook.png
[image5]: ./editBook.png
[image6]: ./returnBook.png
[image7]: ./viewBook.png
