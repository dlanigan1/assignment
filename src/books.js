import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const cellEditProp = {
  mode: 'dbclick'
};

class Books extends React.Component {
    componentWillMount() {
    }
    render() {
        let books = api.getAll() ;

        return (
          <div>
            <h1>List of Books ({books.length})</h1>
            <p>double click on a cell to edit</p>
            <BootstrapTable data={books} striped={true} hover={true} cellEdit={ cellEditProp }>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField="author" dataAlign="center" dataSort={true}>Author</TableHeaderColumn>
                <TableHeaderColumn dataField="status" dataAlign="center" dataSort={true}>Status</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );

    }
}

export default withRouter(Books);
