import React from 'react';
import { withRouter, Route } from 'react-router-dom';

const Inbox = (props) => {
  return (
    <div>
       <h1>Inbox page</h1>
       <Messages id={props.match.params.id}/>
       <div>
         <Route path={`/inbox/:id/statistics`} component={ Stats } />
       </div>
    </div>
  );
}

const Messages = (props) => <h3>Messages for user: {props.id} </h3>;

const Stats = (props) =>  <h3>Statistical data</h3>;
   
export default withRouter(Inbox);   
