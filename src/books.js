import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'

class Books extends React.Component {
    componentWillMount() {
  //      let currentUser = 12;
        let currentUser = null;
        if (currentUser) {
           this.props.history.push(`/books/${currentUser}`);
        }
    //    else {
    //       this.props.history.push('/');
    //   }
    }
    render() {
        let books = api.getAll() ;
        return (
            <div>
                <h1>This is a list of Books ({books.length})</h1>
            </div>
        );

    }

}

export default withRouter(Books);
