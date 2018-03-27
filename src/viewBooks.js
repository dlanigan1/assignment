import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'

class Book extends React.Component {
  render() {
    let fields = [
              <p key={'author'} ><b>Author :</b> {this.props.book.author}</p>,
              <p key={'genre'} ><b>Genre :</b> {this.props.book.genre}</p>,
              <p key={'summary'} ><b>Summary :</b> {this.props.book.summary}</p>,
              <p key={'status'} ><b>Status :</b> {this.props.book.status}</p>,
             ] ;
      return (
        <div className="col-sm-12" >
          <div className="panel panel-primary">
            <div className="panel-heading" align="center">
              { this.props.book.title }
            </div>
            <div className="panel-body">
              {fields}
            </div>
          </div>
        </div>
      ) ;
  }
}

class ViewBooks extends React.Component {

  render() {
    let bookList = api.getAllBooks() ;

    let bookRows =  bookList.map(
           (b) => <Book key={b.id} book={b} />
    );

    return (
      <div className="col-sm-12" >
        <div className="row">
            {bookRows}
        </div>
      </div>
    );
  }

}

export default withRouter(ViewBooks);
