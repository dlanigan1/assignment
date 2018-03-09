import React from 'react';
import { withRouter } from 'react-router-dom';

class MyInBox extends React.Component {
    componentWillMount() {
        let currentUser = 12;
        if (currentUser) { 
           this.props.history.push(`/inbox/${currentUser}`);
        } else {
           this.props.history.push('/');
       }
    }
    render() {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }
} 
  
export default withRouter(MyInBox);