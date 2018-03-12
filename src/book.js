import React from 'react';
import { withRouter } from 'react-router-dom';

class Book extends React.Component {
  state = {
    title: this.props.book.title,
    author: this.props.book.author,
    status: this.props.book.status
  };


  render() {
      let fields = [
              <p key={'author'} >Author : {this.state.author}</p>,
              <p key={'status'} >Status : {this.state.status}</p>,
             ] ;
      return (
        <div className="col-sm-3" >
          <div className="panel panel-primary">
            <div className="panel-heading">
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

export default withRouter(Book);
