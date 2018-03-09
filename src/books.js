import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'
import Book from './book';

class BookList extends React.Component {
  render() {
      let bookRows = this.props.books.map(
         (b) => <Book key={b.title} book={b} />
      );
      return (
        <div className="container-fluid contacts">
          <div className="row">
             {bookRows}
          </div>
        </div>
      ) ;
    }
}

class Books extends React.Component {
    componentWillMount() {
    }
    render() {
        let books = api.getAll() ;
        return (
            <div>
                <h1>This is a list of Books ({books.length})</h1>
                <BookList books={books}  />
            </div>
        );

    }

}

export default withRouter(Books);
