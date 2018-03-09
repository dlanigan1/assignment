import React from 'react';
import { withRouter, Route } from 'react-router-dom';

const Book = (props) => {
  return (
    <div>
       <h1>Book page</h1>
       <Messages id={props.match.params.id}/>
       <div>
         <Route path={`/books/:id/statistics`} component={ Stats } />
       </div>
    </div>
  );
}

const Messages = (props) => <h3>Messages for user: {props.id} </h3>;

const Stats = (props) =>  <h3>Statistical data</h3>;

export default withRouter(Book);
