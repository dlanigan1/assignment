import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'

class Book extends React.Component {

//alert(`id = ${bookId}`);
//  state = {
//    title: this.props.book,
//    author: this.props.book.author,
//    status: this.props.book.status
//  };


  render() {
    let theBook = api.findBook(parseInt(this.props.match.params.id,10)) ;

    let fields = [
              <p key={'author'} ><b>Author :</b> {theBook.author}</p>,
              <p key={'genre'} ><b>Genre :</b> {theBook.genre}</p>,
              <p key={'summary'} ><b>Summary :</b> {theBook.summary}</p>,
              <p key={'status'} ><b>Status :</b> {theBook.status}</p>,
             ] ;
      return (
        <div className="col-sm-12" >
          <div className="panel panel-primary">
            <div className="panel-heading" align="center">
              { theBook.title }
            </div>
            <div className="panel-body">
              {fields}
            </div>
          </div>
        </div>
      ) ;
   }
}

export default withRouter(Book);
