import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
    componentWillMount() {
      // will trigger the callback function whenever the browser URL changes
      // (as long as this component stays mounted)
      this.props.history.listen(() => {
      // Display new URL
      console.log('New URL', this.props.history.location.pathname);
    });
  }
  render() {
    return (
        <div className="navbar navbar-fixed-top navbar-inverse" >
            <div className="container">
                <Link to="/" id="logo" >Library Book System</Link>
                <nav>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/viewbooks">View Books</Link></li>
                        <li><Link to="/books">Add/Delete Book</Link></li>
                        <li><Link to="/editbooks">Edit Book</Link></li>
                        <li><Link to="/borrowbook">Borrow Book</Link></li>
                        <li><Link to="/returnbook">Return Book</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
}

export default withRouter(Header);
